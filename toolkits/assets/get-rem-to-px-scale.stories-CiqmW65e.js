import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-C-caXvtV.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{t as l}from"./get-rem-to-px-scale-B2k8F-zr.js";import{n as u}from"./rem-2-px-D74z4P6M.js";import{t as d}from"./src-RbTQJPcv.js";var f;function p(){return(p=e((()=>{f=`const DEFAULT_REM_TO_PX_SCALE = 16

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
`})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{d(),o(),s(),p(),m=t(),h={title:`units/getRemToPxScale`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`Returns the current document's rem-to-px scale (the pixel value of 1rem) by reading the root element's computed font size. In non-browser environments returns 16.`}}),render:()=>(0,m.jsx)(m.Fragment,{})},g={tags:[`use-case`],parameters:n({description:{story:`Read the current document rem-to-px scale (root font size).`}}),decorators:[a({content:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`code`,{children:`getRemToPxScale()`}),` returns how many pixels 1rem equals in this document.`]}),(0,m.jsx)(`p`,{children:`This is typically the value of the browser's default font size setting.`})]})}),r({source:c`getRemToPxScale()`})],render(){let e=l();return(0,m.jsx)(i,{title:`Current rem-to-px scale`,appearance:`output`,children:(0,m.jsxs)(`pre`,{children:[e,`px per 1rem`]})})}},_={name:`With rem2px`,tags:[`use-case`],parameters:n({description:{story:`Use the scale as base for rem2px so conversions match the document.`}}),decorators:[a(),r({source:c`
                const base = getRemToPxScale()
                rem2px(1, { base })
                rem2px(1.5, { base })
            `})],render(){let e=l();return(0,m.jsx)(i,{appearance:`output`,children:(0,m.jsx)(`pre`,{className:`text-sm`,children:[1,1.5,2,.5].map(t=>`${t}rem → ${u(t,{base:e})}px`).join(`
`)})})}},v={tags:[`source`],parameters:n({source:{code:f}}),decorators:[r()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...v.parameters?.docs?.source}}},y=[`BasicUsage`,`WithRem2px`,`Source`]})))()}b();export{g as BasicUsage,v as Source,_ as WithRem2px,y as __namedExportsOrder,h as default};