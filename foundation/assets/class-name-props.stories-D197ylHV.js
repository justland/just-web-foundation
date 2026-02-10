import{j as r,w as t,d as o,s as a,m as c,q as n}from"./iframe-D4ruu7Wn.js";import{c as m}from"./index-CP2wypEn.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-class-name-BeQeRuGi.js";import"./prefers-color-scheme-CSMMlMsB.js";import"./globals.ctx-DOXvZQDb.js";import"./css-properties-Dh8E5HRZ.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./to-dom-style-DZVOeG1x.js";import"./class-name-DJrTHtyi.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const p=`import type { ClassNameProps } from '@just-web/toolkits'
import type { PropsWithChildren } from 'react'

const MyComponent = ({ className, children }: PropsWithChildren<ClassNameProps>) => {
	return <div className={className}>{children}</div>
}

export default () => <MyComponent className="text-blue-800">Hello in blue</MyComponent>
`,i=`/**
 * @fileoverview
 * Note that \`className\` could be specific to ReactJS.
 * So this type may be misplaced in this package.
 */

/**
 * Interface for component props that include a className property.
 * The className property accepts a string value for CSS class names.
 */
export interface ClassNameProps {
	className?: string | undefined
}
`,M={title:"class-name/ClassNameProps",tags:["type","version:next","autodocs"],render:()=>r.jsx(r.Fragment,{})},e={tags:["!test","editor"],parameters:o({description:{story:"The `className` property accepts a string value for CSS class names."},source:{code:p}}),decorators:[t()]};c(e,{availableImports:{"@just-web/toolkits":m,react:n},code:e.parameters?.docs?.source?.code});const s={tags:["!test","source"],parameters:o({source:{code:i}}),decorators:[a({placement:"before"})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    description: {
      story: 'The \`className\` property accepts a string value for CSS class names.'
    },
    source: {
      code
    }
  }),
  decorators: [withStoryCard()]
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showDocSource({
    placement: 'before'
  })]
}`,...s.parameters?.docs?.source}}};const R=["BasicUsage","Source"];export{e as BasicUsage,s as Source,R as __namedExportsOrder,M as default};
