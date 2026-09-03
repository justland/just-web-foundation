import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as i,c as a,l as o,n as s,o as c,r as l,s as u}from"./iframe-Dhw67M0q.js";import{n as d,t as f}from"./src-C4_MMlM4.js";var p;function m(){return(m=t((()=>{p=`import type { JustStyle } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

const functionStyle: JustStyle<{ isSelected?: boolean | undefined }> = (renderProps) =>
	renderProps.isSelected
		? { ...renderProps.style, backgroundColor: 'rgb(147 197 253)' }
		: renderProps.style

export default () => {
	return (
		<StoryCard appearance="output">
			<div style={functionStyle({ style: { padding: '0.5rem' }, isSelected: true })}>
				Result: selected (blue background)
			</div>
		</StoryCard>
	)
}
`})))()}var h;function g(){return(g=t((()=>{h=`import type { JustStyle } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

interface ButtonRenderProps {
	isDisabled?: boolean | undefined
	isPressed?: boolean | undefined
}

const styleWhenDisabled: JustStyle<ButtonRenderProps> = (renderProps) =>
	renderProps.isDisabled
		? { ...renderProps.style, opacity: 0.5, cursor: 'not-allowed' }
		: renderProps.style

const styleWhenActive: JustStyle<ButtonRenderProps> = (renderProps) =>
	renderProps.isPressed
		? { ...renderProps.style, outline: '2px solid rgb(59 130 246)' }
		: renderProps.style

export default () => {
	const renderProps: ButtonRenderProps = { isDisabled: true, isPressed: true }
	return (
		<StoryCard appearance="output">
			<div style={styleWhenDisabled({ ...renderProps, style: { padding: '0.5rem' } })}>
				disabled style
			</div>
			<div style={styleWhenActive({ ...renderProps, style: { padding: '0.5rem' } })}>
				active style
			</div>
		</StoryCard>
	)
}
`})))()}var _;function v(){return(v=t((()=>{_=`import type { AnyRecord } from 'type-plus'
import type { CSSProperties } from './css-properties.ts'

type DefaultLength = 0 | (string & {})
type DefaultTime = string & {}

/**
 * Props interface for components that accept a render-props-aware \`style\`.
 *
 * Use this when defining component props that support the same \`style\` contract as {@link JustStyle}:
 * a static object, a resolver function that receives render props (including existing \`style\`), or \`undefined\`.
 *
 * @typeParam RenderProps - Record type for render props. When \`style\` is a function, it receives \`RenderProps\` merged with \`{ style?: CSSProperties }\`.
 * @typeParam TLength - CSS length type (default: \`0 | (string & {})\`).
 * @typeParam TTime - CSS time type (default: \`string & {}\`).
 */
export interface JustStyleProps<
	RenderProps extends AnyRecord = AnyRecord,
	TLength = DefaultLength,
	TTime = DefaultTime
> {
	style?: JustStyle<RenderProps, TLength, TTime> | undefined
}

/**
 * A \`style\` type that can be static or computed from render props.
 *
 * - \`CSSProperties\`: The value is merged with the existing \`style\` in render props (override wins).
 * - \`undefined\`: Uses the existing \`style\` from render props as-is.
 * - \`function\`: Process the render props and return the desired \`style\`.
 *
 * @typeParam RenderProps - Record type for render props. Resolvers receive \`RenderProps\` merged with \`{ style?: CSSProperties }\`.
 * @typeParam TLength - CSS length type (default: \`0 | (string & {})\`).
 * @typeParam TTime - CSS time type (default: \`string & {}\`).
 */
export type JustStyle<
	RenderProps extends AnyRecord = AnyRecord,
	TLength = DefaultLength,
	TTime = DefaultTime
> =
	| ((
			renderProps: JustStyleFnProps<RenderProps, TLength, TTime>
	  ) => CSSProperties<TLength, TTime> | undefined)
	| CSSProperties<TLength, TTime>
	| undefined

/**
 * The props type for \`JustStyle\` resolver functions.
 *
 * @typeParam RenderProps - Record type for render props.
 * @typeParam TLength - CSS length type (default: \`0 | (string & {})\`).
 * @typeParam TTime - CSS time type (default: \`string & {}\`).
 */
export type JustStyleFnProps<
	RenderProps extends AnyRecord = AnyRecord,
	TLength = DefaultLength,
	TTime = DefaultTime
> = RenderProps & {
	style?: CSSProperties<TLength, TTime> | undefined
}
`})))()}var y;function b(){return(b=t((()=>{y=`import type { JustStyleProps } from '@just-web/toolkits'
import { resolveStyle } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'
import type { PropsWithChildren } from 'react'

function Badge({ style, ...rest }: PropsWithChildren<JustStyleProps>) {
	const props = { style: { padding: '0.25rem 0.5rem', backgroundColor: 'rgb(96 165 250)' } }
	return <div {...rest} style={resolveStyle(props, style)} />
}

export default () => (
	<StoryCard appearance="output">
		<Badge style={{ fontWeight: 'bold' }}>Override</Badge>
		<Badge style={(renderProps) => ({ ...renderProps.style, fontWeight: 'lighter' })}>Amend</Badge>
		<Badge style={() => undefined}>Unstyled</Badge>
	</StoryCard>
)
`})))()}var x;function S(){return(S=t((()=>{x=`import type { JustStyleFnProps } from '@just-web/toolkits'

function boxTheme(renderProps?: JustStyleFnProps) {
	return {
		...renderProps,
		style: {
			...renderProps?.style,
			padding: '0.5rem',
			border: '1px solid rgb(203 213 225)',
			borderRadius: '0.25rem'
		}
	}
}

export default () => {
	const props = boxTheme()
	return (
		<button type="button" {...props}>
			Hello World
		</button>
	)
}
`})))()}var C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{f(),u(),C=e(n(),1),s(),m(),g(),v(),b(),S(),w=r(),T={title:`style/JustStyle`,tags:[`version:1.0`,`!test`],parameters:i({description:{component:"`JustStyle` extends the basic `style` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `style`."}}),render:()=>(0,w.jsx)(w.Fragment,{})},E={decorators:[o({content:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`code`,{children:`JustStyle`}),` extends the basic `,(0,w.jsx)(`code`,{children:`style`}),` type with a callback to invert the flow on control. This allows you to fully control the resulting`,` `,(0,w.jsx)(`code`,{children:`style`}),` value.`]}),(0,w.jsxs)(`p`,{children:[`The behavior when using `,(0,w.jsx)(`code`,{children:`JustStyle`}),` should be consistent among all components that use it. This provides a consistent API for the consumer.`]}),(0,w.jsxs)(`ul`,{className:`list-disc list-inside`,children:[(0,w.jsxs)(`li`,{children:[`When `,(0,w.jsx)(`code`,{children:`undefined`}),` is passed, the default `,(0,w.jsx)(`code`,{children:`style`}),` should be applied.`]}),(0,w.jsxs)(`li`,{children:[`When a `,(0,w.jsx)(`code`,{children:`CSSProperties`}),` object is passed, it should be merged with the default `,(0,w.jsx)(`code`,{children:`style`}),` (override wins).`]}),(0,w.jsxs)(`li`,{children:[`When a `,(0,w.jsx)(`code`,{children:`function`}),` is passed, it must receive the current render props with the default `,(0,w.jsx)(`code`,{children:`style`}),`.`]}),(0,w.jsxs)(`ul`,{className:`list-disc list-inside pl-4`,children:[(0,w.jsxs)(`li`,{children:[`When the function returns `,(0,w.jsx)(`code`,{children:`undefined`}),`, the `,(0,w.jsx)(`code`,{children:`style`}),` should be reset to `,(0,w.jsx)(`code`,{children:`undefined`}),`.`]}),(0,w.jsxs)(`li`,{children:[`When the function returns `,(0,w.jsx)(`code`,{children:`CSSProperties`}),`, that will be the`,` `,(0,w.jsx)(`code`,{children:`style`}),` to be applied.`]})]})]})]})})]},D={name:`JustStyleProps`,tags:[`type`],parameters:i({source:{code:y}}),decorators:[o({title:`JustStyleProps`,content:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`code`,{children:`JustStyleProps`}),` defines the `,(0,w.jsx)(`code`,{children:`style`}),` property with the type`,` `,(0,w.jsx)(`code`,{children:`JustStyle`}),`.`]}),(0,w.jsxs)(`p`,{children:[`It is a ready-made type for the typical `,(0,w.jsx)(`code`,{children:`style`}),` props use case.`]})]})}),a()]},l(D,{availableImports:{"@just-web/toolkits":d,"@repobuddy/storybook":c,react:C},code:D.parameters?.docs?.source?.code}),O={name:`JustStyle`,tags:[`type`],parameters:i({source:{code:p}}),decorators:[o({title:`JustStyle`,content:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{children:[(0,w.jsx)(`code`,{children:`JustStyle`}),` extends the basic `,(0,w.jsx)(`code`,{children:`style`}),` type with a callback to invert the flow on control. This allows you to fully control the resulting`,` `,(0,w.jsx)(`code`,{children:`style`}),`.`]}),(0,w.jsxs)(`p`,{children:[`Compare to `,(0,w.jsx)(`code`,{children:`JustStyleProps`}),`, `,(0,w.jsx)(`code`,{children:`JustStyle`}),` allows you to use it on any props, not just the `,(0,w.jsx)(`code`,{children:`style`}),` prop.`]}),(0,w.jsxs)(`p`,{children:[`In the callback, the function receives `,(0,w.jsx)(`code`,{children:`JustStyleFnProps`}),`, the full render props object with the `,(0,w.jsx)(`code`,{children:`style`}),` property, which contains the base`,` `,(0,w.jsx)(`code`,{children:`style`}),` produced by the component.`]}),(0,w.jsxs)(`p`,{children:[`The consumer can merge, amend, or override the `,(0,w.jsx)(`code`,{children:`style`}),` based on the render props or return a completely different object.`]})]})}),a()]},l(O,{availableImports:{"@just-web/toolkits":d,"@repobuddy/storybook":c},code:O.parameters?.docs?.source?.code}),k={name:`JustStyleFnProps`,tags:[`type`],parameters:i({source:{code:x}}),decorators:[o({title:`JustStyleFnProps`,content:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{children:[`The render props type for `,(0,w.jsx)(`code`,{children:`JustStyle`}),` resolver functions.`]}),(0,w.jsx)(`p`,{children:`It is useful when you want to create a composable function.`})]})}),a()]},l(k,{availableImports:{"@just-web/toolkits":d,"@repobuddy/storybook":c},code:k.parameters?.docs?.source?.code}),A={tags:[`use-case`,`editor`,`!test`],parameters:i({description:{story:"Using `JustStyle` without a type parameter: render props is `AnyRecord & { style?: CSSProperties }`. Accepts object, function, or undefined."},source:{code:y}}),decorators:[o({content:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{children:[`For non-interactive component, you can use `,(0,w.jsx)(`code`,{children:`JustStyle`}),` without specifying the type parameter.`]}),(0,w.jsxs)(`p`,{children:[`The function form receives`,` `,(0,w.jsx)(`code`,{children:`renderProps: AnyRecord & { style?: CSSProperties | undefined }`})]}),(0,w.jsxs)(`p`,{children:[`The `,(0,w.jsx)(`code`,{children:`style`}),` contains the base style produced by the component.`]}),(0,w.jsxs)(`p`,{children:[`You can merge or amend the `,(0,w.jsx)(`code`,{children:`style`}),` by returning an object based off of it.`]}),(0,w.jsx)(`p`,{children:`You can also return a completely new style by returning a different value.`})]})}),a()]},l(A,{availableImports:{"@just-web/toolkits":d,"@repobuddy/storybook":c,react:C},defaultEditorOptions:{},code:A.parameters?.docs?.source?.code}),j={tags:[`use-case`,`editor`,`!test`],parameters:i({description:{story:"Using `JustStyle<RenderProps>` with a type parameter: the function receives typed render props (`RenderProps & { style?: CSSProperties }`), enabling autocomplete and type checking for custom render props fields."},source:{code:h}}),decorators:[o({content:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{children:[`When using `,(0,w.jsx)(`code`,{children:`JustStyle<RenderProps>`}),` with a type parameter, the function form receives`,` `,(0,w.jsxs)(`code`,{children:[`renderProps: RenderProps & `,`{ style?: CSSProperties | undefined }`]})]}),(0,w.jsx)(`p`,{children:`You can use it to customize the style based on the render props.`})]})}),a()],play(){}},l(j,{availableImports:{"@repobuddy/storybook":c,"@just-web/toolkits":d,react:C},code:j.parameters?.docs?.source?.code}),M={tags:[`source`],parameters:i({source:{code:_}}),decorators:[a()]},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>JustStyle</code> extends the basic <code>style</code> type with a callback to
                        invert the flow on control. This allows you to fully control the resulting{' '}
                        <code>style</code> value.
                    </p>
                    <p>
                        The behavior when using <code>JustStyle</code> should be consistent among all components
                        that use it. This provides a consistent API for the consumer.
                    </p>
                    <ul className="list-disc list-inside">
                        <li>
                            When <code>undefined</code> is passed, the default <code>style</code> should be
                            applied.
                        </li>
                        <li>
                            When a <code>CSSProperties</code> object is passed, it should be merged with the
                            default <code>style</code> (override wins).
                        </li>
                        <li>
                            When a <code>function</code> is passed, it must receive the current render props with
                            the default <code>style</code>.
                        </li>
                        <ul className="list-disc list-inside pl-4">
                            <li>
                                When the function returns <code>undefined</code>, the <code>style</code> should be
                                reset to <code>undefined</code>.
                            </li>
                            <li>
                                When the function returns <code>CSSProperties</code>, that will be the{' '}
                                <code>style</code> to be applied.
                            </li>
                        </ul>
                    </ul>
                </>
  })]
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'JustStyleProps',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codePropsDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustStyleProps',
    content: <>
                    <p>
                        <code>JustStyleProps</code> defines the <code>style</code> property with the type{' '}
                        <code>JustStyle</code>.
                    </p>
                    <p>
                        It is a ready-made type for the typical <code>style</code> props use case.
                    </p>
                </>
  }), showSource()]
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'JustStyle',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codeDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustStyle',
    content: <>
                    <p>
                        <code>JustStyle</code> extends the basic <code>style</code> type with a callback to
                        invert the flow on control. This allows you to fully control the resulting{' '}
                        <code>style</code>.
                    </p>
                    <p>
                        Compare to <code>JustStyleProps</code>, <code>JustStyle</code> allows you to use it on
                        any props, not just the <code>style</code> prop.
                    </p>
                    <p>
                        In the callback, the function receives <code>JustStyleFnProps</code>, the full render
                        props object with the <code>style</code> property, which contains the base{' '}
                        <code>style</code> produced by the component.
                    </p>
                    <p>
                        The consumer can merge, amend, or override the <code>style</code> based on the render
                        props or return a completely different object.
                    </p>
                </>
  }), showSource()]
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'JustStyleFnProps',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codeResolverStateDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustStyleFnProps',
    content: <>
                    <p>
                        The render props type for <code>JustStyle</code> resolver functions.
                    </p>
                    <p>It is useful when you want to create a composable function.</p>
                </>
  }), showSource()]
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor', '!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Using \`JustStyle\` without a type parameter: render props is \`AnyRecord & { style?: CSSProperties }\`. Accepts object, function, or undefined.'
    },
    source: {
      code: codePropsDefault
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        For non-interactive component, you can use <code>JustStyle</code> without specifying the
                        type parameter.
                    </p>
                    <p>
                        The function form receives{' '}
                        <code>{'renderProps: AnyRecord & { style?: CSSProperties | undefined }'}</code>
                    </p>
                    <p>
                        The <code>style</code> contains the base style produced by the component.
                    </p>
                    <p>
                        You can merge or amend the <code>style</code> by returning an object based off of it.
                    </p>
                    <p>You can also return a completely new style by returning a different value.</p>
                </>
  }), showSource()]
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor', '!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Using \`JustStyle<RenderProps>\` with a type parameter: the function receives typed render props (\`RenderProps & { style?: CSSProperties }\`), enabling autocomplete and type checking for custom render props fields.'
    },
    source: {
      code: codeTyped
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When using <code>JustStyle&lt;RenderProps&gt;</code> with a type parameter, the function
                        form receives{' '}
                        <code>renderProps: RenderProps & {'{ style?: CSSProperties | undefined }'}</code>
                    </p>
                    <p>You can use it to customize the style based on the render props.</p>
                </>
  }), showSource()],
  play() {}
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...M.parameters?.docs?.source}}},N=[`Specification`,`JustStylePropsStory`,`JustStyleStory`,`JustStyleFnPropsStory`,`NonInteractiveComponent`,`InteractiveComponent`,`Source`]})))()}P();export{j as InteractiveComponent,k as JustStyleFnPropsStory,D as JustStylePropsStory,O as JustStyleStory,A as NonInteractiveComponent,M as Source,E as Specification,N as __namedExportsOrder,T as default};