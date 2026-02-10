import{j as e,d as t,m as r}from"./iframe-D4ruu7Wn.js";import{d as s}from"./dedent-BuYMbVyj.js";import{c as p}from"./index-CP2wypEn.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-class-name-BeQeRuGi.js";import"./prefers-color-scheme-CSMMlMsB.js";import"./globals.ctx-DOXvZQDb.js";import"./css-properties-Dh8E5HRZ.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./to-dom-style-DZVOeG1x.js";import"./class-name-DJrTHtyi.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const E={title:"props/StyleProps",tags:["autodocs","new","version:0.1"],render:()=>e.jsx(e.Fragment,{})},o={tags:["!test","editor"],parameters:t({description:{story:"`style` prop with extended `CSSProperties` type to support custom properties. This is useful when composing component props"},source:{code:s`
            import type { StyleProps } from '@just-web/foundation'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            `}})};r(o,{availableImports:{"@just-web/foundation":p},code:o.parameters?.docs?.source?.code});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    description: {
      story: '\`style\` prop with extended \`CSSProperties\` type to support custom properties. This is useful when composing component props'
    },
    source: {
      code: dedent\`
            import type { StyleProps } from '@just-web/foundation'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            \`
    }
  })
}`,...o.parameters?.docs?.source}}};const b=["Example"];export{o as Example,b as __namedExportsOrder,E as default};
