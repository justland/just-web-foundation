import { findKey } from 'type-plus'
import { resolveThemeMapValue } from '../_utils/resolve-theme-map-value.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Resolves theme key from class name string by matching against theme map.
 *
 * @param className - Element class attribute value
 * @param themes - Record mapping theme keys to class name(s); arrays use first value for matching
 * @returns Theme key if a match is found, otherwise undefined
 */
export function resolveThemeFromClassName<Theme extends string>(
	themes: ThemeMap<Theme>,
	className: string
): Theme | undefined {
	const theme = findKey(themes, (key) => {
		const value = themes[key]
		if (value === undefined) return false
		const resolved = resolveThemeMapValue(value)
		const v = Array.isArray(resolved) ? resolved[0] : resolved
		return !!v && className.includes(v)
	})
	return theme as Theme | undefined
}
