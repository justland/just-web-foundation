import type { CSSProperties } from '../css/properties/css-properties.ts'

/**
 * Converts React-style CSS properties to DOM style properties.
 * This function handles both standard CSS properties and custom properties,
 * ensuring proper formatting for DOM style application.
 *
 * @param style - React-style CSS properties object
 * @returns CSSStyleDeclaration compatible object for DOM style application
 *
 * @example
 * ```ts
 * const domStyle = toDOMStyle({
 *   backgroundColor: 'red',
 *   '--custom-color': '#ff0000'
 * })
 * element.style = domStyle
 * ```
 */
export function toDOMStyle(
	style: CSSProperties | undefined,
): Partial<CSSStyleDeclaration> | undefined {
	if (style === undefined) return undefined

	const result = {} as any

	for (const [key, value] of Object.entries(style)) {
		result[
			key.startsWith('--') ? key : key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
		] = value
	}

	return result
}
