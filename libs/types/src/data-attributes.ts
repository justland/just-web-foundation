/**
 * Type definition for generic data attributes that can be applied to elements.
 * Contains pre-defined attributes like `data-metrics` and `data-testid`,
 * and allows for additional `data-*` attributes with any value type.
 */
export type DataAttributeProps = {
	'data-metrics'?: string | undefined
	'data-testid'?: string | undefined
	[k: `data-${string}`]: unknown
}
