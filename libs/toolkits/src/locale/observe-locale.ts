import { observeAttributes } from '../attributes/observe-attribute.ts'

/**
 * Observes changes to the `lang` attribute on an element and calls the callback when it changes.
 *
 * @param callback - Called with the new locale value whenever `lang` changes
 * @param element - The element to observe (default: `document.documentElement`)
 * @returns A cleanup function to stop observing
 *
 * @example
 * ```ts
 * const cleanup = observeLocale((locale) => {
 *   console.log('Locale changed to:', locale)
 * })
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observeLocale(
	callback: (locale: string) => void,
	element?: Element | null | undefined
): () => void {
	return observeAttributes({ lang: (v) => callback(v || navigator.language || 'en') }, element)
}
