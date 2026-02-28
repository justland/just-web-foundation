import { createClassNameThemeStore } from './create-class-name-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Sets the theme by applying the theme's class name(s) to an element.
 *
 * Removes all theme-related classes from the element, then adds the classes
 * for the given theme key.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.theme - Theme key to apply
 * @param options.element - Element to set classes on (defaults to document.documentElement)
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'theme-light',
 *   dark: 'theme-dark'
 * }
 *
 * // Set theme on document.documentElement
 * setThemeByClassName({
 *   themes,
 *   theme: 'dark'
 * })
 *
 * // Set theme on specific element
 * setThemeByClassName({
 *   themes,
 *   theme: 'light',
 *   element: myElement
 * })
 * ```
 */
export function setThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	theme: keyof Themes
	element?: Element | null | undefined
}): void {
	const store = createClassNameThemeStore<Themes>(options.element)
	store.set({
		themes: options.themes,
		theme: options.theme,
	})
}
