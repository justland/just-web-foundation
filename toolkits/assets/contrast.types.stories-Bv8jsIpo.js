import{j as e,w as t,s as o,d as n}from"./iframe-BF2V-t9M.js";import{d as a}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const c=`/**
 * The contrast preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-contrast Media Queries Level 5 § prefers-contrast},
 * these are the only valid values exposed by the \`prefers-contrast\` media feature.
 *
 * \`no-preference\` is a real state: the user has not asked for a contrast adjustment.
 */
export type Contrast = 'no-preference' | 'less' | 'more' | 'custom'
`,u={title:"contrast/Contrast",tags:["type","version:3.5"],render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:n({source:{code:c}}),decorators:[t({content:e.jsxs("p",{children:[e.jsx("code",{children:"Contrast"})," is a string literal union of the four values from the"," ",e.jsx("code",{children:"prefers-contrast"})," media feature. Per"," ",e.jsx("a",{href:"https://drafts.csswg.org/mediaqueries-5/#prefers-contrast",target:"_blank",rel:"noopener noreferrer",children:"Media Queries Level 5 § prefers-contrast"}),", ",e.jsx("code",{children:"no-preference"}),", ",e.jsx("code",{children:"less"}),", ",e.jsx("code",{children:"more"})," and ",e.jsx("code",{children:"custom"})," ","are the only valid values exposed by the ",e.jsx("code",{children:"prefers-contrast"})," media feature."," ",e.jsx("code",{children:"no-preference"})," is a real state: the user has not asked for a contrast adjustment."]})}),o()]},s={tags:["use-case"],parameters:n({description:{story:"All four values are valid. The browser/OS determines the actual preference."},source:{code:a`
                import type { Contrast } from '@just-web/toolkits'

                const noPreference: Contrast = 'no-preference'
                const less: Contrast = 'less'
                const more: Contrast = 'more'
                const custom: Contrast = 'custom'
            `}}),decorators:[t({content:e.jsxs("p",{children:[e.jsx("code",{children:"Contrast"})," has exactly four valid values: ",e.jsx("code",{children:"no-preference"}),","," ",e.jsx("code",{children:"less"}),", ",e.jsx("code",{children:"more"})," and ",e.jsx("code",{children:"custom"}),". Use it when typing function parameters or return values related to contrast preference."]})}),o()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const p=["Specification","BasicUsage"];export{s as BasicUsage,r as Specification,p as __namedExportsOrder,u as default};
