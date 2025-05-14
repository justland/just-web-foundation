import { ctx } from '../globals.ctx.ts'

/**
 * Gets the value of an attribute from an element.
 *
 * @param qualifiedName - The name of the attribute to get
 * @param element - The element to get the attribute from. Defaults to `document.documentElement`
 * @returns The attribute value cast to type T, or null if the attribute doesn't exist
 *
 * @example
 * ```ts
 * // Get theme from document root
 * const theme = getAttribute('data-theme')
 *
 * // Get data-testid from a specific element
 * const testId = getAttribute('data-testid', element)
 * ```
 */
export function getAttribute<T extends string>(
	qualifiedName: T,
	element: Element | undefined = ctx.getDocumentElement(),
) {
	return element?.getAttribute(qualifiedName) as T | null
}

/**
 * Observes attributes changes on an element and calls corresponding handlers.
 *
 * @param handlers - An object mapping attribute names to handler functions.
 * @param element - The element to observe. Defaults to `document.documentElement`.
 * @returns {MutationObserver} The observer instance, which can be used to disconnect the observer.
 *
 * @example
 * ```ts
 * const observer = observeAttributes({
 *   'data-theme': (attr, value) => console.log(`Theme changed to: ${value}`),
 *   'class': (attr, value) => console.log(`class changed to: ${value}`)
 * });
 *
 * // Later, to stop observing:
 * observer.disconnect();
 * ```
 */
export function observeAttributes<T extends string>(
	handlers: Record<string, (value: T | null) => void>,
	element: Element | undefined = ctx.getDocumentElement(),
) {
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			const attribute = mutation.attributeName!
			const value = element.getAttribute(attribute) as T | null
			handlers[attribute]?.(value)
		}
	})
	observer.observe(element, {
		attributes: true,
		attributeFilter: Object.keys(handlers),
	})
	return observer
}
