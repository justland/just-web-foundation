/**
 * Converts pixel values to rem units.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate rem units from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value as a string with 'rem' units
 *
 * @example
 * ```ts
 * px2rem(16) // '1.0000'
 * px2rem('32px') // '2.0000'
 * px2rem(20, { base: 20 }) // '1.0000'
 * px2rem(13, { precision: 2 }) // '0.81'
 * ```
 */
export function px2rem(px: number | string, options?: { base?: number | undefined; precision?: number | undefined }) {
	const { base = 16, precision = 4 } = options ?? {}

	if (typeof px === 'string') {
		px = px.replace(/px$/, '')
		px = Number.parseFloat(px)
	}

	return (px / base).toFixed(precision)
}
