import { dummyThemeStore } from '../../stores/dummy-theme-store.ts'
import type { ThemeMap, ThemeStore } from '../../theme.types.ts'
import { themeResult } from '../../theme-result.ts'
import type { ThemeResult } from '../../theme-result.types.ts'
import { parseStoredTheme } from '../../utils/parse-stored-theme.ts'

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
 * store.set('grayscale')
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

	const handlers = new Set<(theme: ThemeResult<Themes> | undefined) => void>()

	function get() {
		const stored = window.localStorage.getItem(storageKey)
		const theme = parseStoredTheme(stored, themeMap)
		if (theme === undefined) return undefined
		return themeResult(theme, themeMap)
	}

	function notify() {
		const result = get()
		for (const h of handlers) h(result)
	}

	return {
		get,
		set(theme) {
			try {
				window.localStorage.setItem(storageKey, JSON.stringify({ theme, value: themeMap[theme] }))
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
