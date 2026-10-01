import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DnccW5KZ.js";import{n as s}from"./parse-css-number-BPjrhHrH.js";import{t as c}from"./src-BE393voD.js";import{n as l,t as u}from"./dedent-DQaCLeUO.js";var d;function f(){return(f=e((()=>{d=`import { parseCssValue } from './parse-css-value.ts'

/**
 * Extracts the numeric part from any CSS length/percentage value.
 * Thin wrapper around parseCssValue.
 *
 * @param value - The CSS value to parse. Can be a number or string (e.g. '16px', '1.5rem', '100%')
 * @returns The numeric value, or NaN for invalid input. Passes through null and undefined.
 *
 * @example
 * \`\`\`ts
 * parseCssNumber('16px')   // 16
 * parseCssNumber('1.5rem') // 1.5
 * parseCssNumber('100%')   // 100
 * parseCssNumber('0lh')    // 0
 * parseCssNumber(16)       // 16
 * parseCssNumber('abc')    // NaN
 * parseCssNumber(null)     // null
 * parseCssNumber(undefined) // undefined
 * \`\`\`
 */
export function parseCssNumber(value: null): null
export function parseCssNumber(value: undefined): undefined
export function parseCssNumber(value: number | string): number
export function parseCssNumber(value: number | string | null | undefined): number | null | undefined
export function parseCssNumber(
	value: number | string | null | undefined
): number | null | undefined {
	return parseCssValue(value)[0]
}
`})))()}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{c(),o(),l(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/parseCssNumber`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Extracts the numeric part from any CSS length/percentage value. Thin wrapper around parseCssValue(value)[0].`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Extract numeric value from CSS strings with various units.`}}),decorators:[a(),r({source:u`
                parseCssNumber('16px')   // 16
                parseCssNumber('1.5rem') // 1.5
                parseCssNumber('100%')   // 100
                parseCssNumber('0lh')    // 0
                parseCssNumber(16)       // 16
            `})],render(){return(0,p.jsx)(i,{title:`Basic usage`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:`16px`,expected:16},{input:`1.5rem`,expected:1.5},{input:`100%`,expected:100},{input:`0lh`,expected:0},{input:16,expected:16}].map(({input:e,expected:t})=>`parseCssNumber(${typeof e==`string`?`'${e}'`:e}) → ${s(e)} (expected: ${t})`).join(`
`)})})},play:async()=>{await m(s(`16px`)).toBe(16),await m(s(`1.5rem`)).toBe(1.5),await m(s(`100%`)).toBe(100),await m(s(`0lh`)).toBe(0),await m(s(16)).toBe(16)}},_={tags:[`unit`],parameters:n({description:{story:`null and undefined are passed through as-is.`}}),decorators:[a(),r({source:u`
                parseCssNumber(null)      // null
                parseCssNumber(undefined)  // undefined
            `})],render(){return(0,p.jsx)(i,{title:`Null/undefined pass-through`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`parseCssNumber(null) → ${s(null)}
parseCssNumber(undefined) → ${s(void 0)}`})})},play:async()=>{await m(s(null)).toBe(null),await m(s(void 0)).toBe(void 0)}},v={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Extract numeric value from CSS strings with various units.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                parseCssNumber('16px')   // 16
                parseCssNumber('1.5rem') // 1.5
                parseCssNumber('100%')   // 100
                parseCssNumber('0lh')    // 0
                parseCssNumber(16)       // 16
            \`
  })],
  render() {
    const examples = [{
      input: '16px',
      expected: 16
    }, {
      input: '1.5rem',
      expected: 1.5
    }, {
      input: '100%',
      expected: 100
    }, {
      input: '0lh',
      expected: 0
    }, {
      input: 16,
      expected: 16
    }];
    return <StoryCard title="Basic usage" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`parseCssNumber(\${typeof input === 'string' ? \`'\${input}'\` : input}) → \${parseCssNumber(input)} (expected: \${expected})\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(parseCssNumber('16px')).toBe(16);
    await expect(parseCssNumber('1.5rem')).toBe(1.5);
    await expect(parseCssNumber('100%')).toBe(100);
    await expect(parseCssNumber('0lh')).toBe(0);
    await expect(parseCssNumber(16)).toBe(16);
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
                parseCssNumber(null)      // null
                parseCssNumber(undefined)  // undefined
            \`
  })],
  render() {
    return <StoryCard title="Null/undefined pass-through" appearance="output">
                <pre className="text-sm">
                    {\`parseCssNumber(null) → \${parseCssNumber(null)}
parseCssNumber(undefined) → \${parseCssNumber(undefined)}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(parseCssNumber(null)).toBe(null);
    await expect(parseCssNumber(undefined)).toBe(undefined);
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