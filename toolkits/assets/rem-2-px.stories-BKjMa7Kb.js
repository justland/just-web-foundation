import{j as r,d as a,w as o,s as c,S as u}from"./iframe-7ZNQ_6ea.js";import{r as s}from"./rem-2-px-B1LC_HvB.js";import{d as m}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const S=`/**
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
`,{expect:i}=__STORYBOOK_MODULE_TEST__,B={title:"units/rem2px",tags:["func","version:3.1"],parameters:a({description:{component:'Converts rem values to pixel units. Accepts a number or string (e.g. "1rem" or "1") and optional base (default 16) and precision (default 4).'}}),render:()=>r.jsx(r.Fragment,{})},d={tags:["use-case"],parameters:a({description:{story:"Convert rem numbers to pixels using the default base (16px)."}}),decorators:[o({content:r.jsx(r.Fragment,{children:r.jsxs("p",{children:[r.jsx("code",{children:"rem2px(rem)"})," returns the pixel value. Default base is 16."]})})}),c({source:m`
                rem2px(1)    // 16
                rem2px(2)    // 32
                rem2px(0.5)  // 8
                rem2px(1.5)  // 24
            `})],render(){const t=[{input:1,expected:16},{input:2,expected:32},{input:.5,expected:8},{input:1.5,expected:24}];return r.jsx(u,{title:"Basic usage (default base: 16px)",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`rem2px(${e}) → ${s(e)}px (expected: ${n}px)`).join(`
`)})})},play:async()=>{const t=[{input:1,expected:16},{input:2,expected:32},{input:.5,expected:8},{input:1.5,expected:24}];for(const{input:e,expected:n}of t)await i(s(e)).toBe(n)}},x={tags:["use-case"],parameters:a({description:{story:'String inputs like "1rem" or "1.5" are parsed and converted.'}}),decorators:[o(),c({source:m`
                rem2px('1rem')     // 16
                rem2px('2rem')     // 32
                rem2px('1.5')      // 24
                rem2px('0.5313rem') // 8.5008
            `})],render(){const t=[{input:"1rem",expected:"16.0000"},{input:"2rem",expected:"32.0000"},{input:"1.5",expected:"24.0000"},{input:"0.5313rem",expected:"8.5008"}];return r.jsx(u,{title:"String input",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,expected:n})=>`rem2px('${e}') → ${s(e)}px (expected: ${n}px)`).join(`
`)})})},play:async()=>{const t=[{input:"1rem",expected:16},{input:"2rem",expected:32},{input:"1.5",expected:24},{input:"0.5313rem",expected:8.5008}];for(const{input:e,expected:n}of t)await i(s(e)).toBe(n)}},l={tags:["use-case"],parameters:a({description:{story:"Pass a custom base (pixels per 1rem) via options."}}),decorators:[o(),c({source:m`
                rem2px(1, { base: 20 })   // 20
                rem2px(2, { base: 20 })   // 40
                rem2px(0.5, { base: 20 }) // 10
                rem2px(1.5, { base: 20 }) // 30
            `})],render(){const t=[{input:1,base:20,expected:20},{input:2,base:20,expected:40},{input:.5,base:20,expected:10},{input:1.5,base:20,expected:30}];return r.jsx(u,{title:"Custom base (20px)",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,base:n,expected:p})=>`rem2px(${e}, { base: ${n} }) → ${s(e,{base:n})}px (expected: ${p}px)`).join(`
`)})})},play:async()=>{const t=[{input:1,base:20,expected:20},{input:2,base:20,expected:40},{input:.5,base:20,expected:10},{input:1.5,base:20,expected:30}];for(const{input:e,base:n,expected:p}of t)await i(s(e,{base:n})).toBe(p)}},b={tags:["use-case"],parameters:a({description:{story:"Control decimal places with the precision option."}}),decorators:[o(),c({source:m`
                rem2px(0.8125, { precision: 0 }) // 13
                rem2px(0.8125, { precision: 1 }) // 13.0
                rem2px(0.8125, { precision: 2 }) // 13.00
                rem2px(0.8125, { precision: 4 }) // 13.0000
            `})],render(){const e=[0,1,2,3,4,6];return r.jsx(u,{title:"Custom precision (0.8125rem × 16px)",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:e.map(n=>`rem2px(${.8125}, { precision: ${n} }) → ${s(.8125,{precision:n})}px`).join(`
`)})})},play:async()=>{const e=[0,1,2,3,4,6],n=13;for(const p of e)await i(s(.8125,{precision:p})).toBe(n)}},f={tags:["use-case"],parameters:a({description:{story:"Combine custom base and precision."}}),decorators:[o(),c({source:m`
                rem2px(1, { base: 18, precision: 2 })
                rem2px(1.5, { base: 18, precision: 3 })
                rem2px('2rem', { base: 18, precision: 1 })
                rem2px(0.5, { base: 18, precision: 0 })
            `})],render(){const t=[{input:1,base:18,precision:2},{input:1.5,base:18,precision:3},{input:"2rem",base:18,precision:1},{input:.5,base:18,precision:0}];return r.jsx(u,{title:"Custom base and precision",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:t.map(({input:e,base:n,precision:p})=>`rem2px(${typeof e=="string"?`'${e}'`:e}, { base: ${n}, precision: ${p} }) → ${s(e,{base:n,precision:p})}px`).join(`
`)})})},play:async()=>{const t=[{input:1,base:18,precision:2,expected:18},{input:1.5,base:18,precision:3,expected:27},{input:"2rem",base:18,precision:1,expected:36},{input:.5,base:18,precision:0,expected:9}];for(const{input:e,base:n,precision:p,expected:h}of t)await i(s(e,{base:n,precision:p})).toBe(h)}},y={tags:["unit"],parameters:a({description:{story:"null and undefined are passed through as-is."}}),decorators:[o()],render(){return r.jsx(u,{title:"Null/undefined pass-through",appearance:"output",children:r.jsx("pre",{className:"text-sm",children:`rem2px(null) → ${s(null)}
rem2px(undefined) → ${s(void 0)}`})})},play:async()=>{await i(s(null)).toBe(null),await i(s(void 0)).toBe(void 0)}},g={tags:["source"],parameters:a({source:{code:S}}),decorators:[c()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
                    {\`rem2px(null) → \${rem2px(null)}
rem2px(undefined) → \${rem2px(undefined)}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(rem2px(null)).toBe(null);
    await expect(rem2px(undefined)).toBe(undefined);
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...g.parameters?.docs?.source}}};const v=["BasicUsage","StringInput","CustomBase","CustomPrecision","BaseAndPrecision","NullUndefinedPassThrough","Source"];export{f as BaseAndPrecision,d as BasicUsage,l as CustomBase,b as CustomPrecision,y as NullUndefinedPassThrough,g as Source,x as StringInput,v as __namedExportsOrder,B as default};
