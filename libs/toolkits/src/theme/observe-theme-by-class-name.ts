import { classNameThemeStore } from './class-name-theme-store.ts'
import type { ThemeMap } from './theme.types.ts'

/**
 * Observes changes to element class names and calls a handler when the theme (based on class) changes.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.handler - Callback called with the current theme key or options.theme when class is cleared
 * @param options.theme - Fallback theme key when no matching class is found
 * @param options.element - Element to observe (defaults to document.documentElement)
 * @returns An object with disconnect() to stop observing
 *
 * @example
 * ```ts
 * const observer = observeThemeByClassName({
 *   themes: { light: 'theme-light', dark: 'theme-dark' },
 *   handler: (theme) => console.log('Theme:', theme),
 *   theme: 'light',
 * })
 * observer.disconnect()
 * ```
 */
export function observeThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	handler: (value: string | undefined) => void
	theme?: (keyof Themes | (string & {})) | undefined
	element?: Element | null | undefined
}): { disconnect: () => void } {
	const store = classNameThemeStore<Themes>(options.element)
	return store.subscribe({
		themes: options.themes,
		theme: options.theme,
		handler: options.handler,
	})
}
