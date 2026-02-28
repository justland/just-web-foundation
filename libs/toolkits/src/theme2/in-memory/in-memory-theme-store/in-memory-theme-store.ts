import type { ThemeMap, ThemeStore } from '../../theme.types.ts'
import { themeEntry } from '../../theme-entry.ts'
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
 * store.set('grayscale')
 * store.subscribe((themeResult) => {})
 * ```
 */
export function inMemoryThemeStore<Themes extends ThemeMap>(
	options: InMemoryThemeStoreOptions<Themes>
) {
	const { themeMap } = options
	let value: keyof Themes | undefined | null
	const listeners = new Set<(v: ThemeEntry<Themes> | undefined) => void>()

	function get() {
		if (value === undefined || value === null) return value
		return themeEntry(value, themeMap)
	}

	return {
		get,
		set(theme) {
			if (value === theme) return
			value = theme
			const result = themeEntry(theme, themeMap)
			for (const fn of listeners) fn(result)
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
