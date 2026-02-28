import { getThemeFromStore } from './get-theme-from-store.ts'
import type { ThemeMap, ThemeResult, ThemeStore } from './theme.types.ts'

export type ObserveThemeFromStoreOptions<Themes extends ThemeMap> = {
	store: ThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | null | undefined
	handler: (result: ThemeResult<Themes>) => void
}

/**
 * Observes theme from a generic store and calls a handler with the current result.
 *
 * Calls the handler once immediately (after the initial get resolves), then again whenever the store notifies (if it provides subscribe).
 *
 * @param options - Store, themes, optional default theme, and handler
 * @returns An object with `disconnect()` to stop observing
 *
 * @example
 * ```ts
 * const observer = observeThemeFromStore({
 *   store,
 *   themes: { light: 'theme-light', dark: 'theme-dark' },
 *   theme: 'light',
 *   handler: (result) => console.log('Theme:', result?.theme),
 * })
 * observer.disconnect()
 * ```
 */
export function observeThemeFromStore<Themes extends ThemeMap>(
	options: ObserveThemeFromStoreOptions<Themes>,
): { disconnect: () => void } {
	const { store, themes, theme, handler } = options

	const notify = () => {
		getThemeFromStore({ store, themes, theme }).then(handler)
	}

	notify()

	const unsubscribe = store.subscribe?.(notify)

	return {
		disconnect: () => unsubscribe?.(),
	}
}
