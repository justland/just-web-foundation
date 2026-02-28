import { dataAttributeThemeStore } from './data-attribute-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Gets the theme based on a data attribute value.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.theme - Fallback theme key if attribute value doesn't match any theme
 * @param options.attributeName - Name of the data attribute to check (must start with 'data-')
 * @param options.allowCustom - Whether to allow custom themes value
 * @returns The matching theme key, or options.theme if no match found
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark',
 *   system: 'system'
 * }
 *
 * // Get theme from data-theme attribute
 * const theme = getThemeByDataAttribute({
 *   themes,
 *   theme: 'system',
 *   attributeName: 'data-theme'
 * })
 * ```
 */
export function getThemeByDataAttribute<Themes extends ThemeMap>(options: {
	attributeName: `data-${string}`
	theme?: keyof Themes | undefined
	themes: Themes
	element?: Element | undefined
}): keyof Themes | undefined
export function getThemeByDataAttribute<Themes extends ThemeMap>(options: {
	attributeName: `data-${string}`
	allowCustom: true
	theme?: keyof Themes | undefined
	themes: Themes
	element?: Element | undefined
}): string | undefined
export function getThemeByDataAttribute<Themes extends ThemeMap>(options: {
	attributeName: `data-${string}`
	allowCustom?: boolean | undefined
	theme?: keyof Themes | undefined
	themes: Themes
	element?: Element | undefined
}): keyof Themes | string | undefined {
	const store = dataAttributeThemeStore<Themes>(options.attributeName, options.element)
	return store.get({
		themes: options.themes,
		theme: options.theme,
		allowCustom: options.allowCustom,
	}) as keyof Themes | string | undefined
}
