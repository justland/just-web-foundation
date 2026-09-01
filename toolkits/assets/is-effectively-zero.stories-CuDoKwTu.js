import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./is-effectively-zero-BDpNmx3T.js";import{t as u}from"./src-BVeczmcL.js";var d;function f(){return(f=e((()=>{d=`import { parseCssNumber } from './parse-css-number.ts'

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
	value: null,
	options?: { epsilon?: number | undefined } | undefined
): null
export function isEffectivelyZero(
	value: undefined,
	options?: { epsilon?: number | undefined } | undefined
): undefined
export function isEffectivelyZero(
	value: number | string,
	options?: { epsilon?: number | undefined } | undefined
): boolean
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
`})))()}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/isEffectivelyZero`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Determines if a CSS value is effectively 0 regardless of unit. Uses default epsilon 1e-10 for floating-point safety.`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Zero values in any unit return true.`}}),decorators:[a(),r({source:c`
                isEffectivelyZero(0)       // true
                isEffectivelyZero('0')     // true
                isEffectivelyZero('0px')   // true
                isEffectivelyZero('0rem')  // true
                isEffectivelyZero('0%')    // true
                isEffectivelyZero('0lh')   // true
                isEffectivelyZero('16px')  // false
            `})],render(){let e=[0,`0`,`0px`,`0rem`,`0em`,`0%`,`0lh`,`0ch`,`0vw`,`0vh`],t=[`16px`,`1rem`,`100%`,1,-1];return(0,p.jsx)(i,{title:`Basic usage`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[...e.map(e=>`isEffectivelyZero(${typeof e==`string`?`'${e}'`:e}) → ${l(e)} (expected: true)`),...t.map(e=>`isEffectivelyZero(${typeof e==`string`?`'${e}'`:e}) → ${l(e)} (expected: false)`)].join(`
`)})})},play:async()=>{await m(l(0)).toBe(!0),await m(l(`0`)).toBe(!0),await m(l(`0px`)).toBe(!0),await m(l(`0rem`)).toBe(!0),await m(l(`0%`)).toBe(!0),await m(l(`16px`)).toBe(!1),await m(l(`1rem`)).toBe(!1)}},_={tags:[`use-case`],parameters:n({description:{story:`Optional epsilon for floating-point tolerance. Default 1e-10 treats tiny values as zero.`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Epsilon option`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{value:1e-4,epsilon:void 0,expected:!1},{value:1e-11,epsilon:void 0,expected:!0},{value:1e-4,epsilon:.001,expected:!0}].map(({value:e,epsilon:t,expected:n})=>{let r=t===void 0?void 0:`{ epsilon: ${t} }`,i=l(e,r?{epsilon:t}:void 0);return`isEffectivelyZero(${e}${r?`, ${r}`:``}) → ${i} (expected: ${n})`}).join(`
`)})})},play:async()=>{await m(l(1e-4)).toBe(!1),await m(l(1e-11)).toBe(!0),await m(l(1e-4,{epsilon:.001})).toBe(!0)}},v={tags:[`unit`],parameters:n({description:{story:`null and undefined are passed through as-is.`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Null/undefined pass-through`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`isEffectivelyZero(null) → ${l(null)}
isEffectivelyZero(undefined) → ${l(void 0)}`})})},play:async()=>{await m(l(null)).toBe(null),await m(l(void 0)).toBe(void 0)}},y={tags:[`unit`],parameters:n({description:{story:`Invalid input (empty string, non-numeric) returns false.`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Invalid input`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[``,`abc`].map(e=>`isEffectivelyZero(${e===``?`''`:`'${e}'`}) → ${l(e)} (expected: false)`).join(`
`)})})},play:async()=>{await m(l(``)).toBe(!1),await m(l(`abc`)).toBe(!1)}},b={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...b.parameters?.docs?.source}}},x=[`BasicUsage`,`EpsilonOption`,`NullUndefinedPassThrough`,`InvalidInput`,`Source`]})))()}S();export{g as BasicUsage,_ as EpsilonOption,y as InvalidInput,v as NullUndefinedPassThrough,b as Source,x as __namedExportsOrder,h as default};