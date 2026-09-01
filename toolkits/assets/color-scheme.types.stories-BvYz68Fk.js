import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,l as i,s as a}from"./iframe-DFQ_z_Nq.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";var c;function l(){return(l=e((()=>{c=`/**
 * The color scheme of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme Media Queries Level 5 § prefers-color-scheme},
 * these are the only valid values exposed by the \`prefers-color-scheme\` media feature.
 */
export type ColorScheme = 'light' | 'dark'
`})))()}var u,d,f,p,m;function h(){return(h=e((()=>{a(),o(),l(),u=t(),d={title:`color-scheme/ColorScheme`,tags:[`type`,`version:2.1`],render:()=>(0,u.jsx)(u.Fragment,{})},f={tags:[`source`],parameters:n({source:{code:c}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`ColorScheme`}),` is a string literal union of the two values from the`,` `,(0,u.jsx)(`code`,{children:`prefers-color-scheme`}),` media feature. Per`,` `,(0,u.jsx)(`a`,{href:`https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme`,target:`_blank`,rel:`noopener noreferrer`,children:`Media Queries Level 5 § prefers-color-scheme`}),`, `,(0,u.jsx)(`code`,{children:`light`}),` and `,(0,u.jsx)(`code`,{children:`dark`}),` are the only valid values exposed by the`,` `,(0,u.jsx)(`code`,{children:`prefers-color-scheme`}),` media feature.`]})}),r()]},p={tags:[`use-case`],parameters:n({description:{story:`Both values are valid. The browser/OS determines the actual preference.`},source:{code:s`
                import type { ColorScheme } from '@just-web/toolkits'

                const light: ColorScheme = 'light'
                const dark: ColorScheme = 'dark'
            `}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`ColorScheme`}),` has exactly two valid values: `,(0,u.jsx)(`code`,{children:`light`}),` and`,` `,(0,u.jsx)(`code`,{children:`dark`}),`. Use it when typing function parameters or return values related to color scheme.`]})}),r()]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ColorScheme</code> is a string literal union of the two values from the{' '}
                    <code>prefers-color-scheme</code> media feature. Per{' '}
                    <a href="https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme" target="_blank" rel="noopener noreferrer">
                        Media Queries Level 5 § prefers-color-scheme
                    </a>
                    , <code>light</code> and <code>dark</code> are the only valid values exposed by the{' '}
                    <code>prefers-color-scheme</code> media feature.
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
                import type { ColorScheme } from '@just-web/toolkits'

                const light: ColorScheme = 'light'
                const dark: ColorScheme = 'dark'
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ColorScheme</code> has exactly two valid values: <code>light</code> and{' '}
                    <code>dark</code>. Use it when typing function parameters or return values related to
                    color scheme.
                </p>
  }), showSource()]
}`,...p.parameters?.docs?.source}}},m=[`Specification`,`BasicUsage`]})))()}h();export{p as BasicUsage,f as Specification,m as __namedExportsOrder,d as default};