import{j as e,d as n,w as m,s as a,S as p}from"./iframe-DMM-er1z.js";import{d as u}from"./dedent-BuYMbVyj.js";import{g as i}from"./get-rem-to-px-scale-CTgj4gd8.js";import{r as l}from"./rem-2-px-Bx8XZIkD.js";import"./preload-helper-PPVm8Dsz.js";const x=`const DEFAULT_REM_TO_PX_SCALE = 16

/**
 * Returns the current document's rem-to-px scale (the pixel value of 1rem).
 *
 * Reads the computed font size of the root element (\`html\`), which is the value
 * the browser uses to resolve rem units. In non-browser environments (e.g. SSR,
 * Node), returns {@link DEFAULT_REM_TO_PX_SCALE} as a fallback.
 *
 * @returns The number of pixels that 1rem equals in the current document,
 * or {@link DEFAULT_REM_TO_PX_SCALE} when not in a browser.
 *
 * @example
 * \`\`\`ts
 * getRemToPxScale() // e.g. 16 (or 20 if user increased default font size)
 * rem2px(1, { base: getRemToPxScale() }) // matches actual 1rem in the document
 * \`\`\`
 */
export function getRemToPxScale(): number {
	/* c8 ignore start */
	if (typeof document === 'undefined' || !document.documentElement) {
		return DEFAULT_REM_TO_PX_SCALE
	}
	/* c8 ignore end */
	const rootFontSize = getComputedStyle(document.documentElement).fontSize
	return Number.parseFloat(rootFontSize) ?? DEFAULT_REM_TO_PX_SCALE
}
`,T={title:"units/getRemToPxScale",tags:["func","version:next"],parameters:n({description:{component:"Returns the current document's rem-to-px scale (the pixel value of 1rem) by reading the root element's computed font size. In non-browser environments returns 16."}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:n({description:{story:"Read the current document rem-to-px scale (root font size)."}}),decorators:[m({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"getRemToPxScale()"})," returns how many pixels 1rem equals in this document."]}),e.jsx("p",{children:"This is typically the value of the browser's default font size setting."})]})}),a({source:u`getRemToPxScale()`})],render(){const o=i();return e.jsx(p,{title:"Current rem-to-px scale",appearance:"output",children:e.jsxs("pre",{children:[o,"px per 1rem"]})})}},t={name:"With rem2px",tags:["use-case"],parameters:n({description:{story:"Use the scale as base for rem2px so conversions match the document."}}),decorators:[m(),a({source:u`
                const base = getRemToPxScale()
                rem2px(1, { base })
                rem2px(1.5, { base })
            `})],render(){const o=i(),d=[1,1.5,2,.5];return e.jsx(p,{appearance:"output",children:e.jsx("pre",{className:"text-sm",children:d.map(c=>`${c}rem → ${l(c,{base:o})}px`).join(`
`)})})}},s={tags:["source"],parameters:n({source:{code:x}}),decorators:[a()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Read the current document rem-to-px scale (root font size).'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>getRemToPxScale()</code> returns how many pixels 1rem equals in this document.
                    </p>
                    <p>This is typically the value of the browser's default font size setting.</p>
                </>
  }), showSource({
    source: dedent\`getRemToPxScale()\`
  })],
  render() {
    const scale = getRemToPxScale();
    return <StoryCard title="Current rem-to-px scale" appearance="output">
                <pre>{scale}px per 1rem</pre>
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'With rem2px',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Use the scale as base for rem2px so conversions match the document.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const base = getRemToPxScale()
                rem2px(1, { base })
                rem2px(1.5, { base })
            \`
  })],
  render() {
    const base = getRemToPxScale();
    const examples = [1, 1.5, 2, 0.5] as const;
    return <StoryCard appearance="output">
                <pre className="text-sm">
                    {examples.map(rem => \`\${rem}rem → \${rem2px(rem, {
          base
        })}px\`).join('\\n')}
                </pre>
            </StoryCard>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...s.parameters?.docs?.source}}};const b=["BasicUsage","WithRem2px","Source"];export{r as BasicUsage,s as Source,t as WithRem2px,b as __namedExportsOrder,T as default};
