import{j as e}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as r}from"./iframe-xLflEfzb.js";import{d as a}from"./dedent-BuYMbVyj.js";import{m as o}from"./index-uYRqlgue.js";import"./preload-helper-PPVm8Dsz.js";const s=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),m={title:"Playground",tags:["code-only"],render:()=>e.jsxDEV(e.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/types/src/index.stories.tsx",lineNumber:9,columnNumber:17},void 0)},t={tags:["editor"],parameters:r({description:{story:"The data-attribute property accepts a string value for data attributes."}})};o(t,{availableImports:{"@just-web/types":s},code:a`import type { DataAttributeProps } from '@just-web/types'

    const Component = ({ 'data-attribute': dataAttribute }: DataAttributeProps) => {
        return <div data-attribute={dataAttribute}>Try it out in the Live code editor panel</div>
    }

    export default () => <Component data-attribute="test" />`});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['editor'],
  parameters: defineDocsParam({
    description: {
      story: 'The data-attribute property accepts a string value for data attributes.'
    }
  })
}`,...t.parameters?.docs?.source}}};const c=["DataAttributeProps"];export{t as DataAttributeProps,c as __namedExportsOrder,m as default};
