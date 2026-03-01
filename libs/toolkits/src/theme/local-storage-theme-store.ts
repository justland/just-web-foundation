import { tryParseJSON } from '../_internal/utils/try-parse-json.ts'
import type { ThemeMap, ThemeResult, ThemeStorageOptions } from './theme.types.ts'

export type LocalStorageThemeStoreOptions<Themes extends ThemeMap> = Omit<
	ThemeStorageOptions<Themes>,
	'storageKey'
>

export type LocalStorageThemeStore<Themes extends ThemeMap> = {
	get(options: LocalStorageThemeStoreOptions<Themes>): ThemeResult<Themes>
	set(
		options: LocalStorageThemeStoreOptions<Themes> & {
			theme?: keyof Themes | null | undefined
		}
	): void
	subscribe(
		options: LocalStorageThemeStoreOptions<Themes> & {
			handler: (result: ThemeResult<Themes>) => void
		}
	): { disconnect: () => void }
}

/**
 * Theme store backed by localStorage for a fixed storage key.
 *
 * The returned store provides `get`, `set`, and `subscribe` that use the given
 * `storageKey`. Callers pass `themes` and optional `theme` (default) when calling
 * get/set/subscribe; the storage key is fixed at creation time.
 *
 * @param storageKey - localStorage key to read/write
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * ```ts
 * const store = localStorageThemeStore('app-theme')
 * const result = store.get({ themes: { light: 'theme-light', dark: 'theme-dark' }, theme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, theme: 'light', handler: (r) => console.log(r) })
 * observer.disconnect()
 * ```
 */
const storeCache = new Map<string, LocalStorageThemeStore<ThemeMap>>()

export function localStorageThemeStore<Themes extends ThemeMap>(
	storageKey: string
): LocalStorageThemeStore<Themes> {
	let store = storeCache.get(storageKey) as LocalStorageThemeStore<Themes> | undefined
	if (store) return store
	function get(options: LocalStorageThemeStoreOptions<Themes>): ThemeResult<Themes> {
		const defaultTheme = options.theme
			? {
					theme: options.theme,
					value: options.themes[options.theme]
				}
			: undefined
		if (!window?.localStorage) return defaultTheme

		try {
			const stored = window.localStorage.getItem(storageKey)
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
		options: LocalStorageThemeStoreOptions<Themes> & {
			theme?: keyof Themes | null | undefined
		}
	): void {
		if (!window?.localStorage) return

		try {
			if (options.theme == null || options.theme === '') {
				window.localStorage.removeItem(storageKey)
				return
			}

			window.localStorage.setItem(
				storageKey,
				JSON.stringify({
					theme: options.theme,
					value: options.themes[options.theme]
				})
			)
		} catch {
			// Ignore quota or other storage errors
		}
	}

	function subscribe(
		options: LocalStorageThemeStoreOptions<Themes> & {
			handler: (result: ThemeResult<Themes>) => void
		}
	): { disconnect: () => void } {
		const { handler, ...storageOptions } = options

		const notify = () => {
			handler(get(storageOptions))
		}

		if (typeof window === 'undefined' || !window.localStorage) {
			handler(get(storageOptions))
			return { disconnect: () => {} }
		}

		notify()

		const onStorage = (e: StorageEvent) => {
			if (e.key === storageKey && e.storageArea === window.localStorage) {
				notify()
			}
		}

		window.addEventListener('storage', onStorage)

		return {
			disconnect: () => {
				window.removeEventListener('storage', onStorage)
			}
		}
	}

	store = { get, set, subscribe }
	storeCache.set(storageKey, store as unknown as LocalStorageThemeStore<ThemeMap>)
	return store
}
