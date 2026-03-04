import{j as o,w as s,s as t,d as a,a4 as c,a5 as n,a6 as p}from"./iframe-BjeGB4gq.js";import{t as i}from"./index-DE47mXQf.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./observe-attribute-DJMrXwPX.js";import"./observe-data-attribute-CrIGpGqK.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-B8ntG9L-.js";import"./get-prefers-color-scheme-C16oSBYU.js";import"./observe-prefers-color-scheme-DjdBdD7G.js";import"./define-css-properties-Dh8E5HRZ.js";import"./get-css-variable-value-B4-Axp-e.js";import"./resolve-style-E-lGkuMe.js";import"./to-dom-style-DZVOeG1x.js";import"./get-rem-to-px-scale-CTgj4gd8.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";import"./append-id-Vsg144gU.js";const m=`import type { ClassNameProps } from '@just-web/toolkits'
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
`,B={title:"class-name/ClassNameProps",tags:["type","version:1.0","!test"],render:()=>o.jsx(o.Fragment,{})},r={tags:["source"],parameters:a({source:{code:d}}),decorators:[s({content:o.jsxs("p",{children:[o.jsx("code",{children:"ClassNameProps"})," describes the standard type of the ",o.jsx("code",{children:"className"})," ","property."]})}),t()]},e={tags:["use-case","editor"],parameters:a({source:{code:m}}),decorators:[s({content:o.jsx("p",{children:"Use it by itself or combine with other props."})}),t()]};c(e,{availableImports:{"@just-web/toolkits":i,"@repobuddy/storybook":p,react:n},code:e.parameters?.docs?.source?.code});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  }), showSource()]
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [withStoryCard({
    content: <p>Use it by itself or combine with other props.</p>
  }), showSource()]
}`,...e.parameters?.docs?.source}}};const I=["Specification","BasicUsage"];export{e as BasicUsage,r as Specification,I as __namedExportsOrder,B as default};
