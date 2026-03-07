/**
 * Converts pixel values to numbers.
 * Alias for {@link parseCssNumber}. Passes through null and undefined.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @returns The numeric value, or null/undefined when input is null/undefined
 *
 * @example
 * ```ts
 * px2num(16) // 16
 * px2num('32px') // 32
 * px2num('12.5px') // 12.5
 * px2num('0px') // 0
 * px2num(null) // null
 * px2num(undefined) // undefined
 * ```
 */
export { parseCssNumber as px2num } from './parse-css-number.ts'
