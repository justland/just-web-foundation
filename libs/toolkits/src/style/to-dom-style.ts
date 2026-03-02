import type { CSSProperties } from './css-properties.ts'

/**
 * Converts React-style CSS properties to DOM style properties.
 * This function handles both standard CSS properties and custom properties,
 * ensuring proper formatting for DOM style application.
 *
 * @param style - React-style CSS properties object
 * @returns DOM style properties object
 *
 * @example
 * ```ts
 * const domStyle = toDomStyle({
 *   backgroundColor: 'red',
 *   '--custom-color': '#ff0000'
 * })
 * if (domStyle && element.style) {
 *   for (const [key, value] of Object.entries(domStyle)) {
 *     element.style.setProperty(key, value)
 *   }
 * }
 * ```
 */
export function toDomStyle(style: CSSProperties | undefined) {
	if (style === undefined) return undefined

	const result: Record<string, string | null> = {}

	for (const [key, value] of Object.entries(style)) {
		result[
			key.startsWith('--') ? key : key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
		] = value
	}

	return result
}
