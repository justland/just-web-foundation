import { createSessionStorageThemeStore } from './create-session-storage-theme-store.ts'
import type { ThemeMap, ThemeResult, ThemeStorageOptions } from './theme.types.ts'

export type ObserveThemeFromSessionStorageResult<Themes extends ThemeMap> = ThemeResult<Themes>

/**
 * Observes changes to the theme stored in sessionStorage and calls a handler when it changes.
 *
 * The handler is called once immediately with the current theme (or default). It is then called
 * when the theme changes in another tab/window (the browser `storage` event does not fire for
 * changes in the same tab).
 *
 * @param options - Configuration options (same as getThemeFromSessionStorage)
 * @param options.handler - Callback called with the current theme result or default when storage is missing/invalid
 * @returns An object with `disconnect()` to stop observing
 *
 * @example
 * ```ts
 * const themes = { default: 'theme-default', grayscale: 'theme-grayscale' }
 *
 * const observer = observeThemeFromSessionStorage({
 *   themes,
 *   theme: 'default',
 *   storageKey: 'app-theme',
 *   handler: (result) => console.log('Theme:', result?.theme, result?.value),
 * })
 *
 * observer.disconnect()
 * ```
 */
export function observeThemeFromSessionStorage<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes> & {
		handler: (result: ObserveThemeFromSessionStorageResult<Themes>) => void
	},
): { disconnect: () => void } {
	const store = createSessionStorageThemeStore<Themes>(options.storageKey)
	return store.subscribe({
		themes: options.themes,
		theme: options.theme,
		handler: options.handler,
	})
}
