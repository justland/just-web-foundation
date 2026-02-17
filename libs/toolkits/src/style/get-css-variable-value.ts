import type { CreateTuple } from 'type-plus'

/**
 * Retrieves CSS custom property values from the specified element.
 *
 * @param element - The HTML element to get property values from
 * @param props - CSS custom property names to retrieve, must be in the format `--property-name`
 * @returns Array of property values corresponding to the requested custom properties
 */
export function getCSSVariableValue<Props extends Array<`--${string}`>>(
	element: HTMLElement,
	...props: Props
): CreateTuple<Props['length'], string>
/**
 * Retrieves CSS custom property values from `document.body`.
 *
 * @param props - CSS custom property names to retrieve, must be in the format `--property-name`
 * @returns Array of property values corresponding to the requested custom properties
 */
export function getCSSVariableValue<Props extends Array<`--${string}`>>(
	...props: Props
): CreateTuple<Props['length'], string>
export function getCSSVariableValue<Props extends Array<`--${string}`>>(
	element: unknown,
	...props: Props
) {
	if (typeof element === 'string') {
		return getCSSVariableValue(globalThis.document.body, element as `--${string}`, ...props)
	}
	const style = globalThis.getComputedStyle(element as HTMLElement)
	return props.map((v) => style.getPropertyValue(v)) as any
}
