import { getDataAttribute } from '../../attributes/get-data-attribute.ts'
import { matchAttributeValueToTheme } from '../_utils/match-attribute-value-to-theme.ts'
import { themeEntry } from '../theme-entry.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Retrieves theme from element's data attribute by reading the attribute and matching against theme map.
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param element - Target element
 * @param attributeName - Data attribute name (e.g. `data-theme`)
 * @param options.separator - When defined, split by separator and use first token
 * @returns ThemeEntry if a match is found, otherwise undefined
 */
export function retrieveThemeFromDataAttribute<Themes extends ThemeMap>(
	themes: Themes,
	element: Element,
	attributeName: `data-${string}`,
	options?: { separator?: string | undefined } | undefined
): ThemeEntry<Themes> | undefined {
	const raw = getDataAttribute(attributeName, element)
	const theme = matchAttributeValueToTheme(themes, raw, options)
	return theme !== undefined ? themeEntry(themes, theme) : undefined
}
