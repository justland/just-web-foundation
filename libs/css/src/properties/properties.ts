import type { Properties as CSSTypeProperties } from 'csstype'

/** Custom CSS properties (variables) with `--` prefix. */
type CustomProperties = { [k: `--${string}`]: string }

/**
 * Extends CSS properties to include custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 */
export type Properties<TLength = 0 | (string & {}), TTime = string & {}> =
	| CSSTypeProperties<TLength, TTime>
	| (CSSTypeProperties<TLength, TTime> & CustomProperties)

/**
 * Defines CSS properties including custom properties.
 * This function is used to properly type CSS properties when defining styles,
 * especially when using CSS custom properties (variables).
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
export function defineProperties<TLength = 0 | (string & {}), TTime = string & {}>(style: Properties<TLength, TTime>) {
	return style as Properties
}
