import{j as p,d as a,w as i,s as o,S as c}from"./iframe-Pea2t46H.js";import{d}from"./dedent-BuYMbVyj.js";import{p as r}from"./px-2-num-BC4tP6kO.js";import"./preload-helper-PPVm8Dsz.js";const C=`/**
 * Converts pixel values to numbers.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @returns The numeric value
 *
 * @example
 * \`\`\`ts
 * px2num(16) // 16
 * px2num('32px') // 32
 * px2num('12.5px') // 12.5
 * px2num('0px') // 0
 * \`\`\`
 */
export function px2num(px: number | string | undefined): number {
	return typeof px === 'string' ? Number.parseFloat(px.replace(/px$/, '')) : Number(px)
}
`,{expect:s}=__STORYBOOK_MODULE_TEST__,P={title:"units/px2num",tags:["func","version:next"],parameters:a({description:{component:'Converts pixel values to numbers. Accepts a number or string (e.g. "16px" or "16") and returns the numeric value.'}}),render:()=>p.jsx(p.Fragment,{})},l={tags:["use-case"],parameters:a({description:{story:"Convert numeric pixel values; number input is returned as-is."}}),decorators:[i({content:p.jsx(p.Fragment,{children:p.jsxs("p",{children:[p.jsx("code",{children:"px2num(px)"})," returns the numeric value. Number input is passed through."]})})}),o({source:d`
                px2num(16)  // 16
                px2num(32)  // 32
                px2num(8)   // 8
                px2num(24)  // 24
            `})],render(){const t=[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}];return p.jsx(c,{title:"Basic usage (number input)",appearance:"output",children:p.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`px2num(${e}) → ${r(e)} (expected: ${n})`).join(`
`)})})},play:async()=>{const t=[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}];for(const{input:e,expected:n}of t)await s(r(e)).toBe(n)}},N={tags:["use-case"],parameters:a({description:{story:'String inputs like "16px" or "16" are parsed to numbers.'}}),decorators:[i(),o({source:d`
                px2num('16px')  // 16
                px2num('32px')  // 32
                px2num('24')    // 24
                px2num('8.5px') // 8.5
            `})],render(){const t=[{input:"16px",expected:16},{input:"32px",expected:32},{input:"24",expected:24},{input:"8.5px",expected:8.5}];return p.jsx(c,{title:"String input",appearance:"output",children:p.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`px2num('${e}') → ${r(e)} (expected: ${n})`).join(`
`)})})},play:async()=>{const t=[{input:"16px",expected:16},{input:"32px",expected:32},{input:"24",expected:24},{input:"8.5px",expected:8.5}];for(const{input:e,expected:n}of t)await s(r(e)).toBe(n)}},g={tags:["use-case"],parameters:a({description:{story:"Decimal pixel values are parsed correctly."}}),decorators:[i(),o({source:d`
                px2num('12.5px')   // 12.5
                px2num('0.5px')    // 0.5
                px2num('1.75px')   // 1.75
                px2num('100.25px') // 100.25
            `})],render(){const t=[{input:"12.5px",expected:12.5},{input:"0.5px",expected:.5},{input:"1.75px",expected:1.75},{input:"100.25px",expected:100.25}];return p.jsx(c,{title:"Decimal values",appearance:"output",children:p.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`px2num('${e}') → ${r(e)} (expected: ${n})`).join(`
`)})})},play:async()=>{const t=[{input:"12.5px",expected:12.5},{input:"0.5px",expected:.5},{input:"1.75px",expected:1.75},{input:"100.25px",expected:100.25}];for(const{input:e,expected:n}of t)await s(r(e)).toBe(n)}},y={tags:["unit"],parameters:a({description:{story:"Edge cases: zero, one, and large values."}}),decorators:[i(),o({source:d`
                px2num('0px')   // 0
                px2num(0)       // 0
                px2num('1px')   // 1
                px2num(1)       // 1
                px2num('1000px') // 1000
                px2num(1000)    // 1000
            `})],render(){const t=[{input:"0px",expected:0},{input:0,expected:0},{input:"1px",expected:1},{input:1,expected:1},{input:"1000px",expected:1e3},{input:1e3,expected:1e3}];return p.jsx(c,{title:"Edge cases",appearance:"output",children:p.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>typeof e=="string"?`px2num('${e}') → ${r(e)} (expected: ${n})`:`px2num(${e}) → ${r(e)} (expected: ${n})`).join(`
`)})})},play:async()=>{const t=[{input:"0px",expected:0},{input:0,expected:0},{input:"1px",expected:1},{input:1,expected:1},{input:"1000px",expected:1e3},{input:1e3,expected:1e3}];for(const{input:e,expected:n}of t)await s(r(e)).toBe(n)}},f={tags:["use-case"],parameters:a({description:{story:"Number and string inputs both produce the same numeric result."}}),decorators:[i(),o({source:d`
                px2num(16)      // 16  (number)
                px2num('16px')  // 16  (string with px)
                px2num('16')    // 16  (string without px)
                px2num(32.5)    // 32.5
                px2num('32.5px') // 32.5
            `})],render(){const t=[{input:16,description:"Number input",expected:16},{input:"16px",description:"String with px suffix",expected:16},{input:"16",description:"String without px suffix",expected:16},{input:32.5,description:"Decimal number",expected:32.5},{input:"32.5px",description:"Decimal string with px",expected:32.5}];return p.jsx(c,{title:"Same result from number or string",appearance:"output",children:p.jsx("pre",{className:"text-sm",children:t.map(({input:e,description:n})=>`px2num(${typeof e=="string"?`'${e}'`:e}) → ${r(e)} (${n})`).join(`
`)})})},play:async()=>{const t=[{input:16,expected:16},{input:"16px",expected:16},{input:"16",expected:16},{input:32.5,expected:32.5},{input:"32.5px",expected:32.5}];for(const{input:e,expected:n}of t)await s(r(e)).toBe(n)}},h={tags:["unit"],parameters:a({description:{story:"Validation and edge cases: empty string, non-numeric, double px, whitespace, case."}}),decorators:[i(),o({source:d`
                px2num('')        // NaN
                px2num('px')      // NaN
                px2num('16pxpx')  // 16
                px2num(' 16px ')  // 16
                px2num('16PX')    // 16
            `})],render(){const t=[{input:"",expected:Number.NaN,description:"Empty string"},{input:"px",expected:Number.NaN,description:"Only px suffix"},{input:"abc",expected:Number.NaN,description:"Non-numeric string"},{input:"16pxpx",expected:16,description:"Double px suffix"},{input:" 16px ",expected:16,description:"Whitespace around value"},{input:"16PX",expected:16,description:"Uppercase PX"}];return p.jsx(c,{title:"Validation & edge cases",appearance:"output",children:p.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n,description:u})=>{const x=r(e),m=Number.isNaN(x)?"NaN":x,$=Number.isNaN(n)?"NaN":n;return`px2num('${e}') → ${m} (expected: ${$}, ${u})`}).join(`
`)})})},play:async()=>{await s(Number.isNaN(r(""))).toBe(!0),await s(Number.isNaN(r("px"))).toBe(!0),await s(Number.isNaN(r("abc"))).toBe(!0),await s(r("16pxpx")).toBe(16),await s(r(" 16px ")).toBe(16),await s(r("16PX")).toBe(16)}},b={name:"type validation",tags:["unit"],parameters:a({description:{story:"Behavior with invalid types (null, undefined, boolean, etc.)."}}),decorators:[i()],render(){const t=[{input:null,description:"null value"},{input:void 0,description:"undefined value"},{input:!0,description:"boolean true"},{input:!1,description:"boolean false"}];return p.jsx(c,{title:"Type validation",appearance:"output",children:p.jsx("pre",{className:"text-sm",children:t.map(({input:e,description:n})=>{let u;try{u=r(e)}catch{u=Number.NaN}const x=Number.isNaN(u)?"NaN":u;return`px2num(${e===null?"null":String(e)}) → ${x} (${n})`}).join(`
`)})})},play:async()=>{await s(Number.isNaN(r(void 0))).toBe(!0)}},w={name:"performance test",tags:["unit","!test"],parameters:a({description:{story:"Rough throughput for number and string inputs."}}),decorators:[i()],render(){const t=[{count:1e3,input:"16px"},{count:1e3,input:16},{count:1e3,input:"123.456px"}];return p.jsx(c,{title:"Performance test",appearance:"output",children:p.jsx("pre",{className:"text-sm",children:t.map(({count:e,input:n})=>{const u=performance.now();for(let m=0;m<e;m++)r(n);const x=performance.now()-u;return`${e} × px2num(${typeof n=="string"?`'${n}'`:n}) → ${x.toFixed(2)}ms`}).join(`
`)})})}},S={tags:["source"],parameters:a({source:{code:C}}),decorators:[o()]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
      story: 'Behavior with invalid types (null, undefined, boolean, etc.).'
    }
  }),
  decorators: [withStoryCard()],
  render() {
    const typeTests = [{
      input: null,
      description: 'null value'
    }, {
      input: undefined,
      description: 'undefined value'
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
          let result: number;
          try {
            result = px2num(input as number | string | undefined);
          } catch {
            result = Number.NaN;
          }
          const shown = Number.isNaN(result) ? 'NaN' : result;
          return \`px2num(\${input === null ? 'null' : String(input)}) → \${shown} (\${description})\`;
        }).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(Number.isNaN(px2num(undefined))).toBe(true);
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
}`,...S.parameters?.docs?.source}}};const T=["BasicUsage","StringInput","DecimalValues","EdgeCases","SameResultFromNumberOrString","Validation","TypeValidation","PerformanceTest","Source"];export{l as BasicUsage,g as DecimalValues,y as EdgeCases,w as PerformanceTest,f as SameResultFromNumberOrString,S as Source,N as StringInput,b as TypeValidation,h as Validation,T as __namedExportsOrder,P as default};
