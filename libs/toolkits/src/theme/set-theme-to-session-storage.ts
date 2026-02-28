import { sessionStorageThemeStore } from './session-storage-theme-store.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

/**
 * Sets the theme key in sessionStorage.
 *
 * Writes the theme key at the given storage key only when in a browser and when the theme is in the themes map.
 * Removes the storage item when the theme is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the theme key)
 * @param options.theme - Theme key to store
 * @param options.storageKey - sessionStorage key to write (defaults to `'theme'`)
 *
 * @example
 * ```ts
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 *
 * setThemeToSessionStorage({
 *   themes,
 *   theme: 'dark',
 *   storageKey: 'app-theme'
 * })
 * ```
 */
export function setThemeToSessionStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
): void {
	const store = sessionStorageThemeStore<Themes>(options.storageKey)
	store.set({
		themes: options.themes,
		theme: options.theme,
	})
}
