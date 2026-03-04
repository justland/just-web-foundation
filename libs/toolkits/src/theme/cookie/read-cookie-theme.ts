import { parseStoredTheme } from '../_utils/parse-stored-theme.ts'
import type { ParseStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { getCookieValue } from './_cookie-utils.ts'

export interface ReadCookieThemeOptions<Themes extends ThemeMap = ThemeMap> {
	cookieName: string
	path?: string | undefined
	parse?: ParseStoredTheme<Themes> | undefined
}

/**
 * Reads a theme entry from a cookie.
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options.cookieName - Cookie name to read from
 * @param options.path - Cookie path (default: '/')
 * @param options.parse - Custom parser (default: parseStoredTheme)
 * @returns ThemeEntry if found, undefined otherwise. Returns undefined when document.cookie is unavailable (e.g. SSR).
 */
export function readCookieTheme<Themes extends ThemeMap>(
	themes: Themes,
	options: ReadCookieThemeOptions<Themes>
): ThemeEntry<Themes> | undefined {
	const { cookieName, parse = parseStoredTheme } = options

	if (typeof document === 'undefined' || document.cookie === undefined) {
		return undefined
	}

	const stored = getCookieValue(cookieName)
	return parse(themes, stored ?? undefined)
}
