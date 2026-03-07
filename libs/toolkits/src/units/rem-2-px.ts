/**
 * Converts rem values to pixel units.
 *
 * @param rem - The rem value to convert. Can be a number or string (e.g. '1rem' or '1')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate pixels from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value, or null/undefined if input is null/undefined
 *
 * @example
 * ```ts
 * rem2px(1) // 16
 * rem2px('2rem') // 32
 * rem2px(1, { base: 20 }) // 20
 * rem2px(0.8125, { precision: 2 }) // 13
 * rem2px(null) // null
 * rem2px(undefined) // undefined
 * ```
 */
export function rem2px(
	rem: number | string | null | undefined,
	options?: { base?: number | undefined; precision?: number | undefined }
): number | null | undefined {
	if (rem === null || rem === undefined) return rem

	const { base = 16, precision = 4 } = options ?? {}
	if (typeof rem === 'string') {
		rem = rem.replace(/rem$/, '')
		rem = Number.parseFloat(rem)
	}
	return Number((rem * base).toFixed(precision))
}
