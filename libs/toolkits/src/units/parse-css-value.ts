/**
 * Parses a CSS value in one pass and returns both the numeric part and the unit.
 * Powers parseCssNumber, getCssUnit, and isEffectivelyZero.
 *
 * @param value - The CSS value to parse. Can be a number or string (e.g. '16px', '1.5rem', '100%')
 * @returns A tuple of [number, unit | undefined]. Unit is undefined for numbers or unitless strings.
 *
 * @example
 * ```ts
 * parseCssValue('16px')    // [16, 'px']
 * parseCssValue('1.5rem')  // [1.5, 'rem']
 * parseCssValue('100%')    // [100, '%']
 * parseCssValue('0')       // [0, undefined]
 * parseCssValue(16)        // [16, undefined]
 * parseCssValue('abc')     // [NaN, undefined]
 * ```
 */
export function parseCssValue(value: number | string | undefined): [number, string | undefined] {
	if (value === undefined || value === null) {
		return [Number.NaN, undefined]
	}
	if (typeof value === 'number') {
		return [value, undefined]
	}
	const s = String(value).trim()
	const match = s.match(/^(-?\d*\.?\d+)\s*(.*)$/)
	if (!match) {
		return [Number.NaN, undefined]
	}
	const num = Number.parseFloat(match[1])
	const unit = match[2].trim()
	return [num, unit === '' ? undefined : unit]
}
