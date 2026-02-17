import{j as o,w as t,s,d as a,x as c,y as n}from"./iframe-DmIOXyur.js";import{m as p,t as i}from"./index-BUBrFapB.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-B8mgk3TU.js";import"./prefers-color-scheme-CSMMlMsB.js";import"./globals.ctx-AnFbK9hv.js";import"./get-css-prop-values-Cr55G-ev.js";import"./to-dom-style-DZVOeG1x.js";import"./define-css-properties-Dh8E5HRZ.js";import"./resolve-style-E-lGkuMe.js";import"./class-name-DJrTHtyi.js";import"./findKey-BZZwGHNT.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const m=`import type { ClassNameProps } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'
import type { PropsWithChildren } from 'react'

export default () => (
	<StoryCard appearance="output">
		<MyComponent className="font-extrabold">Hello in extra bold</MyComponent>
	</StoryCard>
)

function MyComponent({ className, children }: PropsWithChildren<ClassNameProps>) {
	return <div className={className}>{children}</div>
}
`,d=`/**
 * Interface for component props that include a className property.
 * The className property accepts a string value for CSS class names.
 */
export interface ClassNameProps {
	className?: string | undefined
}
`,I={title:"class-name/ClassNameProps",tags:["type","version:next","!test"],render:()=>o.jsx(o.Fragment,{})},r={tags:["source"],parameters:a({source:{code:d}}),decorators:[t({content:o.jsxs("p",{children:[o.jsx("code",{children:"ClassNameProps"})," describes the standard type of the ",o.jsx("code",{children:"className"})," ","property."]})}),s()]},e={tags:["use-case","editor"],parameters:a({source:{code:m}}),decorators:[t({content:o.jsx("p",{children:"Use it by itself or combine with other props."})}),s({placement:"before"})]};p(e,{availableImports:{"@just-web/toolkits":i,"@repobuddy/storybook":n,react:c},code:e.parameters?.docs?.source?.code});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ClassNameProps</code> describes the standard type of the <code>className</code>{' '}
                    property.
                </p>
  }), showDocSource()]
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [withStoryCard({
    content: <p>Use it by itself or combine with other props.</p>
  }), showDocSource({
    placement: 'before'
  })]
}`,...e.parameters?.docs?.source}}};const R=["Specification","BasicUsage"];export{e as BasicUsage,r as Specification,R as __namedExportsOrder,I as default};
