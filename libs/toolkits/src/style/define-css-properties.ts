import type { CSSProperties } from './css-properties.ts'

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
export function defineCSSProperties<TLength = 0 | (string & {}), TTime = string & {}>(
	style: CSSProperties<TLength, TTime>
) {
	return style as CSSProperties
}
