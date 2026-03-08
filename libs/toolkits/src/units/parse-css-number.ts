import { parseCssValue } from './parse-css-value.ts'

/**
 * Extracts the numeric part from any CSS length/percentage value.
 * Thin wrapper around parseCssValue.
 *
 * @param value - The CSS value to parse. Can be a number or string (e.g. '16px', '1.5rem', '100%')
 * @returns The numeric value, or NaN for invalid input. Passes through null and undefined.
 *
 * @example
 * ```ts
 * parseCssNumber('16px')   // 16
 * parseCssNumber('1.5rem') // 1.5
 * parseCssNumber('100%')   // 100
 * parseCssNumber('0lh')    // 0
 * parseCssNumber(16)       // 16
 * parseCssNumber('abc')    // NaN
 * parseCssNumber(null)     // null
 * parseCssNumber(undefined) // undefined
 * ```
 */
export function parseCssNumber(value: null): null
export function parseCssNumber(value: undefined): undefined
export function parseCssNumber(value: number | string): number
export function parseCssNumber(value: number | string | null | undefined): number | null | undefined
export function parseCssNumber(
	value: number | string | null | undefined
): number | null | undefined {
	return parseCssValue(value)[0]
}
