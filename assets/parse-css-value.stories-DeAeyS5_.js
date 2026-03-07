import{j as a,d as p,w as m,s as f,S as x}from"./iframe-DQH8TUqG.js";import{d as h}from"./dedent-BuYMbVyj.js";import{p as t}from"./parse-css-value-5JGaQpWz.js";import"./preload-helper-PPVm8Dsz.js";const v=`/**
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
`,{expect:u}=__STORYBOOK_MODULE_TEST__,g={title:"units/parseCssValue",tags:["func","version:3.1"],parameters:p({description:{component:"Parses a CSS value in one pass and returns both the numeric part and the unit as [number, unit | undefined]."}}),render:()=>a.jsx(a.Fragment,{})},i={tags:["use-case"],parameters:p({description:{story:"Parse CSS values with various units; returns [number, unit] tuple."}}),decorators:[m(),f({source:h`
                parseCssValue('16px')   // [16, 'px']
                parseCssValue('1.5rem') // [1.5, 'rem']
                parseCssValue('100%')   // [100, '%']
                parseCssValue('0')      // [0, undefined]
                parseCssValue(16)       // [16, undefined]
            `})],render(){const n=[{input:"16px",expected:[16,"px"]},{input:"1.5rem",expected:[1.5,"rem"]},{input:"100%",expected:[100,"%"]},{input:"0",expected:[0,void 0]},{input:16,expected:[16,void 0]}];return a.jsx(x,{title:"Basic usage",appearance:"output",children:a.jsx("pre",{className:"text-sm",children:n.map(({input:e,expected:s})=>{const r=t(e),C=typeof s[1]=="string"?`[${s[0]}, '${s[1]}']`:`[${s[0]}, undefined]`;return`parseCssValue(${typeof e=="string"?`'${e}'`:e}) → [${r[0]}, ${r[1]===void 0?"undefined":`'${r[1]}'`}] (expected: ${C})`}).join(`
`)})})},play:async()=>{const n=[{input:"16px",expected:[16,"px"]},{input:"1.5rem",expected:[1.5,"rem"]},{input:"100%",expected:[100,"%"]},{input:"0",expected:[0,void 0]},{input:16,expected:[16,void 0]}];for(const{input:e,expected:s}of n){const r=t(e);await u(r[0]).toBe(s[0]),await u(r[1]).toBe(s[1])}}},d={tags:["use-case"],parameters:p({description:{story:"Supports px, rem, em, %, lh, ch, vw, vh, and other CSS units."}}),decorators:[m()],render(){const n=["0px","0rem","0em","0%","0lh","0ch","0vw","0vh","1em","2lh","50vw"];return a.jsx(x,{title:"Various units",appearance:"output",children:a.jsx("pre",{className:"text-sm",children:n.map(e=>{const[s,r]=t(e);return`parseCssValue('${e}') → [${s}, ${r===void 0?"undefined":`'${r}'`}]`}).join(`
`)})})},play:async()=>{await u(t("0px")).toEqual([0,"px"]),await u(t("0rem")).toEqual([0,"rem"]),await u(t("50vw")).toEqual([50,"vw"])}},o={tags:["unit"],parameters:p({description:{story:"null and undefined are passed through as-is in the first tuple element."}}),decorators:[m()],render(){const n=t(null),e=t(void 0);return a.jsx(x,{title:"Null/undefined pass-through",appearance:"output",children:a.jsx("pre",{className:"text-sm",children:`parseCssValue(null) → [${n[0]}, ${n[1]===void 0?"undefined":`'${n[1]}'`}]
parseCssValue(undefined) → [${e[0]}, ${e[1]===void 0?"undefined":`'${e[1]}'`}]`})})},play:async()=>{await u(t(null)).toEqual([null,void 0]),await u(t(void 0)).toEqual([void 0,void 0])}},l={tags:["unit"],parameters:p({description:{story:"Invalid input returns [NaN, undefined]."}}),decorators:[m()],render(){const n=["","abc","px"];return a.jsx(x,{title:"Invalid input",appearance:"output",children:a.jsx("pre",{className:"text-sm",children:n.map(e=>{const s=t(e);return`parseCssValue(${e===""?"''":`'${e}'`}) → [${Number.isNaN(s[0])?"NaN":s[0]}, undefined]`}).join(`
`)})})},play:async()=>{const n=t("abc");await u(Number.isNaN(n[0])).toBe(!0),await u(n[1]).toBeUndefined()}},c={tags:["source"],parameters:p({source:{code:v}}),decorators:[f()]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...c.parameters?.docs?.source}}};const w=["BasicUsage","VariousUnits","NullUndefinedPassThrough","InvalidInput","Source"];export{i as BasicUsage,l as InvalidInput,o as NullUndefinedPassThrough,c as Source,d as VariousUnits,w as __namedExportsOrder,g as default};
