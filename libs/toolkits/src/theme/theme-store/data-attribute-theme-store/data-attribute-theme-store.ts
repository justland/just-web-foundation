import type { Required } from 'type-plus'
import { getDataAttribute } from '../../../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../../../attributes/observe-data-attribute.ts'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseDataAttribute } from '../../data-attribute/parse-data-attribute.ts'
import { stringifyDataAttribute } from '../../data-attribute/stringify-data-attribute.ts'
import type { ParseStoredTheme, StringifyStoredTheme } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

const SEPARATOR_SPACE = ' '

/**
 * Creates a theme store that reads and writes via a data attribute.
 *
 * read: parse(themes, getDataAttribute(element, attribute)) → ThemeEntry
 * write: setAttribute(attribute, stringify(themes, entry, getDataAttribute(element, attribute)))
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
 *   stringify: (t, e, x) => stringifyDataAttribute(t, e, x, { separator: ',' })
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
		stringify = (t, e, x) => stringifyDataAttribute(t, e, x, { separator: SEPARATOR_SPACE })
	} = options

	if (!element) return dummyThemeStore as Required<ThemeStore<Themes>>

	return {
		read() {
			const raw = getDataAttribute(attributeName, element) ?? undefined
			return parse(themes, raw)
		},
		write(entry) {
			if (entry === undefined) {
				element.removeAttribute(attributeName)
				return
			}
			const existing = getDataAttribute(attributeName, element) ?? undefined
			const result = stringify(themes, entry, existing)
			if (result === '') {
				element.removeAttribute(attributeName)
			} else {
				element.setAttribute(attributeName, result)
			}
		},
		subscribe(handler) {
			const observer = observeDataAttributes<string, `data-${string}`>(
				{
					[attributeName]: (value) => {
						const entry = parse(themes, value ?? undefined)
						handler(entry)
					}
				},
				element
			)
			return () => observer.disconnect()
		}
	} satisfies ThemeStore<Themes>
}
