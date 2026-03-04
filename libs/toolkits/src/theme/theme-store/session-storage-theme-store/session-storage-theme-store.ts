import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { readSessionStorage } from '../../session-storage/read-session-storage.ts'
import { writeSessionStorage } from '../../session-storage/write-session-storage.ts'
import type { ParseStoredTheme, StringifyStoredTheme, ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store backed by sessionStorage.
 *
 * Persists per tab; cross-tab sync via StorageEvent when available.
 * Same-tab writes trigger manual notify (StorageEvent does not fire for same tab).
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options.storageKey - sessionStorage key
 * @param options.parse - Optional custom parser for stored string (default: parseStoredTheme)
 * @param options.stringify - Optional custom serializer (default: JSON.stringify)
 * @param options.onError - Optional callback invoked when storage write throws
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' }
 * const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
 * store.read() // returns themeResult from sessionStorage
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function sessionStorageThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		storageKey: string
		parse?: ParseStoredTheme<Themes> | undefined
		stringify?: StringifyStoredTheme<Themes> | undefined
		onError?: ((error: unknown) => void) | undefined
	}
) {
	const { storageKey, parse, stringify, onError } = options

	if (!window?.sessionStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		return readSessionStorage(themes, storageKey, { parse })
	}

	function notify() {
		const result = read()
		const key = result?.theme ?? undefined
		if (key === lastNotifiedKey) return
		lastNotifiedKey = key
		for (const h of handlers) h(result)
	}

	return {
		read,
		write(entry) {
			writeSessionStorage(themes, storageKey, entry, { stringify, onError })
			notify()
		},
		subscribe(handler) {
			handlers.add(handler)

			const onStorage = (e: StorageEvent) => {
				if (e.key === storageKey && e.storageArea === window.sessionStorage) notify()
			}
			window.addEventListener('storage', onStorage)

			return () => {
				handlers.delete(handler)
				window.removeEventListener('storage', onStorage)
			}
		}
	} satisfies ThemeStore<Themes>
}
