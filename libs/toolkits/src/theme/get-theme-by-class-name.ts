import { findKey } from 'type-plus'
import type { ThemeMap } from './theme.types.ts'

/**
 * Gets the current theme by checking element class names against a themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.defaultTheme - Fallback theme key if no matching class is found
 * @param options.element - Element to check classes on (defaults to document.documentElement)
 * @returns The matching theme key or defaultTheme if no match found
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'theme-light',
 *   dark: 'theme-dark'
 * }
 *
 * // Get current theme from document.documentElement
 * const theme = getThemeByClassName({
 *   themes,
 *   defaultTheme: 'light'
 * })
 *
 * // Get theme from specific element
 * const theme = getThemeByClassName({
 *   themes,
 *   element: myElement,
 *   defaultTheme: 'light'
 * })
 * ```
 */
export function getThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	defaultTheme?: keyof Themes | undefined
	element?: Element | null | undefined
}): keyof Themes | undefined {
	const element = options.element ?? document.documentElement
	const className = element.className
	const theme = findKey(options.themes, (theme) => {
		const value: string | readonly string[] | undefined = options.themes[theme]
		if (value === undefined) return false

		const v = Array.isArray(value) ? value[0] : value
		return !!v && className.includes(v)
	})
	return theme ?? options.defaultTheme
}
