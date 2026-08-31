import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { ReducedMotion } from './reduced-motion.types.ts'
import { reducedMotionValues } from './reduced-motion.values.ts'

/**
 * Gets the current reduced motion preference.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion Media Queries Level 5},
 * the `prefers-reduced-motion` media feature has two valid values. Unlike `prefers-color-scheme`,
 * `'no-preference'` is a real state and is returned as such.
 *
 * When `matchMedia` is unavailable (e.g. SSR), returns `defaultReducedMotion`.
 *
 * @param defaultReducedMotion - Fallback when `matchMedia` is unavailable (default: `'no-preference'`)
 * @returns 'no-preference' or 'reduce'
 */
export function getPrefersReducedMotion(
	defaultReducedMotion: ReducedMotion = 'no-preference'
): ReducedMotion {
	return getMediaFeatureValue('prefers-reduced-motion', reducedMotionValues, defaultReducedMotion)
}
