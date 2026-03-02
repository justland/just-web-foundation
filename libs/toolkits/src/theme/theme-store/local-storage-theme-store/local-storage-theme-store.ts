import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseThemeEntry } from '../../_utils/parse-theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store backed by localStorage.
 *
 * Persists across sessions; cross-tab sync via StorageEvent.
 * Same-tab writes trigger manual notify (StorageEvent does not fire for same tab).
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options.storageKey - localStorage key
 * @param options.parse - Optional parse function (default: parseThemeEntry)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: { themeValue: 'theme-current' }, grayscale: { themeValue: 'theme-grayscale' } }
 * const store = localStorageThemeStore(themes, { storageKey: 'theme' })
 * store.read() // returns themeResult from localStorage
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function localStorageThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		storageKey: string
		parse?:
			| ((themes: Themes, value: string | null | undefined) => ThemeEntry<Themes> | undefined)
			| undefined
	}
) {
	const { storageKey, parse = parseThemeEntry } = options

	if (typeof window === 'undefined' || !window.localStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		const stored = window.localStorage.getItem(storageKey)
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
					window.localStorage.removeItem(storageKey)
				} else {
					window.localStorage.setItem(storageKey, JSON.stringify(entry))
				}
				notify()
			} catch {
				// Ignore quota or other errors
			}
		},
		subscribe(handler) {
			handlers.add(handler)

			const onStorage = (e: StorageEvent) => {
				if (e.key === storageKey && e.storageArea === window.localStorage) notify()
			}
			window.addEventListener('storage', onStorage)

			return () => {
				handlers.delete(handler)
				window.removeEventListener('storage', onStorage)
			}
		}
	} satisfies ThemeStore<Themes>
}
