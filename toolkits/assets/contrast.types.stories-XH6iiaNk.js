import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,l as i,s as a}from"./iframe-DFQ_z_Nq.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";var c;function l(){return(l=e((()=>{c=`/**
 * The contrast preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-contrast Media Queries Level 5 § prefers-contrast},
 * these are the only valid values exposed by the \`prefers-contrast\` media feature.
 *
 * \`no-preference\` is a real state: the user has not asked for a contrast adjustment.
 */
export type Contrast = 'no-preference' | 'less' | 'more' | 'custom'
`})))()}var u,d,f,p,m;function h(){return(h=e((()=>{a(),o(),l(),u=t(),d={title:`contrast/Contrast`,tags:[`type`,`version:3.5`],render:()=>(0,u.jsx)(u.Fragment,{})},f={tags:[`source`],parameters:n({source:{code:c}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`Contrast`}),` is a string literal union of the four values from the`,` `,(0,u.jsx)(`code`,{children:`prefers-contrast`}),` media feature. Per`,` `,(0,u.jsx)(`a`,{href:`https://drafts.csswg.org/mediaqueries-5/#prefers-contrast`,target:`_blank`,rel:`noopener noreferrer`,children:`Media Queries Level 5 § prefers-contrast`}),`, `,(0,u.jsx)(`code`,{children:`no-preference`}),`, `,(0,u.jsx)(`code`,{children:`less`}),`, `,(0,u.jsx)(`code`,{children:`more`}),` and `,(0,u.jsx)(`code`,{children:`custom`}),` `,`are the only valid values exposed by the `,(0,u.jsx)(`code`,{children:`prefers-contrast`}),` media feature.`,` `,(0,u.jsx)(`code`,{children:`no-preference`}),` is a real state: the user has not asked for a contrast adjustment.`]})}),r()]},p={tags:[`use-case`],parameters:n({description:{story:`All four values are valid. The browser/OS determines the actual preference.`},source:{code:s`
                import type { Contrast } from '@just-web/toolkits'

                const noPreference: Contrast = 'no-preference'
                const less: Contrast = 'less'
                const more: Contrast = 'more'
                const custom: Contrast = 'custom'
            `}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`Contrast`}),` has exactly four valid values: `,(0,u.jsx)(`code`,{children:`no-preference`}),`,`,` `,(0,u.jsx)(`code`,{children:`less`}),`, `,(0,u.jsx)(`code`,{children:`more`}),` and `,(0,u.jsx)(`code`,{children:`custom`}),`. Use it when typing function parameters or return values related to contrast preference.`]})}),r()]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>Contrast</code> is a string literal union of the four values from the{' '}
                    <code>prefers-contrast</code> media feature. Per{' '}
                    <a href="https://drafts.csswg.org/mediaqueries-5/#prefers-contrast" target="_blank" rel="noopener noreferrer">
                        Media Queries Level 5 § prefers-contrast
                    </a>
                    , <code>no-preference</code>, <code>less</code>, <code>more</code> and <code>custom</code>{' '}
                    are the only valid values exposed by the <code>prefers-contrast</code> media feature.{' '}
                    <code>no-preference</code> is a real state: the user has not asked for a contrast
                    adjustment.
                </p>
  }), showSource()]
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'All four values are valid. The browser/OS determines the actual preference.'
    },
    source: {
      code: dedent\`
                import type { Contrast } from '@just-web/toolkits'

                const noPreference: Contrast = 'no-preference'
                const less: Contrast = 'less'
                const more: Contrast = 'more'
                const custom: Contrast = 'custom'
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>Contrast</code> has exactly four valid values: <code>no-preference</code>,{' '}
                    <code>less</code>, <code>more</code> and <code>custom</code>. Use it when typing function
                    parameters or return values related to contrast preference.
                </p>
  }), showSource()]
}`,...p.parameters?.docs?.source}}},m=[`Specification`,`BasicUsage`]})))()}h();export{p as BasicUsage,f as Specification,m as __namedExportsOrder,d as default};