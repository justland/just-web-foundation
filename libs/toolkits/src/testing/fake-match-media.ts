type ChangeListener = (event: MediaQueryListEvent) => void

const MEDIA_QUERY = /^\((?<feature>[\w-]+):\s*(?<value>[\w-]+)\)$/

/**
 * A minimal `matchMedia` fake for testing user-preference media features.
 *
 * It understands `(<feature>: <value>)` queries only, which is the shape used by the
 * `getPrefers*` / `observePrefers*` helpers.
 *
 * @param preferences - The initial value of each media feature
 *
 * @example
 * ```ts
 * const media = fakeMatchMedia({ 'prefers-contrast': 'more' })
 * vi.stubGlobal('matchMedia', media.matchMedia)
 *
 * media.set('prefers-contrast', 'less') // notifies observers
 * ```
 */
export function fakeMatchMedia(preferences: Record<string, string> = {}) {
	const current = { ...preferences }
	const listenersByQuery = new Map<string, Set<ChangeListener>>()

	function parse(query: string) {
		const match = MEDIA_QUERY.exec(query)
		if (!match?.groups) throw new Error(`fakeMatchMedia does not support query: ${query}`)
		return match.groups as { feature: string; value: string }
	}

	return {
		matchMedia(query: string) {
			const { feature, value } = parse(query)
			const listeners = listenersByQuery.get(query) ?? new Set<ChangeListener>()
			listenersByQuery.set(query, listeners)

			return {
				media: query,
				get matches() {
					return current[feature] === value
				},
				addEventListener: (_type: 'change', listener: ChangeListener) => listeners.add(listener),
				removeEventListener: (_type: 'change', listener: ChangeListener) =>
					listeners.delete(listener)
			} as unknown as MediaQueryList
		},
		/**
		 * Changes the value of a media feature and notifies the queries whose match state changed.
		 */
		set(feature: string, value: string) {
			const previous = current[feature]
			if (previous === value) return
			current[feature] = value

			for (const [query, listeners] of listenersByQuery) {
				const parsed = parse(query)
				if (parsed.feature !== feature) continue
				if (parsed.value !== previous && parsed.value !== value) continue

				const event = { matches: parsed.value === value, media: query } as MediaQueryListEvent
				for (const listener of [...listeners]) listener(event)
			}
		}
	}
}
