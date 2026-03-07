import{j as r,d as a,w as i,s as c,S as o}from"./iframe-BIKclg0F.js";import{d}from"./dedent-BuYMbVyj.js";import{p}from"./parse-css-number-BDt7T25K.js";import"./preload-helper-PPVm8Dsz.js";import"./parse-css-value-5JGaQpWz.js";const C=`/**
 * Converts pixel values to numbers.
 * Alias for {@link parseCssNumber}. Passes through null and undefined.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @returns The numeric value, or null/undefined when input is null/undefined
 *
 * @example
 * \`\`\`ts
 * px2num(16) // 16
 * px2num('32px') // 32
 * px2num('12.5px') // 12.5
 * px2num('0px') // 0
 * px2num(null) // null
 * px2num(undefined) // undefined
 * \`\`\`
 */
export { parseCssNumber as px2num } from './parse-css-number.ts'
`,{expect:s}=__STORYBOOK_MODULE_TEST__,T={title:"units/px2num",tags:["func","version:next"],parameters:a({description:{component:'Converts pixel values to numbers. Accepts a number or string (e.g. "16px" or "16") and returns the numeric value.'}}),render:()=>r.jsx(r.Fragment,{})},l={tags:["use-case"],parameters:a({description:{story:"Convert numeric pixel values; number input is returned as-is."}}),decorators:[i({content:r.jsx(r.Fragment,{children:r.jsxs("p",{children:[r.jsx("code",{children:"px2num(px)"})," returns the numeric value. Number input is passed through."]})})}),c({source:d`
                px2num(16)  // 16
                px2num(32)  // 32
                px2num(8)   // 8
                px2num(24)  // 24
            `})],render(){const t=[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}];return r.jsx(o,{title:"Basic usage (number input)",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`px2num(${e}) → ${p(e)} (expected: ${n})`).join(`
`)})})},play:async()=>{const t=[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}];for(const{input:e,expected:n}of t)await s(p(e)).toBe(n)}},N={tags:["use-case"],parameters:a({description:{story:'String inputs like "16px" or "16" are parsed to numbers.'}}),decorators:[i(),c({source:d`
                px2num('16px')  // 16
                px2num('32px')  // 32
                px2num('24')    // 24
                px2num('8.5px') // 8.5
            `})],render(){const t=[{input:"16px",expected:16},{input:"32px",expected:32},{input:"24",expected:24},{input:"8.5px",expected:8.5}];return r.jsx(o,{title:"String input",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`px2num('${e}') → ${p(e)} (expected: ${n})`).join(`
`)})})},play:async()=>{const t=[{input:"16px",expected:16},{input:"32px",expected:32},{input:"24",expected:24},{input:"8.5px",expected:8.5}];for(const{input:e,expected:n}of t)await s(p(e)).toBe(n)}},g={tags:["use-case"],parameters:a({description:{story:"Decimal pixel values are parsed correctly."}}),decorators:[i(),c({source:d`
                px2num('12.5px')   // 12.5
                px2num('0.5px')    // 0.5
                px2num('1.75px')   // 1.75
                px2num('100.25px') // 100.25
            `})],render(){const t=[{input:"12.5px",expected:12.5},{input:"0.5px",expected:.5},{input:"1.75px",expected:1.75},{input:"100.25px",expected:100.25}];return r.jsx(o,{title:"Decimal values",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`px2num('${e}') → ${p(e)} (expected: ${n})`).join(`
`)})})},play:async()=>{const t=[{input:"12.5px",expected:12.5},{input:"0.5px",expected:.5},{input:"1.75px",expected:1.75},{input:"100.25px",expected:100.25}];for(const{input:e,expected:n}of t)await s(p(e)).toBe(n)}},f={tags:["unit"],parameters:a({description:{story:"Edge cases: zero, one, and large values."}}),decorators:[i(),c({source:d`
                px2num('0px')   // 0
                px2num(0)       // 0
                px2num('1px')   // 1
                px2num(1)       // 1
                px2num('1000px') // 1000
                px2num(1000)    // 1000
            `})],render(){const t=[{input:"0px",expected:0},{input:0,expected:0},{input:"1px",expected:1},{input:1,expected:1},{input:"1000px",expected:1e3},{input:1e3,expected:1e3}];return r.jsx(o,{title:"Edge cases",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>typeof e=="string"?`px2num('${e}') → ${p(e)} (expected: ${n})`:`px2num(${e}) → ${p(e)} (expected: ${n})`).join(`
`)})})},play:async()=>{const t=[{input:"0px",expected:0},{input:0,expected:0},{input:"1px",expected:1},{input:1,expected:1},{input:"1000px",expected:1e3},{input:1e3,expected:1e3}];for(const{input:e,expected:n}of t)await s(p(e)).toBe(n)}},y={tags:["use-case"],parameters:a({description:{story:"Number and string inputs both produce the same numeric result."}}),decorators:[i(),c({source:d`
                px2num(16)      // 16  (number)
                px2num('16px')  // 16  (string with px)
                px2num('16')    // 16  (string without px)
                px2num(32.5)    // 32.5
                px2num('32.5px') // 32.5
            `})],render(){const t=[{input:16,description:"Number input",expected:16},{input:"16px",description:"String with px suffix",expected:16},{input:"16",description:"String without px suffix",expected:16},{input:32.5,description:"Decimal number",expected:32.5},{input:"32.5px",description:"Decimal string with px",expected:32.5}];return r.jsx(o,{title:"Same result from number or string",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,description:n})=>`px2num(${typeof e=="string"?`'${e}'`:e}) → ${p(e)} (${n})`).join(`
`)})})},play:async()=>{const t=[{input:16,expected:16},{input:"16px",expected:16},{input:"16",expected:16},{input:32.5,expected:32.5},{input:"32.5px",expected:32.5}];for(const{input:e,expected:n}of t)await s(p(e)).toBe(n)}},h={tags:["unit"],parameters:a({description:{story:"Validation and edge cases: empty string, non-numeric, double px, whitespace, case."}}),decorators:[i(),c({source:d`
                px2num('')        // NaN
                px2num('px')      // NaN
                px2num('16pxpx')  // 16
                px2num(' 16px ')  // 16
                px2num('16PX')    // 16
            `})],render(){const t=[{input:"",expected:Number.NaN,description:"Empty string"},{input:"px",expected:Number.NaN,description:"Only px suffix"},{input:"abc",expected:Number.NaN,description:"Non-numeric string"},{input:"16pxpx",expected:16,description:"Double px suffix"},{input:" 16px ",expected:16,description:"Whitespace around value"},{input:"16PX",expected:16,description:"Uppercase PX"}];return r.jsx(o,{title:"Validation & edge cases",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n,description:u})=>{const x=p(e),m=Number.isNaN(x)?"NaN":x,$=Number.isNaN(n)?"NaN":n;return`px2num('${e}') → ${m} (expected: ${$}, ${u})`}).join(`
`)})})},play:async()=>{await s(Number.isNaN(p(""))).toBe(!0),await s(Number.isNaN(p("px"))).toBe(!0),await s(Number.isNaN(p("abc"))).toBe(!0),await s(p("16pxpx")).toBe(16),await s(p(" 16px ")).toBe(16),await s(p("16PX")).toBe(16)}},b={name:"type validation",tags:["unit"],parameters:a({description:{story:"null and undefined are passed through as-is. Other invalid types (boolean, etc.) return NaN."}}),decorators:[i()],render(){const t=[{input:null,description:"null value (pass-through)"},{input:void 0,description:"undefined value (pass-through)"},{input:!0,description:"boolean true"},{input:!1,description:"boolean false"}];return r.jsx(o,{title:"Type validation",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,description:n})=>{const u=p(e),x=u===null?"null":u===void 0?"undefined":Number.isNaN(u)?"NaN":u;return`px2num(${e===null?"null":String(e)}) → ${x} (${n})`}).join(`
`)})})},play:async()=>{await s(p(null)).toBe(null),await s(p(void 0)).toBe(void 0),await s(Number.isNaN(p(!0))).toBe(!0),await s(Number.isNaN(p(!1))).toBe(!0)}},w={name:"performance test",tags:["unit","!test"],parameters:a({description:{story:"Rough throughput for number and string inputs."}}),decorators:[i()],render(){const t=[{count:1e3,input:"16px"},{count:1e3,input:16},{count:1e3,input:"123.456px"}];return r.jsx(o,{title:"Performance test",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({count:e,input:n})=>{const u=performance.now();for(let m=0;m<e;m++)p(n);const x=performance.now()-u;return`${e} × px2num(${typeof n=="string"?`'${n}'`:n}) → ${x.toFixed(2)}ms`}).join(`
`)})})}},S={tags:["source"],parameters:a({source:{code:C}}),decorators:[c()]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Convert numeric pixel values; number input is returned as-is.'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>px2num(px)</code> returns the numeric value. Number input is passed through.
                    </p>
                </>
  }), showSource({
    source: dedent\`
                px2num(16)  // 16
                px2num(32)  // 32
                px2num(8)   // 8
                px2num(24)  // 24
            \`
  })],
  render() {
    const examples = [{
      input: 16,
      expected: 16
    }, {
      input: 32,
      expected: 32
    }, {
      input: 8,
      expected: 8
    }, {
      input: 24,
      expected: 24
    }];
    return <StoryCard title="Basic usage (number input)" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`px2num(\${input}) → \${px2num(input)} (expected: \${expected})\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: 16,
      expected: 16
    }, {
      input: 32,
      expected: 32
    }, {
      input: 8,
      expected: 8
    }, {
      input: 24,
      expected: 24
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(px2num(input)).toBe(expected);
    }
  }
}`,...l.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'String inputs like "16px" or "16" are parsed to numbers.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2num('16px')  // 16
                px2num('32px')  // 32
                px2num('24')    // 24
                px2num('8.5px') // 8.5
            \`
  })],
  render() {
    const examples = [{
      input: '16px',
      expected: 16
    }, {
      input: '32px',
      expected: 32
    }, {
      input: '24',
      expected: 24
    }, {
      input: '8.5px',
      expected: 8.5
    }];
    return <StoryCard title="String input" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`px2num('\${input}') → \${px2num(input)} (expected: \${expected})\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: '16px',
      expected: 16
    }, {
      input: '32px',
      expected: 32
    }, {
      input: '24',
      expected: 24
    }, {
      input: '8.5px',
      expected: 8.5
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(px2num(input)).toBe(expected);
    }
  }
}`,...N.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Decimal pixel values are parsed correctly.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2num('12.5px')   // 12.5
                px2num('0.5px')    // 0.5
                px2num('1.75px')   // 1.75
                px2num('100.25px') // 100.25
            \`
  })],
  render() {
    const examples = [{
      input: '12.5px',
      expected: 12.5
    }, {
      input: '0.5px',
      expected: 0.5
    }, {
      input: '1.75px',
      expected: 1.75
    }, {
      input: '100.25px',
      expected: 100.25
    }];
    return <StoryCard title="Decimal values" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`px2num('\${input}') → \${px2num(input)} (expected: \${expected})\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: '12.5px',
      expected: 12.5
    }, {
      input: '0.5px',
      expected: 0.5
    }, {
      input: '1.75px',
      expected: 1.75
    }, {
      input: '100.25px',
      expected: 100.25
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(px2num(input)).toBe(expected);
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Edge cases: zero, one, and large values.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2num('0px')   // 0
                px2num(0)       // 0
                px2num('1px')   // 1
                px2num(1)       // 1
                px2num('1000px') // 1000
                px2num(1000)    // 1000
            \`
  })],
  render() {
    const examples = [{
      input: '0px',
      expected: 0
    }, {
      input: 0,
      expected: 0
    }, {
      input: '1px',
      expected: 1
    }, {
      input: 1,
      expected: 1
    }, {
      input: '1000px',
      expected: 1000
    }, {
      input: 1000,
      expected: 1000
    }];
    return <StoryCard title="Edge cases" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => typeof input === 'string' ? \`px2num('\${input}') → \${px2num(input)} (expected: \${expected})\` : \`px2num(\${input}) → \${px2num(input)} (expected: \${expected})\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: '0px' as number | string,
      expected: 0
    }, {
      input: 0,
      expected: 0
    }, {
      input: '1px' as number | string,
      expected: 1
    }, {
      input: 1,
      expected: 1
    }, {
      input: '1000px' as number | string,
      expected: 1000
    }, {
      input: 1000,
      expected: 1000
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(px2num(input)).toBe(expected);
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Number and string inputs both produce the same numeric result.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2num(16)      // 16  (number)
                px2num('16px')  // 16  (string with px)
                px2num('16')    // 16  (string without px)
                px2num(32.5)    // 32.5
                px2num('32.5px') // 32.5
            \`
  })],
  render() {
    const examples = [{
      input: 16,
      description: 'Number input',
      expected: 16
    }, {
      input: '16px',
      description: 'String with px suffix',
      expected: 16
    }, {
      input: '16',
      description: 'String without px suffix',
      expected: 16
    }, {
      input: 32.5,
      description: 'Decimal number',
      expected: 32.5
    }, {
      input: '32.5px',
      description: 'Decimal string with px',
      expected: 32.5
    }];
    return <StoryCard title="Same result from number or string" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          description
        }) => \`px2num(\${typeof input === 'string' ? \`'\${input}'\` : input}) → \${px2num(input)} (\${description})\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: 16 as number | string,
      expected: 16
    }, {
      input: '16px',
      expected: 16
    }, {
      input: '16',
      expected: 16
    }, {
      input: 32.5,
      expected: 32.5
    }, {
      input: '32.5px',
      expected: 32.5
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(px2num(input)).toBe(expected);
    }
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Validation and edge cases: empty string, non-numeric, double px, whitespace, case.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2num('')        // NaN
                px2num('px')      // NaN
                px2num('16pxpx')  // 16
                px2num(' 16px ')  // 16
                px2num('16PX')    // 16
            \`
  })],
  render() {
    const testCases = [{
      input: '',
      expected: Number.NaN,
      description: 'Empty string'
    }, {
      input: 'px',
      expected: Number.NaN,
      description: 'Only px suffix'
    }, {
      input: 'abc',
      expected: Number.NaN,
      description: 'Non-numeric string'
    }, {
      input: '16pxpx',
      expected: 16,
      description: 'Double px suffix'
    }, {
      input: ' 16px ',
      expected: 16,
      description: 'Whitespace around value'
    }, {
      input: '16PX',
      expected: 16,
      description: 'Uppercase PX'
    }];
    return <StoryCard title="Validation & edge cases" appearance="output">
                <pre className="text-sm">
                    {testCases.map(({
          input,
          expected,
          description
        }) => {
          const result = px2num(input);
          const shown = Number.isNaN(result) ? 'NaN' : result;
          const exp = Number.isNaN(expected) ? 'NaN' : expected;
          return \`px2num('\${input}') → \${shown} (expected: \${exp}, \${description})\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(Number.isNaN(px2num(''))).toBe(true);
    await expect(Number.isNaN(px2num('px'))).toBe(true);
    await expect(Number.isNaN(px2num('abc'))).toBe(true);
    await expect(px2num('16pxpx')).toBe(16);
    await expect(px2num(' 16px ')).toBe(16);
    await expect(px2num('16PX')).toBe(16);
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'type validation',
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'null and undefined are passed through as-is. Other invalid types (boolean, etc.) return NaN.'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const typeTests = [{
      input: null,
      description: 'null value (pass-through)'
    }, {
      input: undefined,
      description: 'undefined value (pass-through)'
    }, {
      input: true,
      description: 'boolean true'
    }, {
      input: false,
      description: 'boolean false'
    }];
    return <StoryCard title="Type validation" appearance="output">
                <pre className="text-sm">
                    {typeTests.map(({
          input,
          description
        }) => {
          const result = px2num(input as number | string | null | undefined);
          const shown = result === null ? 'null' : result === undefined ? 'undefined' : Number.isNaN(result) ? 'NaN' : result;
          return \`px2num(\${input === null ? 'null' : String(input)}) → \${shown} (\${description})\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(px2num(null)).toBe(null);
    await expect(px2num(undefined)).toBe(undefined);
    await expect(Number.isNaN(px2num(true as unknown as number))).toBe(true);
    await expect(Number.isNaN(px2num(false as unknown as number))).toBe(true);
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'performance test',
  tags: ['unit', '!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Rough throughput for number and string inputs.'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const testCases = [{
      count: 1000,
      input: '16px' as number | string
    }, {
      count: 1000,
      input: 16
    }, {
      count: 1000,
      input: '123.456px' as number | string
    }];
    return <StoryCard title="Performance test" appearance="output">
                <pre className="text-sm">
                    {testCases.map(({
          count,
          input
        }) => {
          const start = performance.now();
          for (let i = 0; i < count; i++) px2num(input);
          const duration = performance.now() - start;
          return \`\${count} × px2num(\${typeof input === 'string' ? \`'\${input}'\` : input}) → \${duration.toFixed(2)}ms\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...S.parameters?.docs?.source}}};const E=["BasicUsage","StringInput","DecimalValues","EdgeCases","SameResultFromNumberOrString","Validation","TypeValidation","PerformanceTest","Source"];export{l as BasicUsage,g as DecimalValues,f as EdgeCases,w as PerformanceTest,y as SameResultFromNumberOrString,S as Source,N as StringInput,b as TypeValidation,h as Validation,E as __namedExportsOrder,T as default};
