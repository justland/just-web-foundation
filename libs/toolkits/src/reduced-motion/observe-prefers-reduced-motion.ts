import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { ReducedMotion } from './reduced-motion.types.ts'
import { reducedMotionValues } from './reduced-motion.values.ts'

/**
 * Observes system reduced motion preference changes and calls the handler when they occur.
 *
 * @param handler - A function that is called when the reduced motion preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * ```ts
 * const cleanup = observePrefersReducedMotion((value) => console.log('ReducedMotion changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observePrefersReducedMotion(handler: (value: ReducedMotion) => void) {
	return observeMediaFeatureValue('prefers-reduced-motion', reducedMotionValues, handler)
}
