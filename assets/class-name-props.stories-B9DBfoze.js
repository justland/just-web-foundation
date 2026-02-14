import{j as o,d as s,w as t,s as a,v as c}from"./iframe-B48FOIX8.js";import{m as n,c as m}from"./index-CKFR0VLp.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-class-name-Do2ucap8.js";import"./prefers-color-scheme-CSMMlMsB.js";import"./globals.ctx-AnFbK9hv.js";import"./css-properties-Dh8E5HRZ.js";import"./get-css-prop-values-Cr55G-ev.js";import"./to-dom-style-DZVOeG1x.js";import"./class-name-DJrTHtyi.js";import"./findKey-BZZwGHNT.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const p=`import type { ClassNameProps } from '@just-web/toolkits'
import type { PropsWithChildren } from 'react'

function MyComponent({ className, children }: PropsWithChildren<ClassNameProps>) {
	return <div className={className}>{children}</div>
}

export default () => <MyComponent className="text-blue-800">Hello in blue</MyComponent>
`,i=`/**
 * Interface for component props that include a className property.
 * The className property accepts a string value for CSS class names.
 */
export interface ClassNameProps {
	className?: string | undefined
}
`,M={title:"class-name/ClassNameProps",tags:["type","version:next"],render:()=>o.jsx(o.Fragment,{})},e={tags:["!test","editor"],parameters:s({source:{code:p}})};n(e,{availableImports:{"@just-web/toolkits":m,react:c},code:e.parameters?.docs?.source?.code});const r={tags:["!test","source"],parameters:s({source:{code:i}}),decorators:[t(),a({placement:"before"})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    source: {
      code
    }
  })
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before'
  })]
}`,...r.parameters?.docs?.source}}};const I=["Playground","Source"];export{e as Playground,r as Source,I as __namedExportsOrder,M as default};
