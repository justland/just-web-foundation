import { findKey } from 'type-plus'
import { resolveThemeMapValue } from '../_utils/resolve-theme-map-value.ts'
import { themeEntry } from '../theme-entry.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Parses a class name string into a ThemeEntry.
 *
 * Pure function: no DOM access. Matches class strings by checking if any theme
 * class is included in the className (e.g. `className.includes(themeClass)`).
 * Arrays in theme map use first value for matching.
 *
 * @param themes - Record mapping theme keys to class name(s)
 * @param className - Raw class attribute value (e.g. from element.className)
 * @returns ThemeEntry if a match is found, otherwise undefined
 */
export function parseClassName<Themes extends ThemeMap>(
	themes: Themes,
	className: string | undefined
): ThemeEntry<Themes> | undefined {
	const cls = className ?? ''
	const theme = findKey(themes, (key) => {
		const value = themes[key]
		if (value === undefined) return false
		const resolved = resolveThemeMapValue(value)
		const v = Array.isArray(resolved) ? resolved[0] : resolved
		return !!v && cls.includes(v)
	})
	return theme !== undefined ? themeEntry(themes, theme) : undefined
}
