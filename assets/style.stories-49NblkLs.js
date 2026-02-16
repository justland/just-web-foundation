import{j as o}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as t,m as r}from"./iframe-DoDTZ-f0.js";import{d as s}from"./dedent-BuYMbVyj.js";import{c as p}from"./index-C4LF55DM.js";import"./preload-helper-PPVm8Dsz.js";import"./px_2_num-BC4tP6kO.js";import"./px_2_rem-CXClvWoR.js";import"./rem_2_px-Bx8XZIkD.js";import"./css_properties-Dh8E5HRZ.js";import"./properties-Dh8E5HRZ.js";import"./to_dom_style-DZVOeG1x.js";import"./class-name-CX0HDVeJ.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-BKciUfnA.js";import"./data-attribute-DhOVGBXa.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./prefers-color-scheme-D5KCvPFc.js";import"./resolve-class-name-BeQeRuGi.js";const g={title:"props/StyleProps",tags:["autodocs","new","version:0.1"],render:()=>o.jsxDEV(o.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/props/style.stories.tsx",lineNumber:9,columnNumber:17},void 0)},e={tags:["!test","editor"],parameters:t({description:{story:"`style` prop with extended `CSSProperties` type to support custom properties. This is useful when composing component props"},source:{code:s`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            `}})};r(e,{availableImports:{"@just-web/css":p},code:e.parameters?.docs?.source?.code});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const E=["Example"];export{e as Example,E as __namedExportsOrder,g as default};
