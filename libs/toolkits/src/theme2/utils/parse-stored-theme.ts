import { tryParseJSON } from '../../_internal/utils/try-parse-json.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import type { ThemeResult } from '../theme-result.types.ts'

/**
 * Parses stored JSON theme and validates the theme key against theme map.
 *
 * Expects stored shape: { theme: string, value?: unknown }
 *
 * @param stored - Raw string from localStorage/sessionStorage
 * @param themeMap - Record of valid theme keys (optional; if omitted, any theme string is accepted)
 * @returns Theme key if valid, otherwise undefined
 */
export function parseStoredTheme<Theme extends string>(
	stored: string | null | undefined,
	themeMap?: ThemeMap<Theme>
): Theme | undefined {
	const parsed = tryParseJSON<{ theme: string }>(stored)
	if (!parsed?.theme || typeof parsed.theme !== 'string') return undefined
	if (themeMap && !(parsed.theme in themeMap)) return undefined
	return parsed.theme as Theme
}

/**
 * Parses stored JSON theme and validates against theme map, returning ThemeResult.
 *
 * Expects stored shape: { theme: string, value?: unknown }
 *
 * @param stored - Raw string from localStorage/sessionStorage
 * @param themeMap - Record mapping theme keys to values
 * @returns ThemeResult if valid, otherwise undefined
 */
export function parseStoredThemeResult<Themes extends ThemeMap>(
	stored: string | null | undefined,
	themeMap: Themes
): ThemeResult<Themes> | undefined {
	const theme = parseStoredTheme(stored, themeMap as ThemeMap<keyof Themes & string>)
	if (theme === undefined) return undefined
	return { theme, value: themeMap[theme] }
}
