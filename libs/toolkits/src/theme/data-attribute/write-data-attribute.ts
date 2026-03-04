import { getDataAttribute } from '../../attributes/get-data-attribute.ts'
import type { StringifyStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { SEPARATOR_SPACE } from './_constant.ts'
import { stringifyDataAttribute } from './stringify-data-attribute.ts'

/**
 * Writes a theme entry to a data attribute on an element.
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param attributeName - Data attribute name (e.g. `data-theme`)
 * @param entry - Theme entry to write, or null/undefined to remove the theme
 * @param options.element - Element to write to (accepts null e.g. from refs). Defaults to document.documentElement.
 * @param options.stringify - Custom serializer (default: stringifyDataAttribute with space separator)
 */
export function writeDataAttribute<Themes extends ThemeMap>(
	themes: Themes,
	attributeName: `data-${string}`,
	entry: ThemeEntry<Themes> | null | undefined,
	options?:
		| { element?: Element | null | undefined; stringify?: StringifyStoredTheme<Themes> | undefined }
		| undefined
): void {
	const element = options?.element ?? document?.documentElement
	if (!element) return
	const stringify =
		options?.stringify ??
		((t, x, e) => stringifyDataAttribute(t, x, e, { separator: SEPARATOR_SPACE }))
	if (entry == null) {
		element.removeAttribute(attributeName)
		return
	}
	const existing = getDataAttribute(attributeName, element) ?? undefined
	const result = stringify(themes, existing, entry)
	if (result === '') {
		element.removeAttribute(attributeName)
	} else {
		element.setAttribute(attributeName, result)
	}
}
