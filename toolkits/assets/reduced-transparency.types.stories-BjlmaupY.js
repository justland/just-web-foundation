import{w as n,s,d as c,j as e}from"./iframe-BpXj-3b1.js";import{d}from"./dedent-D4JfOF0A.js";import"./preload-helper-PPVm8Dsz.js";const t=`/**
 * The reduced transparency preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency Media Queries Level 5 § prefers-reduced-transparency},
 * these are the only valid values exposed by the \`prefers-reduced-transparency\` media feature.
 *
 * \`no-preference\` is a real state: the user has not asked for reduced transparency.
 */
export type ReducedTransparency = 'no-preference' | 'reduce'
`,i={title:"reduced-transparency/ReducedTransparency",tags:["type","version:3.5"],render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:c({source:{code:t}}),decorators:[n({content:e.jsxs("p",{children:[e.jsx("code",{children:"ReducedTransparency"})," is a string literal union of the two values from the"," ",e.jsx("code",{children:"prefers-reduced-transparency"})," media feature. Per"," ",e.jsx("a",{href:"https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency",target:"_blank",rel:"noopener noreferrer",children:"Media Queries Level 5 § prefers-reduced-transparency"}),", ",e.jsx("code",{children:"no-preference"})," and ",e.jsx("code",{children:"reduce"})," are the only valid values exposed by the ",e.jsx("code",{children:"prefers-reduced-transparency"})," media feature. ",e.jsx("code",{children:"no-preference"})," is a real state: the user has not asked for reduced transparency."]})}),s()]},a={tags:["use-case"],parameters:c({description:{story:"Both values are valid. The browser/OS determines the actual preference."},source:{code:d`
                import type { ReducedTransparency } from '@just-web/toolkits'

                const noPreference: ReducedTransparency = 'no-preference'
                const reduce: ReducedTransparency = 'reduce'
            `}}),decorators:[n({content:e.jsxs("p",{children:[e.jsx("code",{children:"ReducedTransparency"})," has exactly two valid values: ",e.jsx("code",{children:"no-preference"})," ","and ",e.jsx("code",{children:"reduce"}),". Use it when typing function parameters or return values related to reduced transparency preference."]})}),s()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ReducedTransparency</code> is a string literal union of the two values from the{' '}
                    <code>prefers-reduced-transparency</code> media feature. Per{' '}
                    <a href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency" target="_blank" rel="noopener noreferrer">
                        Media Queries Level 5 § prefers-reduced-transparency
                    </a>
                    , <code>no-preference</code> and <code>reduce</code> are the only valid values exposed by
                    the <code>prefers-reduced-transparency</code> media feature. <code>no-preference</code> is
                    a real state: the user has not asked for reduced transparency.
                </p>
  }), showSource()]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Both values are valid. The browser/OS determines the actual preference.'
    },
    source: {
      code: dedent\`
                import type { ReducedTransparency } from '@just-web/toolkits'

                const noPreference: ReducedTransparency = 'no-preference'
                const reduce: ReducedTransparency = 'reduce'
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ReducedTransparency</code> has exactly two valid values: <code>no-preference</code>{' '}
                    and <code>reduce</code>. Use it when typing function parameters or return values related
                    to reduced transparency preference.
                </p>
  }), showSource()]
}`,...a.parameters?.docs?.source}}};const f=["Specification","BasicUsage"];export{a as BasicUsage,r as Specification,f as __namedExportsOrder,i as default};
