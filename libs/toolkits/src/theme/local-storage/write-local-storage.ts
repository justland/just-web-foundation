import type { StringifyStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { writeWebStorage } from '../web-storage/write-web-storage.ts'

/**
 * Writes a theme entry to localStorage.
 *
 * Performs setItem/removeItem only. Does not notify subscribers; the store must call notify() after this.
 *
 * @param themes - Record mapping theme keys to values (used by stringify)
 * @param storageKey - localStorage key to write to
 * @param entry - Theme entry to write, or undefined to remove
 * @param options.stringify - Custom serializer (default: JSON.stringify)
 * @param options.onError - Optional callback invoked when storage write throws
 */
export function writeLocalStorage<Themes extends ThemeMap>(
	themes: Themes,
	storageKey: string,
	entry: ThemeEntry<Themes> | undefined,
	options?: {
		stringify?: StringifyStoredTheme<Themes> | undefined
		onError?: ((error: unknown) => void) | undefined
	}
): void {
	if (!window?.localStorage) return
	writeWebStorage(themes, storageKey, entry, {
		storage: window.localStorage,
		stringify: options?.stringify,
		onError: options?.onError
	})
}
