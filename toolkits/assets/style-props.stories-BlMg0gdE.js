import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as i,c as a,l as o,n as s,o as c,r as l,s as u}from"./iframe-BJVp8-w1.js";import{n as d,t as f}from"./src-X3K_eC4I.js";var p;function m(){return(m=t((()=>{p=`import type { StyleProps } from '@just-web/toolkits'
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
`})))()}var h;function g(){return(g=t((()=>{h=`import type { CSSProperties } from './css-properties.ts'

/**
 * Interface for component props that include a style property.
 */
export type StyleProps<TLength = 0 | (string & {}), TTime = string & {}> = {
	style?: CSSProperties<TLength, TTime> | undefined
}
`})))()}var _,v,y,b,x,S;function C(){return(C=t((()=>{f(),u(),_=e(n(),1),s(),m(),g(),v=r(),y={title:`style/StyleProps`,tags:[`type`,`version:1.0`,`!test`],render:()=>(0,v.jsx)(v.Fragment,{})},b={tags:[`source`],parameters:i({source:{code:h}}),decorators:[o({content:(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`code`,{children:`StyleProps`}),` describes the standard type of the `,(0,v.jsx)(`code`,{children:`style`}),` property.`]})}),a()]},x={tags:[`use-case`,`editor`],parameters:i({source:{code:p}}),decorators:[o({content:(0,v.jsx)(`p`,{children:`Use it by itself or combine with other props.`})}),a()]},l(x,{availableImports:{"@just-web/toolkits":d,"@repobuddy/storybook":c,react:_},code:x.parameters?.docs?.source?.code}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [withStoryCard({
    content: <p>Use it by itself or combine with other props.</p>
  }), showSource()]
}`,...x.parameters?.docs?.source}}},S=[`Specification`,`BasicUsage`]})))()}C();export{x as BasicUsage,b as Specification,S as __namedExportsOrder,y as default};