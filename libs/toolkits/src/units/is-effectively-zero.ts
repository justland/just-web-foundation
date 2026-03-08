import { parseCssNumber } from './parse-css-number.ts'

/**
 * Determines if a CSS value is effectively 0 regardless of unit.
 *
 * @param value - The CSS value to check. Can be a number or string (e.g. '0px', '0rem', '0%'). Pass-through for null/undefined.
 * @param options - Optional configuration
 * @param options.epsilon - Floating-point tolerance. Default 1e-10. Use 0 for strict equality.
 * @returns true if the value is effectively zero, false otherwise, or null/undefined when input is null/undefined
 *
 * @example
 * ```ts
 * isEffectivelyZero(0)           // true
 * isEffectivelyZero('0px')       // true
 * isEffectivelyZero('0rem')      // true
 * isEffectivelyZero('0%')        // true
 * isEffectivelyZero('1px')       // false
 * isEffectivelyZero(0.00000000001)  // true (within default epsilon)
 * isEffectivelyZero(0.0001, { epsilon: 0.001 })  // true
 * isEffectivelyZero(null)        // null
 * isEffectivelyZero(undefined)   // undefined
 * ```
 */
export function isEffectivelyZero(
	value: null,
	options?: { epsilon?: number | undefined } | undefined
): null
export function isEffectivelyZero(
	value: undefined,
	options?: { epsilon?: number | undefined } | undefined
): undefined
export function isEffectivelyZero(
	value: number | string,
	options?: { epsilon?: number | undefined } | undefined
): boolean
export function isEffectivelyZero(
	value: number | string | null | undefined,
	options?: { epsilon?: number | undefined } | undefined
): boolean | null | undefined {
	const parsed = parseCssNumber(value)
	if (parsed === null || parsed === undefined) return parsed
	if (!Number.isFinite(parsed)) {
		return false
	}
	const epsilon = options?.epsilon ?? 1e-10
	return Math.abs(parsed) <= epsilon
}
