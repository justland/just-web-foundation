/**
 * Gets the current preferred color scheme.
 * It can only be 'light' or 'dark'.
 *
 * Even if the browser preference is 'auto'/'device', it will return 'light' or 'dark'.
 *
 * When `matchMedia` is unavailable (e.g. SSR), returns `defaultColorScheme`.
 *
 * @param defaultColorScheme - Fallback when `matchMedia` is unavailable (default: `'light'`)
 * @returns 'light' or 'dark'
 */
export function getPrefersColorScheme(
	defaultColorScheme: 'light' | 'dark' = 'light'
): 'light' | 'dark' {
	if (typeof matchMedia === 'undefined') return defaultColorScheme
	return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
