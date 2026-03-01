import type { ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * In-memory theme store. Transient state; no persistence.
 *
 * Implements read, write, subscribe. Useful for tests or as primary store.
 *
 * @typeParam Themes - ThemeMap type defining valid theme keys and values
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themeMap = { current: 'theme-current', grayscale: 'theme-grayscale' } as const
 * const store = inMemoryThemeStore<typeof themeMap>()
 * store.read() // undefined when empty
 * store.write(themeResult('grayscale', themeMap))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function inMemoryThemeStore<Themes extends ThemeMap>() {
	let value: ThemeEntry<Themes> | undefined | null
	const listeners = new Set<(v: ThemeEntry<Themes> | undefined) => void>()

	function read() {
		if (value === undefined || value === null) return value
		return value
	}

	return {
		read,
		write(entry) {
			if (value === entry) return
			value = entry
			for (const fn of listeners) fn(entry ?? undefined)
		},
		subscribe(handler) {
			listeners.add(handler)
			handler(read())
			return () => {
				listeners.delete(handler)
			}
		}
	} satisfies ThemeStore<Themes>
}
