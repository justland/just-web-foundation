import { observeAttributes } from '../attributes/observe-attribute.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Observes changes to element class names and calls a handler when the theme (based on class) changes.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.handler - Callback called with the current theme key or default when class is cleared
 * @param options.defaultTheme - Fallback theme key when no matching class is found
 * @param options.element - Element to observe (defaults to document.documentElement)
 * @returns The same return as observeAttributes (disconnect to stop observing)
 *
 * @example
 * ```ts
 * const observer = observeThemeByClassName({
 *   themes: { light: 'theme-light', dark: 'theme-dark' },
 *   handler: (theme) => console.log('Theme:', theme),
 *   defaultTheme: 'light',
 * })
 * observer.disconnect()
 * ```
 */
export function observeThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	handler: (value: string | undefined) => void
	defaultTheme?: (keyof Themes | (string & {})) | undefined
	element?: Element | null | undefined
}) {
	return observeAttributes(
		{
			class: (value: string | null) => {
				if (value === null) {
					options.handler(options.defaultTheme as string)
					return
				}

				for (const name in options.themes) {
					const themeValue = options.themes[name]
					if (
						themeValue &&
						value.includes(Array.isArray(themeValue) ? themeValue[0] : themeValue)
					) {
						options.handler(name)
						return
					}
				}
				options.handler(options.defaultTheme as string)
			},
		},
		options.element,
	)
}
