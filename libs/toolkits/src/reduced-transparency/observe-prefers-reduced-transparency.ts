import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { ReducedTransparency } from './reduced-transparency.types.ts'
import { reducedTransparencyValues } from './reduced-transparency.values.ts'

/**
 * Observes system reduced transparency preference changes and calls the handler when they occur.
 *
 * @param handler - A function that is called when the reduced transparency preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * ```ts
 * const cleanup = observePrefersReducedTransparency((value) => console.log('ReducedTransparency changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observePrefersReducedTransparency(handler: (value: ReducedTransparency) => void) {
	return observeMediaFeatureValue(
		'prefers-reduced-transparency',
		reducedTransparencyValues,
		handler
	)
}
