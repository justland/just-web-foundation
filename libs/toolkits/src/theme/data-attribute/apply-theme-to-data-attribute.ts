import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Applies theme to element by setting or removing a data attribute.
 *
 * @param element - Target element
 * @param attributeName - Data attribute name (e.g. `data-theme`)
 * @param entry - Theme entry to apply, or undefined to remove attribute
 */
export function applyThemeToDataAttribute<Themes extends ThemeMap>(
	element: Element,
	attributeName: `data-${string}`,
	entry: ThemeEntry<Themes> | undefined
): void {
	if (entry === undefined) {
		element.removeAttribute(attributeName)
		return
	}
	const val = entry.value
	const attributeValue = Array.isArray(val) ? val[0] : val
	if (attributeValue !== undefined && attributeValue !== '') {
		element.setAttribute(attributeName, attributeValue)
	} else {
		element.removeAttribute(attributeName)
	}
}
