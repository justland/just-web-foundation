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
	element: Element | null | undefined
) {
	element = element ?? globalThis.document.documentElement
	return element.getAttribute(qualifiedName)
}
