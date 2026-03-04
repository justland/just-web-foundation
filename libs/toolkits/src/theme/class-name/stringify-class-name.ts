import { resolveThemeMapValue } from '../_utils/resolve-theme-map-value.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Stringifies a ThemeEntry for a class attribute value.
 *
 * Pure function: no DOM access. Removes all theme classes from existing, then
 * adds entry's class(es). Applies all classes from entry when value is an array
 * (unlike stringifyDataAttribute which uses first only).
 *
 * @param themes - Record mapping theme keys to class names (used to identify theme tokens)
 * @param existing - Current class attribute value string
 * @param entry - Theme entry to stringify, or undefined to clear theme (keeps non-theme classes)
 * @returns Class attribute value string
 */
export function stringifyClassName<Themes extends ThemeMap>(
	themes: Themes,
	existing: string | undefined,
	entry: ThemeEntry<Themes> | undefined
): string {
	const allThemeClasses = Object.values(themes).flatMap((v) => {
		const resolved = resolveThemeMapValue(v)
		return Array.isArray(resolved) ? [...resolved] : [resolved]
	})
	const existingClasses = existing?.trim() ? existing.trim().split(/\s+/) : []
	const withoutThemes = existingClasses.filter((c) => !allThemeClasses.includes(c))
	const activeClasses =
		entry !== undefined
			? (() => {
					const resolved = resolveThemeMapValue(entry.value)
					return Array.isArray(resolved) ? [...resolved] : [resolved]
				})()
			: []
	return [...withoutThemes, ...activeClasses].filter(Boolean).join(' ')
}
