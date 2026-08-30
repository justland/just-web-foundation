import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { ColorScheme } from './color-scheme.types.ts'
import { colorSchemeValues } from './color-scheme.values.ts'

/**
 * Observes system color scheme preference changes and calls handlers when they occur.
 *
 * @param handler - A function that is called when the color scheme preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * ```ts
 * // Observe light/dark mode changes
 * const cleanup = observePrefersColorScheme((value) => console.log('Color scheme changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observePrefersColorScheme(handler: (value: ColorScheme) => void) {
	return observeMediaFeatureValue('prefers-color-scheme', colorSchemeValues, handler)
}
