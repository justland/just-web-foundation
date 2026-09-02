import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as i,c as a,f as o,l as s,n as c,o as l,p as u,r as d,s as f}from"./iframe-C-caXvtV.js";import{n as p,t as m}from"./src-RbTQJPcv.js";var h;function g(){return(g=t((()=>{h=`import type { JustClassName } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

const functionClassName: JustClassName<{ isSelected?: boolean | undefined }> = (renderProps) =>
	clsx(renderProps.className, renderProps.isSelected && 'bg-blue-400')

export default () => {
	return (
		<StoryCard appearance="output">
			<div>Result: {functionClassName({ className: 'base', isSelected: true })}</div>
		</StoryCard>
	)
}
`})))()}var _;function v(){return(v=t((()=>{_=`import type { JustClassNameFnProps } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'

function textTheme(renderProps?: JustClassNameFnProps) {
	return {
		...renderProps,
		className: clsx(renderProps?.className, 'text-black dark:text-white')
	}
}

function hoverTheme(renderProps?: JustClassNameFnProps) {
	return {
		...renderProps,
		className: clsx(
			renderProps?.className,
			'rounded outline-2 hover:outline-blue-300 dark:hover:outline-blue-700'
		)
	}
}

export default () => {
	const props = hoverTheme(textTheme())
	return (
		<button type="button" {...props}>
			Hover me
		</button>
	)
}
`})))()}var y;function b(){return(b=t((()=>{y=`import type { JustClassName } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

interface ButtonRenderProps {
	isDisabled?: boolean | undefined
	isPressed?: boolean | undefined
}

// With type param: function receives typed render props (ButtonRenderProps & { className?: string })
const classNameWhenDisabled: JustClassName<ButtonRenderProps> = (renderProps) =>
	clsx(renderProps.className, renderProps.isDisabled && 'opacity-50 cursor-not-allowed')

const classNameWhenActive: JustClassName<ButtonRenderProps> = (renderProps) =>
	clsx(renderProps.className, renderProps.isPressed && 'ring-2 ring-blue-500')

export default () => {
	const renderProps: ButtonRenderProps = { isDisabled: true, isPressed: true }
	return (
		<StoryCard appearance="output">
			<div>without className: {classNameWhenDisabled(renderProps)}</div>
			<div>with className: {classNameWhenActive({ ...renderProps, className: 'btn' })}</div>
		</StoryCard>
	)
}
`})))()}var x;function S(){return(S=t((()=>{x="import type { AnyRecord } from 'type-plus'\n\n/**\n * Props interface for components that accept a render-props-aware `className`.\n *\n * Use this when defining component props that support the same `className` contract as {@link JustClassName}:\n * a static string, a resolver function that receives render props (including existing `className`), or `undefined`.\n *\n * @typeParam RenderProps - Record type for render props. When `className` is a function, it receives `RenderProps` merged with `{ className?: string }`.\n */\nexport interface JustClassNameProps<RenderProps extends AnyRecord = AnyRecord> {\n	className?: JustClassName<RenderProps> | undefined\n}\n\n/**\n * A `className` type that can be static or computed from render props.\n *\n * - `string`: The value is appended to the existing `className` in render props.\n * - `undefined`: Resets the `className` to `undefined`, removing existing `className`.\n * - `function`: Process the render props and return the desired `className`.\n *\n * @typeParam RenderProps - Record type for render props. Resolvers receive `RenderProps` merged with `{ className?: string }`.\n */\nexport type JustClassName<RenderProps extends AnyRecord = AnyRecord> =\n	| ((renderProps: JustClassNameFnProps<RenderProps>) => string | undefined)\n	| string\n	| undefined\n\n/**\n * The props type for `JustClassName` resolver functions.\n *\n * @typeParam RenderProps - Record type for render props.\n */\nexport type JustClassNameFnProps<RenderProps extends AnyRecord = AnyRecord> = RenderProps & {\n	className?: string | undefined\n}\n"})))()}var C;function w(){return(w=t((()=>{C=`import type { JustClassNameProps } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'
import type { PropsWithChildren } from 'react'

function Badge({ className, ...rest }: PropsWithChildren<JustClassNameProps>) {
	const props = { className: 'bg-blue-400' }
	return (
		<div
			{...rest}
			className={
				typeof className === 'function' ? className(props) : (className ?? props.className)
			}
		/>
	)
}

export default () => (
	<StoryCard appearance="output">
		<Badge className="font-extrabold">Override</Badge>
		<Badge className={(renderProps) => \`\${renderProps.className} font-extrabold\`}>Amend</Badge>
		<Badge className={() => undefined}>Unstyled</Badge>
	</StoryCard>
)
`})))()}var T;function E(){return(E=t((()=>{T=`import type { JustClassNameFnProps } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'

function textTheme(renderProps?: JustClassNameFnProps) {
	return {
		...renderProps,
		className: clsx(renderProps?.className, 'text-emerald-800 dark:text-emerald-200')
	}
}

export default () => {
	const props = textTheme()
	return (
		<button type="button" {...props}>
			Hello World
		</button>
	)
}
`})))()}var D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{m(),f(),u(),D=e(n(),1),c(),g(),v(),b(),S(),w(),E(),O=r(),k={title:`class-name/JustClassName`,tags:[`version:1.0`,`!test`],parameters:i({description:{component:"`JustClassName` extends the basic `className` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `className`."}}),render:()=>(0,O.jsx)(O.Fragment,{})},A={decorators:[s({content:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`p`,{children:[(0,O.jsx)(`code`,{children:`JustClassName`}),` extends the basic `,(0,O.jsx)(`code`,{children:`className`}),` type with a callback to invert the flow on control. This allows you to fully control the resulting`,` `,(0,O.jsx)(`code`,{children:`className`}),` value.`]}),(0,O.jsxs)(`p`,{children:[`The behavior when using `,(0,O.jsx)(`code`,{children:`JustClassName`}),` should be consistent among all components that use it. This provides a consistent API for the consumer.`]}),(0,O.jsxs)(`ul`,{className:`list-disc list-inside`,children:[(0,O.jsxs)(`li`,{children:[`When `,(0,O.jsx)(`code`,{children:`undefined`}),` is passed, the default `,(0,O.jsx)(`code`,{children:`className`}),` should be applied.`]}),(0,O.jsxs)(`li`,{children:[`When a `,(0,O.jsx)(`code`,{children:`string`}),` is passed, it should be appended to the default`,` `,(0,O.jsx)(`code`,{children:`className`}),`.`]}),(0,O.jsxs)(`li`,{children:[`When a `,(0,O.jsx)(`code`,{children:`function`}),` is passed, it must receive the current render props with the default `,(0,O.jsx)(`code`,{children:`className`}),`.`]}),(0,O.jsxs)(`ul`,{className:`list-disc list-inside pl-4`,children:[(0,O.jsxs)(`li`,{children:[`When the function returns `,(0,O.jsx)(`code`,{children:`undefined`}),`, the `,(0,O.jsx)(`code`,{children:`className`}),` should be reset to `,(0,O.jsx)(`code`,{children:`undefined`}),`.`]}),(0,O.jsxs)(`li`,{children:[`When the function returns a `,(0,O.jsx)(`code`,{children:`string`}),`, that will be the`,` `,(0,O.jsx)(`code`,{children:`className`}),` to be applied.`]})]})]})]})})]},j={name:`JustClassNameProps`,tags:[`type`],parameters:i({source:{code:C}}),decorators:[s({title:`JustClassNameProps`,content:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`p`,{children:[(0,O.jsx)(`code`,{children:`JustClassNameProps`}),` defines the `,(0,O.jsx)(`code`,{children:`className`}),` property with the type `,(0,O.jsx)(`code`,{children:`JustClassName`})]}),(0,O.jsxs)(`p`,{children:[`It is a ready-made type for the typical `,(0,O.jsx)(`code`,{children:`className`}),` props use case.`]})]})}),a()]},d(j,{availableImports:{"@just-web/toolkits":p,"@repobuddy/storybook":l,react:D},code:j.parameters?.docs?.source?.code}),M={name:`JustClassName`,tags:[`type`],parameters:i({source:{code:h}}),decorators:[s({title:`JustClassName`,content:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`p`,{children:[(0,O.jsx)(`code`,{children:`JustClassName`}),` extends the basic `,(0,O.jsx)(`code`,{children:`className`}),` type with a callback to invert the flow on control. This allows you to fully control the resulting`,` `,(0,O.jsx)(`code`,{children:`className`}),`.`]}),(0,O.jsxs)(`p`,{children:[`Compare to `,(0,O.jsx)(`code`,{children:`JustClassNameProps`}),`, `,(0,O.jsx)(`code`,{children:`JustClassName`}),` allows you to use it on any props, not just the `,(0,O.jsx)(`code`,{children:`className`}),` prop.`]}),(0,O.jsxs)(`p`,{children:[`In the callback, the function receives `,(0,O.jsx)(`code`,{children:`JustClassNameFnProps`}),`, the full render props object with the `,(0,O.jsx)(`code`,{children:`className`}),` property, which contains the base`,` `,(0,O.jsx)(`code`,{children:`className`}),` produced by the component.`]}),(0,O.jsxs)(`p`,{children:[`The consumer can append, amend, or override the `,(0,O.jsx)(`code`,{children:`className`}),` based on the render props or return a completely different.`]})]})}),a()]},d(M,{availableImports:{"@just-web/toolkits":p,"@repobuddy/storybook":l},code:M.parameters?.docs?.source?.code}),N={name:`JustClassNameFnProps`,tags:[`type`],parameters:i({source:{code:T}}),decorators:[s({title:`JustClassNameFnProps`,content:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`p`,{children:[`The render props type for `,(0,O.jsx)(`code`,{children:`JustClassName`}),` resolver functions.`]}),(0,O.jsx)(`p`,{children:`It is useful when you want to create a composable function.`})]})}),a()]},d(N,{availableImports:{"@just-web/toolkits":p,"@repobuddy/storybook":l},code:N.parameters?.docs?.source?.code}),P={tags:[`use-case`,`editor`,`!test`],parameters:i({description:{story:"Using `JustClassName` without a type parameter: render props is `AnyRecord & { className?: string }`. Accepts string, function, or undefined."},source:{code:C}}),decorators:[s({content:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`p`,{children:[`For non-interactive component, you can use `,(0,O.jsx)(`code`,{children:`JustClassName`}),` without specifying the type parameter.`]}),(0,O.jsxs)(`p`,{children:[`The function form receives`,` `,(0,O.jsx)(`code`,{children:`renderProps: AnyRecord & { className?: string | undefined }`})]}),(0,O.jsxs)(`p`,{children:[`The `,(0,O.jsx)(`code`,{children:`className`}),` contains the base class name produced by the component.`]}),(0,O.jsxs)(`p`,{children:[`You can append or amend the `,(0,O.jsx)(`code`,{children:`className`}),` by returning a string based off of it.`]}),(0,O.jsx)(`p`,{children:`You can also return a completely new class name by returning different value.`})]})}),a()]},d(P,{availableImports:{"@just-web/toolkits":p,"@repobuddy/storybook":l,react:D},defaultEditorOptions:{},code:P.parameters?.docs?.source?.code}),F={tags:[`use-case`,`editor`,`!test`],parameters:i({description:{story:"Using `JustClassName<RenderProps>` with a type parameter: the function receives typed render props (`RenderProps & { className?: string | undefined }`), enabling autocomplete and type checking for custom render props fields."},source:{code:y}}),decorators:[s({content:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`p`,{children:[`When using `,(0,O.jsx)(`code`,{children:`JustClassName<RenderProps>`}),` with a type parameter, the function form receives`,` `,(0,O.jsxs)(`code`,{children:[`renderProps: RenderProps & `,`{ className?: string | undefined }`]})]}),(0,O.jsx)(`p`,{children:`You can use it to customize the class name based on the render props.`})]})}),a()],play(){}},d(F,{availableImports:{"@repobuddy/storybook":l,"@just-web/toolkits":p,react:D},code:F.parameters?.docs?.source?.code}),I={name:`className vs defaultClassName`,parameters:i({source:{code:_}}),decorators:[s({content:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`p`,{children:[`Comparing to`,` `,(0,O.jsx)(`a`,{href:`https://react-aria.adobe.com/styling#render-props`,children:`react-aria-components render props`}),`, which uses `,(0,O.jsx)(`code`,{children:`defaultClassName`}),` to provide the default value from the component, `,(0,O.jsx)(`code`,{children:`JustClassName`}),` uses `,(0,O.jsx)(`code`,{children:`className`}),`.`]}),(0,O.jsx)(`p`,{children:`The key benefit is that you can compose your style and logic:`})]})}),a()]},d(I,{availableImports:{"@just-web/toolkits":p,"@repobuddy/storybook":l,react:D,clsx:{default:o}},defaultEditorOptions:{},code:I.parameters?.docs?.source?.code}),L={tags:[`source`],parameters:i({source:{code:x}}),decorators:[a()]},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>JustClassName</code> extends the basic <code>className</code> type with a callback
                        to invert the flow on control. This allows you to fully control the resulting{' '}
                        <code>className</code> value.
                    </p>
                    <p>
                        The behavior when using <code>JustClassName</code> should be consistent among all
                        components that use it. This provides a consistent API for the consumer.
                    </p>
                    <ul className="list-disc list-inside">
                        <li>
                            When <code>undefined</code> is passed, the default <code>className</code> should be
                            applied.
                        </li>
                        <li>
                            When a <code>string</code> is passed, it should be appended to the default{' '}
                            <code>className</code>.
                        </li>
                        <li>
                            When a <code>function</code> is passed, it must receive the current render props with
                            the default <code>className</code>.
                        </li>
                        <ul className="list-disc list-inside pl-4">
                            <li>
                                When the function returns <code>undefined</code>, the <code>className</code> should
                                be reset to <code>undefined</code>.
                            </li>
                            <li>
                                When the function returns a <code>string</code>, that will be the{' '}
                                <code>className</code> to be applied.
                            </li>
                        </ul>
                    </ul>
                </>
  })]
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'JustClassNameProps',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codePropsDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustClassNameProps',
    content: <>
                    <p>
                        <code>JustClassNameProps</code> defines the <code>className</code> property with the
                        type <code>JustClassName</code>
                    </p>
                    <p>
                        It is a ready-made type for the typical <code>className</code> props use case.
                    </p>
                </>
  }), showSource()]
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'JustClassName',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codeDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustClassName',
    content: <>
                    <p>
                        <code>JustClassName</code> extends the basic <code>className</code> type with a callback
                        to invert the flow on control. This allows you to fully control the resulting{' '}
                        <code>className</code>.
                    </p>
                    <p>
                        Compare to <code>JustClassNameProps</code>, <code>JustClassName</code> allows you to use
                        it on any props, not just the <code>className</code> prop.
                    </p>
                    <p>
                        In the callback, the function receives <code>JustClassNameFnProps</code>, the full
                        render props object with the <code>className</code> property, which contains the base{' '}
                        <code>className</code> produced by the component.
                    </p>
                    <p>
                        The consumer can append, amend, or override the <code>className</code> based on the
                        render props or return a completely different.
                    </p>
                </>
  }), showSource()]
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'JustClassNameFnProps',
  tags: ['type'],
  parameters: defineDocsParam({
    source: {
      code: codeResolverStateDefault
    }
  }),
  decorators: [withStoryCard({
    title: 'JustClassNameFnProps',
    content: <>
                    <p>
                        The render props type for <code>JustClassName</code> resolver functions.
                    </p>
                    <p>It is useful when you want to create a composable function.</p>
                </>
  }), showSource()]
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor', '!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Using \`JustClassName\` without a type parameter: render props is \`AnyRecord & { className?: string }\`. Accepts string, function, or undefined.'
    },
    source: {
      code: codePropsDefault
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        For non-interactive component, you can use <code>JustClassName</code> without specifying
                        the type parameter.
                    </p>
                    <p>
                        The function form receives{' '}
                        <code>{'renderProps: AnyRecord & { className?: string | undefined }'}</code>
                    </p>
                    <p>
                        The <code>className</code> contains the base class name produced by the component.
                    </p>
                    <p>
                        You can append or amend the <code>className</code> by returning a string based off of
                        it.
                    </p>
                    <p>You can also return a completely new class name by returning different value.</p>
                </>
  }), showSource()]
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor', '!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Using \`JustClassName<RenderProps>\` with a type parameter: the function receives typed render props (\`RenderProps & { className?: string | undefined }\`), enabling autocomplete and type checking for custom render props fields.'
    },
    source: {
      code: codeTyped
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When using <code>JustClassName&lt;RenderProps&gt;</code> with a type parameter, the
                        function form receives{' '}
                        <code>renderProps: RenderProps & {'{ className?: string | undefined }'}</code>
                    </p>
                    <p>You can use it to customize the class name based on the render props.</p>
                </>
  }), showSource()],
  play() {}
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'className vs defaultClassName',
  parameters: defineDocsParam({
    source: {
      code: codeDefaultClassName
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        Comparing to{' '}
                        <a href="https://react-aria.adobe.com/styling#render-props">
                            react-aria-components render props
                        </a>
                        , which uses <code>defaultClassName</code> to provide the default value from the
                        component, <code>JustClassName</code> uses <code>className</code>.
                    </p>
                    <p>The key benefit is that you can compose your style and logic:</p>
                </>
  }), showSource()]
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...L.parameters?.docs?.source}}},R=[`Specification`,`JustClassNameProps`,`JustClassName`,`JustClassNameFnProps`,`NonInteractiveComponent`,`InteractiveComponent`,`ClassNameVSDefaultClassName`,`Source`]})))()}z();export{I as ClassNameVSDefaultClassName,F as InteractiveComponent,M as JustClassName,N as JustClassNameFnProps,j as JustClassNameProps,P as NonInteractiveComponent,L as Source,A as Specification,R as __namedExportsOrder,k as default};