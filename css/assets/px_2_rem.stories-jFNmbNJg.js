import{j as r}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as o,w as a,s as i,S as c}from"./iframe-odbHVDaS.js";import{d as u}from"./dedent-BuYMbVyj.js";import{p}from"./px_2_rem-CXClvWoR.js";import"./preload-helper-PPVm8Dsz.js";const N=`/**
 * Converts pixel values to rem units.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate rem units from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value as a string with 'rem' units
 *
 * @example
 * \`\`\`ts
 * px2rem(16) // '1.0000'
 * px2rem('32px') // '2.0000'
 * px2rem(20, { base: 20 }) // '1.0000'
 * px2rem(13, { precision: 2 }) // '0.81'
 * \`\`\`
 */
export function px2rem(
	px: number | string,
	options?: { base?: number | undefined; precision?: number | undefined },
): number {
	const { base = 16, precision = 4 } = options ?? {}

	if (typeof px === 'string') {
		px = px.replace(/px$/, '')
		px = Number.parseFloat(px)
	}

	return Number((px / base).toFixed(precision))
}
`,{expect:m}=__STORYBOOK_MODULE_TEST__,$={title:"convertors/px2rem",tags:["version:0.6"],parameters:o({description:{component:'Converts pixel values to rem units. Accepts a number or string (e.g. "16px" or "16") and optional base (default 16) and precision (default 4).'}}),render:()=>r.jsxDEV(r.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:15,columnNumber:17},void 0)},x={tags:["use-case","snapshot"],parameters:o({description:{story:"Convert pixel numbers to rem using the default base (16px)."}}),decorators:[a({content:r.jsxDEV(r.Fragment,{children:r.jsxDEV("p",{children:[r.jsxDEV("code",{children:"px2rem(px)"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:29,columnNumber:25},void 0)," returns the rem value. Default base is 16."]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:28,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:27,columnNumber:14},void 0)}),i({source:u`
                px2rem(16)  // 1
                px2rem(32)  // 2
                px2rem(8)   // 0.5
                px2rem(24)  // 1.5
            `})],render(){const s=[{input:16,expected:1},{input:32,expected:2},{input:8,expected:.5},{input:24,expected:1.5}];return r.jsxDEV(c,{title:"Basic usage (default base: 16px)",appearance:"output",children:r.jsxDEV("pre",{className:"text-sm",children:s.map(({input:e,expected:n})=>`px2rem(${e}) → ${p(e)}rem (expected: ${n}rem)`).join(`
`)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:55,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:54,columnNumber:12},this)},play:async()=>{const s=[{input:16,expected:1},{input:32,expected:2},{input:8,expected:.5},{input:24,expected:1.5}];for(const{input:e,expected:n}of s)await m(p(e)).toBe(n)}},d={tags:["use-case"],parameters:o({description:{story:'String inputs like "16px" or "24" are parsed and converted.'}}),decorators:[a(),i({source:u`
                px2rem('16px')  // 1
                px2rem('32px')  // 2
                px2rem('24')    // 1.5
                px2rem('8.5px') // 0.5313
            `})],render(){const s=[{input:"16px",expected:1},{input:"32px",expected:2},{input:"24",expected:1.5},{input:"8.5px",expected:.5313}];return r.jsxDEV(c,{title:"String input",appearance:"output",children:r.jsxDEV("pre",{className:"text-sm",children:s.map(({input:e,expected:n})=>`px2rem('${e}') → ${p(e)}rem (expected: ${n}rem)`).join(`
`)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:115,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:114,columnNumber:12},this)},play:async()=>{const s=[{input:"16px",expected:1},{input:"32px",expected:2},{input:"24",expected:1.5},{input:"8.5px",expected:.5313}];for(const{input:e,expected:n}of s)await m(p(e)).toBe(n)}},l={name:"custom base",tags:["use-case"],parameters:o({description:{story:"Pass a custom base (pixels per 1rem) via options."}}),decorators:[a(),i({source:u`
                px2rem(20, { base: 20 })  // 1
                px2rem(40, { base: 20 })  // 2
                px2rem(10, { base: 20 })  // 0.5
                px2rem(30, { base: 20 })  // 1.5
            `})],render(){const s=[{input:20,base:20,expected:1},{input:40,base:20,expected:2},{input:10,base:20,expected:.5},{input:30,base:20,expected:1.5}];return r.jsxDEV(c,{title:"Custom base (20px)",appearance:"output",children:r.jsxDEV("pre",{className:"text-sm",children:s.map(({input:e,base:n,expected:t})=>`px2rem(${e}, { base: ${n} }) → ${p(e,{base:n})}rem (expected: ${t}rem)`).join(`
`)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:180,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:179,columnNumber:12},this)},play:async()=>{const s=[{input:20,base:20,expected:1},{input:40,base:20,expected:2},{input:10,base:20,expected:.5},{input:30,base:20,expected:1.5}];for(const{input:e,base:n,expected:t}of s)await m(p(e,{base:n})).toBe(t)}},b={name:"custom precision",tags:["use-case"],parameters:o({description:{story:"Control decimal places with the precision option."}}),decorators:[a(),i({source:u`
                px2rem(13, { precision: 0 }) // 1
                px2rem(13, { precision: 1 }) // 0.8
                px2rem(13, { precision: 2 }) // 0.81
                px2rem(13, { precision: 4 }) // 0.8125
            `})],render(){const e=[0,1,2,3,4,6];return r.jsxDEV(c,{title:"Custom precision (13px ÷ 16px)",appearance:"output",children:r.jsxDEV("pre",{className:"text-sm",children:e.map(n=>`px2rem(13, { precision: ${n} }) → ${p(13,{precision:n})}rem`).join(`
`)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:240,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:239,columnNumber:12},this)},play:async()=>{const e=[0,1,2,3,4,6],n=[1,.8,.81,.813,.8125,.8125];for(let t=0;t<e.length;t++)await m(p(13,{precision:e[t]})).toBe(n[t])}},f={name:"base and precision",tags:["use-case"],parameters:o({description:{story:"Combine custom base and precision."}}),decorators:[a(),i({source:u`
                px2rem(18, { base: 18, precision: 2 })
                px2rem(27, { base: 18, precision: 3 })
                px2rem('36px', { base: 18, precision: 1 })
                px2rem(9, { base: 18, precision: 0 })
            `})],render(){const s=[{input:18,base:18,precision:2},{input:27,base:18,precision:3},{input:"36px",base:18,precision:1},{input:9,base:18,precision:0}];return r.jsxDEV(c,{title:"Custom base and precision",appearance:"output",children:r.jsxDEV("pre",{className:"text-sm",children:s.map(({input:e,base:n,precision:t})=>`px2rem(${typeof e=="string"?`'${e}'`:e}, { base: ${n}, precision: ${t} }) → ${p(e,{base:n,precision:t})}rem`).join(`
`)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:293,columnNumber:17},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx",lineNumber:292,columnNumber:12},this)},play:async()=>{const s=[{input:18,base:18,precision:2,expected:1},{input:27,base:18,precision:3,expected:1.5},{input:"36px",base:18,precision:1,expected:2},{input:9,base:18,precision:0,expected:1}];for(const{input:e,base:n,precision:t,expected:h}of s)await m(p(e,{base:n,precision:t})).toBe(h)}},w={tags:["source"],parameters:o({source:{code:N}}),decorators:[i()]};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'snapshot'],
  parameters: defineDocsParam({
    description: {
      story: 'Convert pixel numbers to rem using the default base (16px).'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>px2rem(px)</code> returns the rem value. Default base is 16.
                    </p>
                </>
  }), showSource({
    source: dedent\`
                px2rem(16)  // 1
                px2rem(32)  // 2
                px2rem(8)   // 0.5
                px2rem(24)  // 1.5
            \`
  })],
  render() {
    const examples = [{
      input: 16,
      expected: 1
    }, {
      input: 32,
      expected: 2
    }, {
      input: 8,
      expected: 0.5
    }, {
      input: 24,
      expected: 1.5
    }];
    return <StoryCard title="Basic usage (default base: 16px)" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`px2rem(\${input}) → \${px2rem(input)}rem (expected: \${expected}rem)\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: 16,
      expected: 1
    }, {
      input: 32,
      expected: 2
    }, {
      input: 8,
      expected: 0.5
    }, {
      input: 24,
      expected: 1.5
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(px2rem(input)).toBe(expected);
    }
  }
}`,...x.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'String inputs like "16px" or "24" are parsed and converted.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2rem('16px')  // 1
                px2rem('32px')  // 2
                px2rem('24')    // 1.5
                px2rem('8.5px') // 0.5313
            \`
  })],
  render() {
    const examples = [{
      input: '16px',
      expected: 1
    }, {
      input: '32px',
      expected: 2
    }, {
      input: '24',
      expected: 1.5
    }, {
      input: '8.5px',
      expected: 0.5313
    }];
    return <StoryCard title="String input" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`px2rem('\${input}') → \${px2rem(input)}rem (expected: \${expected}rem)\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: '16px',
      expected: 1
    }, {
      input: '32px',
      expected: 2
    }, {
      input: '24',
      expected: 1.5
    }, {
      input: '8.5px',
      expected: 0.5313
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(px2rem(input)).toBe(expected);
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'custom base',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Pass a custom base (pixels per 1rem) via options.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2rem(20, { base: 20 })  // 1
                px2rem(40, { base: 20 })  // 2
                px2rem(10, { base: 20 })  // 0.5
                px2rem(30, { base: 20 })  // 1.5
            \`
  })],
  render() {
    const examples = [{
      input: 20,
      base: 20,
      expected: 1
    }, {
      input: 40,
      base: 20,
      expected: 2
    }, {
      input: 10,
      base: 20,
      expected: 0.5
    }, {
      input: 30,
      base: 20,
      expected: 1.5
    }];
    return <StoryCard title="Custom base (20px)" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          base,
          expected
        }) => \`px2rem(\${input}, { base: \${base} }) → \${px2rem(input, {
          base
        })}rem (expected: \${expected}rem)\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: 20,
      base: 20,
      expected: 1
    }, {
      input: 40,
      base: 20,
      expected: 2
    }, {
      input: 10,
      base: 20,
      expected: 0.5
    }, {
      input: 30,
      base: 20,
      expected: 1.5
    }];
    for (const {
      input,
      base,
      expected
    } of examples) {
      await expect(px2rem(input, {
        base
      })).toBe(expected);
    }
  }
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'custom precision',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Control decimal places with the precision option.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2rem(13, { precision: 0 }) // 1
                px2rem(13, { precision: 1 }) // 0.8
                px2rem(13, { precision: 2 }) // 0.81
                px2rem(13, { precision: 4 }) // 0.8125
            \`
  })],
  render() {
    const input = 13;
    const precisions = [0, 1, 2, 3, 4, 6];
    return <StoryCard title="Custom precision (13px ÷ 16px)" appearance="output">
                <pre className="text-sm">
                    {precisions.map(precision => \`px2rem(\${input}, { precision: \${precision} }) → \${px2rem(input, {
          precision
        })}rem\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const input = 13;
    const precisions = [0, 1, 2, 3, 4, 6];
    const expectedValues = [1, 0.8, 0.81, 0.813, 0.8125, 0.8125]; // 13/16 with each precision
    for (let i = 0; i < precisions.length; i++) {
      await expect(px2rem(input, {
        precision: precisions[i]
      })).toBe(expectedValues[i]);
    }
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'base and precision',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Combine custom base and precision.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                px2rem(18, { base: 18, precision: 2 })
                px2rem(27, { base: 18, precision: 3 })
                px2rem('36px', { base: 18, precision: 1 })
                px2rem(9, { base: 18, precision: 0 })
            \`
  })],
  render() {
    const examples = [{
      input: 18 as number | string,
      base: 18,
      precision: 2
    }, {
      input: 27,
      base: 18,
      precision: 3
    }, {
      input: '36px' as number | string,
      base: 18,
      precision: 1
    }, {
      input: 9,
      base: 18,
      precision: 0
    }];
    return <StoryCard title="Custom base and precision" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          base,
          precision
        }) => \`px2rem(\${typeof input === 'string' ? \`'\${input}'\` : input}, { base: \${base}, precision: \${precision} }) → \${px2rem(input, {
          base,
          precision
        })}rem\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: 18 as number | string,
      base: 18,
      precision: 2,
      expected: 1
    }, {
      input: 27,
      base: 18,
      precision: 3,
      expected: 1.5
    }, {
      input: '36px' as number | string,
      base: 18,
      precision: 1,
      expected: 2
    }, {
      input: 9,
      base: 18,
      precision: 0,
      expected: 1
    }];
    for (const {
      input,
      base,
      precision,
      expected
    } of examples) {
      await expect(px2rem(input, {
        base,
        precision
      })).toBe(expected);
    }
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...w.parameters?.docs?.source}}};const C=["BasicUsage","StringInput","CustomBase","CustomPrecision","AllOptions","Source"];export{f as AllOptions,x as BasicUsage,l as CustomBase,b as CustomPrecision,w as Source,d as StringInput,C as __namedExportsOrder,$ as default};
