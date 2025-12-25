import{j as e,d as r}from"./iframe-BBwWFqlk.js";import{d as a}from"./dedent-BuYMbVyj.js";import{m as o}from"./index-DjaERcn4.js";import"./preload-helper-PPVm8Dsz.js";const s=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),u={title:"Playground",tags:["code-only"],render:()=>e.jsx(e.Fragment,{})},t={tags:["editor"],parameters:r({description:{story:"The data-attribute property accepts a string value for data attributes."}})};o(t,{availableImports:{"@just-web/types":s},code:a`import type { DataAttributeProps } from '@just-web/types'

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
}`,...t.parameters?.docs?.source}}};const m=["DataAttributeProps"];export{t as DataAttributeProps,m as __namedExportsOrder,u as default};
