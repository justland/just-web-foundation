import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { Contrast } from './contrast.types.ts'
import { contrastValues } from './contrast.values.ts'

/**
 * Observes system contrast preference changes and calls the handler when they occur.
 *
 * @param handler - A function that is called when the contrast preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * ```ts
 * const cleanup = observePrefersContrast((value) => console.log('Contrast changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observePrefersContrast(handler: (value: Contrast) => void) {
	return observeMediaFeatureValue('prefers-contrast', contrastValues, handler)
}
