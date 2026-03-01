import { themeEntry } from '../../theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import { parseStoredTheme } from '../../utils/parse-stored-theme.ts'
import { dummyThemeStore } from '../dummy-theme-store.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export type LocalStorageThemeStoreOptions<Themes extends ThemeMap> = {
	storageKey: string
	themeMap: Themes
}

/**
 * Creates a theme store backed by localStorage.
 *
 * Persists across sessions; cross-tab sync via StorageEvent.
 * Same-tab writes trigger manual notify (StorageEvent does not fire for same tab).
 *
 * @param options.storageKey - localStorage key
 * @param options.themeMap - Record mapping theme keys to values (for validation)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const store = localStorageThemeStore({
 *   storageKey: 'theme',
 *   themeMap: { current: 'theme-current', grayscale: 'theme-grayscale' },
 * })
 * store.get() // returns themeResult from localStorage
 * store.set(themeEntry('grayscale', themeMap))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function localStorageThemeStore<Themes extends ThemeMap>(
	options: LocalStorageThemeStoreOptions<Themes>
) {
	const { storageKey, themeMap } = options

	if (typeof window === 'undefined' || !window.localStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()

	function get() {
		const stored = window.localStorage.getItem(storageKey)
		const theme = parseStoredTheme(stored, themeMap)
		if (theme === undefined) return undefined
		return themeEntry(theme, themeMap)
	}

	function notify() {
		const result = get()
		for (const h of handlers) h(result)
	}

	return {
		get,
		set(entry) {
			try {
				if (entry === undefined) {
					window.localStorage.removeItem(storageKey)
				} else {
					window.localStorage.setItem(storageKey, JSON.stringify(entry))
				}
				notify()
			} catch {
				// Ignore quota or other errors
			}
		},
		subscribe(handler) {
			handlers.add(handler)
			handler(get())

			const onStorage = (e: StorageEvent) => {
				if (e.key === storageKey && e.storageArea === window.localStorage) notify()
			}
			window.addEventListener('storage', onStorage)

			return () => {
				handlers.delete(handler)
				window.removeEventListener('storage', onStorage)
			}
		}
	} satisfies ThemeStore<Themes>
}
