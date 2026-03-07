import{j as n,d as a,w as f,s as y,S as d}from"./iframe-CWQnDVRD.js";import{d as E}from"./dedent-BuYMbVyj.js";import{i as e}from"./is-effectively-zero-CoUoHep5.js";import"./preload-helper-PPVm8Dsz.js";import"./parse-css-number-rqvDcBqs.js";import"./parse-css-value-DyiR79PK.js";const Z=`import { parseCssNumber } from './parse-css-number.ts'

/**
 * Determines if a CSS value is effectively 0 regardless of unit.
 *
 * @param value - The CSS value to check. Can be a number or string (e.g. '0px', '0rem', '0%'). Pass-through for null/undefined.
 * @param options - Optional configuration
 * @param options.epsilon - Floating-point tolerance. Default 1e-10. Use 0 for strict equality.
 * @returns true if the value is effectively zero, false otherwise, or null/undefined when input is null/undefined
 *
 * @example
 * \`\`\`ts
 * isEffectivelyZero(0)           // true
 * isEffectivelyZero('0px')       // true
 * isEffectivelyZero('0rem')      // true
 * isEffectivelyZero('0%')        // true
 * isEffectivelyZero('1px')       // false
 * isEffectivelyZero(0.00000000001)  // true (within default epsilon)
 * isEffectivelyZero(0.0001, { epsilon: 0.001 })  // true
 * isEffectivelyZero(null)        // null
 * isEffectivelyZero(undefined)   // undefined
 * \`\`\`
 */
export function isEffectivelyZero(
	value: number | string | null | undefined,
	options?: { epsilon?: number | undefined } | undefined
): boolean | null | undefined {
	const parsed = parseCssNumber(value)
	if (parsed === null || parsed === undefined) return parsed
	if (!Number.isFinite(parsed)) {
		return false
	}
	const epsilon = options?.epsilon ?? 1e-10
	return Math.abs(parsed) <= epsilon
}
`,{expect:r}=__STORYBOOK_MODULE_TEST__,C={title:"units/isEffectivelyZero",tags:["func","version:next"],parameters:a({description:{component:"Determines if a CSS value is effectively 0 regardless of unit. Uses default epsilon 1e-10 for floating-point safety."}}),render:()=>n.jsx(n.Fragment,{})},o={tags:["use-case"],parameters:a({description:{story:"Zero values in any unit return true."}}),decorators:[f(),y({source:E`
                isEffectivelyZero(0)       // true
                isEffectivelyZero('0')     // true
                isEffectivelyZero('0px')   // true
                isEffectivelyZero('0rem')  // true
                isEffectivelyZero('0%')    // true
                isEffectivelyZero('0lh')   // true
                isEffectivelyZero('16px')  // false
            `})],render(){const i=[0,"0","0px","0rem","0em","0%","0lh","0ch","0vw","0vh"],s=["16px","1rem","100%",1,-1];return n.jsx(d,{title:"Basic usage",appearance:"output",children:n.jsx("pre",{className:"text-sm",children:[...i.map(t=>`isEffectivelyZero(${typeof t=="string"?`'${t}'`:t}) → ${e(t)} (expected: true)`),...s.map(t=>`isEffectivelyZero(${typeof t=="string"?`'${t}'`:t}) → ${e(t)} (expected: false)`)].join(`
`)})})},play:async()=>{await r(e(0)).toBe(!0),await r(e("0")).toBe(!0),await r(e("0px")).toBe(!0),await r(e("0rem")).toBe(!0),await r(e("0%")).toBe(!0),await r(e("16px")).toBe(!1),await r(e("1rem")).toBe(!1)}},l={tags:["use-case"],parameters:a({description:{story:"Optional epsilon for floating-point tolerance. Default 1e-10 treats tiny values as zero."}}),decorators:[f()],render(){const i=[{value:1e-4,epsilon:void 0,expected:!1},{value:1e-11,epsilon:void 0,expected:!0},{value:1e-4,epsilon:.001,expected:!0}];return n.jsx(d,{title:"Epsilon option",appearance:"output",children:n.jsx("pre",{className:"text-sm",children:i.map(({value:s,epsilon:t,expected:v})=>{const m=t!==void 0?`{ epsilon: ${t} }`:void 0,x=e(s,m?{epsilon:t}:void 0);return`isEffectivelyZero(${s}${m?`, ${m}`:""}) → ${x} (expected: ${v})`}).join(`
`)})})},play:async()=>{await r(e(1e-4)).toBe(!1),await r(e(1e-11)).toBe(!0),await r(e(1e-4,{epsilon:.001})).toBe(!0)}},p={tags:["unit"],parameters:a({description:{story:"null and undefined are passed through as-is."}}),decorators:[f()],render(){return n.jsx(d,{title:"Null/undefined pass-through",appearance:"output",children:n.jsx("pre",{className:"text-sm",children:`isEffectivelyZero(null) → ${e(null)}
isEffectivelyZero(undefined) → ${e(void 0)}`})})},play:async()=>{await r(e(null)).toBe(null),await r(e(void 0)).toBe(void 0)}},c={tags:["unit"],parameters:a({description:{story:"Invalid input (empty string, non-numeric) returns false."}}),decorators:[f()],render(){const i=["","abc"];return n.jsx(d,{title:"Invalid input",appearance:"output",children:n.jsx("pre",{className:"text-sm",children:i.map(s=>`isEffectivelyZero(${s===""?"''":`'${s}'`}) → ${e(s)} (expected: false)`).join(`
`)})})},play:async()=>{await r(e("")).toBe(!1),await r(e("abc")).toBe(!1)}},u={tags:["source"],parameters:a({source:{code:Z}}),decorators:[y()]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Zero values in any unit return true.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                isEffectivelyZero(0)       // true
                isEffectivelyZero('0')     // true
                isEffectivelyZero('0px')   // true
                isEffectivelyZero('0rem')  // true
                isEffectivelyZero('0%')    // true
                isEffectivelyZero('0lh')   // true
                isEffectivelyZero('16px')  // false
            \`
  })],
  render() {
    const zeroExamples = [0, '0', '0px', '0rem', '0em', '0%', '0lh', '0ch', '0vw', '0vh'];
    const nonZeroExamples = ['16px', '1rem', '100%', 1, -1];
    return <StoryCard title="Basic usage" appearance="output">
                <pre className="text-sm">
                    {[...zeroExamples.map(input => \`isEffectivelyZero(\${typeof input === 'string' ? \`'\${input}'\` : input}) → \${isEffectivelyZero(input)} (expected: true)\`), ...nonZeroExamples.map(input => \`isEffectivelyZero(\${typeof input === 'string' ? \`'\${input}'\` : input}) → \${isEffectivelyZero(input)} (expected: false)\`)].join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(isEffectivelyZero(0)).toBe(true);
    await expect(isEffectivelyZero('0')).toBe(true);
    await expect(isEffectivelyZero('0px')).toBe(true);
    await expect(isEffectivelyZero('0rem')).toBe(true);
    await expect(isEffectivelyZero('0%')).toBe(true);
    await expect(isEffectivelyZero('16px')).toBe(false);
    await expect(isEffectivelyZero('1rem')).toBe(false);
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Optional epsilon for floating-point tolerance. Default 1e-10 treats tiny values as zero.'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const examples = [{
      value: 0.0001,
      epsilon: undefined,
      expected: false
    }, {
      value: 0.00000000001,
      epsilon: undefined,
      expected: true
    }, {
      value: 0.0001,
      epsilon: 0.001,
      expected: true
    }];
    return <StoryCard title="Epsilon option" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          value,
          epsilon,
          expected
        }) => {
          const opts = epsilon !== undefined ? \`{ epsilon: \${epsilon} }\` : undefined;
          const result = isEffectivelyZero(value, opts ? {
            epsilon
          } : undefined);
          return \`isEffectivelyZero(\${value}\${opts ? \`, \${opts}\` : ''}) → \${result} (expected: \${expected})\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(isEffectivelyZero(0.0001)).toBe(false);
    await expect(isEffectivelyZero(0.00000000001)).toBe(true);
    await expect(isEffectivelyZero(0.0001, {
      epsilon: 0.001
    })).toBe(true);
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'null and undefined are passed through as-is.'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    return <StoryCard title="Null/undefined pass-through" appearance="output">
                <pre className="text-sm">
                    {\`isEffectivelyZero(null) → \${isEffectivelyZero(null)}
isEffectivelyZero(undefined) → \${isEffectivelyZero(undefined)}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(isEffectivelyZero(null)).toBe(null);
    await expect(isEffectivelyZero(undefined)).toBe(undefined);
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Invalid input (empty string, non-numeric) returns false.'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const examples = ['', 'abc'];
    return <StoryCard title="Invalid input" appearance="output">
                <pre className="text-sm">
                    {examples.map(input => {
          const inputStr = input === '' ? "''" : \`'\${input}'\`;
          return \`isEffectivelyZero(\${inputStr}) → \${isEffectivelyZero(input)} (expected: false)\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(isEffectivelyZero('')).toBe(false);
    await expect(isEffectivelyZero('abc')).toBe(false);
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...u.parameters?.docs?.source}}};const j=["BasicUsage","EpsilonOption","NullUndefinedPassThrough","InvalidInput","Source"];export{o as BasicUsage,l as EpsilonOption,c as InvalidInput,p as NullUndefinedPassThrough,u as Source,j as __namedExportsOrder,C as default};
