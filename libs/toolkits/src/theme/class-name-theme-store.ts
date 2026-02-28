import { findKey } from 'type-plus'
import { observeAttributes } from '../attributes/observe-attribute.ts'
import type { ThemeMap, ThemeStoreGetOptions, ThemeStoreSetOptions } from './theme.types.ts'

export type ClassNameThemeStoreSubscribeOptions<Themes extends ThemeMap> = {
	themes: Themes
	theme?: (keyof Themes | (string & {})) | undefined
	handler: (value: string | undefined) => void
}

export type ClassNameThemeStore<Themes extends ThemeMap> = {
	get(options: ThemeStoreGetOptions<Themes>): keyof Themes | undefined
	set(options: ThemeStoreSetOptions<Themes>): void
	subscribe(options: ClassNameThemeStoreSubscribeOptions<Themes>): { disconnect: () => void }
}

function classNameThemeStoreForElement<Themes extends ThemeMap>(
	element: Element,
): ClassNameThemeStore<Themes> {
	function get(options: ThemeStoreGetOptions<Themes>): keyof Themes | undefined {
		const className = element.className
		const theme = findKey(options.themes, (theme) => {
			const value: string | readonly string[] | undefined = options.themes[theme]
			if (value === undefined) return false
			const v = Array.isArray(value) ? value[0] : value
			return !!v && className.includes(v)
		})
		return theme ?? options.theme
	}

	function set(options: ThemeStoreSetOptions<Themes>): void {
		const theme = options.theme
		if (!theme) return

		const allThemeClasses = Object.values(options.themes).flatMap((v) =>
			Array.isArray(v) ? [...v] : [v],
		)
		const current = element.className.trim()
		const currentClasses = current ? current.split(/\s+/) : []
		const withoutThemes = currentClasses.filter((c) => !allThemeClasses.includes(c))
		const activeClasses =
			theme in options.themes
				? Array.isArray(options.themes[theme])
					? [...(options.themes[theme] as readonly string[])]
					: [options.themes[theme] as string]
				: []
		element.className = [...withoutThemes, ...activeClasses].filter(Boolean).join(' ')
	}

	function subscribe(options: ClassNameThemeStoreSubscribeOptions<Themes>): {
		disconnect: () => void
	} {
		const observer = observeAttributes(
			{
				class: (value: string | null) => {
					if (value === null) {
						options.handler(options.theme as string | undefined)
						return
					}
					for (const name in options.themes) {
						const themeValue = options.themes[name]
						if (
							themeValue &&
							value.includes(Array.isArray(themeValue) ? themeValue[0] : themeValue)
						) {
							options.handler(name)
							return
						}
					}
					options.handler(options.theme as string | undefined)
				},
			},
			element,
		)
		return {
			disconnect: () => observer.disconnect(),
		}
	}

	return { get, set, subscribe }
}

const storeCache = new WeakMap<Element, ClassNameThemeStore<any>>()

/**
 * Theme store that reads and writes theme via element class names.
 *
 * The returned store provides `get`, `set`, and `subscribe` that operate on the
 * given element (or document.documentElement when omitted). Callers pass `themes`
 * and optional `theme` (fallback) when calling get/set/subscribe.
 *
 * @param element - Element to read/write class names on (defaults to document.documentElement)
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * ```ts
 * const store = classNameThemeStore()
 * const theme = store.get({ themes: { light: 'theme-light', dark: 'theme-dark' }, theme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, theme: 'light', handler: (t) => console.log(t) })
 * observer.disconnect()
 * ```
 */
export function classNameThemeStore<Themes extends ThemeMap>(
	element?: Element | null | undefined,
): ClassNameThemeStore<Themes> {
	const el = element ?? (typeof document !== 'undefined' ? document.documentElement : null)
	if (!el) {
		return {
			get: () => undefined,
			set: () => {},
			subscribe: () => ({ disconnect: () => {} }),
		}
	}
	let store = storeCache.get(el)
	if (store) return store
	store = classNameThemeStoreForElement<Themes>(el)
	storeCache.set(el, store)
	return store
}
