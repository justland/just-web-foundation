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
	element?: Element | null | undefined
) {
	element = element ?? globalThis.document.documentElement
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			const attribute = mutation.attributeName
			if (!attribute) continue
			const value = element.getAttribute(attribute) as T | null
			handlers[attribute]?.(value)
		}
	})
	observer.observe(element, {
		attributes: true,
		attributeFilter: Object.keys(handlers)
	})
	return observer
}
