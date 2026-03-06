import { observeAttributes } from './observe-attribute.ts'

/**
 * Observes changes to `data-*` attributes on an element and calls corresponding handlers.
 *
 * @param handlers - An object mapping `data-*` attribute names to handler functions.
 * @param element - The element to observe (accepts null e.g. from refs). Defaults to `document.documentElement`
 * @returns An unsubscribe function to stop observing. Returns a no-op function in SSR environments.
 *
 * @example
 * ```ts
 * const unsubscribe = observeDataAttributes({
 *   'data-theme': (value) => console.log(`Theme changed to: ${value}`),
 *   'data-mode': (value) => console.log(`Mode changed to: ${value}`)
 * });
 *
 * // Later, to stop observing:
 * unsubscribe();
 * ```
 */
export function observeDataAttributes<T extends string, K extends `data-${string}`>(
	handlers: Record<K, (value: T | null) => void>,
	element?: Element | null | undefined
) {
	return observeAttributes(handlers, element)
}
