/**
 * Observes attributes changes on an element and calls corresponding handlers.
 *
 * @param handlers - An object mapping attribute names to handler functions.
 * @param element - The element to observe (accepts null e.g. from refs). Defaults to `document.documentElement`.
 * @returns An unsubscribe function to stop observing. Returns a no-op function in SSR environments.
 *
 * @example
 * ```ts
 * const unsubscribe = observeAttributes({
 *   'data-theme': (value) => console.log(`Theme changed to: ${value}`),
 *   'class': (value) => console.log(`class changed to: ${value}`)
 * });
 *
 * // Later, to stop observing:
 * unsubscribe();
 * ```
 */
export function observeAttributes<T extends string>(
	handlers: Record<string, (value: T | null) => void>,
	element?: Element | null | undefined
): () => void {
	/* c8 ignore start */
	if (typeof document === 'undefined') {
		return () => {}
	}
	/* c8 ignore end */
	element = element ?? document.documentElement
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
	return () => observer.disconnect()
}
