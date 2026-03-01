import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Interface for theme stores with optional read, write, and subscribe methods.
 * Data flow participation is inferred from which methods exist:
 *
 * - **read** – Participates in waterfall read for `getThemeFromStores`
 * - **write** – Receives writes from `setThemeToStores`
 * - **subscribe** – GObserved for external changes via `observeThemeFromStores`
 *
 * All methods are optional.
 * Built-in implementations:
 * - `classNameThemeStore`
 * - `dataAttributeThemeStore`
 * - `inMemoryThemeStore`
 * - `localStorageThemeStore`
 * - `sessionStorageThemeStore`
 *
 * @typeParam Themes - Map of theme keys to their value types (string or readonly string[])
 */
export type ThemeStore<Themes extends ThemeMap = ThemeMap> = {
	read?: (() => ThemeEntry<Themes> | undefined | null) | undefined
	write?: ((entry: ThemeEntry<Themes> | undefined) => void) | undefined
	subscribe?:
		| ((handler: (theme: ThemeEntry<Themes> | undefined | null) => void) => () => void)
		| undefined
}
