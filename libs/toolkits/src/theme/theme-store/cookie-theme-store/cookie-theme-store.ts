import type { Required } from 'type-plus'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseStoredTheme } from '../../_utils/parse-stored-theme.ts'
import { getCookieFromHeader } from '../../cookie/_cookie-utils.ts'
import { readCookieTheme } from '../../cookie/read-cookie-theme.ts'
import { writeCookieTheme } from '../../cookie/write-cookie-theme.ts'
import type { ParseStoredTheme, ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export interface CookieThemeStoreOptions<Themes extends ThemeMap = ThemeMap> {
	cookieName: string
	path?: string | undefined
	maxAge?: number | undefined
	sameSite?: 'lax' | 'strict' | 'none' | undefined
	secure?: boolean | undefined
	parse?: ParseStoredTheme<Themes> | undefined
}

/**
 * Creates a theme store backed by cookies.
 *
 * Persists across sessions. Cookies are sent with every request, so the server can
 * read the theme during SSR to avoid flash of wrong theme. Cross-tab sync is not
 * supported (cookies have no StorageEvent).
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options.cookieName - Cookie name for theme storage
 * @param options.path - Cookie path (default: '/')
 * @param options.maxAge - Cookie max-age in seconds
 * @param options.sameSite - Cookie sameSite attribute
 * @param options.secure - Cookie secure attribute
 * @param options.parse - Optional custom parser for stored string (default: parseStoredTheme)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' }
 * const store = cookieThemeStore(themes, { cookieName: 'theme' })
 * store.read()
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function cookieThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: CookieThemeStoreOptions<Themes>
): Required<ThemeStore<Themes>> {
	const { cookieName, path = '/', maxAge, sameSite, secure, parse = parseStoredTheme } = options

	if (document.cookie === undefined) {
		return dummyThemeStore
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		return readCookieTheme(themes, { cookieName, path, parse })
	}

	function notify() {
		const result = read()
		const key = result?.theme ?? undefined
		if (key === lastNotifiedKey) return
		lastNotifiedKey = key
		for (const h of handlers) h(result)
	}

	return {
		read,
		write(entry) {
			try {
				writeCookieTheme(themes, entry, {
					cookieName,
					path,
					maxAge,
					sameSite,
					secure
				})
				notify()
			} catch {
				// Ignore quota or other errors
			}
		},
		subscribe(handler) {
			handlers.add(handler)
			return () => {
				handlers.delete(handler)
			}
		}
	} satisfies ThemeStore<Themes>
}

/**
 * Reads the theme from cookies during SSR. Use with the request's Cookie header or
 * a framework's cookie API (e.g. Next.js cookies()).
 *
 * @param cookieSource - Raw Cookie header string, or a getter (name) => value for framework APIs
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options - Optional cookie name (default: 'theme')
 * @returns ThemeEntry if valid cookie found, otherwise undefined
 *
 * @example
 * ```ts
 * // With raw Cookie header (Express, Remix, etc.)
 * const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)
 *
 * // With Next.js cookies()
 * const theme = getThemeFromCookie(
 *   (name) => cookies().get(name)?.value ?? undefined,
 *   themes
 * )
 * ```
 */
export function getThemeFromCookie<Themes extends ThemeMap>(
	cookieSource: string | null | undefined | ((name: string) => string | null | undefined),
	themes: Themes,
	options: { cookieName?: string | undefined } = {}
): ThemeEntry<Themes> | undefined {
	const cookieName = options.cookieName ?? 'theme'
	const stored =
		typeof cookieSource === 'function'
			? (cookieSource(cookieName) ?? null)
			: cookieSource
				? getCookieFromHeader(cookieSource, cookieName)
				: null
	return parseStoredTheme(themes, stored ?? undefined)
}
