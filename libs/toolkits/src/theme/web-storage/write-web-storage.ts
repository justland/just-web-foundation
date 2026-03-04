import type { StringifyStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

function defaultStringify<Themes extends ThemeMap>(
	_themes: Themes,
	_existing: string | undefined,
	entry: ThemeEntry<Themes> | null | undefined
): string {
	return entry == null ? '' : JSON.stringify(entry)
}

/**
 * Writes a theme entry to a web storage (localStorage or sessionStorage).
 *
 * Performs setItem/removeItem only. Does not notify subscribers; the store must call notify() after this.
 *
 * @param themes - Record mapping theme keys to values (used by stringify)
 * @param storageKey - Storage key to write to
 * @param entry - Theme entry to write, or null/undefined to remove
 * @param options.storage - Storage object (localStorage or sessionStorage)
 * @param options.stringify - Custom serializer (default: JSON.stringify)
 * @param options.onError - Optional callback invoked when setItem/removeItem throws
 */
export function writeWebStorage<Themes extends ThemeMap>(
	themes: Themes,
	storageKey: string,
	entry: ThemeEntry<Themes> | null | undefined,
	options: {
		storage: Storage
		stringify?: StringifyStoredTheme<Themes> | undefined
		onError?: ((error: unknown) => void) | undefined
	}
): void {
	const { storage, stringify = defaultStringify, onError } = options
	try {
		if (entry == null) {
			storage.removeItem(storageKey)
		} else {
			const existing = storage.getItem(storageKey) ?? undefined
			const value = stringify(themes, existing, entry)
			storage.setItem(storageKey, value)
		}
	} catch (error) {
		onError?.(error)
	}
}
