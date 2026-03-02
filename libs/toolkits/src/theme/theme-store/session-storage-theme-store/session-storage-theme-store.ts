import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseThemeEntry } from '../../_utils/parse-theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
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
 * @param options.parse - Optional parse function (default: parseThemeEntry)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: { themeValue: 'theme-current' }, grayscale: { themeValue: 'theme-grayscale' } }
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
		parse?: (themes: Themes, value: string | null | undefined) => ThemeEntry<Themes> | undefined
	}
) {
	const { storageKey, parse = parseThemeEntry } = options

	if (typeof window === 'undefined' || !window.sessionStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		const stored = window.sessionStorage.getItem(storageKey)
		return parse(themes, stored)
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
			try {
				if (entry === undefined) {
					window.sessionStorage.removeItem(storageKey)
				} else {
					window.sessionStorage.setItem(storageKey, JSON.stringify(entry))
				}
				notify()
			} catch {
				// Ignore quota or other errors
			}
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
