import type { Required } from 'type-plus'
import { getDataAttribute } from '../../../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../../../attributes/observe-data-attribute.ts'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { applyThemeToDataAttribute } from '../../data-attribute/apply-theme-to-data-attribute.ts'
import { resolveThemeFromDataAttribute } from '../../data-attribute/resolve-theme-from-data-attribute.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export interface DataAttributeThemeStoreOptions {
	attributeName: `data-${string}`
	element?: Element | null | undefined
}

/**
 * Creates a theme store that reads and writes via a data attribute.
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param options.attributeName - Data attribute name (e.g. `data-theme`)
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: 'current', grayscale: 'grayscale' }
 * const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
 * store.read() // returns themeResult from data attribute
 * store.write(themeEntry('grayscale', themes))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: DataAttributeThemeStoreOptions
) {
	const element = options.element ?? document?.documentElement
	const { attributeName } = options

	if (!element) return dummyThemeStore as Required<ThemeStore<Themes>>

	return {
		read() {
			const value = getDataAttribute(attributeName, element)
			const theme = resolveThemeFromDataAttribute(value, themes)
			if (theme === undefined) return undefined
			return themeEntry(theme, themes)
		},
		write(entry) {
			applyThemeToDataAttribute(element, attributeName, entry)
		},
		subscribe(handler) {
			const observer = observeDataAttributes<string, `data-${string}`>(
				{
					[attributeName]: (value) => {
						const theme = value ? resolveThemeFromDataAttribute(value, themes) : undefined
						handler(theme ? themeEntry(theme, themes) : undefined)
					}
				},
				element
			)
			return () => observer.disconnect()
		}
	} satisfies ThemeStore<Themes>
}
