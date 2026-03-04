import { matchAttributeValueToTheme } from '../_utils/match-attribute-value-to-theme.ts'
import { themeEntry } from '../theme-entry.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { SEPARATOR_SPACE } from './_constant.ts'

/**
 * Parses a data attribute value string into a ThemeEntry.
 *
 * Pure function: no DOM access. Uses first token when separator is defined.
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param value - Raw attribute value string (e.g. from getAttribute; accepts null)
 * @param options.separator - When defined, split by separator and use first token (default: space)
 * @returns ThemeEntry if a match is found, otherwise undefined
 */
export function parseDataAttribute<Themes extends ThemeMap>(
	themes: Themes,
	value: string | null | undefined,
	options?: { separator?: string | undefined } | undefined
): ThemeEntry<Themes> | undefined {
	const separator = options?.separator ?? SEPARATOR_SPACE
	const theme = matchAttributeValueToTheme(themes, value ?? null, { separator })
	return theme !== undefined ? themeEntry(themes, theme) : undefined
}
