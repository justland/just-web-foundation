import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-C-caXvtV.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./rem-2-px-D74z4P6M.js";import{t as u}from"./src-RbTQJPcv.js";var d;function f(){return(f=e((()=>{d=`/**
 * Converts rem values to pixel units.
 *
 * @param rem - The rem value to convert. Can be a number or string (e.g. '1rem' or '1')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate pixels from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value, or null/undefined if input is null/undefined
 *
 * @example
 * \`\`\`ts
 * rem2px(1) // 16
 * rem2px('2rem') // 32
 * rem2px(1, { base: 20 }) // 20
 * rem2px(0.8125, { precision: 2 }) // 13
 * rem2px(null) // null
 * rem2px(undefined) // undefined
 * \`\`\`
 */
export function rem2px(
	rem: null,
	options?: { base?: number | undefined; precision?: number | undefined }
): null
export function rem2px(
	rem: undefined,
	options?: { base?: number | undefined; precision?: number | undefined }
): undefined
export function rem2px(
	rem: number | string,
	options?: { base?: number | undefined; precision?: number | undefined }
): number
export function rem2px(
	rem: number | string | null | undefined,
	options?: { base?: number | undefined; precision?: number | undefined }
): number | null | undefined {
	if (rem === null || rem === undefined) return rem

	const { base = 16, precision = 4 } = options ?? {}
	if (typeof rem === 'string') {
		rem = rem.replace(/rem$/, '')
		rem = Number.parseFloat(rem)
	}
	return Number((rem * base).toFixed(precision))
}
`})))()}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`units/rem2px`,tags:[`func`,`version:3.1`],parameters:n({description:{component:`Converts rem values to pixel units. Accepts a number or string (e.g. "1rem" or "1") and optional base (default 16) and precision (default 4).`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Convert rem numbers to pixels using the default base (16px).`}}),decorators:[a({content:(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`rem2px(rem)`}),` returns the pixel value. Default base is 16.`]})})}),r({source:c`
                rem2px(1)    // 16
                rem2px(2)    // 32
                rem2px(0.5)  // 8
                rem2px(1.5)  // 24
            `})],render(){return(0,p.jsx)(i,{title:`Basic usage (default base: 16px)`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:1,expected:16},{input:2,expected:32},{input:.5,expected:8},{input:1.5,expected:24}].map(({input:e,expected:t})=>`rem2px(${e}) → ${l(e)}px (expected: ${t}px)`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:1,expected:16},{input:2,expected:32},{input:.5,expected:8},{input:1.5,expected:24}])await m(l(e)).toBe(t)}},_={tags:[`use-case`],parameters:n({description:{story:`String inputs like "1rem" or "1.5" are parsed and converted.`}}),decorators:[a(),r({source:c`
                rem2px('1rem')     // 16
                rem2px('2rem')     // 32
                rem2px('1.5')      // 24
                rem2px('0.5313rem') // 8.5008
            `})],render(){return(0,p.jsx)(i,{title:`String input`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:`1rem`,expected:`16.0000`},{input:`2rem`,expected:`32.0000`},{input:`1.5`,expected:`24.0000`},{input:`0.5313rem`,expected:`8.5008`}].map(({input:e,expected:t})=>`rem2px('${e}') → ${l(e)}px (expected: ${t}px)`).join(`
`)})})},play:async()=>{for(let{input:e,expected:t}of[{input:`1rem`,expected:16},{input:`2rem`,expected:32},{input:`1.5`,expected:24},{input:`0.5313rem`,expected:8.5008}])await m(l(e)).toBe(t)}},v={tags:[`use-case`],parameters:n({description:{story:`Pass a custom base (pixels per 1rem) via options.`}}),decorators:[a(),r({source:c`
                rem2px(1, { base: 20 })   // 20
                rem2px(2, { base: 20 })   // 40
                rem2px(0.5, { base: 20 }) // 10
                rem2px(1.5, { base: 20 }) // 30
            `})],render(){return(0,p.jsx)(i,{title:`Custom base (20px)`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:1,base:20,expected:20},{input:2,base:20,expected:40},{input:.5,base:20,expected:10},{input:1.5,base:20,expected:30}].map(({input:e,base:t,expected:n})=>`rem2px(${e}, { base: ${t} }) → ${l(e,{base:t})}px (expected: ${n}px)`).join(`
`)})})},play:async()=>{for(let{input:e,base:t,expected:n}of[{input:1,base:20,expected:20},{input:2,base:20,expected:40},{input:.5,base:20,expected:10},{input:1.5,base:20,expected:30}])await m(l(e,{base:t})).toBe(n)}},y={tags:[`use-case`],parameters:n({description:{story:`Control decimal places with the precision option.`}}),decorators:[a(),r({source:c`
                rem2px(0.8125, { precision: 0 }) // 13
                rem2px(0.8125, { precision: 1 }) // 13.0
                rem2px(0.8125, { precision: 2 }) // 13.00
                rem2px(0.8125, { precision: 4 }) // 13.0000
            `})],render(){let e=.8125;return(0,p.jsx)(i,{title:`Custom precision (0.8125rem × 16px)`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[0,1,2,3,4,6].map(t=>`rem2px(${e}, { precision: ${t} }) → ${l(e,{precision:t})}px`).join(`
`)})})},play:async()=>{for(let e of[0,1,2,3,4,6])await m(l(.8125,{precision:e})).toBe(13)}},b={tags:[`use-case`],parameters:n({description:{story:`Combine custom base and precision.`}}),decorators:[a(),r({source:c`
                rem2px(1, { base: 18, precision: 2 })
                rem2px(1.5, { base: 18, precision: 3 })
                rem2px('2rem', { base: 18, precision: 1 })
                rem2px(0.5, { base: 18, precision: 0 })
            `})],render(){return(0,p.jsx)(i,{title:`Custom base and precision`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:[{input:1,base:18,precision:2},{input:1.5,base:18,precision:3},{input:`2rem`,base:18,precision:1},{input:.5,base:18,precision:0}].map(({input:e,base:t,precision:n})=>`rem2px(${typeof e==`string`?`'${e}'`:e}, { base: ${t}, precision: ${n} }) → ${l(e,{base:t,precision:n})}px`).join(`
`)})})},play:async()=>{for(let{input:e,base:t,precision:n,expected:r}of[{input:1,base:18,precision:2,expected:18},{input:1.5,base:18,precision:3,expected:27},{input:`2rem`,base:18,precision:1,expected:36},{input:.5,base:18,precision:0,expected:9}])await m(l(e,{base:t,precision:n})).toBe(r)}},x={tags:[`unit`],parameters:n({description:{story:`null and undefined are passed through as-is.`}}),decorators:[a()],render(){return(0,p.jsx)(i,{title:`Null/undefined pass-through`,appearance:`output`,children:(0,p.jsx)(`pre`,{className:`text-sm`,children:`rem2px(null) → ${l(null)}
rem2px(undefined) → ${l(void 0)}`})})},play:async()=>{await m(l(null)).toBe(null),await m(l(void 0)).toBe(void 0)}},S={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Convert rem numbers to pixels using the default base (16px).'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>rem2px(rem)</code> returns the pixel value. Default base is 16.
                    </p>
                </>
  }), showSource({
    source: dedent\`
                rem2px(1)    // 16
                rem2px(2)    // 32
                rem2px(0.5)  // 8
                rem2px(1.5)  // 24
            \`
  })],
  render() {
    const examples = [{
      input: 1,
      expected: 16
    }, {
      input: 2,
      expected: 32
    }, {
      input: 0.5,
      expected: 8
    }, {
      input: 1.5,
      expected: 24
    }];
    return <StoryCard title="Basic usage (default base: 16px)" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`rem2px(\${input}) → \${rem2px(input)}px (expected: \${expected}px)\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: 1,
      expected: 16
    }, {
      input: 2,
      expected: 32
    }, {
      input: 0.5,
      expected: 8
    }, {
      input: 1.5,
      expected: 24
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(rem2px(input)).toBe(expected);
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'String inputs like "1rem" or "1.5" are parsed and converted.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                rem2px('1rem')     // 16
                rem2px('2rem')     // 32
                rem2px('1.5')      // 24
                rem2px('0.5313rem') // 8.5008
            \`
  })],
  render() {
    const examples = [{
      input: '1rem',
      expected: '16.0000'
    }, {
      input: '2rem',
      expected: '32.0000'
    }, {
      input: '1.5',
      expected: '24.0000'
    }, {
      input: '0.5313rem',
      expected: '8.5008'
    }];
    return <StoryCard title="String input" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          expected
        }) => \`rem2px('\${input}') → \${rem2px(input)}px (expected: \${expected}px)\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: '1rem',
      expected: 16
    }, {
      input: '2rem',
      expected: 32
    }, {
      input: '1.5',
      expected: 24
    }, {
      input: '0.5313rem',
      expected: 8.5008
    }];
    for (const {
      input,
      expected
    } of examples) {
      await expect(rem2px(input)).toBe(expected);
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
                rem2px(1, { base: 20 })   // 20
                rem2px(2, { base: 20 })   // 40
                rem2px(0.5, { base: 20 }) // 10
                rem2px(1.5, { base: 20 }) // 30
            \`
  })],
  render() {
    const examples = [{
      input: 1,
      base: 20,
      expected: 20
    }, {
      input: 2,
      base: 20,
      expected: 40
    }, {
      input: 0.5,
      base: 20,
      expected: 10
    }, {
      input: 1.5,
      base: 20,
      expected: 30
    }];
    return <StoryCard title="Custom base (20px)" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          base,
          expected
        }) => \`rem2px(\${input}, { base: \${base} }) → \${rem2px(input, {
          base
        })}px (expected: \${expected}px)\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: 1,
      base: 20,
      expected: 20
    }, {
      input: 2,
      base: 20,
      expected: 40
    }, {
      input: 0.5,
      base: 20,
      expected: 10
    }, {
      input: 1.5,
      base: 20,
      expected: 30
    }];
    for (const {
      input,
      base,
      expected
    } of examples) {
      await expect(rem2px(input, {
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
                rem2px(0.8125, { precision: 0 }) // 13
                rem2px(0.8125, { precision: 1 }) // 13.0
                rem2px(0.8125, { precision: 2 }) // 13.00
                rem2px(0.8125, { precision: 4 }) // 13.0000
            \`
  })],
  render() {
    const input = 0.8125;
    const precisions = [0, 1, 2, 3, 4, 6];
    return <StoryCard title="Custom precision (0.8125rem × 16px)" appearance="output">
                <pre className="text-sm">
                    {precisions.map(precision => \`rem2px(\${input}, { precision: \${precision} }) → \${rem2px(input, {
          precision
        })}px\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const input = 0.8125;
    const precisions = [0, 1, 2, 3, 4, 6];
    const expected = 13; // 0.8125 * 16
    for (const precision of precisions) {
      await expect(rem2px(input, {
        precision
      })).toBe(expected);
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
                rem2px(1, { base: 18, precision: 2 })
                rem2px(1.5, { base: 18, precision: 3 })
                rem2px('2rem', { base: 18, precision: 1 })
                rem2px(0.5, { base: 18, precision: 0 })
            \`
  })],
  render() {
    const examples = [{
      input: 1 as number | string,
      base: 18,
      precision: 2
    }, {
      input: 1.5,
      base: 18,
      precision: 3
    }, {
      input: '2rem' as number | string,
      base: 18,
      precision: 1
    }, {
      input: 0.5,
      base: 18,
      precision: 0
    }];
    return <StoryCard title="Custom base and precision" appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          input,
          base,
          precision
        }) => \`rem2px(\${typeof input === 'string' ? \`'\${input}'\` : input}, { base: \${base}, precision: \${precision} }) → \${rem2px(input, {
          base,
          precision
        })}px\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const examples = [{
      input: 1 as number | string,
      base: 18,
      precision: 2,
      expected: 18
    }, {
      input: 1.5,
      base: 18,
      precision: 3,
      expected: 27
    }, {
      input: '2rem' as number | string,
      base: 18,
      precision: 1,
      expected: 36
    }, {
      input: 0.5,
      base: 18,
      precision: 0,
      expected: 9
    }];
    for (const {
      input,
      base,
      precision,
      expected
    } of examples) {
      await expect(rem2px(input, {
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
                    {\`rem2px(null) → \${rem2px(null)}
rem2px(undefined) → \${rem2px(undefined)}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(rem2px(null)).toBe(null);
    await expect(rem2px(undefined)).toBe(undefined);
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