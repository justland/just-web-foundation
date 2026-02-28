import { classNameThemeStore } from './class-name-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Gets the current theme by checking element class names against a themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.theme - Fallback theme key if no matching class is found
 * @param options.element - Element to check classes on (defaults to document.documentElement)
 * @returns The matching theme key or options.theme if no match found
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
 *   theme: 'light'
 * })
 *
 * // Get theme from specific element
 * const theme = getThemeByClassName({
 *   themes,
 *   element: myElement,
 *   theme: 'light'
 * })
 * ```
 */
export function getThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	theme?: keyof Themes | undefined
	element?: Element | null | undefined
}): keyof Themes | undefined {
	const store = classNameThemeStore<Themes>(options.element)
	return store.get({
		themes: options.themes,
		theme: options.theme
	})
}
