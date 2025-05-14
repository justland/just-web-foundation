import { findKey } from 'type-plus'
import { getDataAttribute, observeDataAttributes } from '../utils/data-attribute.ts'

/**
 * Gets the theme based on a data attribute value.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.defaultTheme - Fallback theme key if attribute value doesn't match any theme
 * @param options.attributeName - Name of the data attribute to check (must start with 'data-')
 * @returns The matching theme key, or defaultTheme if no match found
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
 *   defaultTheme: 'system',
 *   attributeName: 'data-theme'
 * })
 * ```
 */
export function getThemeByDataAttribute<Themes extends Record<string, string>>(options: {
	themes: Themes
	defaultTheme?: keyof Themes | undefined
	attributeName: `data-${string}`
	element?: Element | undefined
}): keyof Themes | undefined {
	const value = getDataAttribute(options.attributeName, options.element)

	const theme = findKey(options.themes, (theme) => options.themes[theme] === value)

	return theme ?? options.defaultTheme
}

/**
 * Observes changes to a theme data attribute and calls a handler when it changes.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.handler - Callback function called with the new theme value or null when removed
 * @param options.defaultTheme - Fallback theme key if attribute value doesn't match any theme
 * @param options.attributeName - Name of the data attribute to observe (must start with 'data-')
 * @returns A MutationObserver that can be disconnected to stop observing
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
 *   defaultTheme: 'light',
 *   attributeName: 'data-theme'
 * })
 *
 * // Stop observing
 * observer.disconnect()
 * ```
 */
export function observeThemeByDataAttributes<Themes extends Record<string, string>>(options: {
	attributeName: `data-${string}`
	themes: Themes
	handler: (value: string | null) => void
	defaultTheme?: keyof Themes | undefined
	element?: Element | undefined
}) {
	return observeDataAttributes(
		{
			[options.attributeName]: (value: string | null) => {
				if (value === null) {
					options.handler((options.defaultTheme as string) ?? null)
					return
				}

				for (const name in options.themes) {
					if (options.themes[name] === value) {
						options.handler(name)
						break
					}
				}
			},
		},
		options.element,
	)
}
