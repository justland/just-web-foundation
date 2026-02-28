import { getThemeFromLocalStorage } from './get-theme-from-local-storage.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

export type ObserveThemeFromLocalStorageResult<Themes extends ThemeMap> =
	| {
			theme: keyof Themes
			value: Themes[keyof Themes]
	  }
	| undefined

/**
 * Observes changes to the theme stored in localStorage and calls a handler when it changes.
 *
 * The handler is called once immediately with the current theme (or default). It is then called
 * when the theme changes in another tab/window (the browser `storage` event does not fire for
 * changes in the same tab).
 *
 * @param options - Configuration options (same as getThemeFromLocalStorage)
 * @param options.handler - Callback called with the current theme result or default when storage is missing/invalid
 * @returns An object with `disconnect()` to stop observing
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const observer = observeThemeFromLocalStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme',
 *   handler: (result) => console.log('Theme:', result?.theme, result?.value),
 * })
 *
 * observer.disconnect()
 * ```
 */
export function observeThemeFromLocalStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes> & {
		handler: (result: ObserveThemeFromLocalStorageResult<Themes>) => void
	},
): { disconnect: () => void } {
	const { handler, ...storageOptions } = options

	const notify = () => {
		handler(getThemeFromLocalStorage(storageOptions))
	}

	if (typeof window === 'undefined' || !window.localStorage) {
		// No storage: still call handler with default once, return no-op disconnect
		handler(getThemeFromLocalStorage(storageOptions))
		return { disconnect: () => {} }
	}

	notify()

	const onStorage = (e: StorageEvent) => {
		if (e.key === storageOptions.storageKey) {
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
