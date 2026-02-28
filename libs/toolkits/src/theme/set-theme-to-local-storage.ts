import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

/**
 * Sets the theme key in localStorage.
 *
 * Writes the theme key at the given storage key only when in a browser and when the theme is in the themes map.
 * Removes the storage item when the theme is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the theme key)
 * @param options.theme - Theme key to store
 * @param options.key - localStorage key to write (defaults to `'theme'`)
 *
 * @example
 * ```ts
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 *
 * setThemeToLocalStorage({
 *   themes,
 *   theme: 'dark',
 *   key: 'app-theme'
 * })
 * ```
 */
export function setThemeToLocalStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
): void {
	if (!window?.localStorage) return

	try {
		if (!options.theme) {
			window.localStorage.removeItem(options.storageKey)
			return
		}

		window.localStorage.setItem(
			options.storageKey,
			JSON.stringify({
				theme: options.theme,
				value: options.themes[options.theme],
			}),
		)
	} catch {
		// Ignore quota or other storage errors
	}
}
