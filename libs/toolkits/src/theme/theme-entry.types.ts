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
 * Value accepts null (e.g. from getItem, getAttribute, cookie parsing).
 */
export type ParseStoredTheme<Themes extends ThemeMap> = (
	themes: Themes,
	value: string | null | undefined
) => ThemeEntry<Themes> | undefined

/**
 * Function type for stringify ThemeEntry to a stored string.
 * Used as options.stringify in persisting theme stores.
 * Existing accepts null (e.g. from getAttribute, getItem); entry accepts null for remove/clear.
 */
export type StringifyStoredTheme<Themes extends ThemeMap> = (
	themes: Themes,
	existing: string | null | undefined,
	entry: ThemeEntry<Themes> | null | undefined
) => string
