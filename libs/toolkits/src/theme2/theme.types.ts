import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'

export type { ThemeMap } from './theme-map.types.ts'

/**
 * Optional store methods. Data flow participation is inferred from which methods exist:
 * - get: participates in waterfall read
 * - set: receives writes from setTheme
 * - subscribe: observed for external changes
 */
export type ThemeStore<Themes extends ThemeMap> = {
	get?: (() => ThemeEntry<Themes> | undefined | null) | undefined
	set?: ((theme: keyof Themes) => void) | undefined
	subscribe?:
		| ((handler: (theme: ThemeEntry<Themes> | undefined | null) => void) => () => void)
		| undefined
}

export type AsyncThemeStore<Themes extends ThemeMap> = {
	get?:
		| (() => ThemeEntry<Themes> | undefined | null | Promise<ThemeEntry<Themes> | undefined | null>)
		| undefined
	set?: ((theme: keyof Themes) => void | Promise<void>) | undefined
	subscribe?:
		| ((handler: (theme: ThemeEntry<Themes> | undefined | null) => void) => () => void)
		| undefined
}

/** Union of sync and async stores; use for APIs that accept both. */
export type StoreEntry<Themes extends ThemeMap> = ThemeStore<Themes> | AsyncThemeStore<Themes>
