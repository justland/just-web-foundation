import { themeEntry } from '../../theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * In-memory theme store. Transient state; no persistence.
 *
 * Bakes themes at creation. Validates theme keys on write; read/write use theme keys
 * and build ThemeEntry from the themes map, consistent with other stores.
 *
 * @param themes - Record mapping theme keys to values (for validation and entry construction)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' } as const
 * const store = inMemoryThemeStore(themes)
 * store.read() // undefined when empty
 * store.write(themeEntry('grayscale', themes))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function inMemoryThemeStore<Themes extends ThemeMap>(themes: Themes) {
	let value: keyof Themes | undefined | null
	const listeners = new Set<(v: ThemeEntry<Themes> | undefined) => void>()

	function read(): ThemeEntry<Themes> | undefined {
		if (value === undefined || value === null) return undefined
		return themeEntry(value, themes)
	}

	return {
		read,
		write(entry) {
			if (entry === undefined) {
				if (value === undefined || value === null) return
				value = undefined
				for (const fn of listeners) fn(undefined)
				return
			}
			if (!(entry.theme in themes)) return
			if (value === entry.theme) return
			value = entry.theme
			for (const fn of listeners) fn(themeEntry(entry.theme, themes))
		},
		subscribe(handler) {
			listeners.add(handler)
			return () => {
				listeners.delete(handler)
			}
		}
	} satisfies ThemeStore<Themes>
}
