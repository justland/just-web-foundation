import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a}from"./iframe-8ZVkZNUj.js";import{n as o}from"./px_2_rem-BMNoyxsW.js";import{r as s}from"./dist-CJMrBJtm.js";import{t as c}from"./jsx-dev-runtime-DpMrmGJR.js";import{n as l,t as u}from"./dedent-DQaCLeUO.js";var d;function f(){return(f=e((()=>{d=`/**
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
	options?: { base?: number | undefined; precision?: number | undefined }
): number {
	const { base = 16, precision = 4 } = options ?? {}

	if (typeof px === 'string') {
		px = px.replace(/px$/, '')
		px = Number.parseFloat(px)
	}

	return Number((px / base).toFixed(precision))
}
`})))()}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),l(),s(),f(),p=c(),{expect:m}=__STORYBOOK_MODULE_TEST__,h=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_rem.stories.tsx`,g={title:`convertors/px2rem`,tags:[`version:0.6`],parameters:a({description:{component:`Converts pixel values to rem units. Accepts a number or string (e.g. "16px" or "16") and optional base (default 16) and precision (default 4).`}}),render:()=>(0,p.jsxDEV)(p.Fragment,{},void 0,!1,{fileName:h,lineNumber:15,columnNumber:17},void 0)},_={tags:[`use-case`],parameters:a({description:{story:`Convert pixel numbers to rem using the default base (16px).`}}),decorators:[i({content:(0,p.jsxDEV)(p.Fragment,{children:(0,p.jsxDEV)(`p`,{children:[(0,p.jsxDEV)(`code`,{children:`px2rem(px)`},void 0,!1,{fileName:h,lineNumber:29,columnNumber:25},void 0),` returns the rem value. Default base is 16.`]},void 0,!0,{fileName:h,lineNumber:28,columnNumber:21},void 0)},void 0,!1,{fileName:h,lineNumber:27,columnNumber:14},void 0)}),t({source:u`
                px2rem(16)  // 1
                px2rem(32)  // 2
                px2rem(8)   // 0.5
                px2rem(24)  // 1.5
            `})],render(){return(0,p.jsxDEV)(r,{title:`Basic usage (default base: 16px)`,appearance:`output`,children:(0,p.jsxDEV)(`pre`,{className:`text-sm`,children:[{input:16,expected:1},{input:32,expected:2},{input:8,expected:.5},{input:24,expected:1.5}].map(({input:e,expected:t})=>`px2rem(${e}) → ${o(e)}rem (expected: ${t}rem)`).join(`
`)},void 0,!1,{fileName:h,lineNumber:55,columnNumber:17},this)},void 0,!1,{fileName:h,lineNumber:54,columnNumber:12},this)},play:async()=>{for(let{input:e,expected:t}of[{input:16,expected:1},{input:32,expected:2},{input:8,expected:.5},{input:24,expected:1.5}])await m(o(e)).toBe(t)}},v={tags:[`use-case`],parameters:a({description:{story:`String inputs like "16px" or "24" are parsed and converted.`}}),decorators:[i(),t({source:u`
                px2rem('16px')  // 1
                px2rem('32px')  // 2
                px2rem('24')    // 1.5
                px2rem('8.5px') // 0.5313
            `})],render(){return(0,p.jsxDEV)(r,{title:`String input`,appearance:`output`,children:(0,p.jsxDEV)(`pre`,{className:`text-sm`,children:[{input:`16px`,expected:1},{input:`32px`,expected:2},{input:`24`,expected:1.5},{input:`8.5px`,expected:.5313}].map(({input:e,expected:t})=>`px2rem('${e}') → ${o(e)}rem (expected: ${t}rem)`).join(`
`)},void 0,!1,{fileName:h,lineNumber:115,columnNumber:17},this)},void 0,!1,{fileName:h,lineNumber:114,columnNumber:12},this)},play:async()=>{for(let{input:e,expected:t}of[{input:`16px`,expected:1},{input:`32px`,expected:2},{input:`24`,expected:1.5},{input:`8.5px`,expected:.5313}])await m(o(e)).toBe(t)}},y={name:`custom base`,tags:[`use-case`],parameters:a({description:{story:`Pass a custom base (pixels per 1rem) via options.`}}),decorators:[i(),t({source:u`
                px2rem(20, { base: 20 })  // 1
                px2rem(40, { base: 20 })  // 2
                px2rem(10, { base: 20 })  // 0.5
                px2rem(30, { base: 20 })  // 1.5
            `})],render(){return(0,p.jsxDEV)(r,{title:`Custom base (20px)`,appearance:`output`,children:(0,p.jsxDEV)(`pre`,{className:`text-sm`,children:[{input:20,base:20,expected:1},{input:40,base:20,expected:2},{input:10,base:20,expected:.5},{input:30,base:20,expected:1.5}].map(({input:e,base:t,expected:n})=>`px2rem(${e}, { base: ${t} }) → ${o(e,{base:t})}rem (expected: ${n}rem)`).join(`
`)},void 0,!1,{fileName:h,lineNumber:180,columnNumber:17},this)},void 0,!1,{fileName:h,lineNumber:179,columnNumber:12},this)},play:async()=>{for(let{input:e,base:t,expected:n}of[{input:20,base:20,expected:1},{input:40,base:20,expected:2},{input:10,base:20,expected:.5},{input:30,base:20,expected:1.5}])await m(o(e,{base:t})).toBe(n)}},b={name:`custom precision`,tags:[`use-case`],parameters:a({description:{story:`Control decimal places with the precision option.`}}),decorators:[i(),t({source:u`
                px2rem(13, { precision: 0 }) // 1
                px2rem(13, { precision: 1 }) // 0.8
                px2rem(13, { precision: 2 }) // 0.81
                px2rem(13, { precision: 4 }) // 0.8125
            `})],render(){return(0,p.jsxDEV)(r,{title:`Custom precision (13px ÷ 16px)`,appearance:`output`,children:(0,p.jsxDEV)(`pre`,{className:`text-sm`,children:[0,1,2,3,4,6].map(e=>`px2rem(13, { precision: ${e} }) → ${o(13,{precision:e})}rem`).join(`
`)},void 0,!1,{fileName:h,lineNumber:240,columnNumber:17},this)},void 0,!1,{fileName:h,lineNumber:239,columnNumber:12},this)},play:async()=>{let e=[0,1,2,3,4,6],t=[1,.8,.81,.813,.8125,.8125];for(let n=0;n<e.length;n++)await m(o(13,{precision:e[n]})).toBe(t[n])}},x={name:`base and precision`,tags:[`use-case`],parameters:a({description:{story:`Combine custom base and precision.`}}),decorators:[i(),t({source:u`
                px2rem(18, { base: 18, precision: 2 })
                px2rem(27, { base: 18, precision: 3 })
                px2rem('36px', { base: 18, precision: 1 })
                px2rem(9, { base: 18, precision: 0 })
            `})],render(){return(0,p.jsxDEV)(r,{title:`Custom base and precision`,appearance:`output`,children:(0,p.jsxDEV)(`pre`,{className:`text-sm`,children:[{input:18,base:18,precision:2},{input:27,base:18,precision:3},{input:`36px`,base:18,precision:1},{input:9,base:18,precision:0}].map(({input:e,base:t,precision:n})=>`px2rem(${typeof e==`string`?`'${e}'`:e}, { base: ${t}, precision: ${n} }) → ${o(e,{base:t,precision:n})}rem`).join(`
`)},void 0,!1,{fileName:h,lineNumber:293,columnNumber:17},this)},void 0,!1,{fileName:h,lineNumber:292,columnNumber:12},this)},play:async()=>{for(let{input:e,base:t,precision:n,expected:r}of[{input:18,base:18,precision:2,expected:1},{input:27,base:18,precision:3,expected:1.5},{input:`36px`,base:18,precision:1,expected:2},{input:9,base:18,precision:0,expected:1}])await m(o(e,{base:t,precision:n})).toBe(r)}},S={tags:[`source`],parameters:a({source:{code:d}}),decorators:[t()]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...S.parameters?.docs?.source}}},C=[`BasicUsage`,`StringInput`,`CustomBase`,`CustomPrecision`,`AllOptions`,`Source`]})))()}w();export{x as AllOptions,_ as BasicUsage,y as CustomBase,b as CustomPrecision,S as Source,v as StringInput,C as __namedExportsOrder,g as default};