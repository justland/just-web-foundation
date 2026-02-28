import { getThemeFromSessionStorage } from './get-theme-from-session-storage.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

export type ObserveThemeFromSessionStorageResult<Themes extends ThemeMap> =
	| {
			theme: keyof Themes
			value: Themes[keyof Themes]
	  }
	| undefined

/**
 * Observes changes to the theme stored in sessionStorage and calls a handler when it changes.
 *
 * The handler is called once immediately with the current theme (or default). It is then called
 * when the theme changes in another tab/window (the browser `storage` event does not fire for
 * changes in the same tab).
 *
 * @param options - Configuration options (same as getThemeFromSessionStorage)
 * @param options.handler - Callback called with the current theme result or default when storage is missing/invalid
 * @returns An object with `disconnect()` to stop observing
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const observer = observeThemeFromSessionStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme',
 *   handler: (result) => console.log('Theme:', result?.theme, result?.value),
 * })
 *
 * observer.disconnect()
 * ```
 */
export function observeThemeFromSessionStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes> & {
		handler: (result: ObserveThemeFromSessionStorageResult<Themes>) => void
	},
): { disconnect: () => void } {
	const { handler, ...storageOptions } = options

	const notify = () => {
		handler(getThemeFromSessionStorage(storageOptions))
	}

	if (typeof window === 'undefined' || !window.sessionStorage) {
		// No storage: still call handler with default once, return no-op disconnect
		handler(getThemeFromSessionStorage(storageOptions))
		return { disconnect: () => {} }
	}

	notify()

	const onStorage = (e: StorageEvent) => {
		if (e.key === storageOptions.storageKey && e.storageArea === window.sessionStorage) {
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
