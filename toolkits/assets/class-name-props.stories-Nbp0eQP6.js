import{j as r,w as t,s,d as a,ac as p,ad as i,ae as c}from"./iframe-BF2V-t9M.js";import{t as m}from"./index-Ddc_Pa1X.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./observe-attribute-CZKLLp6I.js";import"./observe-data-attribute-ioQK7DCF.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-BFxr49ng.js";import"./get-prefers-color-scheme-BMZwcwg-.js";import"./get-media-feature-value-D3vhnjdc.js";import"./observe-prefers-color-scheme-Cpw9ndla.js";import"./observe-media-feature-value--S6jnvF8.js";import"./get-prefers-contrast-DyhaFsxO.js";import"./observe-prefers-contrast-BeXHHVYn.js";import"./get-locale-BBBiBIN1.js";import"./observe-locale-Mz7zmLKX.js";import"./set-locale-CqhIGKJQ.js";import"./get-prefers-reduced-data-Cqj8l0v_.js";import"./observe-prefers-reduced-data-B__XwK7s.js";import"./get-prefers-reduced-motion-D4GvVdcy.js";import"./observe-prefers-reduced-motion-Bpm1Rvjy.js";import"./get-prefers-reduced-transparency-JPUbF0w7.js";import"./observe-prefers-reduced-transparency-r0yFSKKP.js";import"./define-css-properties-Dh8E5HRZ.js";import"./get-css-variable-value-B4-Axp-e.js";import"./resolve-style-E-lGkuMe.js";import"./to-dom-style-DZVOeG1x.js";import"./convert-css-unit-CaWw9MZt.js";import"./get-rem-to-px-scale-CTgj4gd8.js";import"./parse-css-value-DyiR79PK.js";import"./create-css-unit-converter-B-7dzDjR.js";import"./get-css-unit-DteVD2Hc.js";import"./is-effectively-zero-CoUoHep5.js";import"./parse-css-number-rqvDcBqs.js";import"./px-2-rem-CPoMxM9B.js";import"./rem-2-px-B1LC_HvB.js";import"./append-id-Vsg144gU.js";const n=`import type { ClassNameProps } from '@just-web/toolkits'
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
`,X={title:"class-name/ClassNameProps",tags:["type","version:1.0","!test"],render:()=>r.jsx(r.Fragment,{})},e={tags:["source"],parameters:a({source:{code:d}}),decorators:[t({content:r.jsxs("p",{children:[r.jsx("code",{children:"ClassNameProps"})," describes the standard type of the ",r.jsx("code",{children:"className"})," ","property."]})}),s()]},o={tags:["use-case","editor"],parameters:a({source:{code:n}}),decorators:[t({content:r.jsx("p",{children:"Use it by itself or combine with other props."})}),s()]};p(o,{availableImports:{"@just-web/toolkits":m,"@repobuddy/storybook":c,react:i},code:o.parameters?.docs?.source?.code});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [withStoryCard({
    content: <p>Use it by itself or combine with other props.</p>
  }), showSource()]
}`,...o.parameters?.docs?.source}}};const Y=["Specification","BasicUsage"];export{o as BasicUsage,e as Specification,Y as __namedExportsOrder,X as default};
