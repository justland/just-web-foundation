import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Async variant of `ThemeStore` where read and write may return promises.
 * Use for remote persistence, polling, or WebSocket-based sync.
 *
 * Same optional methods as `ThemeStore`:
 *
 * - **read** – Can return `Promise<ThemeEntry | undefined>` for async sources
 * - **write** – Can return `Promise<void>` for async persistence
 * - **subscribe** – Same signature as sync; observes external changes
 *
 * @typeParam Themes - Map of theme keys to their value types (string or readonly string[])
 */
export interface AsyncThemeStore<Themes extends ThemeMap = ThemeMap> {
	read?:
		| (() => ThemeEntry<Themes> | undefined | Promise<ThemeEntry<Themes> | undefined>)
		| undefined
	write?: ((entry: ThemeEntry<Themes> | undefined) => void | Promise<void>) | undefined
	subscribe?:
		| ((handler: (entry: ThemeEntry<Themes> | undefined | null) => void) => () => void)
		| undefined
}
