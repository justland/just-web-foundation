import { tryParseJSON } from '../_internal/utils/try-parse-json.ts'
import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

/**
 * Gets the theme key stored in localStorage, validated against a themes map.
 *
 * Reads the value at the given storage key and returns it only if it is a valid theme key.
 * Returns `theme` when not in a browser, when the key is missing, or when the stored value is not in the themes map.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their values (used to validate the stored key)
 * @param options.theme - Fallback theme key when storage is unavailable or value is invalid
 * @param options.storageKey - localStorage key to read (defaults to `'theme'`)
 * @returns The stored theme key if valid, otherwise `theme`
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const theme = getThemeFromLocalStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme'
 * })
 * ```
 */
export function getThemeFromLocalStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
):
	| {
			theme: keyof Themes
			value: Themes[keyof Themes]
	  }
	| undefined {
	const defaultTheme = options.theme
		? {
				theme: options.theme,
				value: options.themes[options.theme],
			}
		: undefined
	if (!window?.localStorage) return defaultTheme

	try {
		const stored = window.localStorage.getItem(options.storageKey)

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
