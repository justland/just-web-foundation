import { findKey } from 'type-plus'
import { resolveThemeMapValue } from '../_utils/resolve-theme-map-value.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Resolves theme key from data attribute value by matching against theme map.
 *
 * @param attrValue - Data attribute value (e.g. from getAttribute)
 * @param themes - Record mapping theme keys to attribute values
 * @returns Theme key if a match is found, otherwise undefined
 */
export function resolveThemeFromDataAttribute<Theme extends string>(
	themes: ThemeMap<Theme>,
	attrValue: string | null
): Theme | undefined {
	if (attrValue === null || attrValue === '') return undefined
	const theme = findKey(themes, (key) => {
		const value = themes[key]
		if (value === undefined) return false
		const resolved = resolveThemeMapValue(value)
		const v = Array.isArray(resolved) ? resolved[0] : resolved
		return v === attrValue
	})
	return theme as Theme | undefined
}
