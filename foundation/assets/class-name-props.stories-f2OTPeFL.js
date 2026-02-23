import{j as r,w as t,s,d as a,x as p,y as i,z as c}from"./iframe-Pea2t46H.js";import{t as m}from"./index-CIRypvig.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./observe-attribute-DJMrXwPX.js";import"./data-attribute-theme-store-Zjn-v2eS.js";import"./findKey-D_Zca1Sl.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-CdAgLf4m.js";import"./get-prefers-color-scheme-BGoLu2Q0.js";import"./observe-prefers-color-scheme-DjdBdD7G.js";import"./define-css-properties-Dh8E5HRZ.js";import"./get-css-variable-value-B4-Axp-e.js";import"./resolve-style-E-lGkuMe.js";import"./to-dom-style-DZVOeG1x.js";import"./class-name-theme-store-IC1hzE--.js";import"./define-theme-storage-options-4rIte7rE.js";import"./get-theme-by-class-name-M9nr5ZZ7.js";import"./get-theme-by-data-attribute--pgqric3.js";import"./get-theme-from-local-storage-FaVte12M.js";import"./local-storage-theme-store-CwG1v2Dm.js";import"./try-parse-json-BpEBnayC.js";import"./get-theme-from-session-storage-CYcc6G3C.js";import"./session-storage-theme-store-DVP72-Z9.js";import"./get-theme-from-store-DOanYLt7.js";import"./observe-theme-by-class-name-kXOk-X-U.js";import"./observe-theme-by-data-attributes-Cz_VKwIp.js";import"./observe-theme-from-local-storage-CGB3RIMC.js";import"./observe-theme-from-session-storage-t-AfATrO.js";import"./observe-theme-from-store-BnVImBhj.js";import"./set-theme-by-class-name-Bavj7Osw.js";import"./set-theme-by-data-attribute-BjtqI3I8.js";import"./set-theme-to-local-storage-CW21Lus8.js";import"./set-theme-to-session-storage-C4yyrXX5.js";import"./set-theme-to-store-BD5RwHDf.js";import"./get-rem-to-px-scale-CTgj4gd8.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";import"./append-id-Vsg144gU.js";const n=`import type { ClassNameProps } from '@just-web/toolkits'
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
`,$={title:"class-name/ClassNameProps",tags:["type","version:next","!test"],render:()=>r.jsx(r.Fragment,{})},e={tags:["source"],parameters:a({source:{code:d}}),decorators:[t({content:r.jsxs("p",{children:[r.jsx("code",{children:"ClassNameProps"})," describes the standard type of the ",r.jsx("code",{children:"className"})," ","property."]})}),s()]},o={tags:["use-case","editor"],parameters:a({source:{code:n}}),decorators:[t({content:r.jsx("p",{children:"Use it by itself or combine with other props."})}),s()]};p(o,{availableImports:{"@just-web/toolkits":m,"@repobuddy/storybook":c,react:i},code:o.parameters?.docs?.source?.code});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const oo=["Specification","BasicUsage"];export{o as BasicUsage,e as Specification,oo as __namedExportsOrder,$ as default};
