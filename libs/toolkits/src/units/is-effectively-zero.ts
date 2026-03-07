import { parseCssNumber } from './parse-css-number.ts'

/**
 * Determines if a CSS value is effectively 0 regardless of unit.
 *
 * @param value - The CSS value to check. Can be a number or string (e.g. '0px', '0rem', '0%')
 * @param options - Optional configuration
 * @param options.epsilon - Floating-point tolerance. Default 1e-10. Use 0 for strict equality.
 * @returns true if the value is effectively zero
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
 * ```
 */
export function isEffectivelyZero(
	value: number | string | undefined,
	options?: { epsilon?: number }
): boolean {
	const epsilon = options?.epsilon ?? 1e-10
	const parsed = parseCssNumber(value)
	if (!Number.isFinite(parsed)) {
		return false
	}
	return Math.abs(parsed) <= epsilon
}
