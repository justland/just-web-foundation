import type { Properties } from 'csstype'

/** Custom CSS properties (variables) with `--` prefix. */
type CustomProperties = { [k: `--${string}`]: string }

/**
 * Widens CSS properties to support custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 * Defined as a union so plain Properties (e.g. from React) are assignable.
 */
export interface CSSProperties<TLength = string | number, TTime = string & {}>
	extends Properties<TLength, TTime>,
		CustomProperties {}
