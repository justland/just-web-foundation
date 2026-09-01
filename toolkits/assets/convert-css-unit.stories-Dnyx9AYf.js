import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{t as l}from"./convert-css-unit-BUWO7oxQ.js";import{t as u}from"./src-BVeczmcL.js";var d;function f(){return(f=e((()=>{d=`import type { Required } from 'type-plus'
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
 * \`\`\`ts
 * convertCssUnit('16px', 'rem')                    // 1
 * convertCssUnit('1rem', 'px')                      // 16
 * convertCssUnit('50%', 'px', { percentReference: 200 })  // 100
 * convertCssUnit('10vw', 'px', { viewportWidth: 375 })    // 37.5
 * \`\`\`
 */
export function convertCssUnit(
	value: null,
	toUnit: CssLengthUnit,
	options?: ConvertCssUnitOptions | undefined
): null
export function convertCssUnit(
	value: undefined,
	toUnit: CssLengthUnit,
	options?: ConvertCssUnitOptions | undefined
): undefined
export function convertCssUnit(
	value: number | string,
	toUnit: CssLengthUnit,
	options?: ConvertCssUnitOptions | undefined
): number
export function convertCssUnit(
	value: number | string | null | undefined,
	toUnit: CssLengthUnit,
	options?: ConvertCssUnitOptions | undefined
): number | null | undefined
export function convertCssUnit(
	value: number | string | null | undefined,
	toUnit: CssLengthUnit,
	options?: ConvertCssUnitOptions | undefined
): number | null | undefined {
	const [num, parsedUnit] = parseCssValue(value)
	if (num === null || num === undefined) return num
	if (Number.isNaN(num)) {
		throw new Error(\`Invalid CSS value: \${value}\`)
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
	throw new Error(\`Unsupported unit: \${fromUnit}\`)
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
	throw new Error(\`Unsupported unit: \${toUnit}\`)
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
`})))()}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/convertCssUnit`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Converts a CSS length value from one unit to another. Supports px, rem, em, vw, vh, vmin, vmax, lh, rlh, ch, %, and absolute units. Uses browser auto-detect for rootFontSize and viewport when options omitted.`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Convert between common units. Auto-detects fromUnit from string.`}}),decorators:[a(),r({source:c`
                convertCssUnit('16px', 'rem')     // 1
                convertCssUnit('1rem', 'px')      // 16
                convertCssUnit('96px', 'in')     // 1
                convertCssUnit('50%', 'px', { percentReference: 200 })  // 100
            `})],render(){return(0,p.jsx)(i,{title:`Basic usage`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{value:`16px`,toUnit:`rem`,opts:void 0,expected:1},{value:`1rem`,toUnit:`px`,opts:void 0,expected:16},{value:`96px`,toUnit:`in`,opts:void 0,expected:1},{value:`50%`,toUnit:`px`,opts:{percentReference:200},expected:100}].map(({value:e,toUnit:t,opts:n,expected:r})=>`convertCssUnit('${e}', '${t}'${n?`, { percentReference: ${n.percentReference} }`:``}) → ${l(e,t,n)} (expected: ${r})`).join(`
`)})})},play:async()=>{await m(l(`16px`,`rem`)).toBe(1),await m(l(`1rem`,`px`)).toBe(16),await m(l(`96px`,`in`)).toBe(1),await m(l(`50%`,`px`,{percentReference:200})).toBe(100)}},_={tags:[`use-case`],parameters:n({description:{story:`Convert viewport units (vw, vh) with explicit viewport dimensions.`}}),decorators:[a(),r({source:c`
                convertCssUnit('10vw', 'px', { viewportWidth: 375 })   // 37.5
                convertCssUnit('10vh', 'px', { viewportHeight: 812 }) // 81.2
            `})],render(){let e=l(`10vw`,`px`,{viewportWidth:375}),t=l(`10vh`,`px`,{viewportHeight:812});return(0,p.jsx)(i,{title:`Viewport units`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`convertCssUnit('10vw', 'px', { viewportWidth: 375 }) → ${e} (expected: 37.5)
convertCssUnit('10vh', 'px', { viewportHeight: 812 }) → ${t} (expected: 81.2)`})})},play:async()=>{await m(l(`10vw`,`px`,{viewportWidth:375})).toBe(37.5),await m(l(`10vh`,`px`,{viewportHeight:812})).toBe(81.2)}},v={tags:[`use-case`],parameters:n({description:{story:`Direct rem↔em conversion (no px intermediate).`}}),decorators:[a(),r({source:c`
                convertCssUnit('1rem', 'em', { rootFontSize: 16, elementFontSize: 16 })  // 1
                convertCssUnit('1rem', 'em', { rootFontSize: 16, elementFontSize: 12 }) // 1.3333
            `})],render(){let e=l(`1rem`,`em`,{rootFontSize:16,elementFontSize:16}),t=l(`1rem`,`em`,{rootFontSize:16,elementFontSize:12});return(0,p.jsx)(i,{title:`rem↔em direct`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`root=16, element=16: 1rem → ${e}em
root=16, element=12: 1rem → ${t}em`})})},play:async()=>{await m(l(`1rem`,`em`,{rootFontSize:16,elementFontSize:16})).toBe(1),await m(l(`1rem`,`em`,{rootFontSize:16,elementFontSize:12})).toBe(1.3333)}},y={tags:[`use-case`],parameters:n({description:{story:`Number or unitless string: default fromUnit is px, or pass fromUnit explicitly.`}}),decorators:[a(),r({source:c`
                convertCssUnit(16, 'rem')                    // 1 (assumes px)
                convertCssUnit(16, 'rem', { fromUnit: 'px' })  // 1
                convertCssUnit(1, 'px', { fromUnit: 'rem' })   // 16
            `})],render(){let e=l(16,`rem`),t=l(16,`rem`,{fromUnit:`px`}),n=l(1,`px`,{fromUnit:`rem`});return(0,p.jsx)(i,{title:`Number with fromUnit`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`convertCssUnit(16, 'rem') → ${e}
convertCssUnit(16, 'rem', { fromUnit: 'px' }) → ${t}
convertCssUnit(1, 'px', { fromUnit: 'rem' }) → ${n}`})})},play:async()=>{await m(l(16,`rem`)).toBe(1),await m(l(16,`rem`,{fromUnit:`px`})).toBe(1),await m(l(1,`px`,{fromUnit:`rem`})).toBe(16)}},b={tags:[`unit`],parameters:n({description:{story:`null and undefined are passed through as-is.`}}),decorators:[a()],render(){let e=l(null,`px`),t=l(void 0,`px`);return(0,p.jsx)(i,{title:`Null/undefined pass-through`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`convertCssUnit(null, 'px') → ${e}
convertCssUnit(undefined, 'px') → ${t}`})})},play:async()=>{await m(l(null,`px`)).toBe(null),await m(l(void 0,`px`)).toBe(void 0)}},x={tags:[`use-case`],parameters:n({description:{story:`Throws when required context is missing. In browser, viewport auto-detects from window; lh and percentReference have no auto-detect.`}}),decorators:[a()],play:async()=>{await m(()=>l(`2lh`,`px`)).toThrow(`lineHeight is required`),await m(()=>l(`50%`,`px`)).toThrow(`percentReference is required`),await m(()=>l(100,`%`,{fromUnit:`px`,percentReference:0})).toThrow(`percentReference`)}},S={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Convert between common units. Auto-detects fromUnit from string.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                convertCssUnit('16px', 'rem')     // 1
                convertCssUnit('1rem', 'px')      // 16
                convertCssUnit('96px', 'in')     // 1
                convertCssUnit('50%', 'px', { percentReference: 200 })  // 100
            \`
  })],
  render() {
    const examples = [{
      value: '16px',
      toUnit: 'rem' as const,
      opts: undefined,
      expected: 1
    }, {
      value: '1rem',
      toUnit: 'px' as const,
      opts: undefined,
      expected: 16
    }, {
      value: '96px',
      toUnit: 'in' as const,
      opts: undefined,
      expected: 1
    }, {
      value: '50%',
      toUnit: 'px' as const,
      opts: {
        percentReference: 200
      },
      expected: 100
    }];
    return <StoryCard title="Basic usage" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          value,
          toUnit,
          opts,
          expected
        }) => \`convertCssUnit('\${value}', '\${toUnit}'\${opts ? \`, { percentReference: \${opts.percentReference} }\` : ''}) → \${convertCssUnit(value, toUnit, opts)} (expected: \${expected})\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(convertCssUnit('16px', 'rem')).toBe(1);
    await expect(convertCssUnit('1rem', 'px')).toBe(16);
    await expect(convertCssUnit('96px', 'in')).toBe(1);
    await expect(convertCssUnit('50%', 'px', {
      percentReference: 200
    })).toBe(100);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Convert viewport units (vw, vh) with explicit viewport dimensions.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                convertCssUnit('10vw', 'px', { viewportWidth: 375 })   // 37.5
                convertCssUnit('10vh', 'px', { viewportHeight: 812 }) // 81.2
            \`
  })],
  render() {
    const vw = convertCssUnit('10vw', 'px', {
      viewportWidth: 375
    });
    const vh = convertCssUnit('10vh', 'px', {
      viewportHeight: 812
    });
    return <StoryCard title="Viewport units" appearance="output">
                <pre className="text-sm">
                    {\`convertCssUnit('10vw', 'px', { viewportWidth: 375 }) → \${vw} (expected: 37.5)
convertCssUnit('10vh', 'px', { viewportHeight: 812 }) → \${vh} (expected: 81.2)\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(convertCssUnit('10vw', 'px', {
      viewportWidth: 375
    })).toBe(37.5);
    await expect(convertCssUnit('10vh', 'px', {
      viewportHeight: 812
    })).toBe(81.2);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Direct rem↔em conversion (no px intermediate).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                convertCssUnit('1rem', 'em', { rootFontSize: 16, elementFontSize: 16 })  // 1
                convertCssUnit('1rem', 'em', { rootFontSize: 16, elementFontSize: 12 }) // 1.3333
            \`
  })],
  render() {
    const r1 = convertCssUnit('1rem', 'em', {
      rootFontSize: 16,
      elementFontSize: 16
    });
    const r2 = convertCssUnit('1rem', 'em', {
      rootFontSize: 16,
      elementFontSize: 12
    });
    return <StoryCard title="rem↔em direct" appearance="output">
                <pre className="text-sm">
                    {\`root=16, element=16: 1rem → \${r1}em
root=16, element=12: 1rem → \${r2}em\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(convertCssUnit('1rem', 'em', {
      rootFontSize: 16,
      elementFontSize: 16
    })).toBe(1);
    await expect(convertCssUnit('1rem', 'em', {
      rootFontSize: 16,
      elementFontSize: 12
    })).toBe(1.3333);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Number or unitless string: default fromUnit is px, or pass fromUnit explicitly.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                convertCssUnit(16, 'rem')                    // 1 (assumes px)
                convertCssUnit(16, 'rem', { fromUnit: 'px' })  // 1
                convertCssUnit(1, 'px', { fromUnit: 'rem' })   // 16
            \`
  })],
  render() {
    const a = convertCssUnit(16, 'rem');
    const b = convertCssUnit(16, 'rem', {
      fromUnit: 'px'
    });
    const c = convertCssUnit(1, 'px', {
      fromUnit: 'rem'
    });
    return <StoryCard title="Number with fromUnit" appearance="output">
                <pre className="text-sm">
                    {\`convertCssUnit(16, 'rem') → \${a}
convertCssUnit(16, 'rem', { fromUnit: 'px' }) → \${b}
convertCssUnit(1, 'px', { fromUnit: 'rem' }) → \${c}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(convertCssUnit(16, 'rem')).toBe(1);
    await expect(convertCssUnit(16, 'rem', {
      fromUnit: 'px'
    })).toBe(1);
    await expect(convertCssUnit(1, 'px', {
      fromUnit: 'rem'
    })).toBe(16);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'null and undefined are passed through as-is.'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const nullResult = convertCssUnit(null, 'px');
    const undefinedResult = convertCssUnit(undefined, 'px');
    return <StoryCard title="Null/undefined pass-through" appearance="output">
                <pre className="text-sm">
                    {\`convertCssUnit(null, 'px') → \${nullResult}
convertCssUnit(undefined, 'px') → \${undefinedResult}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(convertCssUnit(null, 'px')).toBe(null);
    await expect(convertCssUnit(undefined, 'px')).toBe(undefined);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Throws when required context is missing. In browser, viewport auto-detects from window; lh and percentReference have no auto-detect.'
    }
  }),
  decorators: [withStoryCard()],
  play: async () => {
    await expect(() => convertCssUnit('2lh', 'px')).toThrow('lineHeight is required');
    await expect(() => convertCssUnit('50%', 'px')).toThrow('percentReference is required');
    await expect(() => convertCssUnit(100, '%', {
      fromUnit: 'px',
      percentReference: 0
    })).toThrow('percentReference');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...S.parameters?.docs?.source}}},C=[`BasicUsage`,`ViewportUnits`,`RemToEmDirect`,`NumberWithFromUnit`,`NullUndefinedPassThrough`,`ThrowsWhenContextMissing`,`Source`]})))()}w();export{g as BasicUsage,b as NullUndefinedPassThrough,y as NumberWithFromUnit,v as RemToEmDirect,S as Source,x as ThrowsWhenContextMissing,_ as ViewportUnits,C as __namedExportsOrder,h as default};