import type { AsyncThemeStore, ThemeMap } from '../../theme.types.ts'

/**
 * Creates an AsyncThemeStore from user-provided get, set, and/or subscribe implementations.
 *
 * Useful for remote persistence, polling, or WebSocket-based sync.
 * Returns a store with only the provided methods.
 *
 * @param options - Optional get, set, and/or subscribe implementations
 * @returns AsyncThemeStore with only the provided methods
 *
 * @example
 * ```ts
 * const store = asyncThemeStore({
 *   get: async () => {
 *     const res = await fetch('/api/theme')
 *     return (await res.json()).theme
 *   },
 *   set: async (entry) => {
 *     await fetch('/api/theme', { method: 'PUT', body: JSON.stringify(entry) })
 *   },
 * })
 * ```
 */
export function asyncThemeStore<Themes extends ThemeMap>(options: AsyncThemeStore<Themes>) {
	return options
}
