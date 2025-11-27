/**
 * Type definition for generic data attributes that can be applied to elements.
 * Contains pre-defined attributes like `data-metrics` and `data-testid`,
 * and allows for additional `data-*` attributes with any value type.
 */
export type DataAttributeProps = DataTestIdProps &
	DataMetricsProps & {
		[k: `data-${string}`]: unknown
	}

export type DataTestIdProps = {
	/**
	 * The test ID for the element.
	 */
	'data-testid'?: string | undefined
}

export type DataMetricsProps = {
	/**
	 * The metrics for the element.
	 */
	'data-metrics'?: string | undefined
}
