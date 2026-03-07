import { parseCssValue } from './parse-css-value.ts'

/**
 * Extracts the unit from a CSS value string.
 * Thin wrapper around parseCssValue.
 *
 * @param value - The CSS value string to parse (e.g. '16px', '1.5rem', '100%')
 * @returns The unit string, or undefined for numbers or unitless strings
 *
 * @example
 * ```ts
 * getCssUnit('16px')   // 'px'
 * getCssUnit('1rem')   // 'rem'
 * getCssUnit('100%')   // '%'
 * getCssUnit('0')      // undefined
 * getCssUnit('16')     // undefined
 * ```
 */
export function getCssUnit(value: string): string | undefined {
	return parseCssValue(value)[1]
}
