import { tryParseJSON } from '../../_internal/utils/try-parse-json.ts'
import type { ThemeMap } from '../theme-map.types.ts'

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
