/**
 * Reads the current value of a user-preference media feature.
 *
 * Queries `(<feature>: <value>)` for each value in order and returns the first one that matches.
 *
 * @param feature - The media feature name, e.g. `'prefers-contrast'`
 * @param values - The valid values of the feature, in match order
 * @param fallback - Returned when `matchMedia` is unavailable (e.g. SSR) or no value matches
 */
export function getMediaFeatureValue<V extends string>(
	feature: string,
	values: readonly V[],
	fallback: V
): V {
	if (typeof matchMedia === 'undefined') return fallback
	return values.find((value) => matchMedia(`(${feature}: ${value})`).matches) ?? fallback
}
