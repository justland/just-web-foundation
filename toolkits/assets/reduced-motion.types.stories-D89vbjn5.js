import{j as e,w as t,s as d,d as n}from"./iframe-BF2V-t9M.js";import{d as s}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const c=`/**
 * The reduced motion preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion Media Queries Level 5 § prefers-reduced-motion},
 * these are the only valid values exposed by the \`prefers-reduced-motion\` media feature.
 *
 * \`no-preference\` is a real state: the user has not asked for reduced motion.
 */
export type ReducedMotion = 'no-preference' | 'reduce'
`,p={title:"reduced-motion/ReducedMotion",tags:["type","version:3.5"],render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:n({source:{code:c}}),decorators:[t({content:e.jsxs("p",{children:[e.jsx("code",{children:"ReducedMotion"})," is a string literal union of the two values from the"," ",e.jsx("code",{children:"prefers-reduced-motion"})," media feature. Per"," ",e.jsx("a",{href:"https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion",target:"_blank",rel:"noopener noreferrer",children:"Media Queries Level 5 § prefers-reduced-motion"}),", ",e.jsx("code",{children:"no-preference"})," and ",e.jsx("code",{children:"reduce"})," are the only valid values exposed by the ",e.jsx("code",{children:"prefers-reduced-motion"})," media feature. ",e.jsx("code",{children:"no-preference"})," is a real state: the user has not asked for reduced motion."]})}),d()]},o={tags:["use-case"],parameters:n({description:{story:"Both values are valid. The browser/OS determines the actual preference."},source:{code:s`
                import type { ReducedMotion } from '@just-web/toolkits'

                const noPreference: ReducedMotion = 'no-preference'
                const reduce: ReducedMotion = 'reduce'
            `}}),decorators:[t({content:e.jsxs("p",{children:[e.jsx("code",{children:"ReducedMotion"})," has exactly two valid values: ",e.jsx("code",{children:"no-preference"})," and"," ",e.jsx("code",{children:"reduce"}),". Use it when typing function parameters or return values related to reduced motion preference."]})}),d()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ReducedMotion</code> is a string literal union of the two values from the{' '}
                    <code>prefers-reduced-motion</code> media feature. Per{' '}
                    <a href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion" target="_blank" rel="noopener noreferrer">
                        Media Queries Level 5 § prefers-reduced-motion
                    </a>
                    , <code>no-preference</code> and <code>reduce</code> are the only valid values exposed by
                    the <code>prefers-reduced-motion</code> media feature. <code>no-preference</code> is a
                    real state: the user has not asked for reduced motion.
                </p>
  }), showSource()]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Both values are valid. The browser/OS determines the actual preference.'
    },
    source: {
      code: dedent\`
                import type { ReducedMotion } from '@just-web/toolkits'

                const noPreference: ReducedMotion = 'no-preference'
                const reduce: ReducedMotion = 'reduce'
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ReducedMotion</code> has exactly two valid values: <code>no-preference</code> and{' '}
                    <code>reduce</code>. Use it when typing function parameters or return values related to
                    reduced motion preference.
                </p>
  }), showSource()]
}`,...o.parameters?.docs?.source}}};const m=["Specification","BasicUsage"];export{o as BasicUsage,r as Specification,m as __namedExportsOrder,p as default};
