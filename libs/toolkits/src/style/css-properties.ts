import type { Properties } from 'csstype'

declare module 'csstype' {
	interface Properties<TLength = (string & {}) | 0, TTime = string & {}> extends CustomProperties {}
}

/** Custom CSS properties (variables) with `--` prefix. */
interface CustomProperties {
	[k: `--${string}`]: string
}

/**
 * Widens CSS properties to support custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 *
 * Note that `React.CSSProperties` (using `csstype`) is augmented so you can use it directly without this type.
 */
export interface CSSProperties<TLength = string | number, TTime = string & {}>
	extends Properties<TLength, TTime>,
		CustomProperties {}
