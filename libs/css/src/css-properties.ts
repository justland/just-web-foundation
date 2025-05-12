import type { Properties } from 'csstype'

/**
 * Extends CSS properties to include custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 */
export interface CSSProperties extends Properties<string | number> {
	[k: `--${string}`]: string
}
