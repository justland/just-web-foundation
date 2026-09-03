import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-Dhw67M0q.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{t as l}from"./create-css-unit-converter-WYZKTfCa.js";import{t as u}from"./src-C4_MMlM4.js";var d;function f(){return(f=e((()=>{d=`import { convertCssUnit } from './convert-css-unit.ts'
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
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/createCssUnitConverter`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Creates a pre-configured CSS unit converter with fixed context. Configure once, then call with just value and toUnit.`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Configure context once, convert multiple values without passing options.`}}),decorators:[a(),r({source:c`
                const convert = createCssUnitConverter({
                  rootFontSize: 16,
                  viewportWidth: 375,
                  viewportHeight: 812,
                })
                convert('1rem', 'px')   // 16
                convert('10vw', 'px')   // 37.5
                convert(16, 'rem', { fromUnit: 'px' })  // 1
            `})],render(){let e=l({rootFontSize:16,viewportWidth:375,viewportHeight:812}),t=e(`1rem`,`px`),n=e(`10vw`,`px`),r=e(16,`rem`,{fromUnit:`px`});return(0,p.jsx)(i,{title:`Factory usage`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`convert('1rem', 'px') → ${t}
convert('10vw', 'px') → ${n}
convert(16, 'rem', { fromUnit: 'px' }) → ${r}`})})},play:async()=>{let e=l({rootFontSize:16,viewportWidth:375,viewportHeight:812});await m(e(`1rem`,`px`)).toBe(16),await m(e(`10vw`,`px`)).toBe(37.5),await m(e(16,`rem`,{fromUnit:`px`})).toBe(1)}},_={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,..._.parameters?.docs?.source}}},v=[`BasicUsage`,`Source`]})))()}y();export{g as BasicUsage,_ as Source,v as __namedExportsOrder,h as default};