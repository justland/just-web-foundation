import type { Required } from 'type-plus'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import { parseStoredTheme } from '../../utils/parse-stored-theme.ts'
import { dummyThemeStore } from '../dummy-theme-store.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export type GetThemeFromCookieOptions = {
	cookieName?: string | undefined
}

export type CookieThemeStoreOptions<Themes extends ThemeMap> = {
	cookieName: string
	themeMap: Themes
	path?: string | undefined
	maxAge?: number | undefined
	sameSite?: 'lax' | 'strict' | 'none' | undefined
	secure?: boolean | undefined
}

function getCookieValue(name: string): string | null {
	if (typeof document === 'undefined' || !document.cookie) return null
	const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
	const value = match?.[1]
	return value !== undefined ? decodeURIComponent(value) : null
}

function setCookie(
	name: string,
	value: string,
	options: {
		path?: string | undefined
		maxAge?: number | undefined
		sameSite?: 'lax' | 'strict' | 'none' | undefined
		secure?: boolean | undefined
	}
) {
	const parts = [`${name}=${encodeURIComponent(value)}`]
	parts.push(`path=${options.path ?? '/'}`)
	if (options.maxAge !== undefined) parts.push(`max-age=${options.maxAge}`)
	if (options.sameSite !== undefined) parts.push(`samesite=${options.sameSite}`)
	if (options.secure) parts.push('secure')
	// biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API has limited support; document.cookie is standard for theme persistence
	document.cookie = parts.join('; ')
}

function deleteCookie(name: string, path = '/') {
	// biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API has limited support; document.cookie is standard for theme persistence
	document.cookie = `${name}=; path=${path}; max-age=0`
}

/**
 * Creates a theme store backed by cookies.
 *
 * Persists across sessions. Cookies are sent with every request, so the server can
 * read the theme during SSR to avoid flash of wrong theme. Cross-tab sync is not
 * supported (cookies have no StorageEvent).
 *
 * @param options.cookieName - Cookie name for theme storage
 * @param options.themeMap - Record mapping theme keys to values (for validation)
 * @param options.path - Cookie path (default: '/')
 * @param options.maxAge - Cookie max-age in seconds
 * @param options.sameSite - Cookie sameSite attribute
 * @param options.secure - Cookie secure attribute
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const store = cookieThemeStore({
 *   cookieName: 'theme',
 *   themeMap: { current: 'theme-current', grayscale: 'theme-grayscale' },
 * })
 * store.read()
 * store.write(themeEntry('grayscale', themeMap))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function cookieThemeStore<Themes extends ThemeMap>(
	options: CookieThemeStoreOptions<Themes>
): Required<ThemeStore<Themes>> {
	const { cookieName, themeMap, path = '/', maxAge, sameSite, secure } = options

	if (document.cookie === undefined) {
		return dummyThemeStore
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		const stored = getCookieValue(cookieName)
		const theme = parseStoredTheme(stored, themeMap)
		if (theme === undefined) return undefined
		return themeEntry(theme, themeMap)
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
				if (entry === undefined) {
					deleteCookie(cookieName, path)
				} else {
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
				notify()
			} catch {
				// Ignore quota or other errors
			}
		},
		subscribe(handler) {
			handlers.add(handler)
			handler(read())
			return () => {
				handlers.delete(handler)
			}
		}
	} satisfies ThemeStore<Themes>
}

function getCookieFromHeader(cookieHeader: string, name: string): string | null {
	const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
	const value = match?.[1]
	return value !== undefined ? decodeURIComponent(value.trim()) : null
}

/**
 * Reads the theme from cookies during SSR. Use with the request's Cookie header or
 * a framework's cookie API (e.g. Next.js cookies()).
 *
 * @param cookieSource - Raw Cookie header string, or a getter (name) => value for framework APIs
 * @param themeMap - Record mapping theme keys to values (for validation)
 * @param options - Optional cookie name (default: 'theme')
 * @returns ThemeEntry if valid cookie found, otherwise undefined
 *
 * @example
 * ```ts
 * // With raw Cookie header (Express, Remix, etc.)
 * const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themeMap)
 *
 * // With Next.js cookies()
 * const theme = getThemeFromCookie(
 *   (name) => cookies().get(name)?.value ?? undefined,
 *   themeMap
 * )
 * ```
 */
export function getThemeFromCookie<Themes extends ThemeMap>(
	cookieSource: string | null | undefined | ((name: string) => string | null | undefined),
	themeMap: Themes,
	options: GetThemeFromCookieOptions = {}
): ThemeEntry<Themes> | undefined {
	const cookieName = options.cookieName ?? 'theme'
	const stored =
		typeof cookieSource === 'function'
			? (cookieSource(cookieName) ?? null)
			: cookieSource
				? getCookieFromHeader(cookieSource, cookieName)
				: null
	const theme = parseStoredTheme(stored, themeMap)
	if (theme === undefined) return undefined
	return themeEntry(theme, themeMap)
}
