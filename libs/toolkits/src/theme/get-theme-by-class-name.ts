import { findKey } from 'type-plus'

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
export function getThemeByClassName<Themes extends Record<string, string>>(options: {
	themes: Themes
	defaultTheme?: keyof Themes | undefined
	element?: Element | undefined
}): keyof Themes | undefined {
	const element = options.element ?? document.documentElement
	const className = element.className
	const theme = findKey(options.themes, (theme) => className.includes(options.themes[theme]!))
	return theme ?? options.defaultTheme
}
