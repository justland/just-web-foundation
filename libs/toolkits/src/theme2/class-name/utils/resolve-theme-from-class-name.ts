import { findKey } from 'type-plus'
import type { ThemeMap } from '../../theme-map.types.ts'

/**
 * Resolves theme key from class name string by matching against theme map.
 *
 * @param className - Element class attribute value
 * @param themeMap - Record mapping theme keys to class name(s); arrays use first value for matching
 * @returns Theme key if a match is found, otherwise undefined
 */
export function resolveThemeFromClassName<Theme extends string>(
	className: string,
	themeMap: ThemeMap<Theme>
): Theme | undefined {
	const theme = findKey(themeMap, (key) => {
		const value = themeMap[key]
		if (value === undefined) return false
		const v = Array.isArray(value) ? value[0] : value
		return !!v && className.includes(v)
	})
	return theme as Theme | undefined
}
