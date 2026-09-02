import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-C-caXvtV.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{t as l}from"./get-css-unit-D4qGSSKW.js";import{t as u}from"./src-RbTQJPcv.js";var d;function f(){return(f=e((()=>{d=`import { parseCssValue } from './parse-css-value.ts'

/**
 * Extracts the unit from a CSS value string.
 * Thin wrapper around parseCssValue.
 *
 * @param value - The CSS value to parse (e.g. '16px', '1.5rem', '100%'). Pass-through for null/undefined.
 * @returns The unit string, undefined for numbers or unitless strings, or null/undefined when input is null/undefined
 *
 * @example
 * \`\`\`ts
 * getCssUnit('16px')   // 'px'
 * getCssUnit('1rem')   // 'rem'
 * getCssUnit('100%')   // '%'
 * getCssUnit('0')      // undefined
 * getCssUnit('16')     // undefined
 * getCssUnit(null)     // null
 * getCssUnit(undefined) // undefined
 * \`\`\`
 */
export function getCssUnit(value: null): null
export function getCssUnit(value: undefined): undefined
export function getCssUnit(value: number | string): string | undefined
export function getCssUnit(value: number | string | null | undefined): string | null | undefined {
	if (value === null || value === undefined) return value
	return parseCssValue(value)[1]
}
`})))()}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/getCssUnit`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Extracts the unit from a CSS value string. Thin wrapper around parseCssValue(value)[1].`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Extract unit from CSS value strings.`}}),decorators:[a(),r({source:c`
                getCssUnit('16px')   // 'px'
                getCssUnit('1rem')   // 'rem'
                getCssUnit('100%')   // '%'
                getCssUnit('0')      // undefined
                getCssUnit('2lh')    // 'lh'
            `})],render(){return(0,p.jsx)(i,{title:`Basic usage`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:`16px`,expected:`px`},{input:`1rem`,expected:`rem`},{input:`100%`,expected:`%`},{input:`0`,expected:void 0},{input:`2lh`,expected:`lh`}].map(({input:e,expected:t})=>`getCssUnit('${e}') → ${l(e)??`undefined`} (expected: ${t??`undefined`})`).join(`
`)})})},play:async()=>{await m(l(`16px`)).toBe(`px`),await m(l(`1rem`)).toBe(`rem`),await m(l(`100%`)).toBe(`%`),await m(l(`0`)).toBeUndefined(),await m(l(`2lh`)).toBe(`lh`)}},_={tags:[`unit`],parameters:n({description:{story:`null and undefined are passed through as-is.`}}),decorators:[a(),r({source:c`
                getCssUnit(null)      // null
                getCssUnit(undefined)  // undefined
            `})],render(){return(0,p.jsx)(i,{title:`Null/undefined pass-through`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`getCssUnit(null) → ${l(null)}
getCssUnit(undefined) → ${l(void 0)}`})})},play:async()=>{await m(l(null)).toBe(null),await m(l(void 0)).toBe(void 0)}},v={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Extract unit from CSS value strings.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                getCssUnit('16px')   // 'px'
                getCssUnit('1rem')   // 'rem'
                getCssUnit('100%')   // '%'
                getCssUnit('0')      // undefined
                getCssUnit('2lh')    // 'lh'
            \`
  })],
  render() {
    const examples = [{
      input: '16px',
      expected: 'px'
    }, {
      input: '1rem',
      expected: 'rem'
    }, {
      input: '100%',
      expected: '%'
    }, {
      input: '0',
      expected: undefined
    }, {
      input: '2lh',
      expected: 'lh'
    }];
    return <StoryCard title="Basic usage" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`getCssUnit('\${input}') → \${getCssUnit(input) ?? 'undefined'} (expected: \${expected ?? 'undefined'})\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(getCssUnit('16px')).toBe('px');
    await expect(getCssUnit('1rem')).toBe('rem');
    await expect(getCssUnit('100%')).toBe('%');
    await expect(getCssUnit('0')).toBeUndefined();
    await expect(getCssUnit('2lh')).toBe('lh');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'null and undefined are passed through as-is.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                getCssUnit(null)      // null
                getCssUnit(undefined)  // undefined
            \`
  })],
  render() {
    return <StoryCard title="Null/undefined pass-through" appearance="output">
                <pre className="text-sm">
                    {\`getCssUnit(null) → \${getCssUnit(null)}
getCssUnit(undefined) → \${getCssUnit(undefined)}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(getCssUnit(null)).toBe(null);
    await expect(getCssUnit(undefined)).toBe(undefined);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...v.parameters?.docs?.source}}},y=[`BasicUsage`,`NullUndefinedPassThrough`,`Source`]})))()}b();export{g as BasicUsage,_ as NullUndefinedPassThrough,v as Source,y as __namedExportsOrder,h as default};