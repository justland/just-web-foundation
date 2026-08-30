/**
 * Observes changes to a user-preference media feature.
 *
 * Listens to `(<feature>: <value>)` for each value and calls `handler` with the value that
 * becomes the active one.
 *
 * @param feature - The media feature name, e.g. `'prefers-contrast'`
 * @param values - The valid values of the feature
 * @param handler - A function that is called when the preference changes
 * @returns A cleanup function that removes all event listeners
 */
export function observeMediaFeatureValue<V extends string>(
	feature: string,
	values: readonly V[],
	handler: (value: V) => void
) {
	const cleanups = values.map((value) => {
		const m = globalThis.matchMedia(`(${feature}: ${value})`)
		const listener = (event: MediaQueryListEvent) => {
			if (event.matches) handler(value)
		}

		m.addEventListener('change', listener)
		return () => m.removeEventListener('change', listener)
	})

	return () => {
		for (const cleanup of cleanups) cleanup()
	}
}
