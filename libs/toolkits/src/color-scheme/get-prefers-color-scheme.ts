import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { ColorScheme } from './color-scheme.types.ts'
import { colorSchemeValues } from './color-scheme.values.ts'

/**
 * Gets the current preferred color scheme.
 * It can only be 'light' or 'dark'.
 *
 * This is the OS (or browser) preference, not the scheme the page renders in.
 * It does not change when the page sets `color-scheme`, such as for a theme the user picked
 * (Chrome 154 keeps reporting the OS preference). Inside an iframe, it reports the
 * `color-scheme` of the `<iframe>` element. For the scheme an element renders in, use `getColorScheme()`.
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
	return getMediaFeatureValue('prefers-color-scheme', colorSchemeValues, 'dark')
}
