import { tryParseJSON } from '../_internal/utils/try-parse-json.ts'
import type { ThemeMap, ThemeResult, ThemeStorageOptions } from './theme.types.ts'

export type SessionStorageThemeStoreOptions<Themes extends ThemeMap> = Omit<
	ThemeStorageOptions<Themes>,
	'storageKey'
>

export type SessionStorageThemeStore<Themes extends ThemeMap> = {
	get(options: SessionStorageThemeStoreOptions<Themes>): ThemeResult<Themes>
	set(
		options: SessionStorageThemeStoreOptions<Themes> & {
			theme?: keyof Themes | null | undefined
		},
	): void
	subscribe(
		options: SessionStorageThemeStoreOptions<Themes> & {
			handler: (result: ThemeResult<Themes>) => void
		},
	): { disconnect: () => void }
}

/**
 * Creates a theme store backed by sessionStorage for a fixed storage key.
 *
 * The returned store provides `get`, `set`, and `subscribe` that use the given
 * `storageKey`. Callers pass `themes` and optional `theme` (default) when calling
 * get/set/subscribe; the storage key is fixed at creation time.
 *
 * @param storageKey - sessionStorage key to read/write
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * ```ts
 * const store = createSessionStorageThemeStore('app-theme')
 * const result = store.get({ themes: { light: 'theme-light', dark: 'theme-dark' }, theme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, theme: 'light', handler: (r) => console.log(r) })
 * observer.disconnect()
 * ```
 */
const storeCache = new Map<string, SessionStorageThemeStore<ThemeMap>>()

export function createSessionStorageThemeStore<Themes extends ThemeMap>(
	storageKey: string,
): SessionStorageThemeStore<Themes> {
	let store = storeCache.get(storageKey) as SessionStorageThemeStore<Themes> | undefined
	if (store) return store
	function get(options: SessionStorageThemeStoreOptions<Themes>): ThemeResult<Themes> {
		const defaultTheme = options.theme
			? {
					theme: options.theme,
					value: options.themes[options.theme],
				}
			: undefined
		if (!window?.sessionStorage) return defaultTheme

		try {
			const stored = window.sessionStorage.getItem(storageKey)
			const theme = tryParseJSON<{
				theme: keyof Themes
				value: Themes[keyof Themes]
			}>(stored)
			if (!theme) return defaultTheme
			return theme
		} catch {
			return defaultTheme
		}
	}

	function set(
		options: SessionStorageThemeStoreOptions<Themes> & {
			theme?: keyof Themes | null | undefined
		},
	): void {
		if (!window?.sessionStorage) return

		try {
			if (options.theme == null || options.theme === '') {
				window.sessionStorage.removeItem(storageKey)
				return
			}

			window.sessionStorage.setItem(
				storageKey,
				JSON.stringify({
					theme: options.theme,
					value: options.themes[options.theme],
				}),
			)
		} catch {
			// Ignore quota or other storage errors
		}
	}

	function subscribe(
		options: SessionStorageThemeStoreOptions<Themes> & {
			handler: (result: ThemeResult<Themes>) => void
		},
	): { disconnect: () => void } {
		const { handler, ...storageOptions } = options

		const notify = () => {
			handler(get(storageOptions))
		}

		if (typeof window === 'undefined' || !window.sessionStorage) {
			handler(get(storageOptions))
			return { disconnect: () => {} }
		}

		notify()

		const onStorage = (e: StorageEvent) => {
			if (e.key === storageKey && e.storageArea === window.sessionStorage) {
				notify()
			}
		}

		window.addEventListener('storage', onStorage)

		return {
			disconnect: () => {
				window.removeEventListener('storage', onStorage)
			},
		}
	}

	store = { get, set, subscribe }
	storeCache.set(storageKey, store as unknown as SessionStorageThemeStore<ThemeMap>)
	return store
}
