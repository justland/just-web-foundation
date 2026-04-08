import{j as o,w as t,s,d as a,a4 as c,a5 as p,a6 as n}from"./iframe-7ZNQ_6ea.js";import{t as i}from"./index-BkV608qs.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./observe-attribute-CZKLLp6I.js";import"./observe-data-attribute-ioQK7DCF.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-2frVWK5S.js";import"./get-prefers-color-scheme-C16oSBYU.js";import"./observe-prefers-color-scheme-DjdBdD7G.js";import"./define-css-properties-Dh8E5HRZ.js";import"./get-css-variable-value-B4-Axp-e.js";import"./resolve-style-E-lGkuMe.js";import"./to-dom-style-DZVOeG1x.js";import"./convert-css-unit-CaWw9MZt.js";import"./get-rem-to-px-scale-CTgj4gd8.js";import"./parse-css-value-DyiR79PK.js";import"./create-css-unit-converter-B-7dzDjR.js";import"./get-css-unit-DteVD2Hc.js";import"./is-effectively-zero-CoUoHep5.js";import"./parse-css-number-rqvDcBqs.js";import"./px-2-rem-CPoMxM9B.js";import"./rem-2-px-B1LC_HvB.js";import"./append-id-Vsg144gU.js";const m=`import type { ClassNameProps } from '@just-web/toolkits'
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
`,F={title:"class-name/ClassNameProps",tags:["type","version:1.0","!test"],render:()=>o.jsx(o.Fragment,{})},r={tags:["source"],parameters:a({source:{code:d}}),decorators:[t({content:o.jsxs("p",{children:[o.jsx("code",{children:"ClassNameProps"})," describes the standard type of the ",o.jsx("code",{children:"className"})," ","property."]})}),s()]},e={tags:["use-case","editor"],parameters:a({source:{code:m}}),decorators:[t({content:o.jsx("p",{children:"Use it by itself or combine with other props."})}),s()]};c(e,{availableImports:{"@just-web/toolkits":i,"@repobuddy/storybook":n,react:p},code:e.parameters?.docs?.source?.code});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const H=["Specification","BasicUsage"];export{e as BasicUsage,r as Specification,H as __namedExportsOrder,F as default};
