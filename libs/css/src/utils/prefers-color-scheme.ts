import { mapKey } from 'type-plus'
import { ctx } from '../globals.ctx.ts'

/**
 * Observes system color scheme preference changes and calls handlers when they occur.
 *
 * This is the OS (or browser) preference, not the scheme the page renders in.
 * It does not change when the page sets `color-scheme`, such as for a theme the user picked
 * (Chrome 154 keeps reporting the OS preference). Inside an iframe, it reports the
 * `color-scheme` of the `<iframe>` element. For the scheme an element renders in, use `observeColorScheme()` from `@just-web/toolkits`.
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
export function observePrefersColorScheme<T extends string>(
	themes: Record<T, (value: T | null) => void>
) {
	const removers = mapKey(themes, (t) => {
		const m = ctx.matchMedia(`(prefers-color-scheme: ${t as string})`)
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
 * This is the OS (or browser) preference, not the scheme the page renders in.
 * It does not change when the page sets `color-scheme`, such as for a theme the user picked
 * (Chrome 154 keeps reporting the OS preference). Inside an iframe, it reports the
 * `color-scheme` of the `<iframe>` element. For the scheme an element renders in, use `getColorScheme()` from `@just-web/toolkits`.
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
