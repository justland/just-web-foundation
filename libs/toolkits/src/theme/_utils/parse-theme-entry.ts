import { tryParseJSON } from '../../_internal/utils/try-parse-json.ts'
import { themeEntry } from '../theme-entry.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Parses stored JSON theme and validates the theme key against theme map.
 * Returns ThemeEntry directly using themeEntry().
 *
 * Expects stored shape: { theme: string }
 *
 * @param themes - Record of valid theme keys
 * @param value - Raw string from localStorage/sessionStorage/cookie
 * @returns ThemeEntry if valid, otherwise undefined
 */
export function parseThemeEntry<Themes extends ThemeMap>(
	themes: Themes,
	value: string | null | undefined
): ThemeEntry<Themes> | undefined {
	const parsed = tryParseJSON<{ theme: string }>(value)
	if (!parsed?.theme || typeof parsed.theme !== 'string') return undefined
	if (!(parsed.theme in themes)) return undefined
	return themeEntry(themes, parsed.theme as keyof Themes)
}
