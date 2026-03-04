/**
 * Internal cookie utilities for theme cookie storage.
 * Cookie Store API has limited support; document.cookie is standard for theme persistence.
 */

export function getCookieValue(name: string): string | null {
	if (typeof document === 'undefined' || !document.cookie) return null
	const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
	const value = match?.[1]
	return value !== undefined ? decodeURIComponent(value) : null
}

export function setCookie(
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

export function deleteCookie(name: string, path = '/') {
	// biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API has limited support; document.cookie is standard for theme persistence
	document.cookie = `${name}=; path=${path}; max-age=0`
}

/**
 * Parses a cookie value from a raw Cookie header string.
 * Used for SSR when reading from request headers or framework cookie APIs.
 */
export function getCookieFromHeader(cookieHeader: string, name: string): string | null {
	const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
	const value = match?.[1]
	return value !== undefined ? decodeURIComponent(value.trim()) : null
}
