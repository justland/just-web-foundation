import{j as o,w as t,s,d as a,a4 as p,a5 as n,a6 as i}from"./iframe-BRf7Axb3.js";import{t as c}from"./index-BYxqIZ2-.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./observe-attribute-DJMrXwPX.js";import"./observe-data-attribute-CrIGpGqK.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-Bq_FyHcK.js";import"./get-prefers-color-scheme-C16oSBYU.js";import"./observe-prefers-color-scheme-DjdBdD7G.js";import"./define-css-properties-Dh8E5HRZ.js";import"./get-css-variable-value-B4-Axp-e.js";import"./resolve-style-E-lGkuMe.js";import"./to-dom-style-DZVOeG1x.js";import"./get-rem-to-px-scale-CTgj4gd8.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";import"./append-id-Vsg144gU.js";const d=`import type { StyleProps } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'
import type { PropsWithChildren } from 'react'

export default () => (
	<StoryCard appearance="output">
		<MyComponent style={{ color: 'red', fontWeight: 'bold' }}>Hello in red and bold</MyComponent>
	</StoryCard>
)

function MyComponent({ style, children }: PropsWithChildren<StyleProps>) {
	return <div style={style}>{children}</div>
}
`,m=`import type { CSSProperties } from './css-properties.ts'

/**
 * Interface for component props that include a style property.
 */
export type StyleProps<TLength = 0 | (string & {}), TTime = string & {}> = {
	style?: CSSProperties<TLength, TTime> | undefined
}
`,M={title:"style/StyleProps",tags:["type","version:1.0","!test"],render:()=>o.jsx(o.Fragment,{})},r={tags:["source"],parameters:a({source:{code:m}}),decorators:[t({content:o.jsxs("p",{children:[o.jsx("code",{children:"StyleProps"})," describes the standard type of the ",o.jsx("code",{children:"style"})," property."]})}),s()]},e={tags:["use-case","editor"],parameters:a({source:{code:d}}),decorators:[t({content:o.jsx("p",{children:"Use it by itself or combine with other props."})}),s()]};p(e,{availableImports:{"@just-web/toolkits":c,"@repobuddy/storybook":i,react:n},code:e.parameters?.docs?.source?.code});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>StyleProps</code> describes the standard type of the <code>style</code> property.
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
}`,...e.parameters?.docs?.source}}};const W=["Specification","BasicUsage"];export{e as BasicUsage,r as Specification,W as __namedExportsOrder,M as default};
