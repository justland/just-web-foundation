import{j as e,d as t,w as c,s as i,x as h,y as p}from"./iframe-BRbKEAca.js";import{m as a,t as l}from"./index-DlJrg0ou.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-children-D-TiWTsk.js";import"./resolve-class-name-By9AyxDW.js";import"./get-prefers-color-scheme-BGoLu2Q0.js";import"./observe-prefers-color-scheme-DjdBdD7G.js";import"./define-css-properties-Dh8E5HRZ.js";import"./get-css-variable-value-B4-Axp-e.js";import"./resolve-style-E-lGkuMe.js";import"./to-dom-style-DZVOeG1x.js";import"./class-name-mbk4UpWW.js";import"./findKey-BZZwGHNT.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const f=`import type { JustStyle } from '@just-web/toolkits'
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
`,S=`import type { JustStyle } from '@just-web/toolkits'
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
`,b=`import type { AnyRecord } from 'type-plus'
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
	TTime = DefaultTime,
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
	TTime = DefaultTime,
> =
	| ((
			renderProps: JustStyleFnProps<RenderProps, TLength, TTime>,
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
	TTime = DefaultTime,
> = RenderProps & {
	style?: CSSProperties<TLength, TTime> | undefined
}
`,m=`import type { JustStyleProps } from '@just-web/toolkits'
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
`,P=`import type { JustStyleFnProps } from '@just-web/toolkits'

function boxTheme(renderProps?: JustStyleFnProps) {
	return {
		...renderProps,
		style: {
			...renderProps?.style,
			padding: '0.5rem',
			border: '1px solid rgb(203 213 225)',
			borderRadius: '0.25rem',
		},
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
`,O={title:"style/JustStyle",tags:["version:next","!test"],parameters:t({description:{component:"`JustStyle` extends the basic `style` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `style`."}}),render:()=>e.jsx(e.Fragment,{})},u={decorators:[c({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustStyle"})," extends the basic ",e.jsx("code",{children:"style"})," type with a callback to invert the flow on control. This allows you to fully control the resulting"," ",e.jsx("code",{children:"style"})," value."]}),e.jsxs("p",{children:["The behavior when using ",e.jsx("code",{children:"JustStyle"})," should be consistent among all components that use it. This provides a consistent API for the consumer."]}),e.jsxs("ul",{className:"list-disc list-inside",children:[e.jsxs("li",{children:["When ",e.jsx("code",{children:"undefined"})," is passed, the default ",e.jsx("code",{children:"style"})," should be applied."]}),e.jsxs("li",{children:["When a ",e.jsx("code",{children:"CSSProperties"})," object is passed, it should be merged with the default ",e.jsx("code",{children:"style"})," (override wins)."]}),e.jsxs("li",{children:["When a ",e.jsx("code",{children:"function"})," is passed, it must receive the current render props with the default ",e.jsx("code",{children:"style"}),"."]}),e.jsxs("ul",{className:"list-disc list-inside pl-4",children:[e.jsxs("li",{children:["When the function returns ",e.jsx("code",{children:"undefined"}),", the ",e.jsx("code",{children:"style"})," should be reset to ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:["When the function returns ",e.jsx("code",{children:"CSSProperties"}),", that will be the"," ",e.jsx("code",{children:"style"})," to be applied."]})]})]})]})})]},y={tags:["source"],parameters:t({source:{code:b}}),decorators:[i({placement:"before"})]},r={name:"JustStyleProps",tags:["type"],parameters:t({source:{code:m}}),decorators:[c({title:"JustStyleProps",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustStyleProps"})," defines the ",e.jsx("code",{children:"style"})," property with the type"," ",e.jsx("code",{children:"JustStyle"}),"."]}),e.jsxs("p",{children:["It is a ready-made type for the typical ",e.jsx("code",{children:"style"})," props use case."]})]})}),i({placement:"before"})]};a(r,{availableImports:{"@just-web/toolkits":l,"@repobuddy/storybook":p,react:h},code:r.parameters?.docs?.source?.code});const o={name:"JustStyle",tags:["type"],parameters:t({source:{code:f}}),decorators:[c({title:"JustStyle",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustStyle"})," extends the basic ",e.jsx("code",{children:"style"})," type with a callback to invert the flow on control. This allows you to fully control the resulting"," ",e.jsx("code",{children:"style"}),"."]}),e.jsxs("p",{children:["Compare to ",e.jsx("code",{children:"JustStyleProps"}),", ",e.jsx("code",{children:"JustStyle"})," allows you to use it on any props, not just the ",e.jsx("code",{children:"style"})," prop."]}),e.jsxs("p",{children:["In the callback, the function receives ",e.jsx("code",{children:"JustStyleFnProps"}),", the full render props object with the ",e.jsx("code",{children:"style"})," property, which contains the base"," ",e.jsx("code",{children:"style"})," produced by the component."]}),e.jsxs("p",{children:["The consumer can merge, amend, or override the ",e.jsx("code",{children:"style"})," based on the render props or return a completely different object."]})]})}),i({placement:"before"})]};a(o,{availableImports:{"@just-web/toolkits":l,"@repobuddy/storybook":p},code:o.parameters?.docs?.source?.code});const s={name:"JustStyleFnProps",tags:["type"],parameters:t({source:{code:P}}),decorators:[c({title:"JustStyleFnProps",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["The render props type for ",e.jsx("code",{children:"JustStyle"})," resolver functions."]}),e.jsx("p",{children:"It is useful when you want to create a composable function."})]})}),i({placement:"before"})]};a(s,{availableImports:{"@just-web/toolkits":l,"@repobuddy/storybook":p},code:s.parameters?.docs?.source?.code});const n={tags:["use-case","editor","!test"],parameters:t({description:{story:"Using `JustStyle` without a type parameter: render props is `AnyRecord & { style?: CSSProperties }`. Accepts object, function, or undefined."},source:{code:m}}),decorators:[c({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["For non-interactive component, you can use ",e.jsx("code",{children:"JustStyle"})," without specifying the type parameter."]}),e.jsxs("p",{children:["The function form receives"," ",e.jsx("code",{children:"renderProps: AnyRecord & { style?: CSSProperties | undefined }"})]}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"style"})," contains the base style produced by the component."]}),e.jsxs("p",{children:["You can merge or amend the ",e.jsx("code",{children:"style"})," by returning an object based off of it."]}),e.jsx("p",{children:"You can also return a completely new style by returning a different value."})]})}),i({placement:"before"})]};a(n,{availableImports:{"@just-web/toolkits":l,"@repobuddy/storybook":p,react:h},defaultEditorOptions:{},code:n.parameters?.docs?.source?.code});const d={tags:["use-case","editor","!test"],parameters:t({description:{story:"Using `JustStyle<RenderProps>` with a type parameter: the function receives typed render props (`RenderProps & { style?: CSSProperties }`), enabling autocomplete and type checking for custom render props fields."},source:{code:S}}),decorators:[c({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When using ",e.jsx("code",{children:"JustStyle<RenderProps>"})," with a type parameter, the function form receives"," ",e.jsxs("code",{children:["renderProps: RenderProps & ","{ style?: CSSProperties | undefined }"]})]}),e.jsx("p",{children:"You can use it to customize the style based on the render props."})]})}),i({placement:"before"})],play(){}};a(d,{availableImports:{"@repobuddy/storybook":p,"@just-web/toolkits":l,react:h},code:d.parameters?.docs?.source?.code});u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showDocSource({
    placement: 'before'
  })]
}`,...y.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })],
  play() {}
}`,...d.parameters?.docs?.source}}};const z=["Specification","Source","JustStylePropsStory","JustStyleStory","JustStyleFnPropsStory","NonInteractiveComponent","InteractiveComponent"];export{d as InteractiveComponent,s as JustStyleFnPropsStory,r as JustStylePropsStory,o as JustStyleStory,n as NonInteractiveComponent,y as Source,u as Specification,z as __namedExportsOrder,O as default};
