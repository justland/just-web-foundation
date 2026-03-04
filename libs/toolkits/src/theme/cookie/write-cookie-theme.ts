import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { deleteCookie, setCookie } from './_cookie-utils.ts'

export interface WriteCookieThemeOptions<_Themes extends ThemeMap = ThemeMap> {
	cookieName: string
	path?: string | undefined
	maxAge?: number | undefined
	sameSite?: 'lax' | 'strict' | 'none' | undefined
	secure?: boolean | undefined
}

/**
 * Writes a theme entry to a cookie.
 *
 * Performs cookie set/delete only. Does not notify subscribers; the store must call notify() after this.
 *
 * @param themes - Record mapping theme keys to values (used for type validation)
 * @param entry - Theme entry to write, or undefined to remove
 * @param options - Cookie options
 */
export function writeCookieTheme<Themes extends ThemeMap>(
	_themes: Themes,
	entry: ThemeEntry<Themes> | undefined,
	options: WriteCookieThemeOptions<Themes>
): void {
	const { cookieName, path = '/', maxAge, sameSite, secure } = options

	if (typeof document === 'undefined' || document.cookie === undefined) {
		return
	}

	if (entry === undefined) {
		deleteCookie(cookieName, path)
		return
	}

	const opts: {
		path: string
		maxAge?: number
		sameSite?: 'lax' | 'strict' | 'none'
		secure?: boolean
	} = { path }
	if (maxAge !== undefined) opts.maxAge = maxAge
	if (sameSite !== undefined) opts.sameSite = sameSite
	if (secure) opts.secure = true
	setCookie(cookieName, JSON.stringify(entry), opts)
}
