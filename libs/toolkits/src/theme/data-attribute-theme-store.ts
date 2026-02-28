import { findKey } from 'type-plus'
import { getDataAttribute } from '../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../attributes/observe-data-attribute.ts'
import type { ThemeMap } from './theme.types.ts'

export type DataAttributeThemeStoreGetOptions<Themes extends ThemeMap> = {
	themes: Themes
	defaultTheme?: keyof Themes | undefined
	allowCustom?: boolean | undefined
}

export type DataAttributeThemeStoreSetOptions<Themes extends ThemeMap> = {
	themes: Themes
	theme: keyof Themes
}

export type DataAttributeThemeStoreSubscribeOptions<Themes extends ThemeMap> = {
	themes: Themes
	defaultTheme?: string | undefined
	allowCustom?: true | undefined
	handler: (value: string | null) => void
}

export type DataAttributeThemeStore<Themes extends ThemeMap> = {
	get(options: DataAttributeThemeStoreGetOptions<Themes>): keyof Themes | string | undefined
	set(options: DataAttributeThemeStoreSetOptions<Themes>): void
	subscribe(options: DataAttributeThemeStoreSubscribeOptions<Themes>): { disconnect: () => void }
}

function dataAttributeThemeStoreForElement<Themes extends ThemeMap>(
	attributeName: `data-${string}`,
	element: Element,
): DataAttributeThemeStore<Themes> {
	function get(
		options: DataAttributeThemeStoreGetOptions<Themes>,
	): keyof Themes | string | undefined {
		const value = getDataAttribute(attributeName, element) ?? undefined
		const theme = findKey(options.themes, (theme) => options.themes[theme] === value)
		return theme ?? options.defaultTheme ?? (options.allowCustom ? value : undefined)
	}

	function set(options: DataAttributeThemeStoreSetOptions<Themes>): void {
		const theme = options.theme
		if (!theme || !(theme in options.themes)) {
			element.removeAttribute(attributeName)
			return
		}
		const value = options.themes[theme]
		const attributeValue = Array.isArray(value) ? value[0] : value
		if (attributeValue !== undefined && attributeValue !== '') {
			element.setAttribute(attributeName, attributeValue)
		} else {
			element.removeAttribute(attributeName)
		}
	}

	function subscribe(options: DataAttributeThemeStoreSubscribeOptions<Themes>): {
		disconnect: () => void
	} {
		const observer = observeDataAttributes(
			{
				[attributeName]: (value: string | null) => {
					if (value === null) {
						options.handler(options.defaultTheme ?? null)
						return
					}
					for (const name in options.themes) {
						if (options.themes[name] === value) {
							options.handler(name)
							return
						}
					}
					if (options.allowCustom) {
						options.handler(value)
					}
				},
			} as Record<`data-${string}`, (value: string | null) => void>,
			element,
		)
		return {
			disconnect: () => observer.disconnect(),
		}
	}

	return { get, set, subscribe }
}

const defaultStores = new Map<string, DataAttributeThemeStore<any>>()
const elementStores = new WeakMap<Element, Map<string, DataAttributeThemeStore<any>>>()

/**
 * Theme store that reads and writes theme via a data attribute on an element.
 *
 * The returned store provides `get`, `set`, and `subscribe` for the given
 * attribute name and element (or document.documentElement when element is omitted).
 *
 * @param attributeName - Data attribute name (e.g. `'data-theme'`)
 * @param element - Element to read/write (defaults to document.documentElement)
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * ```ts
 * const store = dataAttributeThemeStore('data-theme')
 * const theme = store.get({ themes: { light: 'light', dark: 'dark' }, defaultTheme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, defaultTheme: 'light', handler: (t) => console.log(t) })
 * observer.disconnect()
 * ```
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	attributeName: `data-${string}`,
	element?: Element | null | undefined,
): DataAttributeThemeStore<Themes> {
	const el = element ?? (typeof document !== 'undefined' ? document.documentElement : null)
	if (!el) {
		return {
			get: () => undefined,
			set: () => {},
			subscribe: () => ({ disconnect: () => {} }),
		}
	}
	if (element == null) {
		let store = defaultStores.get(attributeName) as DataAttributeThemeStore<Themes> | undefined
		if (store) return store
		store = dataAttributeThemeStoreForElement<Themes>(attributeName, el)
		defaultStores.set(attributeName, store)
		return store
	}
	let byAttr = elementStores.get(el)
	if (!byAttr) {
		byAttr = new Map()
		elementStores.set(el, byAttr)
	}
	let store = byAttr.get(attributeName) as DataAttributeThemeStore<Themes> | undefined
	if (store) return store
	store = dataAttributeThemeStoreForElement<Themes>(attributeName, el)
	byAttr.set(attributeName, store)
	return store
}
