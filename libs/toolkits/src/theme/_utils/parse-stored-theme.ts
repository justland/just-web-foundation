import { tryParseJSON } from '../../_internal/utils/try-parse-json.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Parses stored JSON theme and validates the theme key against theme map.
 *
 * Expects stored shape: { theme: string, value?: unknown }
 *
 * @param themes - Record of valid theme keys (optional; if omitted, any theme string is accepted)
 * @param value - Raw string from localStorage/sessionStorage
 * @returns Theme key if valid, otherwise undefined
 */
export function parseStoredTheme<Theme extends string>(
	themes: ThemeMap<Theme> | undefined,
	value: string | null | undefined
): Theme | undefined {
	const parsed = tryParseJSON<{ theme: string }>(value)
	if (!parsed?.theme || typeof parsed.theme !== 'string') return undefined
	if (themes && !(parsed.theme in themes)) return undefined
	return parsed.theme as Theme
}
