import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-BJVp8-w1.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./parse-css-value-Q4mOf9C4.js";import{t as u}from"./src-X3K_eC4I.js";var d;function f(){return(f=e((()=>{d=`/**
 * Parses a CSS value in one pass and returns both the numeric part and the unit.
 * Powers parseCssNumber, getCssUnit, and isEffectivelyZero.
 *
 * @param value - The CSS value to parse. Can be a number or string (e.g. '16px', '1.5rem', '100%')
 * @returns A tuple of [number, unit | undefined]. Unit is undefined for numbers or unitless strings.
 *
 * @example
 * \`\`\`ts
 * parseCssValue('16px')    // [16, 'px']
 * parseCssValue('1.5rem')  // [1.5, 'rem']
 * parseCssValue('100%')    // [100, '%']
 * parseCssValue('0')       // [0, undefined]
 * parseCssValue(16)        // [16, undefined]
 * parseCssValue('abc')     // [NaN, undefined]
 * \`\`\`
 */
export function parseCssValue(value: null): [null, undefined]
export function parseCssValue(value: undefined): [undefined, undefined]
export function parseCssValue(value: number | string): [number, string | undefined]
export function parseCssValue(
	value: number | string | null | undefined
): [number | null | undefined, string | undefined]
export function parseCssValue(
	value: number | string | null | undefined
): [number | null | undefined, string | undefined] {
	if (value === undefined || value === null) {
		return [value, undefined]
	}
	if (typeof value === 'number') {
		return [value, undefined]
	}
	const s = String(value).trim()
	const match = s.match(/^(-?\\d*\\.?\\d+)\\s*(.*)$/)
	if (!match) {
		return [Number.NaN, undefined]
	}
	const num = Number.parseFloat(match[1] ?? '')
	const unit = (match[2] ?? '').trim()
	return [num, unit === '' ? undefined : unit]
}
`})))()}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/parseCssValue`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Parses a CSS value in one pass and returns both the numeric part and the unit as [number, unit | undefined].`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Parse CSS values with various units; returns [number, unit] tuple.`}}),decorators:[a(),r({source:c`
                parseCssValue('16px')   // [16, 'px']
                parseCssValue('1.5rem') // [1.5, 'rem']
                parseCssValue('100%')   // [100, '%']
                parseCssValue('0')      // [0, undefined]
                parseCssValue(16)       // [16, undefined]
            `})],render(){return(0,p.jsx)(i,{title:`Basic usage`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:`16px`,expected:[16,`px`]},{input:`1.5rem`,expected:[1.5,`rem`]},{input:`100%`,expected:[100,`%`]},{input:`0`,expected:[0,void 0]},{input:16,expected:[16,void 0]}].map(({input:e,expected:t})=>{let n=l(e),r=typeof t[1]==`string`?`[${t[0]}, '${t[1]}']`:`[${t[0]}, undefined]`;return`parseCssValue(${typeof e==`string`?`'${e}'`:e}) → [${n[0]}, ${n[1]===void 0?`undefined`:`'${n[1]}'`}] (expected: ${r})`}).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:`16px`,expected:[16,`px`]},{input:`1.5rem`,expected:[1.5,`rem`]},{input:`100%`,expected:[100,`%`]},{input:`0`,expected:[0,void 0]},{input:16,expected:[16,void 0]}]){let n=l(e);await m(n[0]).toBe(t[0]),await m(n[1]).toBe(t[1])}}},_={tags:[`use-case`],parameters:n({description:{story:`Supports px, rem, em, %, lh, ch, vw, vh, and other CSS units.`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Various units`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[`0px`,`0rem`,`0em`,`0%`,`0lh`,`0ch`,`0vw`,`0vh`,`1em`,`2lh`,`50vw`].map(e=>{let[t,n]=l(e);return`parseCssValue('${e}') → [${t}, ${n===void 0?`undefined`:`'${n}'`}]`}).join(`
`)})})},play:async()=>{await m(l(`0px`)).toEqual([0,`px`]),await m(l(`0rem`)).toEqual([0,`rem`]),await m(l(`50vw`)).toEqual([50,`vw`])}},v={tags:[`unit`],parameters:n({description:{story:`null and undefined are passed through as-is in the first tuple element.`}}),decorators:[a()],render(){let e=l(null),t=l(void 0);return(0,p.jsx)(i,{title:`Null/undefined pass-through`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`parseCssValue(null) → [${e[0]}, ${e[1]===void 0?`undefined`:`'${e[1]}'`}]
parseCssValue(undefined) → [${t[0]}, ${t[1]===void 0?`undefined`:`'${t[1]}'`}]`})})},play:async()=>{await m(l(null)).toEqual([null,void 0]),await m(l(void 0)).toEqual([void 0,void 0])}},y={tags:[`unit`],parameters:n({description:{story:`Invalid input returns [NaN, undefined].`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Invalid input`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[``,`abc`,`px`].map(e=>{let t=l(e);return`parseCssValue(${e===``?`''`:`'${e}'`}) → [${Number.isNaN(t[0])?`NaN`:t[0]}, undefined]`}).join(`
`)})})},play:async()=>{let e=l(`abc`);await m(Number.isNaN(e[0])).toBe(!0),await m(e[1]).toBeUndefined()}},b={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Parse CSS values with various units; returns [number, unit] tuple.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                parseCssValue('16px')   // [16, 'px']
                parseCssValue('1.5rem') // [1.5, 'rem']
                parseCssValue('100%')   // [100, '%']
                parseCssValue('0')      // [0, undefined]
                parseCssValue(16)       // [16, undefined]
            \`
  })],
  render() {
    const examples = [{
      input: '16px',
      expected: [16, 'px']
    }, {
      input: '1.5rem',
      expected: [1.5, 'rem']
    }, {
      input: '100%',
      expected: [100, '%']
    }, {
      input: '0',
      expected: [0, undefined]
    }, {
      input: 16,
      expected: [16, undefined]
    }];
    return <StoryCard title="Basic usage" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => {
          const result = parseCssValue(input);
          const expStr = typeof expected[1] === 'string' ? \`[\${expected[0]}, '\${expected[1]}']\` : \`[\${expected[0]}, undefined]\`;
          return \`parseCssValue(\${typeof input === 'string' ? \`'\${input}'\` : input}) → [\${result[0]}, \${result[1] === undefined ? 'undefined' : \`'\${result[1]}'\`}] (expected: \${expStr})\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples: Array<{
      input: number | string;
      expected: [number, string | undefined];
    }> = [{
      input: '16px',
      expected: [16, 'px']
    }, {
      input: '1.5rem',
      expected: [1.5, 'rem']
    }, {
      input: '100%',
      expected: [100, '%']
    }, {
      input: '0',
      expected: [0, undefined]
    }, {
      input: 16,
      expected: [16, undefined]
    }];
    for (const {
      input,
      expected
    } of examples) {
      const result = parseCssValue(input);
      await expect(result[0]).toBe(expected[0]);
      await expect(result[1]).toBe(expected[1]);
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Supports px, rem, em, %, lh, ch, vw, vh, and other CSS units.'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const examples = ['0px', '0rem', '0em', '0%', '0lh', '0ch', '0vw', '0vh', '1em', '2lh', '50vw'];
    return <StoryCard title="Various units" appearance="output">
                <pre className="text-sm">
                    {examples.map(input => {
          const [value, unit] = parseCssValue(input);
          return \`parseCssValue('\${input}') → [\${value}, \${unit === undefined ? 'undefined' : \`'\${unit}'\`}]\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(parseCssValue('0px')).toEqual([0, 'px']);
    await expect(parseCssValue('0rem')).toEqual([0, 'rem']);
    await expect(parseCssValue('50vw')).toEqual([50, 'vw']);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'null and undefined are passed through as-is in the first tuple element.'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const nullResult = parseCssValue(null);
    const undefinedResult = parseCssValue(undefined);
    return <StoryCard title="Null/undefined pass-through" appearance="output">
                <pre className="text-sm">
                    {\`parseCssValue(null) → [\${nullResult[0]}, \${nullResult[1] === undefined ? 'undefined' : \`'\${nullResult[1]}'\`}]
parseCssValue(undefined) → [\${undefinedResult[0]}, \${undefinedResult[1] === undefined ? 'undefined' : \`'\${undefinedResult[1]}'\`}]\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(parseCssValue(null)).toEqual([null, undefined]);
    await expect(parseCssValue(undefined)).toEqual([undefined, undefined]);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Invalid input returns [NaN, undefined].'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const examples = ['', 'abc', 'px'];
    return <StoryCard title="Invalid input" appearance="output">
                <pre className="text-sm">
                    {examples.map(input => {
          const result = parseCssValue(input);
          const inputStr = input === '' ? "''" : \`'\${input}'\`;
          return \`parseCssValue(\${inputStr}) → [\${Number.isNaN(result[0]) ? 'NaN' : result[0]}, undefined]\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const result1 = parseCssValue('abc');
    await expect(Number.isNaN(result1[0])).toBe(true);
    await expect(result1[1]).toBeUndefined();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...b.parameters?.docs?.source}}},x=[`BasicUsage`,`VariousUnits`,`NullUndefinedPassThrough`,`InvalidInput`,`Source`]})))()}S();export{g as BasicUsage,y as InvalidInput,v as NullUndefinedPassThrough,b as Source,_ as VariousUnits,x as __namedExportsOrder,h as default};