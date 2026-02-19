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
	const m = globalThis.matchMedia('(prefers-color-scheme: light)')
	const listener = (event: MediaQueryListEvent) => {
		handler(event.matches ? 'light' : 'dark')
	}

	m.addEventListener('change', listener)
	return () => m.removeEventListener('change', listener)
}
