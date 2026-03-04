import type { ColorScheme } from './color-scheme.types.ts'

/**
 * Gets the current preferred color scheme.
 * It can only be 'light' or 'dark'.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme Media Queries Level 5},
 * the `prefers-color-scheme` media feature has only two valid values. Even if the browser
 * preference is 'auto'/'device', it will return 'light' or 'dark'.
 *
 * When `matchMedia` is unavailable (e.g. SSR), returns `defaultColorScheme`.
 *
 * @param defaultColorScheme - Fallback when `matchMedia` is unavailable (default: `'light'`)
 * @returns 'light' or 'dark'
 */
export function getPrefersColorScheme(defaultColorScheme: ColorScheme = 'light'): ColorScheme {
	if (typeof matchMedia === 'undefined') return defaultColorScheme
	return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
