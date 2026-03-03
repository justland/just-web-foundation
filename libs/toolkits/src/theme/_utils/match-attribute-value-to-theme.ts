import { findKey } from 'type-plus'
import type { ThemeMap } from '../theme-map.types.ts'
import { resolveThemeMapValue } from './resolve-theme-map-value.ts'

/**
 * Matches an attribute value string against the theme map and returns the theme key.
 * Pure function: no DOM access. Used by parseDataAttribute and custom parse paths.
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param attrValue - Attribute value string (e.g. from getAttribute)
 * @param options.separator - When defined, split by separator and use first token
 * @returns Theme key if a match is found, otherwise undefined
 */
export function matchAttributeValueToTheme<Theme extends string>(
	themes: ThemeMap<Theme>,
	attrValue: string | null,
	options?: { separator?: string | undefined } | undefined
): Theme | undefined {
	if (attrValue === null || attrValue === '') return undefined
	const valueToMatch =
		options?.separator !== undefined
			? attrValue
					.trim()
					.split(options.separator)
					.find((s) => s.trim() !== '')
			: attrValue
	if (valueToMatch === undefined) return undefined
	const theme = findKey(themes, (key) => {
		const value = themes[key]
		if (value === undefined) return false
		const resolved = resolveThemeMapValue(value)
		const v = Array.isArray(resolved) ? resolved[0] : resolved
		return v === valueToMatch
	})
	return theme
}
