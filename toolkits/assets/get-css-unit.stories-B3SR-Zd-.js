import{j as t,d as i,w as o,s as u,S as p}from"./iframe-7ZNQ_6ea.js";import{g as e}from"./get-css-unit-DteVD2Hc.js";import{d as c}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";import"./parse-css-value-DyiR79PK.js";const m=`import { parseCssValue } from './parse-css-value.ts'

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
`,{expect:n}=__STORYBOOK_MODULE_TEST__,S={title:"units/getCssUnit",tags:["func","version:3.1"],parameters:i({description:{component:"Extracts the unit from a CSS value string. Thin wrapper around parseCssValue(value)[1]."}}),render:()=>t.jsx(t.Fragment,{})},s={tags:["use-case"],parameters:i({description:{story:"Extract unit from CSS value strings."}}),decorators:[o(),u({source:c`
                getCssUnit('16px')   // 'px'
                getCssUnit('1rem')   // 'rem'
                getCssUnit('100%')   // '%'
                getCssUnit('0')      // undefined
                getCssUnit('2lh')    // 'lh'
            `})],render(){const l=[{input:"16px",expected:"px"},{input:"1rem",expected:"rem"},{input:"100%",expected:"%"},{input:"0",expected:void 0},{input:"2lh",expected:"lh"}];return t.jsx(p,{title:"Basic usage",appearance:"output",children:t.jsx("pre",{className:"text-sm",children:l.map(({input:d,expected:g})=>`getCssUnit('${d}') → ${e(d)??"undefined"} (expected: ${g??"undefined"})`).join(`
`)})})},play:async()=>{await n(e("16px")).toBe("px"),await n(e("1rem")).toBe("rem"),await n(e("100%")).toBe("%"),await n(e("0")).toBeUndefined(),await n(e("2lh")).toBe("lh")}},r={tags:["unit"],parameters:i({description:{story:"null and undefined are passed through as-is."}}),decorators:[o(),u({source:c`
                getCssUnit(null)      // null
                getCssUnit(undefined)  // undefined
            `})],render(){return t.jsx(p,{title:"Null/undefined pass-through",appearance:"output",children:t.jsx("pre",{className:"text-sm",children:`getCssUnit(null) → ${e(null)}
getCssUnit(undefined) → ${e(void 0)}`})})},play:async()=>{await n(e(null)).toBe(null),await n(e(void 0)).toBe(void 0)}},a={tags:["source"],parameters:i({source:{code:m}}),decorators:[u()]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...a.parameters?.docs?.source}}};const w=["BasicUsage","NullUndefinedPassThrough","Source"];export{s as BasicUsage,r as NullUndefinedPassThrough,a as Source,w as __namedExportsOrder,S as default};
