import{j as s}from"./jsx-dev-runtime-DF-ftqEI.js";import{c as o}from"./index-BhMvkSn8.js";import{d as r}from"./iframe-DuLjC5BK.js";import{d as t}from"./dedent-BuYMbVyj.js";import{m as a}from"./index-D-RpXNUp.js";import"./px_2_num-BC4tP6kO.js";import"./px_2_rem-CXClvWoR.js";import"./rem_2_px-Bx8XZIkD.js";import"./css_properties-Dh8E5HRZ.js";import"./properties-Dh8E5HRZ.js";import"./to_dom_style-DZVOeG1x.js";import"./class-name-CX0HDVeJ.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-BKciUfnA.js";import"./data-attribute-DhOVGBXa.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./prefers-color-scheme-D5KCvPFc.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"props/ClassNameProps",tags:["version:0.1","autodocs","new"],render:()=>s.jsxDEV("div",{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/props/class-name.stories.tsx",lineNumber:9,columnNumber:17},void 0)},e={tags:["!test","editor"],parameters:r({description:{story:"The `className` property accepts a string value for CSS class names."},source:{code:t`import type { ClassNameProps } from '@just-web/css'

            interface MyComponentProps extends PropsWithChildren<ClassNameProps> {}

            const MyComponent = ({ className, children }: MyComponentProps) => {
                return <div className={className}>{children}</div>
            }

            export default () => <MyComponent className="text-blue-800">Hello in blue</MyComponent>`}})};a(e,{availableImports:{"@just-web/css":o},code:e.parameters?.docs?.source?.code});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const E=["Example"];export{e as Example,E as __namedExportsOrder,g as default};
