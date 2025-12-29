import type { Properties as CSSTypeProperties } from 'csstype'

/**
 * Extends CSS properties to include custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 *
 * @deprecated Use `Properties` instead.
 */
export interface CSSProperties extends CSSTypeProperties<string | number> {
	[k: `--${string}`]: string
}

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
