import { SEPARATOR_SPACE } from '../../data-attribute/_constant.ts'
import { parseDataAttribute } from '../../data-attribute/parse-data-attribute.ts'
import { readDataAttribute } from '../../data-attribute/read-data-attribute.ts'
import { stringifyDataAttribute } from '../../data-attribute/stringify-data-attribute.ts'
import { subscribeDataAttribute } from '../../data-attribute/subscribe-data-attribute.ts'
import { writeDataAttribute } from '../../data-attribute/write-data-attribute.ts'
import type { ParseStoredTheme, StringifyStoredTheme } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store that reads and writes via a data attribute.
 *
 * read: parse(themes, getDataAttribute(element, attribute)) → ThemeEntry
 * write: setAttribute(attribute, stringify(themes, getDataAttribute(element, attribute), entry))
 *
 * Supports space-separated attribute values by default. Use `parse` and `stringify` to customize
 * (e.g. comma-separated via curried parseDataAttribute/stringifyDataAttribute).
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param options.attributeName - Data attribute name (e.g. `data-theme`)
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @param options.parse - Custom parser (default: parseDataAttribute with space separator)
 * @param options.stringify - Custom serializer (default: stringifyDataAttribute with space separator)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: 'current', grayscale: 'grayscale' }
 * const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
 * store.read() // returns ThemeEntry from data attribute
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((entry) => {})
 * ```
 *
 * @example
 * ```ts
 * // Comma-separated
 * const store = dataAttributeThemeStore(themes, {
 *   attributeName: 'data-theme',
 *   parse: (t, v) => parseDataAttribute(t, v, { separator: ',' }),
 *   stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
 * })
 * ```
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		attributeName: `data-${string}`
		element?: Element | undefined
		parse?: ParseStoredTheme<Themes> | undefined
		stringify?: StringifyStoredTheme<Themes> | undefined
	}
) {
	const element = options.element ?? document?.documentElement
	const {
		attributeName,
		parse = (t, v) => parseDataAttribute(t, v, { separator: SEPARATOR_SPACE }),
		stringify = (t, x, e) => stringifyDataAttribute(t, x, e, { separator: SEPARATOR_SPACE })
	} = options

	return {
		read() {
			return readDataAttribute(themes, attributeName, { element, parse })
		},
		write(entry) {
			writeDataAttribute(themes, attributeName, entry, { element, stringify })
		},
		subscribe(handler) {
			return subscribeDataAttribute(themes, attributeName, handler, { element, parse })
		}
	} satisfies ThemeStore<Themes>
}
