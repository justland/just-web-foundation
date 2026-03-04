import{j as e,w as s,s as t,d as c}from"./iframe-6R7iObMn.js";import{d as a}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const n=`/**
 * The color scheme of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme Media Queries Level 5 § prefers-color-scheme},
 * these are the only valid values exposed by the \`prefers-color-scheme\` media feature.
 */
export type ColorScheme = 'light' | 'dark'
`,h={title:"color-scheme/ColorScheme",tags:["type","version:next"],render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:c({source:{code:n}}),decorators:[s({content:e.jsxs("p",{children:[e.jsx("code",{children:"ColorScheme"})," is a string literal union of the two values from the"," ",e.jsx("code",{children:"prefers-color-scheme"})," media feature. Per"," ",e.jsx("a",{href:"https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme",target:"_blank",rel:"noopener noreferrer",children:"Media Queries Level 5 § prefers-color-scheme"}),", ",e.jsx("code",{children:"light"})," and ",e.jsx("code",{children:"dark"})," are the only valid values exposed by the"," ",e.jsx("code",{children:"prefers-color-scheme"})," media feature."]})}),t()]},o={tags:["use-case"],parameters:c({description:{story:"Both values are valid. The browser/OS determines the actual preference."},source:{code:a`
                import type { ColorScheme } from '#just-web/toolkits'

                const light: ColorScheme = 'light'
                const dark: ColorScheme = 'dark'
            `}}),decorators:[s({content:e.jsxs("p",{children:[e.jsx("code",{children:"ColorScheme"})," has exactly two valid values: ",e.jsx("code",{children:"light"})," and"," ",e.jsx("code",{children:"dark"}),". Use it when typing function parameters or return values related to color scheme."]})}),t()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Both values are valid. The browser/OS determines the actual preference.'
    },
    source: {
      code: dedent\`
                import type { ColorScheme } from '#just-web/toolkits'

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
}`,...o.parameters?.docs?.source}}};const m=["Specification","BasicUsage"];export{o as BasicUsage,r as Specification,m as __namedExportsOrder,h as default};
