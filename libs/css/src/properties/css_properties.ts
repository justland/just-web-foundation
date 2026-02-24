import type { Properties as CSSTypeProperties } from 'csstype'

/** Custom CSS properties (variables) with `--` prefix. */
type CustomProperties = { [k: `--${string}`]: string }

/**
 * Widens CSS properties to support custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 * Defined as a union so plain Properties (e.g. from React) are assignable.
 */
export interface CSSProperties<TLength = string | number, TTime = string & {}>
	extends CSSTypeProperties<TLength, TTime>,
		CustomProperties {}

/**
 * Defines CSS properties including custom properties.
 * This function is used to properly type CSS properties when defining styles,
 * especially when using CSS custom properties (variables).
 *
 * @deprecated Use `defineProperties` instead.
 *
 * @param style - CSS properties object that can include both standard and custom properties
 * @returns The same style object with proper typing
 *
 * @example
 * ```ts
 * defineCSSProperties({
 *   color: 'red',
 *   '--custom-color': '#ff0000'
 * })
 * ```
 */
export function defineCSSProperties(style: CSSProperties) {
	return style as any
}
