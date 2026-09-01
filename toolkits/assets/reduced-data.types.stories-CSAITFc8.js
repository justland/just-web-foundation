import{j as e,w as d,s as t,d as s}from"./iframe-BF2V-t9M.js";import{d as o}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const c=`/**
 * The reduced data preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data Media Queries Level 5 § prefers-reduced-data},
 * these are the only valid values exposed by the \`prefers-reduced-data\` media feature.
 *
 * \`no-preference\` is a real state: the user has not asked for reduced data.
 */
export type ReducedData = 'no-preference' | 'reduce'
`,p={title:"reduced-data/ReducedData",tags:["type","version:3.5"],render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:s({source:{code:c}}),decorators:[d({content:e.jsxs("p",{children:[e.jsx("code",{children:"ReducedData"})," is a string literal union of the two values from the"," ",e.jsx("code",{children:"prefers-reduced-data"})," media feature. Per"," ",e.jsx("a",{href:"https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data",target:"_blank",rel:"noopener noreferrer",children:"Media Queries Level 5 § prefers-reduced-data"}),", ",e.jsx("code",{children:"no-preference"})," and ",e.jsx("code",{children:"reduce"})," are the only valid values exposed by the ",e.jsx("code",{children:"prefers-reduced-data"})," media feature. ",e.jsx("code",{children:"no-preference"})," is a real state: the user has not asked for reduced data."]})}),t()]},a={tags:["use-case"],parameters:s({description:{story:"Both values are valid. The browser/OS determines the actual preference."},source:{code:o`
                import type { ReducedData } from '@just-web/toolkits'

                const noPreference: ReducedData = 'no-preference'
                const reduce: ReducedData = 'reduce'
            `}}),decorators:[d({content:e.jsxs("p",{children:[e.jsx("code",{children:"ReducedData"})," has exactly two valid values: ",e.jsx("code",{children:"no-preference"})," and"," ",e.jsx("code",{children:"reduce"}),". Use it when typing function parameters or return values related to reduced data preference."]})}),t()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ReducedData</code> is a string literal union of the two values from the{' '}
                    <code>prefers-reduced-data</code> media feature. Per{' '}
                    <a href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data" target="_blank" rel="noopener noreferrer">
                        Media Queries Level 5 § prefers-reduced-data
                    </a>
                    , <code>no-preference</code> and <code>reduce</code> are the only valid values exposed by
                    the <code>prefers-reduced-data</code> media feature. <code>no-preference</code> is a real
                    state: the user has not asked for reduced data.
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
                import type { ReducedData } from '@just-web/toolkits'

                const noPreference: ReducedData = 'no-preference'
                const reduce: ReducedData = 'reduce'
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ReducedData</code> has exactly two valid values: <code>no-preference</code> and{' '}
                    <code>reduce</code>. Use it when typing function parameters or return values related to
                    reduced data preference.
                </p>
  }), showSource()]
}`,...a.parameters?.docs?.source}}};const f=["Specification","BasicUsage"];export{a as BasicUsage,r as Specification,f as __namedExportsOrder,p as default};
