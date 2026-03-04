import type { ParseStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { readWebStorage } from '../web-storage/read-web-storage.ts'

/**
 * Reads a theme entry from sessionStorage.
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param storageKey - sessionStorage key to read from
 * @param options.parse - Custom parser (default: parseStoredTheme)
 * @returns ThemeEntry if found, undefined otherwise. Returns undefined when sessionStorage is unavailable (e.g. SSR).
 */
export function readSessionStorage<Themes extends ThemeMap>(
	themes: Themes,
	storageKey: string,
	options?: { parse?: ParseStoredTheme<Themes> | undefined }
): ThemeEntry<Themes> | undefined {
	if (!window?.sessionStorage) return undefined
	return readWebStorage(themes, storageKey, {
		storage: window.sessionStorage,
		parse: options?.parse
	})
}
