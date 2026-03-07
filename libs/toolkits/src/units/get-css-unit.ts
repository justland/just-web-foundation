import { parseCssValue } from './parse-css-value.ts'

/**
 * Extracts the unit from a CSS value string.
 * Thin wrapper around parseCssValue.
 *
 * @param value - The CSS value to parse (e.g. '16px', '1.5rem', '100%'). Pass-through for null/undefined.
 * @returns The unit string, undefined for numbers or unitless strings, or null/undefined when input is null/undefined
 *
 * @example
 * ```ts
 * getCssUnit('16px')   // 'px'
 * getCssUnit('1rem')   // 'rem'
 * getCssUnit('100%')   // '%'
 * getCssUnit('0')      // undefined
 * getCssUnit('16')     // undefined
 * getCssUnit(null)     // null
 * getCssUnit(undefined) // undefined
 * ```
 */
export function getCssUnit(value: number | string | null | undefined): string | null | undefined {
	if (value === null || value === undefined) return value
	return parseCssValue(value)[1]
}
