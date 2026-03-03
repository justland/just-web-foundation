import { resolveThemeMapValue } from '../_utils/resolve-theme-map-value.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Applies theme to element by setting or removing a data attribute.
 *
 * @param themes - Record mapping theme keys to attribute values (for API consistency with retrieveThemeFromDataAttribute)
 * @param element - Target element
 * @param attributeName - Data attribute name (e.g. `data-theme`)
 * @param entry - Theme entry to apply, or undefined to remove attribute
 * @param options.separator - When defined, merge new value as first token, preserving others
 */
export function applyThemeToDataAttribute<Themes extends ThemeMap>(
	_themes: Themes,
	element: Element,
	attributeName: `data-${string}`,
	entry: ThemeEntry<Themes> | undefined,
	options?: { separator?: string | undefined } | undefined
): void {
	if (entry === undefined) {
		element.removeAttribute(attributeName)
		return
	}
	const resolved = resolveThemeMapValue(entry.value)
	const attributeValue = Array.isArray(resolved) ? resolved[0] : resolved
	if (attributeValue !== undefined && attributeValue !== '') {
		const finalValue =
			options?.separator !== undefined
				? (() => {
						const existing = element.getAttribute(attributeName)
						if (!existing?.trim()) return attributeValue
						const tokens = existing
							.trim()
							.split(options.separator)
							.filter((t) => t.trim() !== attributeValue)
						return [attributeValue, ...tokens].join(options.separator)
					})()
				: attributeValue
		element.setAttribute(attributeName, finalValue)
	} else {
		element.removeAttribute(attributeName)
	}
}
