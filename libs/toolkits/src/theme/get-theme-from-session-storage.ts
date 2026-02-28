import { createSessionStorageThemeStore } from './create-session-storage-theme-store.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

/**
 * Gets the theme key stored in sessionStorage, validated against a themes map.
 *
 * Reads the value at the given storage key and returns it only if it is a valid theme key.
 * Returns `theme` when not in a browser, when the key is missing, or when the stored value is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the stored key)
 * @param options.theme - Fallback theme key when storage is unavailable or value is invalid
 * @param options.storageKey - sessionStorage key to read (defaults to `'theme'`)
 * @returns The stored theme key if valid, otherwise `theme`
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const theme = getThemeFromSessionStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme'
 * })
 * ```
 */
export function getThemeFromSessionStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
):
	| {
			theme: keyof Themes
			value: Themes[keyof Themes]
	  }
	| undefined {
	const store = createSessionStorageThemeStore<Themes>(options.storageKey)
	return store.get({
		themes: options.themes,
		theme: options.theme,
	})
}
