import type { ThemeMap } from '../../theme.types.ts'

/**
 * Applies theme to element by setting or removing a data attribute.
 *
 * @param element - Target element
 * @param attributeName - Data attribute name (e.g. `data-theme`)
 * @param theme - Theme key to apply
 * @param themeMap - Record mapping theme keys to attribute values
 */
export function applyThemeToDataAttribute<Themes extends ThemeMap>(
	element: Element,
	attributeName: `data-${string}`,
	theme: keyof Themes,
	themeMap: Themes
): void {
	if (!(theme in themeMap)) {
		element.removeAttribute(attributeName)
		return
	}
	const val = themeMap[theme]
	const attributeValue = Array.isArray(val) ? val[0] : val
	if (attributeValue !== undefined && attributeValue !== '') {
		element.setAttribute(attributeName, attributeValue)
	} else {
		element.removeAttribute(attributeName)
	}
}
