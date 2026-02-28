import { createDataAttributeThemeStore } from './create-data-attribute-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Sets the theme by applying the theme's value to a data attribute on an element.
 *
 * If the theme key exists in the themes map, sets the attribute to that value.
 * Otherwise removes the attribute.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.theme - Theme key to apply
 * @param options.attributeName - Name of the data attribute to set (must start with 'data-')
 * @param options.element - Element to set the attribute on (defaults to document.documentElement)
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark'
 * }
 *
 * // Set theme on document.documentElement
 * setThemeByDataAttribute({
 *   themes,
 *   theme: 'dark',
 *   attributeName: 'data-theme'
 * })
 *
 * // Set theme on specific element
 * setThemeByDataAttribute({
 *   themes,
 *   theme: 'light',
 *   attributeName: 'data-theme',
 *   element: myElement
 * })
 * ```
 */
export function setThemeByDataAttribute<Themes extends ThemeMap>(options: {
	attributeName: `data-${string}`
	element?: Element | null | undefined
	theme: keyof Themes
	themes: Themes
}): void {
	const store = createDataAttributeThemeStore<Themes>(options.attributeName, options.element)
	store.set({
		themes: options.themes,
		theme: options.theme,
	})
}
