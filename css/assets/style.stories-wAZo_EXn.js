import{j as o}from"./jsx-dev-runtime-DF-ftqEI.js";import{m as t,c as r}from"./index-CGLuQilf.js";import{d as s}from"./iframe-CoI8bjU8.js";import{d as p}from"./dedent-BuYMbVyj.js";import"./px_2_num-BC4tP6kO.js";import"./px_2_rem-CXClvWoR.js";import"./rem_2_px-Bx8XZIkD.js";import"./css_properties-Dh8E5HRZ.js";import"./properties-Dh8E5HRZ.js";import"./to_dom_style-DZVOeG1x.js";import"./class-name-CX0HDVeJ.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-BKciUfnA.js";import"./data-attribute-DhOVGBXa.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./prefers-color-scheme-D5KCvPFc.js";import"./preload-helper-PPVm8Dsz.js";const j={title:"props/StyleProps",tags:["autodocs","new","version:0.1"],render:()=>o.jsxDEV(o.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/props/style.stories.tsx",lineNumber:9,columnNumber:17},void 0)},e={tags:["!test","editor"],parameters:s({description:{story:"`style` prop with extended `CSSProperties` type to support custom properties. This is useful when composing component props"},source:{code:p`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            `}})};t(e,{availableImports:{"@just-web/css":r},code:e.parameters?.docs?.source?.code});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    description: {
      story: '\`style\` prop with extended \`CSSProperties\` type to support custom properties. This is useful when composing component props'
    },
    source: {
      code: dedent\`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            \`
    }
  })
}`,...e.parameters?.docs?.source}}};const g=["Example"];export{e as Example,g as __namedExportsOrder,j as default};
