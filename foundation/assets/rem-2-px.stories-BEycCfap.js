import{j as t,d as a,w as o,s as i,S as c}from"./iframe-Pea2t46H.js";import{d as m}from"./dedent-BuYMbVyj.js";import{r as p}from"./rem-2-px-Bx8XZIkD.js";import"./preload-helper-PPVm8Dsz.js";const S=`/**
 * Converts rem values to pixel units.
 *
 * @param rem - The rem value to convert. Can be a number or string (e.g. '1rem' or '1')
 * @param options - Optional configuration
 * @param options.base - Base pixel value to calculate pixels from. Defaults to 16
 * @param options.precision - Number of decimal places in the output. Defaults to 4
 * @returns The converted value as a string with 'px' units
 *
 * @example
 * \`\`\`ts
 * rem2px(1) // '16.0000'
 * rem2px('2rem') // '32.0000'
 * rem2px(1, { base: 20 }) // '20.0000'
 * rem2px(0.8125, { precision: 2 }) // '13.00'
 * \`\`\`
 */
export function rem2px(
	rem: number | string,
	options?: { base?: number | undefined; precision?: number | undefined },
): number {
	const { base = 16, precision = 4 } = options ?? {}

	if (typeof rem === 'string') {
		rem = rem.replace(/rem$/, '')
		rem = Number.parseFloat(rem)
	}

	return Number((rem * base).toFixed(precision))
}
`,{expect:u}=__STORYBOOK_MODULE_TEST__,j={title:"units/rem2px",tags:["func","version:next"],parameters:a({description:{component:'Converts rem values to pixel units. Accepts a number or string (e.g. "1rem" or "1") and optional base (default 16) and precision (default 4).'}}),render:()=>t.jsx(t.Fragment,{})},x={tags:["use-case"],parameters:a({description:{story:"Convert rem numbers to pixels using the default base (16px)."}}),decorators:[o({content:t.jsx(t.Fragment,{children:t.jsxs("p",{children:[t.jsx("code",{children:"rem2px(rem)"})," returns the pixel value. Default base is 16."]})})}),i({source:m`
                rem2px(1)    // 16
                rem2px(2)    // 32
                rem2px(0.5)  // 8
                rem2px(1.5)  // 24
            `})],render(){const r=[{input:1,expected:16},{input:2,expected:32},{input:.5,expected:8},{input:1.5,expected:24}];return t.jsx(c,{title:"Basic usage (default base: 16px)",appearance:"output",children:t.jsx("pre",{className:"text-sm",children:r.map(({input:e,expected:n})=>`rem2px(${e}) → ${p(e)}px (expected: ${n}px)`).join(`
`)})})},play:async()=>{const r=[{input:1,expected:16},{input:2,expected:32},{input:.5,expected:8},{input:1.5,expected:24}];for(const{input:e,expected:n}of r)await u(p(e)).toBe(n)}},d={tags:["use-case"],parameters:a({description:{story:'String inputs like "1rem" or "1.5" are parsed and converted.'}}),decorators:[o(),i({source:m`
                rem2px('1rem')     // 16
                rem2px('2rem')     // 32
                rem2px('1.5')      // 24
                rem2px('0.5313rem') // 8.5008
            `})],render(){const r=[{input:"1rem",expected:"16.0000"},{input:"2rem",expected:"32.0000"},{input:"1.5",expected:"24.0000"},{input:"0.5313rem",expected:"8.5008"}];return t.jsx(c,{title:"String input",appearance:"output",children:t.jsx("pre",{className:"text-sm",children:r.map(({input:e,expected:n})=>`rem2px('${e}') → ${p(e)}px (expected: ${n}px)`).join(`
`)})})},play:async()=>{const r=[{input:"1rem",expected:16},{input:"2rem",expected:32},{input:"1.5",expected:24},{input:"0.5313rem",expected:8.5008}];for(const{input:e,expected:n}of r)await u(p(e)).toBe(n)}},l={tags:["use-case"],parameters:a({description:{story:"Pass a custom base (pixels per 1rem) via options."}}),decorators:[o(),i({source:m`
                rem2px(1, { base: 20 })   // 20
                rem2px(2, { base: 20 })   // 40
                rem2px(0.5, { base: 20 }) // 10
                rem2px(1.5, { base: 20 }) // 30
            `})],render(){const r=[{input:1,base:20,expected:20},{input:2,base:20,expected:40},{input:.5,base:20,expected:10},{input:1.5,base:20,expected:30}];return t.jsx(c,{title:"Custom base (20px)",appearance:"output",children:t.jsx("pre",{className:"text-sm",children:r.map(({input:e,base:n,expected:s})=>`rem2px(${e}, { base: ${n} }) → ${p(e,{base:n})}px (expected: ${s}px)`).join(`
`)})})},play:async()=>{const r=[{input:1,base:20,expected:20},{input:2,base:20,expected:40},{input:.5,base:20,expected:10},{input:1.5,base:20,expected:30}];for(const{input:e,base:n,expected:s}of r)await u(p(e,{base:n})).toBe(s)}},b={tags:["use-case"],parameters:a({description:{story:"Control decimal places with the precision option."}}),decorators:[o(),i({source:m`
                rem2px(0.8125, { precision: 0 }) // 13
                rem2px(0.8125, { precision: 1 }) // 13.0
                rem2px(0.8125, { precision: 2 }) // 13.00
                rem2px(0.8125, { precision: 4 }) // 13.0000
            `})],render(){const e=[0,1,2,3,4,6];return t.jsx(c,{title:"Custom precision (0.8125rem × 16px)",appearance:"output",children:t.jsx("pre",{className:"text-sm",children:e.map(n=>`rem2px(${.8125}, { precision: ${n} }) → ${p(.8125,{precision:n})}px`).join(`
`)})})},play:async()=>{const e=[0,1,2,3,4,6],n=13;for(const s of e)await u(p(.8125,{precision:s})).toBe(n)}},f={tags:["use-case"],parameters:a({description:{story:"Combine custom base and precision."}}),decorators:[o(),i({source:m`
                rem2px(1, { base: 18, precision: 2 })
                rem2px(1.5, { base: 18, precision: 3 })
                rem2px('2rem', { base: 18, precision: 1 })
                rem2px(0.5, { base: 18, precision: 0 })
            `})],render(){const r=[{input:1,base:18,precision:2},{input:1.5,base:18,precision:3},{input:"2rem",base:18,precision:1},{input:.5,base:18,precision:0}];return t.jsx(c,{title:"Custom base and precision",appearance:"output",children:t.jsx("pre",{className:"text-sm",children:r.map(({input:e,base:n,precision:s})=>`rem2px(${typeof e=="string"?`'${e}'`:e}, { base: ${n}, precision: ${s} }) → ${p(e,{base:n,precision:s})}px`).join(`
`)})})},play:async()=>{const r=[{input:1,base:18,precision:2,expected:18},{input:1.5,base:18,precision:3,expected:27},{input:"2rem",base:18,precision:1,expected:36},{input:.5,base:18,precision:0,expected:9}];for(const{input:e,base:n,precision:s,expected:g}of r)await u(p(e,{base:n,precision:s})).toBe(g)}},y={tags:["source"],parameters:a({source:{code:S}}),decorators:[i()]};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...y.parameters?.docs?.source}}};const B=["BasicUsage","StringInput","CustomBase","CustomPrecision","BaseAndPrecision","Source"];export{f as BaseAndPrecision,x as BasicUsage,l as CustomBase,b as CustomPrecision,y as Source,d as StringInput,B as __namedExportsOrder,j as default};
