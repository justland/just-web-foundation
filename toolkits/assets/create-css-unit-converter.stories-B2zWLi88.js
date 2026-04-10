import{j as r,d as s,w as u,s as c,S as m}from"./iframe-iPCJU1fP.js";import{c as i}from"./create-css-unit-converter-B-7dzDjR.js";import{d}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";import"./convert-css-unit-CaWw9MZt.js";import"./get-rem-to-px-scale-CTgj4gd8.js";import"./parse-css-value-DyiR79PK.js";const x=`import { convertCssUnit } from './convert-css-unit.ts'
import type { CssLengthUnit, CssUnitConverterContext } from './css-unit-converter.types.ts'

/**
 * Creates a pre-configured CSS unit converter with fixed context.
 *
 * @param context - Root font size, viewport, line height, etc. Omitted values use browser auto-detect when available.
 * @returns A converter function that accepts value and toUnit (and optional fromUnit override).
 *
 * @example
 * \`\`\`ts
 * const convert = createCssUnitConverter({
 *   rootFontSize: 16,
 *   viewportWidth: 375,
 *   viewportHeight: 812,
 * })
 * convert('1rem', 'px')   // 16
 * convert('10vw', 'px')   // 37.5
 * convert(16, 'rem', { fromUnit: 'px' })  // 1
 * \`\`\`
 */
export function createCssUnitConverter(context?: CssUnitConverterContext) {
	function convert(
		value: null,
		toUnit: CssLengthUnit,
		options?: { fromUnit?: CssLengthUnit | undefined } | undefined
	): null
	function convert(
		value: undefined,
		toUnit: CssLengthUnit,
		options?: { fromUnit?: CssLengthUnit | undefined } | undefined
	): undefined
	function convert(
		value: number | string,
		toUnit: CssLengthUnit,
		options?: { fromUnit?: CssLengthUnit | undefined } | undefined
	): number
	function convert(
		value: number | string | null | undefined,
		toUnit: CssLengthUnit,
		options?: { fromUnit?: CssLengthUnit | undefined } | undefined
	): number | null | undefined {
		return convertCssUnit(value, toUnit, { ...context, ...options })
	}
	return convert
}
`,{expect:o}=__STORYBOOK_MODULE_TEST__,S={title:"units/createCssUnitConverter",tags:["func","version:3.1"],parameters:s({description:{component:"Creates a pre-configured CSS unit converter with fixed context. Configure once, then call with just value and toUnit."}}),render:()=>r.jsx(r.Fragment,{})},e={tags:["use-case"],parameters:s({description:{story:"Configure context once, convert multiple values without passing options."}}),decorators:[u(),c({source:d`
                const convert = createCssUnitConverter({
                  rootFontSize: 16,
                  viewportWidth: 375,
                  viewportHeight: 812,
                })
                convert('1rem', 'px')   // 16
                convert('10vw', 'px')   // 37.5
                convert(16, 'rem', { fromUnit: 'px' })  // 1
            `})],render(){const n=i({rootFontSize:16,viewportWidth:375,viewportHeight:812}),a=n("1rem","px"),p=n("10vw","px"),v=n(16,"rem",{fromUnit:"px"});return r.jsx(m,{title:"Factory usage",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:`convert('1rem', 'px') → ${a}
convert('10vw', 'px') → ${p}
convert(16, 'rem', { fromUnit: 'px' }) → ${v}`})})},play:async()=>{const n=i({rootFontSize:16,viewportWidth:375,viewportHeight:812});await o(n("1rem","px")).toBe(16),await o(n("10vw","px")).toBe(37.5),await o(n(16,"rem",{fromUnit:"px"})).toBe(1)}},t={tags:["source"],parameters:s({source:{code:x}}),decorators:[c()]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Configure context once, convert multiple values without passing options.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const convert = createCssUnitConverter({
                  rootFontSize: 16,
                  viewportWidth: 375,
                  viewportHeight: 812,
                })
                convert('1rem', 'px')   // 16
                convert('10vw', 'px')   // 37.5
                convert(16, 'rem', { fromUnit: 'px' })  // 1
            \`
  })],
  render() {
    const convert = createCssUnitConverter({
      rootFontSize: 16,
      viewportWidth: 375,
      viewportHeight: 812
    });
    const r1 = convert('1rem', 'px');
    const r2 = convert('10vw', 'px');
    const r3 = convert(16, 'rem', {
      fromUnit: 'px'
    });
    return <StoryCard title="Factory usage" appearance="output">
                <pre className="text-sm">
                    {\`convert('1rem', 'px') → \${r1}
convert('10vw', 'px') → \${r2}
convert(16, 'rem', { fromUnit: 'px' }) → \${r3}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const convert = createCssUnitConverter({
      rootFontSize: 16,
      viewportWidth: 375,
      viewportHeight: 812
    });
    await expect(convert('1rem', 'px')).toBe(16);
    await expect(convert('10vw', 'px')).toBe(37.5);
    await expect(convert(16, 'rem', {
      fromUnit: 'px'
    })).toBe(1);
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...t.parameters?.docs?.source}}};const y=["BasicUsage","Source"];export{e as BasicUsage,t as Source,y as __namedExportsOrder,S as default};
