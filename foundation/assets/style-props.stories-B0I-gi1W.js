import{j as r,w as e,s,d as p,x as i,y as n,z as a}from"./iframe-BwCvR-Rn.js";import{t as c}from"./index-DWpVUPdY.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./observe-attribute-DJMrXwPX.js";import"./observe-data-attribute-CrIGpGqK.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-CEwuZh68.js";import"./get-prefers-color-scheme-BGoLu2Q0.js";import"./observe-prefers-color-scheme-DjdBdD7G.js";import"./define-css-properties-Dh8E5HRZ.js";import"./get-css-variable-value-B4-Axp-e.js";import"./resolve-style-E-lGkuMe.js";import"./to-dom-style-DZVOeG1x.js";import"./try-parse-json-83P4r8LE.js";import"./get-theme-by-class-name--buxm-w-.js";import"./findKey-D_Zca1Sl.js";import"./get-theme-by-data-attribute-DnSc2ywd.js";import"./set-theme-to-local-storage-BwgwevIK.js";import"./set-theme-to-session-storage-Cr54TX08.js";import"./get-theme-from-store-DOanYLt7.js";import"./observe-theme-by-class-name-0VpHRYtw.js";import"./observe-theme-by-data-attributes-CgqBQcJU.js";import"./observe-theme-from-local-storage-D5-Ifohs.js";import"./observe-theme-from-session-storage-CVw4H7Bt.js";import"./observe-theme-from-store-BnVImBhj.js";import"./set-theme-by-class-name-BC2y_ikC.js";import"./set-theme-by-data-attribute-DXwUN9Hp.js";import"./set-theme-to-store-BD5RwHDf.js";import"./get-rem-to-px-scale-CTgj4gd8.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";import"./append-id-Vsg144gU.js";const m=`import type { StyleProps } from '@just-web/toolkits'
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
`,d=`import type { CSSProperties } from './css-properties.ts'

/**
 * Interface for component props that include a style property.
 */
export type StyleProps<TLength = 0 | (string & {}), TTime = string & {}> = {
	style?: CSSProperties<TLength, TTime> | undefined
}
`,N={title:"style/StyleProps",tags:["type","version:next","!test"],render:()=>r.jsx(r.Fragment,{})},t={tags:["source"],parameters:p({source:{code:d}}),decorators:[e({content:r.jsxs("p",{children:[r.jsx("code",{children:"StyleProps"})," describes the standard type of the ",r.jsx("code",{children:"style"})," property."]})}),s()]},o={tags:["use-case","editor"],parameters:p({source:{code:m}}),decorators:[e({content:r.jsx("p",{children:"Use it by itself or combine with other props."})}),s()]};i(o,{availableImports:{"@just-web/toolkits":c,"@repobuddy/storybook":a,react:n},code:o.parameters?.docs?.source?.code});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [withStoryCard({
    content: <p>Use it by itself or combine with other props.</p>
  }), showSource()]
}`,...o.parameters?.docs?.source}}};const Q=["Specification","BasicUsage"];export{o as BasicUsage,t as Specification,Q as __namedExportsOrder,N as default};
