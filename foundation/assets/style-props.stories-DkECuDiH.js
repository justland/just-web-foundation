import{j as o,w as t,s,d as n,v as p,x as a,y as i}from"./iframe-CAUFuzF-.js";import{t as c}from"./index-nti0ZwAR.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-kPatjM3S.js";import"./prefers-color-scheme-CSMMlMsB.js";import"./globals.ctx-DOXvZQDb.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./to-dom-style-DZVOeG1x.js";import"./define-css-properties-Dh8E5HRZ.js";import"./resolve-style-E-lGkuMe.js";import"./class-name-DJrTHtyi.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const d=`import type { StyleProps } from '@just-web/toolkits'
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
`,W={title:"style/StyleProps",tags:["type","version:next","!test"],render:()=>o.jsx(o.Fragment,{})},r={tags:["source"],parameters:n({source:{code:m}}),decorators:[t({content:o.jsxs("p",{children:[o.jsx("code",{children:"StyleProps"})," describes the standard type of the ",o.jsx("code",{children:"style"})," property."]})}),s()]},e={tags:["use-case","editor"],parameters:n({source:{code:d}}),decorators:[t({content:o.jsx("p",{children:"Use it by itself or combine with other props."})}),s({placement:"before"})]};p(e,{availableImports:{"@just-web/toolkits":c,"@repobuddy/storybook":i,react:a},code:e.parameters?.docs?.source?.code});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const B=["Specification","BasicUsage"];export{e as BasicUsage,r as Specification,B as __namedExportsOrder,W as default};
