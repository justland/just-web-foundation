/**
 * Supported CSS length units for conversion.
 */
export type CssLengthUnit =
	| 'px'
	| 'pt'
	| 'pc'
	| 'in'
	| 'cm'
	| 'mm'
	| 'rem'
	| 'em'
	| 'vw'
	| 'vh'
	| 'vmin'
	| 'vmax'
	| 'lh'
	| 'rlh'
	| 'ch'
	| '%'

/**
 * Options for convertCssUnit.
 */
export interface ConvertCssUnitOptions {
	/** Override when value is number or unitless string. Default: 'px'. */
	fromUnit?: CssLengthUnit | undefined
	/** Root font size in px for rem. Auto: getRemToPxScale() in browser. Default: 16. */
	rootFontSize?: number | undefined
	/** Element font size in px for em. Default: 16. */
	elementFontSize?: number | undefined
	/** Viewport width in px for vw, vmin, vmax. Auto: window.innerWidth in browser. */
	viewportWidth?: number | undefined
	/** Viewport height in px for vh, vmin, vmax. Auto: window.innerHeight in browser. */
	viewportHeight?: number | undefined
	/** Line height in px for lh, rlh. */
	lineHeight?: number | undefined
	/** Width of "0" character in px for ch. Optional; can default to ~0.5em. */
	chWidth?: number | undefined
	/** Value that 100% equals (for % conversions). */
	percentReference?: number | undefined
	/** Decimal places for output. Default: 4. */
	precision?: number | undefined
}

/**
 * Context for createCssUnitConverter (pre-configured values).
 */
export type CssUnitConverterContext = Omit<ConvertCssUnitOptions, 'fromUnit'>
