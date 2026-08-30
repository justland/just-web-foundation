import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { Contrast } from './contrast.types.ts'
import { contrastValues } from './contrast.values.ts'

/**
 * Gets the current contrast preference.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-contrast Media Queries Level 5},
 * the `prefers-contrast` media feature has four valid values. Unlike `prefers-color-scheme`,
 * `'no-preference'` is a real state and is returned as such.
 *
 * When `matchMedia` is unavailable (e.g. SSR), returns `defaultContrast`.
 *
 * @param defaultContrast - Fallback when `matchMedia` is unavailable (default: `'no-preference'`)
 * @returns 'no-preference', 'less', 'more' or 'custom'
 */
export function getPrefersContrast(defaultContrast: Contrast = 'no-preference'): Contrast {
	return getMediaFeatureValue('prefers-contrast', contrastValues, defaultContrast)
}
