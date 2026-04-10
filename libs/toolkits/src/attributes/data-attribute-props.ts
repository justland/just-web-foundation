/**
 * Type definition for generic data attributes that can be applied to elements.
 * Contains pre-defined attributes like `data-metrics` and `data-testid`,
 * and allows for additional `data-*` attributes with any value type.
 */
export interface DataAttributeProps {
	/**
	 * The metrics for the element.
	 */
	'data-metrics'?: string | undefined
	/**
	 * The test ID for the element.
	 */
	'data-testid'?: string | undefined
	[k: `data-${string}`]: unknown
}
