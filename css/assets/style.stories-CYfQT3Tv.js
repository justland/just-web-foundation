import{j as o,d as t}from"./iframe-rqCsvcYE.js";import{d as r}from"./dedent-BEojnTFe.js";import{m as s,c as p}from"./index-C1cWQyFY.js";import"./preload-helper-PPVm8Dsz.js";import"./px_2_num-BC4tP6kO.js";import"./px_2_rem-CXClvWoR.js";import"./rem_2_px-Bx8XZIkD.js";import"./to_dom_style-DZVOeG1x.js";import"./class-name-CX0HDVeJ.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-BKciUfnA.js";import"./data-attribute-DhOVGBXa.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./prefers-color-scheme-D5KCvPFc.js";const w={title:"props/StyleProps",tags:["autodocs","new","version:1.0.0"],render:()=>o.jsx(o.Fragment,{})},e={tags:["!test","editor"],parameters:t({description:{story:"`style` prop with extended `CSSProperties` type to support custom properties. This is useful when composing component props"},source:{code:r`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            `}})};s(e,{availableImports:{"@just-web/css":p},code:e.parameters?.docs?.source?.code});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const g=["Example"];export{e as Example,g as __namedExportsOrder,w as default};
