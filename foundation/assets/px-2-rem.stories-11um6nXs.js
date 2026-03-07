import{j as r,d as a,w as o,s as c,S as u}from"./iframe-D5l5lmBD.js";import{d as x}from"./dedent-BuYMbVyj.js";import{p}from"./px-2-rem-CPoMxM9B.js";import"./preload-helper-PPVm8Dsz.js";const S=`/**
 * Converts pixel values to rem units.
 *
 * @param px - The pixel value to convert. Can be a number or string (e.g. '16px' or '16')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate rem units from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value, or null/undefined if input is null/undefined
 *
 * @example
 * \`\`\`ts
 * px2rem(16) // 1
 * px2rem('32px') // 2
 * px2rem(20, { base: 20 }) // 1
 * px2rem(13, { precision: 2 }) // 0.81
 * px2rem(null) // null
 * px2rem(undefined) // undefined
 * \`\`\`
 */
export function px2rem(
	px: number | string | null | undefined,
	options?: { base?: number | undefined; precision?: number | undefined } | undefined
): number | null | undefined {
	if (px === null || px === undefined) return px

	const { base = 16, precision = 4 } = options ?? {}

	if (typeof px === 'string') {
		px = px.replace(/px$/, '')
		px = Number.parseFloat(px)
	}

	return Number((px / base).toFixed(precision))
}
`,{expect:i}=__STORYBOOK_MODULE_TEST__,B={title:"units/px2rem",tags:["func","version:3.1"],parameters:a({description:{component:'Converts pixel values to rem units. Accepts a number or string (e.g. "16px" or "16") and optional base (default 16) and precision (default 4).'}}),render:()=>r.jsx(r.Fragment,{})},d={tags:["use-case"],parameters:a({description:{story:"Convert pixel numbers to rem using the default base (16px)."}}),decorators:[o({content:r.jsx(r.Fragment,{children:r.jsxs("p",{children:[r.jsx("code",{children:"px2rem(px)"})," returns the rem value. Default base is 16."]})})}),c({source:x`
                px2rem(16)  // 1
                px2rem(32)  // 2
                px2rem(8)   // 0.5
                px2rem(24)  // 1.5
            `})],render(){const t=[{input:16,expected:1},{input:32,expected:2},{input:8,expected:.5},{input:24,expected:1.5}];return r.jsx(u,{title:"Basic usage (default base: 16px)",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`px2rem(${e}) → ${p(e)}rem (expected: ${n}rem)`).join(`
`)})})},play:async()=>{const t=[{input:16,expected:1},{input:32,expected:2},{input:8,expected:.5},{input:24,expected:1.5}];for(const{input:e,expected:n}of t)await i(p(e)).toBe(n)}},m={tags:["use-case"],parameters:a({description:{story:'String inputs like "16px" or "16" are parsed and converted.'}}),decorators:[o(),c({source:x`
                px2rem('16px')  // 1
                px2rem('32px')  // 2
                px2rem('24')    // 1.5
                px2rem('8.5px') // 0.5313
            `})],render(){const t=[{input:"16px",expected:1},{input:"32px",expected:2},{input:"24",expected:1.5},{input:"8.5px",expected:.5313}];return r.jsx(u,{title:"String input",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`px2rem('${e}') → ${p(e)}rem (expected: ${n}rem)`).join(`
`)})})},play:async()=>{const t=[{input:"16px",expected:1},{input:"32px",expected:2},{input:"24",expected:1.5},{input:"8.5px",expected:.5313}];for(const{input:e,expected:n}of t)await i(p(e)).toBe(n)}},l={tags:["use-case"],parameters:a({description:{story:"Pass a custom base (pixels per 1rem) via options."}}),decorators:[o(),c({source:x`
                px2rem(20, { base: 20 })  // 1
                px2rem(40, { base: 20 })  // 2
                px2rem(10, { base: 20 })  // 0.5
                px2rem(30, { base: 20 })  // 1.5
            `})],render(){const t=[{input:20,base:20,expected:1},{input:40,base:20,expected:2},{input:10,base:20,expected:.5},{input:30,base:20,expected:1.5}];return r.jsx(u,{title:"Custom base (20px)",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,base:n,expected:s})=>`px2rem(${e}, { base: ${n} }) → ${p(e,{base:n})}rem (expected: ${s}rem)`).join(`
`)})})},play:async()=>{const t=[{input:20,base:20,expected:1},{input:40,base:20,expected:2},{input:10,base:20,expected:.5},{input:30,base:20,expected:1.5}];for(const{input:e,base:n,expected:s}of t)await i(p(e,{base:n})).toBe(s)}},b={tags:["use-case"],parameters:a({description:{story:"Control decimal places with the precision option."}}),decorators:[o(),c({source:x`
                px2rem(13, { precision: 0 }) // 1
                px2rem(13, { precision: 1 }) // 0.8
                px2rem(13, { precision: 2 }) // 0.81
                px2rem(13, { precision: 4 }) // 0.8125
            `})],render(){const e=[0,1,2,3,4,6];return r.jsx(u,{title:"Custom precision (13px ÷ 16px)",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:e.map(n=>`px2rem(13, { precision: ${n} }) → ${p(13,{precision:n})}rem`).join(`
`)})})},play:async()=>{const e=[1,.8,.81,.813,.8125,.8125],n=[0,1,2,3,4,6];for(let s=0;s<n.length;s++)await i(p(13,{precision:n[s]})).toBe(e[s])}},f={tags:["use-case"],parameters:a({description:{story:"Combine custom base and precision."}}),decorators:[o(),c({source:x`
                px2rem(18, { base: 18, precision: 2 })
                px2rem(27, { base: 18, precision: 3 })
                px2rem('36px', { base: 18, precision: 1 })
                px2rem(9, { base: 18, precision: 0 })
            `})],render(){const t=[{input:18,base:18,precision:2},{input:27,base:18,precision:3},{input:"36px",base:18,precision:1},{input:9,base:18,precision:0}];return r.jsx(u,{title:"Custom base and precision",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,base:n,precision:s})=>`px2rem(${typeof e=="string"?`'${e}'`:e}, { base: ${n}, precision: ${s} }) → ${p(e,{base:n,precision:s})}rem`).join(`
`)})})},play:async()=>{const t=[{input:18,base:18,precision:2,expected:1},{input:27,base:18,precision:3,expected:1.5},{input:"36px",base:18,precision:1,expected:2},{input:9,base:18,precision:0,expected:1}];for(const{input:e,base:n,precision:s,expected:h}of t)await i(p(e,{base:n,precision:s})).toBe(h)}},y={tags:["unit"],parameters:a({description:{story:"null and undefined are passed through as-is."}}),decorators:[o()],render(){return r.jsx(u,{title:"Null/undefined pass-through",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:`px2rem(null) → ${p(null)}
px2rem(undefined) → ${p(void 0)}`})})},play:async()=>{await i(p(null)).toBe(null),await i(p(void 0)).toBe(void 0)}},g={tags:["source"],parameters:a({source:{code:S}}),decorators:[c()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'String inputs like "16px" or "16" are parsed and converted.'
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    const expectedByPrecision = [1, 0.8, 0.81, 0.813, 0.8125, 0.8125];
    const precisions = [0, 1, 2, 3, 4, 6];
    for (let i = 0; i < precisions.length; i++) {
      await expect(px2rem(input, {
        precision: precisions[i]
      })).toBe(expectedByPrecision[i]);
    }
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
                    {\`px2rem(null) → \${px2rem(null)}
px2rem(undefined) → \${px2rem(undefined)}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(px2rem(null)).toBe(null);
    await expect(px2rem(undefined)).toBe(undefined);
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...g.parameters?.docs?.source}}};const v=["BasicUsage","StringInput","CustomBase","CustomPrecision","BaseAndPrecision","NullUndefinedPassThrough","Source"];export{f as BaseAndPrecision,d as BasicUsage,l as CustomBase,b as CustomPrecision,y as NullUndefinedPassThrough,g as Source,m as StringInput,v as __namedExportsOrder,B as default};
