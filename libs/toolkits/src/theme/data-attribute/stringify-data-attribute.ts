import { resolveThemeMapValue } from '../_utils/resolve-theme-map-value.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

const SEPARATOR_SPACE = ' '

/**
 * Stringifies a ThemeEntry for a data attribute value.
 *
 * Pure function: no DOM access. Removes all theme values from existing, then adds entry's value(s).
 * Aligns with applyThemeToClassName logic.
 *
 * @param themes - Record mapping theme keys to attribute values (used to identify theme tokens)
 * @param existing - Current attribute value string
 * @param entry - Theme entry to stringify, or undefined to clear theme (keeps non-theme tokens)
 * @param options.separator - Token separator (default: space)
 * @returns Attribute value string
 */
export function stringifyDataAttribute<Themes extends ThemeMap>(
	themes: Themes,
	existing: string | undefined,
	entry: ThemeEntry<Themes> | undefined,
	options?: { separator?: string | undefined } | undefined
): string {
	const separator = options?.separator ?? SEPARATOR_SPACE
	const allThemeValues = Object.values(themes).flatMap((v) => {
		const resolved = resolveThemeMapValue(v)
		return Array.isArray(resolved) ? [...resolved] : [resolved]
	})
	const existingTokens = existing?.trim() ? existing.trim().split(separator) : []
	const withoutThemeValues = existingTokens.filter((t) => !allThemeValues.includes(t.trim()))
	const newTokens =
		entry !== undefined
			? (() => {
					const resolved = resolveThemeMapValue(entry.value)
					return Array.isArray(resolved) ? [resolved[0]] : [resolved]
				})()
			: []
	return [...withoutThemeValues, ...newTokens].filter(Boolean).join(separator)
}
