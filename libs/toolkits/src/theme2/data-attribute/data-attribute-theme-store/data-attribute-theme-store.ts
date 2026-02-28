import { getDataAttribute } from '../../../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../../../attributes/observe-data-attribute.ts'
import { dummyThemeStore } from '../../stores/dummy-theme-store.ts'
import type { ThemeMap, ThemeStore } from '../../theme.types.ts'
import { themeEntry } from '../../theme-entry.ts'
import { applyThemeToDataAttribute } from '../utils/apply-theme-to-data-attribute.ts'
import { resolveThemeFromDataAttribute } from '../utils/resolve-theme-from-data-attribute.ts'

export type DataAttributeThemeStoreOptions<Themes extends ThemeMap> = {
	attributeName: `data-${string}`
	element?: Element | null
	themeMap: Themes
}

/**
 * Creates a theme store that reads and writes via a data attribute.
 *
 * @param options.attributeName - Data attribute name (e.g. `data-theme`)
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @param options.themeMap - Record mapping theme keys to attribute values
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const store = dataAttributeThemeStore({
 *   attributeName: 'data-theme',
 *   themeMap: { current: 'current', grayscale: 'grayscale' },
 * })
 * store.get() // returns themeResult from data attribute
 * store.set('grayscale')
 * store.subscribe((themeResult) => {})
 * ```
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	options: DataAttributeThemeStoreOptions<Themes>
) {
	const element = options.element ?? document?.documentElement
	const { attributeName, themeMap } = options

	if (!element) return dummyThemeStore satisfies ThemeStore<Themes>

	return {
		get() {
			const value = getDataAttribute(attributeName, element)
			const theme = resolveThemeFromDataAttribute(value, themeMap)
			if (theme === undefined) return undefined
			return themeEntry(theme, themeMap)
		},
		set(theme) {
			applyThemeToDataAttribute(element, attributeName, theme, themeMap)
		},
		subscribe(handler) {
			const observer = observeDataAttributes<string, `data-${string}`>(
				{
					[attributeName]: (value) => {
						const theme = value ? resolveThemeFromDataAttribute(value, themeMap) : undefined
						handler(theme ? themeEntry(theme, themeMap) : undefined)
					}
				},
				element
			)
			return () => observer.disconnect()
		}
	} satisfies ThemeStore<Themes>
}
