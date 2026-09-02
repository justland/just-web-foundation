import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,l as i,s as a}from"./iframe-C-caXvtV.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";var c;function l(){return(l=e((()=>{c=`/**
 * The reduced data preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data Media Queries Level 5 § prefers-reduced-data},
 * these are the only valid values exposed by the \`prefers-reduced-data\` media feature.
 *
 * \`no-preference\` is a real state: the user has not asked for reduced data.
 */
export type ReducedData = 'no-preference' | 'reduce'
`})))()}var u,d,f,p,m;function h(){return(h=e((()=>{a(),o(),l(),u=t(),d={title:`reduced-data/ReducedData`,tags:[`type`,`version:3.5`],render:()=>(0,u.jsx)(u.Fragment,{})},f={tags:[`source`],parameters:n({source:{code:c}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`ReducedData`}),` is a string literal union of the two values from the`,` `,(0,u.jsx)(`code`,{children:`prefers-reduced-data`}),` media feature. Per`,` `,(0,u.jsx)(`a`,{href:`https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data`,target:`_blank`,rel:`noopener noreferrer`,children:`Media Queries Level 5 § prefers-reduced-data`}),`, `,(0,u.jsx)(`code`,{children:`no-preference`}),` and `,(0,u.jsx)(`code`,{children:`reduce`}),` are the only valid values exposed by the `,(0,u.jsx)(`code`,{children:`prefers-reduced-data`}),` media feature. `,(0,u.jsx)(`code`,{children:`no-preference`}),` is a real state: the user has not asked for reduced data.`]})}),r()]},p={tags:[`use-case`],parameters:n({description:{story:`Both values are valid. The browser/OS determines the actual preference.`},source:{code:s`
                import type { ReducedData } from '@just-web/toolkits'

                const noPreference: ReducedData = 'no-preference'
                const reduce: ReducedData = 'reduce'
            `}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`ReducedData`}),` has exactly two valid values: `,(0,u.jsx)(`code`,{children:`no-preference`}),` and`,` `,(0,u.jsx)(`code`,{children:`reduce`}),`. Use it when typing function parameters or return values related to reduced data preference.`]})}),r()]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Specification`,`BasicUsage`]})))()}h();export{p as BasicUsage,f as Specification,m as __namedExportsOrder,d as default};