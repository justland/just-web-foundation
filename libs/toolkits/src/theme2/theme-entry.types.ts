import type { ThemeMap } from './theme.types.ts'

/**
 * Theme entry is a pair of theme key and theme value.
 *
 * It is the basic value persisted by the theme stores.
 */
export type ThemeEntry<Themes extends ThemeMap = ThemeMap> = {
	theme: keyof Themes
	value: Themes[keyof Themes]
}
