import { parseStoredTheme } from '../_utils/parse-stored-theme.ts'
import type { ParseStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Reads a theme entry from a web storage (localStorage or sessionStorage).
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param storageKey - Storage key to read from
 * @param options.storage - Storage object (localStorage or sessionStorage)
 * @param options.parse - Custom parser (default: parseStoredTheme)
 * @returns ThemeEntry if found, undefined otherwise. Returns undefined when storage is unavailable (e.g. SSR).
 */
export function readWebStorage<Themes extends ThemeMap>(
	themes: Themes,
	storageKey: string,
	options: { storage: Storage; parse?: ParseStoredTheme<Themes> | undefined }
): ThemeEntry<Themes> | undefined {
	const { storage, parse = parseStoredTheme } = options
	const stored = storage.getItem(storageKey)
	return parse(themes, stored ?? undefined)
}
