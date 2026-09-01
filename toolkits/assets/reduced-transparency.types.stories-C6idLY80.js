import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,l as i,s as a}from"./iframe-BJVp8-w1.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";var c;function l(){return(l=e((()=>{c=`/**
 * The reduced transparency preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency Media Queries Level 5 § prefers-reduced-transparency},
 * these are the only valid values exposed by the \`prefers-reduced-transparency\` media feature.
 *
 * \`no-preference\` is a real state: the user has not asked for reduced transparency.
 */
export type ReducedTransparency = 'no-preference' | 'reduce'
`})))()}var u,d,f,p,m;function h(){return(h=e((()=>{a(),o(),l(),u=t(),d={title:`reduced-transparency/ReducedTransparency`,tags:[`type`,`version:3.5`],render:()=>(0,u.jsx)(u.Fragment,{})},f={tags:[`source`],parameters:n({source:{code:c}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`ReducedTransparency`}),` is a string literal union of the two values from the`,` `,(0,u.jsx)(`code`,{children:`prefers-reduced-transparency`}),` media feature. Per`,` `,(0,u.jsx)(`a`,{href:`https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency`,target:`_blank`,rel:`noopener noreferrer`,children:`Media Queries Level 5 § prefers-reduced-transparency`}),`, `,(0,u.jsx)(`code`,{children:`no-preference`}),` and `,(0,u.jsx)(`code`,{children:`reduce`}),` are the only valid values exposed by the `,(0,u.jsx)(`code`,{children:`prefers-reduced-transparency`}),` media feature. `,(0,u.jsx)(`code`,{children:`no-preference`}),` is a real state: the user has not asked for reduced transparency.`]})}),r()]},p={tags:[`use-case`],parameters:n({description:{story:`Both values are valid. The browser/OS determines the actual preference.`},source:{code:s`
                import type { ReducedTransparency } from '@just-web/toolkits'

                const noPreference: ReducedTransparency = 'no-preference'
                const reduce: ReducedTransparency = 'reduce'
            `}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`ReducedTransparency`}),` has exactly two valid values: `,(0,u.jsx)(`code`,{children:`no-preference`}),` `,`and `,(0,u.jsx)(`code`,{children:`reduce`}),`. Use it when typing function parameters or return values related to reduced transparency preference.`]})}),r()]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Specification`,`BasicUsage`]})))()}h();export{p as BasicUsage,f as Specification,m as __namedExportsOrder,d as default};