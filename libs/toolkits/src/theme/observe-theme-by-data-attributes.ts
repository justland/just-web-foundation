import { observeDataAttributes } from '../attributes/observe-data-attribute.ts'

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
}): MutationObserver
export function observeThemeByDataAttributes<Themes extends Record<string, string>>(options: {
	attributeName: `data-${string}`
	themes: Themes
	handler: (value: string | null) => void
	allowCustom: true | undefined
	defaultTheme?: keyof Themes | undefined
	element?: Element | undefined
}): MutationObserver
export function observeThemeByDataAttributes<Themes extends Record<string, string>>(options: {
	attributeName: `data-${string}`
	themes: Themes
	handler: (value: string | null) => void
	allowCustom?: boolean | undefined
	defaultTheme?: keyof Themes | undefined
	element?: Element | undefined
}): MutationObserver {
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
						return
					}
				}

				if (options.allowCustom) {
					options.handler(value)
				}
			},
		},
		options.element,
	)
}
