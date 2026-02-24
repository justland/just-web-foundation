import{j as s}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as o}from"./iframe-YRpWaOvq.js";import{d as r}from"./dedent-BuYMbVyj.js";import{m as t,c as a}from"./index-C2V118eE.js";import"./preload-helper-PPVm8Dsz.js";import"./px_2_num-BC4tP6kO.js";import"./px_2_rem-CXClvWoR.js";import"./rem_2_px-Bx8XZIkD.js";import"./css_properties-Dh8E5HRZ.js";import"./properties-Dh8E5HRZ.js";import"./to_dom_style-DZVOeG1x.js";import"./class-name-CX0HDVeJ.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-BKciUfnA.js";import"./data-attribute-DhOVGBXa.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./prefers-color-scheme-D5KCvPFc.js";const w={title:"props/ClassNameProps",tags:["version:0.1","autodocs","new"],render:()=>s.jsxDEV("div",{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/props/class-name.stories.tsx",lineNumber:9,columnNumber:17},void 0)},e={tags:["!test","editor"],parameters:o({description:{story:"The `className` property accepts a string value for CSS class names."},source:{code:r`import type { ClassNameProps } from '@just-web/css'

            interface MyComponentProps extends PropsWithChildren<ClassNameProps> {}

            const MyComponent = ({ className, children }: MyComponentProps) => {
                return <div className={className}>{children}</div>
            }

            export default () => <MyComponent className="text-blue-800">Hello in blue</MyComponent>`}})};t(e,{availableImports:{"@just-web/css":a},code:e.parameters?.docs?.source?.code});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    description: {
      story: 'The \`className\` property accepts a string value for CSS class names.'
    },
    source: {
      code: dedent\`import type { ClassNameProps } from '@just-web/css'

            interface MyComponentProps extends PropsWithChildren<ClassNameProps> {}

            const MyComponent = ({ className, children }: MyComponentProps) => {
                return <div className={className}>{children}</div>
            }

            export default () => <MyComponent className="text-blue-800">Hello in blue</MyComponent>\`
    }
  })
}`,...e.parameters?.docs?.source}}};const g=["Example"];export{e as Example,g as __namedExportsOrder,w as default};
