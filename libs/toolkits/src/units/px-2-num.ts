/**
 * Converts pixel values to numbers.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @returns The numeric value
 *
 * @example
 * ```ts
 * px2num(16) // 16
 * px2num('32px') // 32
 * px2num('12.5px') // 12.5
 * px2num('0px') // 0
 * ```
 */
export function px2num(px: number | string | undefined): number {
	return typeof px === 'string' ? Number.parseFloat(px.replace(/px$/, '')) : Number(px)
}
