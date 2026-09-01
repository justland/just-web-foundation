import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./parse-css-number-BPjrhHrH.js";import{t as u}from"./src-BVeczmcL.js";var d;function f(){return(f=e((()=>{d=`/**
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
`})))()}var p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/px2num`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Converts pixel values to numbers. Accepts a number or string (e.g. "16px" or "16") and returns the numeric value.`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Convert numeric pixel values; number input is returned as-is.`}}),decorators:[a({content:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`px2num(px)`}),` returns the numeric value. Number input is passed through.`]})})}),r({source:c`
                px2num(16)  // 16
                px2num(32)  // 32
                px2num(8)   // 8
                px2num(24)  // 24
            `})],render(){return(0,p.jsx)(i,{title:`Basic usage (number input)`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}].map(({input:e,expected:t})=>`px2num(${e}) → ${l(e)} (expected: ${t})`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}])await m(l(e)).toBe(t)}},_={tags:[`use-case`],parameters:n({description:{story:`String inputs like "16px" or "16" are parsed to numbers.`}}),decorators:[a(),r({source:c`
                px2num('16px')  // 16
                px2num('32px')  // 32
                px2num('24')    // 24
                px2num('8.5px') // 8.5
            `})],render(){return(0,p.jsx)(i,{title:`String input`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:`16px`,expected:16},{input:`32px`,expected:32},{input:`24`,expected:24},{input:`8.5px`,expected:8.5}].map(({input:e,expected:t})=>`px2num('${e}') → ${l(e)} (expected: ${t})`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:`16px`,expected:16},{input:`32px`,expected:32},{input:`24`,expected:24},{input:`8.5px`,expected:8.5}])await m(l(e)).toBe(t)}},v={tags:[`use-case`],parameters:n({description:{story:`Decimal pixel values are parsed correctly.`}}),decorators:[a(),r({source:c`
                px2num('12.5px')   // 12.5
                px2num('0.5px')    // 0.5
                px2num('1.75px')   // 1.75
                px2num('100.25px') // 100.25
            `})],render(){return(0,p.jsx)(i,{title:`Decimal values`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:`12.5px`,expected:12.5},{input:`0.5px`,expected:.5},{input:`1.75px`,expected:1.75},{input:`100.25px`,expected:100.25}].map(({input:e,expected:t})=>`px2num('${e}') → ${l(e)} (expected: ${t})`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:`12.5px`,expected:12.5},{input:`0.5px`,expected:.5},{input:`1.75px`,expected:1.75},{input:`100.25px`,expected:100.25}])await m(l(e)).toBe(t)}},y={tags:[`unit`],parameters:n({description:{story:`Edge cases: zero, one, and large values.`}}),decorators:[a(),r({source:c`
                px2num('0px')   // 0
                px2num(0)       // 0
                px2num('1px')   // 1
                px2num(1)       // 1
                px2num('1000px') // 1000
                px2num(1000)    // 1000
            `})],render(){return(0,p.jsx)(i,{title:`Edge cases`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:`0px`,expected:0},{input:0,expected:0},{input:`1px`,expected:1},{input:1,expected:1},{input:`1000px`,expected:1e3},{input:1e3,expected:1e3}].map(({input:e,expected:t})=>typeof e==`string`?`px2num('${e}') → ${l(e)} (expected: ${t})`:`px2num(${e}) → ${l(e)} (expected: ${t})`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:`0px`,expected:0},{input:0,expected:0},{input:`1px`,expected:1},{input:1,expected:1},{input:`1000px`,expected:1e3},{input:1e3,expected:1e3}])await m(l(e)).toBe(t)}},b={tags:[`use-case`],parameters:n({description:{story:`Number and string inputs both produce the same numeric result.`}}),decorators:[a(),r({source:c`
                px2num(16)      // 16  (number)
                px2num('16px')  // 16  (string with px)
                px2num('16')    // 16  (string without px)
                px2num(32.5)    // 32.5
                px2num('32.5px') // 32.5
            `})],render(){return(0,p.jsx)(i,{title:`Same result from number or string`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:16,description:`Number input`,expected:16},{input:`16px`,description:`String with px suffix`,expected:16},{input:`16`,description:`String without px suffix`,expected:16},{input:32.5,description:`Decimal number`,expected:32.5},{input:`32.5px`,description:`Decimal string with px`,expected:32.5}].map(({input:e,description:t})=>`px2num(${typeof e==`string`?`'${e}'`:e}) → ${l(e)} (${t})`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:16,expected:16},{input:`16px`,expected:16},{input:`16`,expected:16},{input:32.5,expected:32.5},{input:`32.5px`,expected:32.5}])await m(l(e)).toBe(t)}},x={tags:[`unit`],parameters:n({description:{story:`Validation and edge cases: empty string, non-numeric, double px, whitespace, case.`}}),decorators:[a(),r({source:c`
                px2num('')        // NaN
                px2num('px')      // NaN
                px2num('16pxpx')  // 16
                px2num(' 16px ')  // 16
                px2num('16PX')    // 16
            `})],render(){return(0,p.jsx)(i,{title:`Validation & edge cases`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:``,expected:NaN,description:`Empty string`},{input:`px`,expected:NaN,description:`Only px suffix`},{input:`abc`,expected:NaN,description:`Non-numeric string`},{input:`16pxpx`,expected:16,description:`Double px suffix`},{input:` 16px `,expected:16,description:`Whitespace around value`},{input:`16PX`,expected:16,description:`Uppercase PX`}].map(({input:e,expected:t,description:n})=>{let r=l(e);return`px2num('${e}') → ${Number.isNaN(r)?`NaN`:r} (expected: ${Number.isNaN(t)?`NaN`:t}, ${n})`}).join(`
`)})})},play:async()=>{await m(Number.isNaN(l(``))).toBe(!0),await m(Number.isNaN(l(`px`))).toBe(!0),await m(Number.isNaN(l(`abc`))).toBe(!0),await m(l(`16pxpx`)).toBe(16),await m(l(` 16px `)).toBe(16),await m(l(`16PX`)).toBe(16)}},S={name:`type validation`,tags:[`unit`],parameters:n({description:{story:`null and undefined are passed through as-is. Other invalid types (boolean, etc.) return NaN.`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Type validation`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:null,description:`null value (pass-through)`},{input:void 0,description:`undefined value (pass-through)`},{input:!0,description:`boolean true`},{input:!1,description:`boolean false`}].map(({input:e,description:t})=>{let n=l(e);return`px2num(${e===null?`null`:String(e)}) → ${n===null?`null`:n===void 0?`undefined`:Number.isNaN(n)?`NaN`:n} (${t})`}).join(`
`)})})},play:async()=>{await m(l(null)).toBe(null),await m(l(void 0)).toBe(void 0),await m(Number.isNaN(l(!0))).toBe(!0),await m(Number.isNaN(l(!1))).toBe(!0)}},C={name:`performance test`,tags:[`unit`,`!test`],parameters:n({description:{story:`Rough throughput for number and string inputs.`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Performance test`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{count:1e3,input:`16px`},{count:1e3,input:16},{count:1e3,input:`123.456px`}].map(({count:e,input:t})=>{let n=performance.now();for(let n=0;n<e;n++)l(t);let r=performance.now()-n;return`${e} × px2num(${typeof t==`string`?`'${t}'`:t}) → ${r.toFixed(2)}ms`}).join(`
`)})})}},w={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...w.parameters?.docs?.source}}},T=[`BasicUsage`,`StringInput`,`DecimalValues`,`EdgeCases`,`SameResultFromNumberOrString`,`Validation`,`TypeValidation`,`PerformanceTest`,`Source`]})))()}E();export{g as BasicUsage,v as DecimalValues,y as EdgeCases,C as PerformanceTest,b as SameResultFromNumberOrString,w as Source,_ as StringInput,S as TypeValidation,x as Validation,T as __namedExportsOrder,h as default};