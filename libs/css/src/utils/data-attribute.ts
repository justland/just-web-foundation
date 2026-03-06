import { ctx } from '../globals.ctx.ts'
import { getAttribute, observeAttributes } from './attribute.ts'

export function getDataAttribute<T extends `data-${string}`>(
	qualifiedName: T,
	element: Element | undefined = ctx.getDocumentElement()
) {
	return getAttribute(qualifiedName, element)
}

/**
 * Observes changes to `data-*` attributes on an element and calls corresponding handlers.
 *
 * @param options - Configuration options
 * @param options.handlers - An object mapping `data-*` attribute names to handler functions.
 * @param options.element - The element to observe. Defaults to `document.documentElement`
 * @returns Unsubscribe function. Returns a no-op function in SSR environments.
 *
 * @example
 * ```ts
 * const unsubscribe = observeDataAttributes({
 *   handlers: {
 *     'data-theme': (value) => console.log(`Theme changed to: ${value}`),
 *     'data-mode': (value) => console.log(`Mode changed to: ${value}`)
 *   }
 * });
 *
 * // Later, to stop observing:
 * unsubscribe();
 * ```
 */
export function observeDataAttributes<T extends string, K extends `data-${string}`>(
	handlers: Record<K, (value: T | null) => void>,
	element?: Element | undefined
) {
	return observeAttributes(handlers, element)
}
