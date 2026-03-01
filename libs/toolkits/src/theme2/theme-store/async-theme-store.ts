import type { ThemeMap } from '../theme-map.types.ts'
import type { AsyncThemeStore } from './async-theme-store.types.ts'

/**
 * Creates an AsyncThemeStore from user-provided read, write, and/or subscribe implementations.
 *
 * Useful for remote persistence, polling, or WebSocket-based sync.
 * Returns a store with only the provided methods.
 *
 * @param options - Optional read, write, and/or subscribe implementations
 * @returns AsyncThemeStore with only the provided methods
 *
 * @example
 * ```ts
 * const store = asyncThemeStore({
 *   read: async () => {
 *     const res = await fetch('/api/theme')
 *     return (await res.json()).theme
 *   },
 *   write: async (entry) => {
 *     await fetch('/api/theme', { method: 'PUT', body: JSON.stringify(entry) })
 *   },
 * })
 * ```
 */
export function asyncThemeStore<Themes extends ThemeMap>(options: AsyncThemeStore<Themes>) {
	return options
}
