import{j as s,d as p,w as i,s as o,S as d}from"./iframe-C3RwOtVD.js";import{d as c}from"./dedent-BuYMbVyj.js";import{p as e}from"./parse-css-number-rqvDcBqs.js";import"./preload-helper-PPVm8Dsz.js";import"./parse-css-value-DyiR79PK.js";const C=`import { parseCssValue } from './parse-css-value.ts'

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
`,{expect:r}=__STORYBOOK_MODULE_TEST__,g={title:"units/parseCssNumber",tags:["func","version:3.1"],parameters:p({description:{component:"Extracts the numeric part from any CSS length/percentage value. Thin wrapper around parseCssValue(value)[0]."}}),render:()=>s.jsx(s.Fragment,{})},a={tags:["use-case"],parameters:p({description:{story:"Extract numeric value from CSS strings with various units."}}),decorators:[i(),o({source:c`
                parseCssNumber('16px')   // 16
                parseCssNumber('1.5rem') // 1.5
                parseCssNumber('100%')   // 100
                parseCssNumber('0lh')    // 0
                parseCssNumber(16)       // 16
            `})],render(){const m=[{input:"16px",expected:16},{input:"1.5rem",expected:1.5},{input:"100%",expected:100},{input:"0lh",expected:0},{input:16,expected:16}];return s.jsx(d,{title:"Basic usage",appearance:"output",children:s.jsx("pre",{className:"text-sm",children:m.map(({input:n,expected:l})=>`parseCssNumber(${typeof n=="string"?`'${n}'`:n}) → ${e(n)} (expected: ${l})`).join(`
`)})})},play:async()=>{await r(e("16px")).toBe(16),await r(e("1.5rem")).toBe(1.5),await r(e("100%")).toBe(100),await r(e("0lh")).toBe(0),await r(e(16)).toBe(16)}},t={tags:["unit"],parameters:p({description:{story:"null and undefined are passed through as-is."}}),decorators:[i(),o({source:c`
                parseCssNumber(null)      // null
                parseCssNumber(undefined)  // undefined
            `})],render(){return s.jsx(d,{title:"Null/undefined pass-through",appearance:"output",children:s.jsx("pre",{className:"text-sm",children:`parseCssNumber(null) → ${e(null)}
parseCssNumber(undefined) → ${e(void 0)}`})})},play:async()=>{await r(e(null)).toBe(null),await r(e(void 0)).toBe(void 0)}},u={tags:["source"],parameters:p({source:{code:C}}),decorators:[o()]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...u.parameters?.docs?.source}}};const S=["BasicUsage","NullUndefinedPassThrough","Source"];export{a as BasicUsage,t as NullUndefinedPassThrough,u as Source,S as __namedExportsOrder,g as default};
