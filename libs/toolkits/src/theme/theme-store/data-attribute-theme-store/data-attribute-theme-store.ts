import type { Required } from 'type-plus'
import { getDataAttribute } from '../../../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../../../attributes/observe-data-attribute.ts'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { resolveThemeMapValue } from '../../_utils/resolve-theme-map-value.ts'
import { resolveThemeFromDataAttribute } from '../../data-attribute/resolve-theme-from-data-attribute.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export type ParseAttributeValue = (raw: string | null) => string | undefined
export type StringifyAttributeValue = (value: string, existing: string | null) => string

function defaultParseAttributeValue(raw: string | null): string | undefined {
	if (raw === null || raw === '') return undefined
	const first = raw.trim().split(/\s+/)[0]
	return first === '' ? undefined : first
}

function defaultStringifyAttributeValue(value: string, existing: string | null): string {
	if (!existing?.trim()) return value
	const tokens = existing
		.trim()
		.split(/\s+/)
		.filter((t) => t !== value)
	return [value, ...tokens].join(' ')
}

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
	const { attributeName } = options
	const parse = options.parse ?? defaultParseAttributeValue
	const stringify = options.stringify ?? defaultStringifyAttributeValue

	if (!element) return dummyThemeStore as Required<ThemeStore<Themes>>

	return {
		read() {
			const raw = getDataAttribute(attributeName, element)
			const firstValue = parse(raw)
			const theme = resolveThemeFromDataAttribute(themes, firstValue ?? null)
			if (theme === undefined) return undefined
			return themeEntry(themes, theme)
		},
		write(entry) {
			if (entry === undefined) {
				element.removeAttribute(attributeName)
				return
			}
			const resolved = resolveThemeMapValue(entry.value)
			const attributeValue = Array.isArray(resolved) ? resolved[0] : resolved
			if (attributeValue !== undefined && attributeValue !== '') {
				const existing = element.getAttribute(attributeName)
				element.setAttribute(attributeName, stringify(attributeValue, existing))
			} else {
				element.removeAttribute(attributeName)
			}
		},
		subscribe(handler) {
			const observer = observeDataAttributes<string, `data-${string}`>(
				{
					[attributeName]: (value) => {
						const firstValue = value ? parse(value) : undefined
						const theme = firstValue ? resolveThemeFromDataAttribute(themes, firstValue) : undefined
						handler(theme ? themeEntry(themes, theme) : undefined)
					}
				},
				element
			)
			return () => observer.disconnect()
		}
	} satisfies ThemeStore<Themes>
}
