import type { DataAttribute } from './data-attribute.ts'
import { getAttribute } from './get-attribute.ts'

/**
 * Gets the value of a data attribute from an element.
 *
 * @param qualifiedName - The name of the data attribute to get
 * @param element - The element to get the data attribute from. Defaults to `document.documentElement`
 * @returns The data attribute value, or null if the attribute doesn't exist
 *
 * @example
 */
export function getDataAttribute(
	qualifiedName: DataAttribute,
	element?: Element | null | undefined,
) {
	return getAttribute(qualifiedName, element)
}
