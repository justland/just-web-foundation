import { observeAttributes } from '../../../attributes/observe-attribute.ts'
import { dummyThemeStore } from '../../stores/dummy-theme-store.ts'
import type { ThemeMap, ThemeStore } from '../../theme.types.ts'
import { themeResult } from '../../theme-result.ts'
import { applyThemeToClassName } from '../utils/apply-theme-to-class-name.ts'
import { resolveThemeFromClassName } from '../utils/resolve-theme-from-class-name.ts'

export type ClassNameThemeStoreOptions<Themes extends ThemeMap> = {
	element?: Element | null
	themeMap: Themes
}

/**
 * Creates a theme store that reads and writes via element class names.
 *
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @param options.themeMap - Record mapping theme keys to class name(s)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const store = classNameThemeStore({
 *   themeMap: { current: 'theme-current', grayscale: 'theme-grayscale' },
 * })
 * store.get() // returns themeResult from element.className
 * store.set('grayscale')
 * store.subscribe((themeResult) => {})
 * ```
 */
export function classNameThemeStore<Themes extends ThemeMap>(
	options: ClassNameThemeStoreOptions<Themes>
) {
	const element = options.element ?? document?.documentElement

	if (!element) return dummyThemeStore satisfies ThemeStore<Themes>

	const { themeMap } = options

	return {
		get() {
			const theme = resolveThemeFromClassName(element.className, themeMap)
			if (theme === undefined) return undefined
			return themeResult(theme, themeMap)
		},
		set(theme) {
			applyThemeToClassName(element, theme, themeMap)
		},
		subscribe(handler) {
			const observer = observeAttributes(
				{
					class: (value) => {
						const theme = value ? resolveThemeFromClassName(value, themeMap) : undefined
						handler(theme ? themeResult(theme, themeMap) : undefined)
					}
				},
				element
			)
			return () => observer.disconnect()
		}
	} satisfies ThemeStore<Themes>
}
