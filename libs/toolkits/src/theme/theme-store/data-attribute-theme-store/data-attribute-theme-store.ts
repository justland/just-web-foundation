import type { Required } from 'type-plus'
import { getDataAttribute } from '../../../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../../../attributes/observe-data-attribute.ts'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { matchAttributeValueToTheme } from '../../_utils/match-attribute-value-to-theme.ts'
import { resolveThemeMapValue } from '../../_utils/resolve-theme-map-value.ts'
import { applyThemeToDataAttribute } from '../../data-attribute/apply-theme-to-data-attribute.ts'
import { retrieveThemeFromDataAttribute } from '../../data-attribute/retrieve-theme-from-data-attribute.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export type ParseAttributeValue = (raw: string | null) => string | undefined
export type StringifyAttributeValue = (value: string, existing: string | null) => string

const SEPARATOR_SPACE = ' '

/**
 * Creates a theme store that reads and writes via a data attribute.
 *
 * Supports space-separated attribute values: read uses the first value, write merges
 * the new value as the first token while preserving others. Use `parse` and `stringify`
 * to customize serialization (e.g. comma-separated).
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param options.attributeName - Data attribute name (e.g. `data-theme`)
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @param options.parse - Custom parser for raw attribute value (default: space-separated, first token)
 * @param options.stringify - Custom serializer when writing (default: merge as first token, dedupe)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: 'current', grayscale: 'grayscale' }
 * const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
 * store.read() // returns themeResult from data attribute
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		attributeName: `data-${string}`
		element?: Element | undefined
		parse?: ParseAttributeValue | undefined
		stringify?: StringifyAttributeValue | undefined
	}
) {
	const element = options.element ?? document?.documentElement
	const { attributeName, parse, stringify } = options
	const useUtilities = parse === undefined || stringify === undefined

	if (!element) return dummyThemeStore as Required<ThemeStore<Themes>>

	return {
		read() {
			if (useUtilities) {
				return retrieveThemeFromDataAttribute(themes, element, attributeName, {
					separator: SEPARATOR_SPACE
				})
			}
			const raw = getDataAttribute(attributeName, element)
			const firstValue = parse!(raw)
			const theme = matchAttributeValueToTheme(themes, firstValue ?? null)
			return theme !== undefined ? themeEntry(themes, theme) : undefined
		},
		write(entry) {
			if (useUtilities) {
				applyThemeToDataAttribute(themes, element, attributeName, entry, {
					separator: SEPARATOR_SPACE
				})
				return
			}
			if (entry === undefined) {
				element.removeAttribute(attributeName)
				return
			}
			const resolved = resolveThemeMapValue(entry.value)
			const attributeValue = Array.isArray(resolved) ? resolved[0] : resolved
			if (attributeValue !== undefined && attributeValue !== '') {
				const existing = element.getAttribute(attributeName)
				element.setAttribute(attributeName, stringify!(attributeValue, existing))
			} else {
				element.removeAttribute(attributeName)
			}
		},
		subscribe(handler) {
			const observer = observeDataAttributes<string, `data-${string}`>(
				{
					[attributeName]: (value) => {
						if (useUtilities) {
							const entry = retrieveThemeFromDataAttribute(themes, element, attributeName, {
								separator: SEPARATOR_SPACE
							})
							handler(entry)
						} else {
							const firstValue = value ? parse!(value) : undefined
							const theme = firstValue ? matchAttributeValueToTheme(themes, firstValue) : undefined
							handler(theme ? themeEntry(themes, theme) : undefined)
						}
					}
				},
				element
			)
			return () => observer.disconnect()
		}
	} satisfies ThemeStore<Themes>
}
