import { getThemeFromStores } from './get-theme-from-stores.ts'
import type { StoreEntry, ThemeMap } from './theme.types.ts'
import type { ThemeResult } from './theme-result.types.ts'

type StoreWithSubscribe<Themes extends ThemeMap> = StoreEntry<Themes> & {
	subscribe: (handler: (theme: ThemeResult<Themes> | undefined | null) => void) => () => void
}

/**
 * Subscribes to stores that have a subscribe method.
 *
 * When any store emits, runs coalesced handler (getThemeFromStores + callback).
 * Skips handler if resolved theme equals last emitted (value equality).
 *
 * @param stores - Array of theme stores
 * @param defaultTheme - Fallback when all stores return empty
 * @param handler - Callback with resolved theme key
 * @returns Unsubscribe function
 */
export function observeThemeFromStores<Themes extends ThemeMap>(
	stores: StoreEntry<Themes>[],
	defaultTheme: keyof Themes | undefined,
	handler: (theme: keyof Themes | undefined) => void
): () => void {
	const withSubscribe = stores.filter(
		(s): s is StoreWithSubscribe<Themes> => typeof s.subscribe === 'function'
	)

	let scheduled = false
	let lastEmitted: keyof Themes | undefined

	const scheduleNotify = () => {
		if (scheduled) return
		scheduled = true
		queueMicrotask(async () => {
			scheduled = false
			const theme = await getThemeFromStores(stores, defaultTheme)
			if (theme === lastEmitted) return
			lastEmitted = theme
			handler(theme)
		})
	}

	// Initial notify
	scheduleNotify()

	const unsubs = withSubscribe.map((s) => s.subscribe!((_result) => scheduleNotify()))

	return () => {
		for (const unsub of unsubs) {
			unsub()
		}
	}
}
