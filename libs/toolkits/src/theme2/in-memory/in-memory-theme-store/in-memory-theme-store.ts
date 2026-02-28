import type { ThemeMap, ThemeStore } from '../../theme.types.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'

export type InMemoryThemeStoreOptions<Themes extends ThemeMap> = {
	themeMap: Themes
}

/**
 * In-memory theme store. Transient state; no persistence.
 *
 * Implements get, set, subscribe. Useful for tests or as primary store.
 *
 * @param options.themeMap - Record mapping theme keys to values
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const store = inMemoryThemeStore({
 *   themeMap: { current: 'theme-current', grayscale: 'theme-grayscale' },
 * })
 * store.get() // undefined when empty
 * store.set(themeEntry('grayscale', themeMap))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function inMemoryThemeStore<Themes extends ThemeMap>(
	_options: InMemoryThemeStoreOptions<Themes>
) {
	let value: ThemeEntry<Themes> | undefined | null
	const listeners = new Set<(v: ThemeEntry<Themes> | undefined) => void>()

	function get() {
		if (value === undefined || value === null) return value
		return value
	}

	return {
		get,
		set(entry) {
			if (value === entry) return
			value = entry
			for (const fn of listeners) fn(entry ?? undefined)
		},
		subscribe(handler) {
			listeners.add(handler)
			handler(get())
			return () => {
				listeners.delete(handler)
			}
		}
	} satisfies ThemeStore<Themes>
}
