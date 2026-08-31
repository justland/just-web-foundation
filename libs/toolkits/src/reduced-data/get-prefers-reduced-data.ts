import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { ReducedData } from './reduced-data.types.ts'
import { reducedDataValues } from './reduced-data.values.ts'

/**
 * Gets the current reduced data preference.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data Media Queries Level 5},
 * the `prefers-reduced-data` media feature has two valid values. Unlike `prefers-color-scheme`,
 * `'no-preference'` is a real state and is returned as such.
 *
 * When `matchMedia` is unavailable (e.g. SSR), returns `defaultReducedData`.
 *
 * @param defaultReducedData - Fallback when `matchMedia` is unavailable (default: `'no-preference'`)
 * @returns 'no-preference' or 'reduce'
 */
export function getPrefersReducedData(
	defaultReducedData: ReducedData = 'no-preference'
): ReducedData {
	return getMediaFeatureValue('prefers-reduced-data', reducedDataValues, defaultReducedData)
}
