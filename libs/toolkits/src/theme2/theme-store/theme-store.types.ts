import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Optional store methods. Data flow participation is inferred from which methods exist:
 * - read: participates in waterfall read
 * - write: receives writes from setTheme
 * - subscribe: observed for external changes
 */
export type ThemeStore<Themes extends ThemeMap = ThemeMap> = {
	read?: (() => ThemeEntry<Themes> | undefined | null) | undefined
	write?: ((entry: ThemeEntry<Themes> | undefined) => void) | undefined
	subscribe?:
		| ((handler: (theme: ThemeEntry<Themes> | undefined | null) => void) => () => void)
		| undefined
}
