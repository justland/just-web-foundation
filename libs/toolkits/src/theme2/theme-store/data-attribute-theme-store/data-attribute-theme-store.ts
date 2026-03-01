import type { Required } from 'type-plus'
import { getDataAttribute } from '../../../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../../../attributes/observe-data-attribute.ts'
import { applyThemeToDataAttribute } from '../../data-attribute/apply-theme-to-data-attribute.ts'
import { resolveThemeFromDataAttribute } from '../../data-attribute/resolve-theme-from-data-attribute.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../../types/theme-store.types.ts'
import { dummyThemeStore } from '../dummy-theme-store.ts'

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
 * store.read() // returns themeResult from data attribute
 * store.write(themeEntry('grayscale', themeMap))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	options: DataAttributeThemeStoreOptions<Themes>
) {
	const element = options.element ?? document?.documentElement
	const { attributeName, themeMap } = options

	if (!element) return dummyThemeStore as Required<ThemeStore<Themes>>

	return {
		read() {
			const value = getDataAttribute(attributeName, element)
			const theme = resolveThemeFromDataAttribute(value, themeMap)
			if (theme === undefined) return undefined
			return themeEntry(theme, themeMap)
		},
		write(entry) {
			applyThemeToDataAttribute(element, attributeName, entry)
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
