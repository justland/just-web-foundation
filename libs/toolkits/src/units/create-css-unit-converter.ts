import { convertCssUnit } from './convert-css-unit.ts'
import type { CssLengthUnit, CssUnitConverterContext } from './css-unit-converter.types.ts'

/**
 * Creates a pre-configured CSS unit converter with fixed context.
 *
 * @param context - Root font size, viewport, line height, etc. Omitted values use browser auto-detect when available.
 * @returns A converter function that accepts value and toUnit (and optional fromUnit override).
 *
 * @example
 * ```ts
 * const convert = createCssUnitConverter({
 *   rootFontSize: 16,
 *   viewportWidth: 375,
 *   viewportHeight: 812,
 * })
 * convert('1rem', 'px')   // 16
 * convert('10vw', 'px')   // 37.5
 * convert(16, 'rem', { fromUnit: 'px' })  // 1
 * ```
 */
export function createCssUnitConverter(context?: CssUnitConverterContext) {
	function convert(
		value: null,
		toUnit: CssLengthUnit,
		options?: { fromUnit?: CssLengthUnit | undefined } | undefined
	): null
	function convert(
		value: undefined,
		toUnit: CssLengthUnit,
		options?: { fromUnit?: CssLengthUnit | undefined } | undefined
	): undefined
	function convert(
		value: number | string,
		toUnit: CssLengthUnit,
		options?: { fromUnit?: CssLengthUnit | undefined } | undefined
	): number
	function convert(
		value: number | string | null | undefined,
		toUnit: CssLengthUnit,
		options?: { fromUnit?: CssLengthUnit | undefined } | undefined
	): number | null | undefined {
		return convertCssUnit(value, toUnit, { ...context, ...options })
	}
	return convert
}
