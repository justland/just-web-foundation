import { getDataAttribute } from '../../attributes/get-data-attribute.ts'
import type { ParseStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { SEPARATOR_SPACE } from './_constant.ts'
import { parseDataAttribute } from './parse-data-attribute.ts'

/**
 * Reads a theme entry from a data attribute on an element.
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param attributeName - Data attribute name (e.g. `data-theme`)
 * @param options.element - Element to read from (defaults to document.documentElement)
 * @param options.parse - Custom parser (default: parseDataAttribute with space separator)
 * @returns ThemeEntry if found, undefined otherwise. Returns undefined when element is not available (e.g. SSR).
 */
export function readDataAttribute<Themes extends ThemeMap>(
	themes: Themes,
	attributeName: `data-${string}`,
	options?:
		| { element?: Element | undefined; parse?: ParseStoredTheme<Themes> | undefined }
		| undefined
): ThemeEntry<Themes> | undefined {
	const element = options?.element ?? document?.documentElement
	if (!element) return undefined
	const parse =
		options?.parse ?? ((t, v) => parseDataAttribute(t, v, { separator: SEPARATOR_SPACE }))
	const raw = getDataAttribute(attributeName, element) ?? undefined
	return parse(themes, raw)
}
