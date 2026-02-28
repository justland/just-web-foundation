import { mapKey } from 'type-plus'
import { ctx } from '../testing/globals.ctx.ts'

/**
 * Observes system color scheme preference changes and calls handlers when they occur.
 *
 * @param themes - An object mapping theme names to handler functions that are called when that theme is activated
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * ```ts
 * // Observe light/dark mode changes
 * const cleanup = observePrefersColorScheme({
 *   light: (theme) => console.log('Light mode activated'),
 *   dark: (theme) => console.log('Dark mode activated')
 * })
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observePrefersColorScheme<T extends string>(themes: Record<T, (value: T | null) => void>) {
	const removers = mapKey(themes, (t) => {
		const m = ctx.matchMedia(`(prefers-color-scheme: ${t})`)
		const listener = (event: MediaQueryListEvent) => {
			if (event.matches) {
				themes[t]?.(t)
			}
		}

		m.addEventListener('change', listener)
		return () => m.removeEventListener('change', listener)
	})

	return () => {
		for (const remover of removers) {
			remover()
		}
	}
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
