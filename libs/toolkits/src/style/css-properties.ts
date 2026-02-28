import type { Properties } from 'csstype'

/**
 * Extends CSS properties to include custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 */
export interface CSSProperties<TLength = 0 | (string & {}), TTime = string & {}>
	extends Properties<TLength, TTime> {
	[k: `--${string}`]: string
}
