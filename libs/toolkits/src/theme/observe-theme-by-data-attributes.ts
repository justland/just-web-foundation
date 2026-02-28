import { dataAttributeThemeStore } from './data-attribute-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Observes changes to a theme data attribute and calls a handler when it changes.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.handler - Callback function called with the new theme value or null when removed
 * @param options.theme - Fallback theme key if attribute value doesn't match any theme
 * @param options.attributeName - Name of the data attribute to observe (must start with 'data-')
 * @returns An object with disconnect() to stop observing
 *
 * @example
 * ```ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark'
 * }
 *
 * // Observe data-theme attribute changes
 * const observer = observeThemeByDataAttributes({
 *   themes,
 *   handler: (theme) => console.log('Theme changed to:', theme),
 *   theme: 'light',
 *   attributeName: 'data-theme'
 * })
 *
 * // Stop observing
 * observer.disconnect()
 * ```
 */
export function observeThemeByDataAttributes<Themes extends ThemeMap>(options: {
	attributeName: `data-${string}`
	themes: Themes
	handler: (value: string | null) => void
	allowCustom?: true | undefined
	theme?: string | undefined
	element?: Element | undefined
}): { disconnect: () => void } {
	const store = dataAttributeThemeStore<Themes>(options.attributeName, options.element)
	return store.subscribe({
		themes: options.themes,
		theme: options.theme,
		allowCustom: options.allowCustom,
		handler: options.handler,
	})
}
