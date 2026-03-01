import type { ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * In-memory theme store. Transient state; no persistence.
 *
 * Implements get, set, subscribe. Useful for tests or as primary store.
 *
 * @typeParam Themes - ThemeMap type defining valid theme keys and values
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themeMap = { current: 'theme-current', grayscale: 'theme-grayscale' } as const
 * const store = inMemoryThemeStore<typeof themeMap>()
 * store.get() // undefined when empty
 * store.set(themeResult('grayscale', themeMap))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function inMemoryThemeStore<Themes extends ThemeMap>() {
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
