/**
 * Converts rem values to pixel units.
 *
 * @param rem - The rem value to convert. Can be a number or string (e.g. '1rem' or '1')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate pixels from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value as a string with 'px' units
 *
 * @example
 * ```ts
 * rem2px(1) // '16.0000'
 * rem2px('2rem') // '32.0000'
 * rem2px(1, { base: 20 }) // '20.0000'
 * rem2px(0.8125, { precision: 2 }) // '13.00'
 * ```
 */
export function rem2px(
	rem: number | string,
	options?: { base?: number | undefined; precision?: number | undefined },
): number {
	const { base = 16, precision = 4 } = options ?? {}

	if (typeof rem === 'string') {
		rem = rem.replace(/rem$/, '')
		rem = Number.parseFloat(rem)
	}

	return Number((rem * base).toFixed(precision))
}
