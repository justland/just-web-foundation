import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./px-2-rem-B91-MR_-.js";import{t as u}from"./src-BVeczmcL.js";var d;function f(){return(f=e((()=>{d=`/**
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
	px: null,
	options?: { base?: number | undefined; precision?: number | undefined }
): null
export function px2rem(
	px: undefined,
	options?: { base?: number | undefined; precision?: number | undefined }
): undefined
export function px2rem(
	px: number | string,
	options?: { base?: number | undefined; precision?: number | undefined }
): number
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
`})))()}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/px2rem`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Converts pixel values to rem units. Accepts a number or string (e.g. "16px" or "16") and optional base (default 16) and precision (default 4).`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Convert pixel numbers to rem using the default base (16px).`}}),decorators:[a({content:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`px2rem(px)`}),` returns the rem value. Default base is 16.`]})})}),r({source:c`
                px2rem(16)  // 1
                px2rem(32)  // 2
                px2rem(8)   // 0.5
                px2rem(24)  // 1.5
            `})],render(){return(0,p.jsx)(i,{title:`Basic usage (default base: 16px)`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:16,expected:1},{input:32,expected:2},{input:8,expected:.5},{input:24,expected:1.5}].map(({input:e,expected:t})=>`px2rem(${e}) → ${l(e)}rem (expected: ${t}rem)`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:16,expected:1},{input:32,expected:2},{input:8,expected:.5},{input:24,expected:1.5}])await m(l(e)).toBe(t)}},_={tags:[`use-case`],parameters:n({description:{story:`String inputs like "16px" or "16" are parsed and converted.`}}),decorators:[a(),r({source:c`
                px2rem('16px')  // 1
                px2rem('32px')  // 2
                px2rem('24')    // 1.5
                px2rem('8.5px') // 0.5313
            `})],render(){return(0,p.jsx)(i,{title:`String input`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:`16px`,expected:1},{input:`32px`,expected:2},{input:`24`,expected:1.5},{input:`8.5px`,expected:.5313}].map(({input:e,expected:t})=>`px2rem('${e}') → ${l(e)}rem (expected: ${t}rem)`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:`16px`,expected:1},{input:`32px`,expected:2},{input:`24`,expected:1.5},{input:`8.5px`,expected:.5313}])await m(l(e)).toBe(t)}},v={tags:[`use-case`],parameters:n({description:{story:`Pass a custom base (pixels per 1rem) via options.`}}),decorators:[a(),r({source:c`
                px2rem(20, { base: 20 })  // 1
                px2rem(40, { base: 20 })  // 2
                px2rem(10, { base: 20 })  // 0.5
                px2rem(30, { base: 20 })  // 1.5
            `})],render(){return(0,p.jsx)(i,{title:`Custom base (20px)`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:20,base:20,expected:1},{input:40,base:20,expected:2},{input:10,base:20,expected:.5},{input:30,base:20,expected:1.5}].map(({input:e,base:t,expected:n})=>`px2rem(${e}, { base: ${t} }) → ${l(e,{base:t})}rem (expected: ${n}rem)`).join(`
`)})})},play:async()=>{for(let{input:e,base:t,expected:n}of[{input:20,base:20,expected:1},{input:40,base:20,expected:2},{input:10,base:20,expected:.5},{input:30,base:20,expected:1.5}])await m(l(e,{base:t})).toBe(n)}},y={tags:[`use-case`],parameters:n({description:{story:`Control decimal places with the precision option.`}}),decorators:[a(),r({source:c`
                px2rem(13, { precision: 0 }) // 1
                px2rem(13, { precision: 1 }) // 0.8
                px2rem(13, { precision: 2 }) // 0.81
                px2rem(13, { precision: 4 }) // 0.8125
            `})],render(){return(0,p.jsx)(i,{title:`Custom precision (13px ÷ 16px)`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[0,1,2,3,4,6].map(e=>`px2rem(13, { precision: ${e} }) → ${l(13,{precision:e})}rem`).join(`
`)})})},play:async()=>{let e=[1,.8,.81,.813,.8125,.8125],t=[0,1,2,3,4,6];for(let n=0;n<t.length;n++)await m(l(13,{precision:t[n]})).toBe(e[n])}},b={tags:[`use-case`],parameters:n({description:{story:`Combine custom base and precision.`}}),decorators:[a(),r({source:c`
                px2rem(18, { base: 18, precision: 2 })
                px2rem(27, { base: 18, precision: 3 })
                px2rem('36px', { base: 18, precision: 1 })
                px2rem(9, { base: 18, precision: 0 })
            `})],render(){return(0,p.jsx)(i,{title:`Custom base and precision`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:18,base:18,precision:2},{input:27,base:18,precision:3},{input:`36px`,base:18,precision:1},{input:9,base:18,precision:0}].map(({input:e,base:t,precision:n})=>`px2rem(${typeof e==`string`?`'${e}'`:e}, { base: ${t}, precision: ${n} }) → ${l(e,{base:t,precision:n})}rem`).join(`
`)})})},play:async()=>{for(let{input:e,base:t,precision:n,expected:r}of[{input:18,base:18,precision:2,expected:1},{input:27,base:18,precision:3,expected:1.5},{input:`36px`,base:18,precision:1,expected:2},{input:9,base:18,precision:0,expected:1}])await m(l(e,{base:t,precision:n})).toBe(r)}},x={tags:[`unit`],parameters:n({description:{story:`null and undefined are passed through as-is.`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Null/undefined pass-through`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`px2rem(null) → ${l(null)}
px2rem(undefined) → ${l(void 0)}`})})},play:async()=>{await m(l(null)).toBe(null),await m(l(void 0)).toBe(void 0)}},S={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...S.parameters?.docs?.source}}},C=[`BasicUsage`,`StringInput`,`CustomBase`,`CustomPrecision`,`BaseAndPrecision`,`NullUndefinedPassThrough`,`Source`]})))()}w();export{b as BaseAndPrecision,g as BasicUsage,v as CustomBase,y as CustomPrecision,x as NullUndefinedPassThrough,S as Source,_ as StringInput,C as __namedExportsOrder,h as default};