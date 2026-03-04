import type { ThemeMap } from './theme-map.types.ts'

/**
 * Theme entry is a pair of theme key and theme value.
 *
 * It is the basic value persisted by the theme stores.
 */
export interface ThemeEntry<Themes extends ThemeMap = ThemeMap> {
	theme: keyof Themes
	value: Themes[keyof Themes]
}

/**
 * Function type for parsing stored string into ThemeEntry.
 * Used as options.parse in persisting theme stores.
 */
export type ParseStoredTheme<Themes extends ThemeMap> = (
	themes: Themes,
	value: string | undefined
) => ThemeEntry<Themes> | undefined

/**
 * Function type for stringify ThemeEntry to a stored string.
 * Used as options.stringify in persisting theme stores.
 */
export type StringifyStoredTheme<Themes extends ThemeMap> = (
	themes: Themes,
	existing: string | undefined,
	entry: ThemeEntry<Themes> | undefined
) => string
