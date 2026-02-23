import{j as e,d as t,w as i,s as c,y as a,z as l}from"./iframe-DMM-er1z.js";import{m as p,t as h}from"./index-r7ICh7xP.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";import"./get-data-attribute-Bl9c_7h4.js";import"./observe-attribute-DJMrXwPX.js";import"./observe-data-attribute-CrIGpGqK.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-kQ6qcblf.js";import"./get-prefers-color-scheme-BGoLu2Q0.js";import"./observe-prefers-color-scheme-DjdBdD7G.js";import"./define-css-properties-Dh8E5HRZ.js";import"./get-css-variable-value-B4-Axp-e.js";import"./resolve-style-E-lGkuMe.js";import"./to-dom-style-DZVOeG1x.js";import"./try-parse-json-83P4r8LE.js";import"./get-theme-by-class-name--buxm-w-.js";import"./findKey-BZZwGHNT.js";import"./get-theme-by-data-attribute-DnSc2ywd.js";import"./set-theme-to-local-storage-BwgwevIK.js";import"./set-theme-to-session-storage-Cr54TX08.js";import"./get-theme-from-store-DOanYLt7.js";import"./observe-theme-by-class-name-0VpHRYtw.js";import"./observe-theme-by-data-attributes-CgqBQcJU.js";import"./observe-theme-from-local-storage-D5-Ifohs.js";import"./observe-theme-from-session-storage-CVw4H7Bt.js";import"./observe-theme-from-store-BnVImBhj.js";import"./set-theme-by-class-name-BC2y_ikC.js";import"./set-theme-by-data-attribute-DXwUN9Hp.js";import"./set-theme-to-store-BD5RwHDf.js";import"./get-rem-to-px-scale-CTgj4gd8.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";import"./append-id-Vsg144gU.js";const u=`import type { JustChildren } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

const functionChildren: JustChildren<{ count?: number }> = (renderProps) =>
	renderProps.count !== undefined ? \`Count: \${renderProps.count}\` : renderProps.children

export default () => (
	<StoryCard appearance="output">
		<div>{functionChildren({ children: 'Default', count: 42 })}</div>
	</StoryCard>
)
`,m=`import type { ReactNode } from 'react'
import type { AnyRecord } from 'type-plus'

/**
 * Props interface for components that accept a render-props-aware \`children\`.
 *
 * Use this when defining component props that support the same \`children\` contract as {@link JustChildren}:
 * a static value, a resolver function that receives render props (including existing \`children\`), or \`undefined\`.
 *
 * @typeParam RenderProps - Record type for render props. When \`children\` is a function, it receives \`RenderProps\` merged with \`{ children?: ReactNode }\`.
 */
export interface JustChildrenProps<RenderProps extends AnyRecord = AnyRecord> {
	children?: JustChildren<RenderProps> | undefined
}

/**
 * A \`children\` type that can be static or computed from render props.
 *
 * - \`ReactNode\`: The value is used as the children (replaces existing \`children\` in render props when provided).
 * - \`undefined\`: Uses the existing \`children\` from render props as-is.
 * - \`function\`: Process the render props and return the desired \`children\`.
 *
 * @typeParam RenderProps - Record type for render props. Resolvers receive \`RenderProps\` merged with \`{ children?: ReactNode }\`.
 */
export type JustChildren<RenderProps extends AnyRecord = AnyRecord> =
	| ((renderProps: JustChildrenFnProps<RenderProps>) => ReactNode | undefined)
	| ReactNode
	| undefined

/**
 * The props type for \`JustChildren\` resolver functions.
 *
 * @typeParam RenderProps - Record type for render props.
 */
export type JustChildrenFnProps<RenderProps extends AnyRecord = AnyRecord> = RenderProps & {
	children?: ReactNode | undefined
}
`,f=`import type { JustChildrenFnProps, JustChildrenProps } from '@just-web/toolkits'
import { resolveChildren } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

type CardRenderProps = { label: string }

function Card({ children, ...rest }: JustChildrenProps<CardRenderProps>) {
	const renderProps: JustChildrenFnProps<CardRenderProps> = {
		label: 'Item',
		children: 'Default content',
	}
	return (
		<div {...rest}>
			<span className="font-medium">{renderProps.label}: </span>
			{resolveChildren(renderProps, children)}
		</div>
	)
}

export default () => (
	<StoryCard appearance="output">
		<Card />
		<Card>
			{(props: JustChildrenFnProps<CardRenderProps>) =>
				\`\${props.label} → \${String(props.children)}\`
			}
		</Card>
	</StoryCard>
)
`,y=`import type { JustChildrenProps } from '@just-web/toolkits'
import { resolveChildren } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

function Card({ children, ...rest }: JustChildrenProps) {
	const renderProps = { children: 'Default content' as const }
	return <div {...rest}>{resolveChildren(renderProps, children)}</div>
}

export default () => (
	<StoryCard appearance="output">
		<Card />
		<Card>Override content</Card>
		<Card>{(renderProps) => \`Computed: \${String(renderProps.children)}\`}</Card>
		<Card>{() => undefined}</Card>
	</StoryCard>
)
`,Y={title:"children/JustChildren",tags:["version:next","!test"],parameters:t({description:{component:"`JustChildren` extends the basic `children` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `children` value."}}),render:()=>e.jsx(e.Fragment,{})},s={decorators:[i({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustChildren"})," extends the basic ",e.jsx("code",{children:"children"})," type with a callback to invert the flow on control. This allows you to fully control the resulting"," ",e.jsx("code",{children:"children"})," value."]}),e.jsxs("p",{children:["The behavior when using ",e.jsx("code",{children:"JustChildren"})," should be consistent among all components that use it. This provides a consistent API for the consumer."]}),e.jsxs("ul",{className:"list-disc list-inside",children:[e.jsxs("li",{children:["When ",e.jsx("code",{children:"undefined"})," is passed, the default ",e.jsx("code",{children:"children"})," from render props should be applied."]}),e.jsxs("li",{children:["When a ",e.jsx("code",{children:"ReactNode"})," is passed, it is used as the children (replaces default)."]}),e.jsxs("li",{children:["When a ",e.jsx("code",{children:"function"})," is passed, it must receive the current render props with the default ",e.jsx("code",{children:"children"}),"."]}),e.jsxs("ul",{className:"list-disc list-inside pl-4",children:[e.jsxs("li",{children:["When the function returns ",e.jsx("code",{children:"undefined"}),", the ",e.jsx("code",{children:"children"})," should be ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:["When the function returns a ",e.jsx("code",{children:"ReactNode"}),", that will be the"," ",e.jsx("code",{children:"children"})," to be rendered."]})]})]})]})})]},r={name:"JustChildren",tags:["type"],parameters:t({source:{code:u}}),decorators:[i({title:"JustChildren",content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["Compare to ",e.jsx("code",{children:"JustChildrenProps"}),", ",e.jsx("code",{children:"JustChildren"})," allows you to use it on its own (e.g. for a variable or parameter that can be static or a resolver)."]})})}),c()]};p(r,{availableImports:{"@just-web/toolkits":h,"@repobuddy/storybook":l,react:a},code:r.parameters?.docs?.source?.code});const n={name:"JustChildrenProps",tags:["type"],parameters:t({source:{code:y}}),decorators:[i({title:"JustChildrenProps",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustChildrenProps"})," defines the ",e.jsx("code",{children:"children"})," property with the type"," ",e.jsx("code",{children:"JustChildren"}),"."]}),e.jsxs("p",{children:["It is a ready-made type for the typical ",e.jsx("code",{children:"children"})," props use case."]})]})}),c()]};p(n,{availableImports:{"@just-web/toolkits":h,"@repobuddy/storybook":l,react:a},code:n.parameters?.docs?.source?.code});const o={name:"JustChildrenFnProps",tags:["type"],parameters:t({source:{code:f}}),decorators:[i({title:"JustChildrenFnProps",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustChildrenFnProps"})," is the argument type for ",e.jsx("code",{children:"JustChildren"})," ","resolver functions. It is ",e.jsx("code",{children:"RenderProps"})," merged with"," ",e.jsx("code",{children:"{ children?: ReactNode }"}),"."]}),e.jsxs("p",{children:["Use it to type the parameter when writing a ",e.jsx("code",{children:"children"})," function so you get access to render props and the current default ",e.jsx("code",{children:"children"}),"."]})]})}),c()]};p(o,{availableImports:{"@just-web/toolkits":h,"@repobuddy/storybook":l,react:a},code:o.parameters?.docs?.source?.code});const d={tags:["source"],parameters:t({source:{code:m}}),decorators:[c()]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>JustChildren</code> extends the basic <code>children</code> type with a callback
                        to invert the flow on control. This allows you to fully control the resulting{' '}
                        <code>children</code> value.
                    </p>
                    <p>
                        The behavior when using <code>JustChildren</code> should be consistent among all
                        components that use it. This provides a consistent API for the consumer.
                    </p>
                    <ul className="list-disc list-inside">
                        <li>
                            When <code>undefined</code> is passed, the default <code>children</code> from render
                            props should be applied.
                        </li>
                        <li>
                            When a <code>ReactNode</code> is passed, it is used as the children (replaces
                            default).
                        </li>
                        <li>
                            When a <code>function</code> is passed, it must receive the current render props with
                            the default <code>children</code>.
                        </li>
                        <ul className="list-disc list-inside pl-4">
                            <li>
                                When the function returns <code>undefined</code>, the <code>children</code> should
                                be <code>undefined</code>.
                            </li>
                            <li>
                                When the function returns a <code>ReactNode</code>, that will be the{' '}
                                <code>children</code> to be rendered.
                            </li>
                        </ul>
                    </ul>
                </>
  })]
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'JustChildren',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codeDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustChildren',
    content: <>
                    <p>
                        Compare to <code>JustChildrenProps</code>, <code>JustChildren</code> allows you to use
                        it on its own (e.g. for a variable or parameter that can be static or a resolver).
                    </p>
                </>
  }), showSource()]
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'JustChildrenProps',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codePropsDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustChildrenProps',
    content: <>
                    <p>
                        <code>JustChildrenProps</code> defines the <code>children</code> property with the type{' '}
                        <code>JustChildren</code>.
                    </p>
                    <p>
                        It is a ready-made type for the typical <code>children</code> props use case.
                    </p>
                </>
  }), showSource()]
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'JustChildrenFnProps',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codeFnPropsDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustChildrenFnProps',
    content: <>
                    <p>
                        <code>JustChildrenFnProps</code> is the argument type for <code>JustChildren</code>{' '}
                        resolver functions. It is <code>RenderProps</code> merged with{' '}
                        <code>{'{ children?: ReactNode }'}</code>.
                    </p>
                    <p>
                        Use it to type the parameter when writing a <code>children</code> function so you get
                        access to render props and the current default <code>children</code>.
                    </p>
                </>
  }), showSource()]
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...d.parameters?.docs?.source}}};const Z=["Specification","JustChildrenStory","JustChildrenPropsStory","JustChildrenFnPropsStory","Source"];export{o as JustChildrenFnPropsStory,n as JustChildrenPropsStory,r as JustChildrenStory,d as Source,s as Specification,Z as __namedExportsOrder,Y as default};
