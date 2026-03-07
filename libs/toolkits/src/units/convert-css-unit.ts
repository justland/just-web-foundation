import type { Required } from 'type-plus'
import type { ConvertCssUnitOptions, CssLengthUnit } from './css-unit-converter.types.ts'
import { getRemToPxScale } from './get-rem-to-px-scale.ts'
import { parseCssValue } from './parse-css-value.ts'

const PX_PER_IN = 96
const PT_PER_IN = 72
const PC_PER_IN = 6
const CM_PER_IN = 2.54
const MM_PER_IN = 25.4

const DEFAULT_ELEMENT_FONT_SIZE = 16
const DEFAULT_PRECISION = 4

const ABSOLUTE_UNITS: CssLengthUnit[] = ['px', 'pt', 'pc', 'in', 'cm', 'mm']
const LINE_UNITS: CssLengthUnit[] = ['lh', 'rlh']

/**
 * Converts a CSS length value from one unit to another.
 *
 * @param value - The value to convert. Can be a number or string (e.g. '16px', '1.5rem'). Pass-through for null/undefined.
 * @param toUnit - The target unit.
 * @param options - Conversion context. When omitted, uses browser auto-detect for rootFontSize and viewport when available.
 * @returns The converted numeric value, or null/undefined when input is null/undefined.
 * @throws When required context is missing (viewport, lineHeight, percentReference) or percentReference is 0 for % conversion.
 *
 * @example
 * ```ts
 * convertCssUnit('16px', 'rem')                    // 1
 * convertCssUnit('1rem', 'px')                      // 16
 * convertCssUnit('50%', 'px', { percentReference: 200 })  // 100
 * convertCssUnit('10vw', 'px', { viewportWidth: 375 })    // 37.5
 * ```
 */
export function convertCssUnit(
	value: number | string | null | undefined,
	toUnit: CssLengthUnit,
	options?: ConvertCssUnitOptions | undefined
): number | null | undefined {
	const [num, parsedUnit] = parseCssValue(value)
	if (num === null || num === undefined) return num
	if (Number.isNaN(num)) {
		throw new Error(`Invalid CSS value: ${value}`)
	}

	const fromUnit: CssLengthUnit = options?.fromUnit ?? normalizeUnit(parsedUnit) ?? 'px'

	const resolved = resolveOptions(options)

	if (fromUnit === toUnit) {
		return Number(num.toFixed(resolved.precision))
	}

	let result: number

	if (fromUnit === 'rem' && toUnit === 'em') {
		result = remToEmDirect(num, resolved)
	} else if (fromUnit === 'em' && toUnit === 'rem') {
		result = emToRemDirect(num, resolved)
	} else {
		const px = valueToPx(num, fromUnit, resolved)
		result = pxToValue(px, toUnit, resolved)
	}

	return Number(result.toFixed(resolved.precision))
}

function normalizeUnit(unit: string | undefined): CssLengthUnit | undefined {
	if (!unit) return undefined
	const u = unit.toLowerCase()
	if (
		u === 'px' ||
		u === 'pt' ||
		u === 'pc' ||
		u === 'in' ||
		u === 'cm' ||
		u === 'mm' ||
		u === 'rem' ||
		u === 'em' ||
		u === 'vw' ||
		u === 'vh' ||
		u === 'vmin' ||
		u === 'vmax' ||
		u === 'lh' ||
		u === 'rlh' ||
		u === 'ch' ||
		u === '%'
	) {
		return u as CssLengthUnit
	}
	return undefined
}

function resolveOptions(
	options?: ConvertCssUnitOptions | undefined
): Required<
	Pick<
		ConvertCssUnitOptions,
		| 'rootFontSize'
		| 'elementFontSize'
		| 'viewportWidth'
		| 'viewportHeight'
		| 'lineHeight'
		| 'chWidth'
		| 'percentReference'
		| 'precision'
	>
> {
	const rootFontSize = options?.rootFontSize ?? getRemToPxScale()
	const elementFontSize = options?.elementFontSize ?? DEFAULT_ELEMENT_FONT_SIZE
	const precision = options?.precision ?? DEFAULT_PRECISION

	let viewportWidth = options?.viewportWidth
	let viewportHeight = options?.viewportHeight
	if (typeof window !== 'undefined') {
		viewportWidth ??= window.innerWidth
		viewportHeight ??= window.innerHeight
	}

	const lineHeight = options?.lineHeight
	const chWidth = options?.chWidth ?? elementFontSize * 0.5
	const percentReference = options?.percentReference ?? 0

	return {
		rootFontSize,
		elementFontSize,
		viewportWidth: viewportWidth ?? 0,
		viewportHeight: viewportHeight ?? 0,
		lineHeight: lineHeight ?? 0,
		chWidth,
		percentReference,
		precision
	}
}

function remToEmDirect(value: number, resolved: ReturnType<typeof resolveOptions>): number {
	return value * (resolved.rootFontSize / resolved.elementFontSize)
}

function emToRemDirect(value: number, resolved: ReturnType<typeof resolveOptions>): number {
	return value * (resolved.elementFontSize / resolved.rootFontSize)
}

function valueToPx(
	value: number,
	fromUnit: CssLengthUnit,
	resolved: ReturnType<typeof resolveOptions>
): number {
	if (ABSOLUTE_UNITS.includes(fromUnit)) {
		return toPxFromAbsolute(value, fromUnit)
	}
	if (fromUnit === 'rem') {
		return value * (resolved.rootFontSize ?? 0)
	}
	if (fromUnit === 'em') {
		return value * (resolved.elementFontSize ?? 0)
	}
	if (fromUnit === 'vw') {
		if (resolved.viewportWidth === 0) {
			throw new Error('viewportWidth is required for vw conversion')
		}
		return (value / 100) * resolved.viewportWidth
	}
	if (fromUnit === 'vh') {
		if (resolved.viewportHeight === 0) {
			throw new Error('viewportHeight is required for vh conversion')
		}
		return (value / 100) * resolved.viewportHeight
	}
	if (fromUnit === 'vmin') {
		if (resolved.viewportWidth === 0 || resolved.viewportHeight === 0) {
			throw new Error('viewportWidth and viewportHeight are required for vmin conversion')
		}
		return (value / 100) * Math.min(resolved.viewportWidth, resolved.viewportHeight)
	}
	if (fromUnit === 'vmax') {
		if (resolved.viewportWidth === 0 || resolved.viewportHeight === 0) {
			throw new Error('viewportWidth and viewportHeight are required for vmax conversion')
		}
		return (value / 100) * Math.max(resolved.viewportWidth, resolved.viewportHeight)
	}
	if (LINE_UNITS.includes(fromUnit)) {
		if (resolved.lineHeight === 0) {
			throw new Error('lineHeight is required for lh/rlh conversion')
		}
		return value * resolved.lineHeight
	}
	if (fromUnit === 'ch') {
		return value * resolved.chWidth
	}
	if (fromUnit === '%') {
		if (resolved.percentReference === 0) {
			throw new Error('percentReference is required for % conversion')
		}
		return (value / 100) * resolved.percentReference
	}
	throw new Error(`Unsupported unit: ${fromUnit}`)
}

function pxToValue(
	px: number,
	toUnit: CssLengthUnit,
	resolved: ReturnType<typeof resolveOptions>
): number {
	if (ABSOLUTE_UNITS.includes(toUnit)) {
		return fromPxToAbsolute(px, toUnit)
	}
	if (toUnit === 'rem') {
		return px / resolved.rootFontSize
	}
	if (toUnit === 'em') {
		return px / resolved.elementFontSize
	}
	if (toUnit === 'vw') {
		if (resolved.viewportWidth === 0) {
			throw new Error('viewportWidth is required for vw conversion')
		}
		return (px / resolved.viewportWidth) * 100
	}
	if (toUnit === 'vh') {
		if (resolved.viewportHeight === 0) {
			throw new Error('viewportHeight is required for vh conversion')
		}
		return (px / resolved.viewportHeight) * 100
	}
	if (toUnit === 'vmin') {
		if (resolved.viewportWidth === 0 || resolved.viewportHeight === 0) {
			throw new Error('viewportWidth and viewportHeight are required for vmin conversion')
		}
		return (px / Math.min(resolved.viewportWidth, resolved.viewportHeight)) * 100
	}
	if (toUnit === 'vmax') {
		if (resolved.viewportWidth === 0 || resolved.viewportHeight === 0) {
			throw new Error('viewportWidth and viewportHeight are required for vmax conversion')
		}
		return (px / Math.max(resolved.viewportWidth, resolved.viewportHeight)) * 100
	}
	if (LINE_UNITS.includes(toUnit)) {
		if (resolved.lineHeight === 0) {
			throw new Error('lineHeight is required for lh/rlh conversion')
		}
		return px / resolved.lineHeight
	}
	if (toUnit === 'ch') {
		return px / resolved.chWidth
	}
	if (toUnit === '%') {
		if (resolved.percentReference === 0) {
			throw new Error('percentReference is required and must be non-zero for conversion to %')
		}
		return (px / resolved.percentReference) * 100
	}
	throw new Error(`Unsupported unit: ${toUnit}`)
}

function toPxFromAbsolute(value: number, unit: CssLengthUnit): number {
	switch (unit) {
		case 'px':
			return value
		case 'pt':
			return (value * PX_PER_IN) / PT_PER_IN
		case 'pc':
			return (value * PX_PER_IN) / PC_PER_IN
		case 'in':
			return value * PX_PER_IN
		case 'cm':
			return (value * PX_PER_IN) / CM_PER_IN
		case 'mm':
			return (value * PX_PER_IN) / MM_PER_IN
		default:
			return value
	}
}

function fromPxToAbsolute(px: number, unit: CssLengthUnit): number {
	switch (unit) {
		case 'px':
			return px
		case 'pt':
			return (px * PT_PER_IN) / PX_PER_IN
		case 'pc':
			return (px * PC_PER_IN) / PX_PER_IN
		case 'in':
			return px / PX_PER_IN
		case 'cm':
			return (px * CM_PER_IN) / PX_PER_IN
		case 'mm':
			return (px * MM_PER_IN) / PX_PER_IN
		default:
			return px
	}
}
