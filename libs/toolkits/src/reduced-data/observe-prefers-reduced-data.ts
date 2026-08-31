import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { ReducedData } from './reduced-data.types.ts'
import { reducedDataValues } from './reduced-data.values.ts'

/**
 * Observes system reduced data preference changes and calls the handler when they occur.
 *
 * @param handler - A function that is called when the reduced data preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * ```ts
 * const cleanup = observePrefersReducedData((value) => console.log('ReducedData changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observePrefersReducedData(handler: (value: ReducedData) => void) {
	return observeMediaFeatureValue('prefers-reduced-data', reducedDataValues, handler)
}
