import { ctx } from '../testing/globals.ctx.ts'

/**
 * Observes system color scheme preference changes and calls handlers when they occur.
 *
 * @param handler - A function that is called when the color scheme preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * ```ts
 * // Observe light/dark mode changes
 * const cleanup = observePrefersColorScheme((value) => console.log('Color scheme changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observePrefersColorScheme(handler: (value: 'light' | 'dark') => void) {
	const m = globalThis.matchMedia('(prefers-color-scheme: dark)')
	const listener = (event: MediaQueryListEvent) => {
		handler(event.matches ? 'dark' : 'light')
	}

	m.addEventListener('change', listener)
	return () => m.removeEventListener('change', listener)
}

/**
 * Gets the current preferred color theme from the system settings.
 *
 * @param themes - A list of theme names to check against the system preference
 * @returns The first matching theme from the provided list, or null if none match
 *
 * @example
 * ```ts
 * // Check if system prefers light or dark mode
 * const theme = getPrefersColorTheme('light', 'dark')
 * // Returns 'light', 'dark', or null
 * ```
 */
export function getPrefersColorTheme<T extends string>(...themes: T[]) {
	return themes.find((theme) => ctx.matchMedia(`(prefers-color-scheme: ${theme})`).matches) ?? null
}
