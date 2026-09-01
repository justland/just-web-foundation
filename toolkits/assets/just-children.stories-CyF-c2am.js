import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as i,c as a,l as o,n as s,o as c,r as l,s as u}from"./iframe-BJVp8-w1.js";import{n as d,t as f}from"./src-X3K_eC4I.js";var p;function m(){return(m=t((()=>{p=`import type { JustChildren } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

const functionChildren: JustChildren<{ count?: number }> = (renderProps) =>
	renderProps.count !== undefined ? \`Count: \${renderProps.count}\` : renderProps.children

export default () => (
	<StoryCard appearance="output">
		<div>{functionChildren({ children: 'Default', count: 42 })}</div>
	</StoryCard>
)
`})))()}var h;function g(){return(g=t((()=>{h=`import type { ReactNode } from 'react'
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
`})))()}var _;function v(){return(v=t((()=>{_=`import type { JustChildrenFnProps, JustChildrenProps } from '@just-web/toolkits'
import { resolveChildren } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

type CardRenderProps = { label: string }

function Card({ children, ...rest }: JustChildrenProps<CardRenderProps>) {
	const renderProps: JustChildrenFnProps<CardRenderProps> = {
		label: 'Item',
		children: 'Default content'
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
`})))()}var y;function b(){return(b=t((()=>{y=`import type { JustChildrenProps } from '@just-web/toolkits'
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
`})))()}var x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{f(),u(),x=e(n(),1),s(),m(),g(),v(),b(),S=r(),C={title:`children/JustChildren`,tags:[`version:1.0`,`!test`],parameters:i({description:{component:"`JustChildren` extends the basic `children` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `children` value."}}),render:()=>(0,S.jsx)(S.Fragment,{})},w={decorators:[o({content:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`p`,{children:[(0,S.jsx)(`code`,{children:`JustChildren`}),` extends the basic `,(0,S.jsx)(`code`,{children:`children`}),` type with a callback to invert the flow on control. This allows you to fully control the resulting`,` `,(0,S.jsx)(`code`,{children:`children`}),` value.`]}),(0,S.jsxs)(`p`,{children:[`The behavior when using `,(0,S.jsx)(`code`,{children:`JustChildren`}),` should be consistent among all components that use it. This provides a consistent API for the consumer.`]}),(0,S.jsxs)(`ul`,{className:`list-disc list-inside`,children:[(0,S.jsxs)(`li`,{children:[`When `,(0,S.jsx)(`code`,{children:`undefined`}),` is passed, the default `,(0,S.jsx)(`code`,{children:`children`}),` from render props should be applied.`]}),(0,S.jsxs)(`li`,{children:[`When a `,(0,S.jsx)(`code`,{children:`ReactNode`}),` is passed, it is used as the children (replaces default).`]}),(0,S.jsxs)(`li`,{children:[`When a `,(0,S.jsx)(`code`,{children:`function`}),` is passed, it must receive the current render props with the default `,(0,S.jsx)(`code`,{children:`children`}),`.`]}),(0,S.jsxs)(`ul`,{className:`list-disc list-inside pl-4`,children:[(0,S.jsxs)(`li`,{children:[`When the function returns `,(0,S.jsx)(`code`,{children:`undefined`}),`, the `,(0,S.jsx)(`code`,{children:`children`}),` should be `,(0,S.jsx)(`code`,{children:`undefined`}),`.`]}),(0,S.jsxs)(`li`,{children:[`When the function returns a `,(0,S.jsx)(`code`,{children:`ReactNode`}),`, that will be the`,` `,(0,S.jsx)(`code`,{children:`children`}),` to be rendered.`]})]})]})]})})]},T={name:`JustChildren`,tags:[`type`],parameters:i({source:{code:p}}),decorators:[o({title:`JustChildren`,content:(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(`p`,{children:[`Compare to `,(0,S.jsx)(`code`,{children:`JustChildrenProps`}),`, `,(0,S.jsx)(`code`,{children:`JustChildren`}),` allows you to use it on its own (e.g. for a variable or parameter that can be static or a resolver).`]})})}),a()]},l(T,{availableImports:{"@just-web/toolkits":d,"@repobuddy/storybook":c,react:x},code:T.parameters?.docs?.source?.code}),E={name:`JustChildrenProps`,tags:[`type`],parameters:i({source:{code:y}}),decorators:[o({title:`JustChildrenProps`,content:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`p`,{children:[(0,S.jsx)(`code`,{children:`JustChildrenProps`}),` defines the `,(0,S.jsx)(`code`,{children:`children`}),` property with the type`,` `,(0,S.jsx)(`code`,{children:`JustChildren`}),`.`]}),(0,S.jsxs)(`p`,{children:[`It is a ready-made type for the typical `,(0,S.jsx)(`code`,{children:`children`}),` props use case.`]})]})}),a()]},l(E,{availableImports:{"@just-web/toolkits":d,"@repobuddy/storybook":c,react:x},code:E.parameters?.docs?.source?.code}),D={name:`JustChildrenFnProps`,tags:[`type`],parameters:i({source:{code:_}}),decorators:[o({title:`JustChildrenFnProps`,content:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`p`,{children:[(0,S.jsx)(`code`,{children:`JustChildrenFnProps`}),` is the argument type for `,(0,S.jsx)(`code`,{children:`JustChildren`}),` `,`resolver functions. It is `,(0,S.jsx)(`code`,{children:`RenderProps`}),` merged with`,` `,(0,S.jsx)(`code`,{children:`{ children?: ReactNode }`}),`.`]}),(0,S.jsxs)(`p`,{children:[`Use it to type the parameter when writing a `,(0,S.jsx)(`code`,{children:`children`}),` function so you get access to render props and the current default `,(0,S.jsx)(`code`,{children:`children`}),`.`]})]})}),a()]},l(D,{availableImports:{"@just-web/toolkits":d,"@repobuddy/storybook":c,react:x},code:D.parameters?.docs?.source?.code}),O={tags:[`source`],parameters:i({source:{code:h}}),decorators:[a()]},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...O.parameters?.docs?.source}}},k=[`Specification`,`JustChildrenStory`,`JustChildrenPropsStory`,`JustChildrenFnPropsStory`,`Source`]})))()}A();export{D as JustChildrenFnPropsStory,E as JustChildrenPropsStory,T as JustChildrenStory,O as Source,w as Specification,k as __namedExportsOrder,C as default};