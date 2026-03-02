import { findKey } from 'type-plus'
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
		const value = themes[key]?.themeValue
		if (value === undefined) return false
		const v = Array.isArray(value) ? value[0] : value
		return v === attrValue
	})
	return theme as Theme | undefined
}
