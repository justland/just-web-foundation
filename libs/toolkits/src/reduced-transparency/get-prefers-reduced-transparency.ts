import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { ReducedTransparency } from './reduced-transparency.types.ts'
import { reducedTransparencyValues } from './reduced-transparency.values.ts'

/**
 * Gets the current reduced transparency preference.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency Media Queries Level 5},
 * the `prefers-reduced-transparency` media feature has two valid values. Unlike `prefers-color-scheme`,
 * `'no-preference'` is a real state and is returned as such.
 *
 * When `matchMedia` is unavailable (e.g. SSR), returns `defaultReducedTransparency`.
 *
 * @param defaultReducedTransparency - Fallback when `matchMedia` is unavailable (default: `'no-preference'`)
 * @returns 'no-preference' or 'reduce'
 */
export function getPrefersReducedTransparency(
	defaultReducedTransparency: ReducedTransparency = 'no-preference'
): ReducedTransparency {
	return getMediaFeatureValue(
		'prefers-reduced-transparency',
		reducedTransparencyValues,
		defaultReducedTransparency
	)
}
