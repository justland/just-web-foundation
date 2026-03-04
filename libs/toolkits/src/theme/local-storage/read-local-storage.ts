import type { ParseStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { readWebStorage } from '../web-storage/read-web-storage.ts'

/**
 * Reads a theme entry from localStorage.
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param storageKey - localStorage key to read from
 * @param options.parse - Custom parser (default: parseStoredTheme)
 * @returns ThemeEntry if found, undefined otherwise. Returns undefined when localStorage is unavailable (e.g. SSR).
 */
export function readLocalStorage<Themes extends ThemeMap>(
	themes: Themes,
	storageKey: string,
	options?: { parse?: ParseStoredTheme<Themes> | undefined }
): ThemeEntry<Themes> | undefined {
	if (!window?.localStorage) return undefined
	return readWebStorage(themes, storageKey, {
		storage: window.localStorage,
		parse: options?.parse
	})
}
