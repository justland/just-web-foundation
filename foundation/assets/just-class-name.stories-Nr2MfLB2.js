import{j as e,d as s,w as o,s as r,m as p,x as f,y as i,c as y}from"./iframe-bxlfbbSl.js";import{c as m}from"./index-CLKyHCJO.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-class-name-CJKnWUFY.js";import"./prefers-color-scheme-CSMMlMsB.js";import"./globals.ctx-DOXvZQDb.js";import"./css-properties-Dh8E5HRZ.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./to-dom-style-DZVOeG1x.js";import"./class-name-DJrTHtyi.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const b=`import type { JustClassName } from '@just-web/toolkits'
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
`,x=`import type { JustClassNameFnProps } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'

function textTheme(renderProps?: JustClassNameFnProps) {
	return {
		...renderProps,
		className: clsx(renderProps?.className, 'text-black dark:text-white'),
	}
}

function hoverTheme(renderProps?: JustClassNameFnProps) {
	return {
		...renderProps,
		className: clsx(
			renderProps?.className,
			'rounded outline-2 hover:outline-blue-300 dark:hover:outline-blue-700',
		),
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
`,C=`import type { JustClassName } from '@just-web/toolkits'
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
`,g="import type { AnyRecord } from 'type-plus'\n\n/**\n * Props interface for components that accept a render-props-aware `className`.\n *\n * Use this when defining component props that support the same `className` contract as {@link JustClassName}:\n * a static string, a resolver function that receives render props (including existing `className`), or `undefined`.\n *\n * @typeParam RenderProps - Record type for render props. When `className` is a function, it receives `RenderProps` merged with `{ className?: string }`.\n */\nexport interface JustClassNameProps<RenderProps extends AnyRecord = AnyRecord> {\n	className?: JustClassName<RenderProps> | undefined\n}\n\n/**\n * A `className` type that can be static or computed from render props.\n *\n * - `string`: The value is appended to the existing `className` in render props.\n * - `undefined`: Resets the `className` to `undefined`, removing existing `className`.\n * - `function`: Process the render props and return the desired `className`.\n *\n * @typeParam RenderProps - Record type for render props. Resolvers receive `RenderProps` merged with `{ className?: string }`.\n */\nexport type JustClassName<RenderProps extends AnyRecord = AnyRecord> =\n	| ((renderProps: JustClassNameFnProps<RenderProps>) => string | undefined)\n	| string\n	| undefined\n\n/**\n * The props type for `JustClassName` resolver functions.\n *\n * @typeParam RenderProps - Record type for render props.\n */\nexport type JustClassNameFnProps<RenderProps extends AnyRecord = AnyRecord> = RenderProps & {\n	className?: string | undefined\n}\n",N=`import type { JustClassNameProps } from '@just-web/toolkits'
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
`,P=`import type { JustClassNameFnProps } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'

function textTheme(renderProps?: JustClassNameFnProps) {
	return {
		...renderProps,
		className: clsx(renderProps?.className, 'text-emerald-800 dark:text-emerald-200'),
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
`,H={title:"class-name/JustClassName",tags:["version:next","!test"],parameters:s({description:{component:"`JustClassName` extends the basic `className` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `className`."}}),render:()=>e.jsx(e.Fragment,{})},u={decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustClassName"})," extends the basic ",e.jsx("code",{children:"className"})," type with a callback to invert the flow on control. This allows you to fully control the resulting"," ",e.jsx("code",{children:"className"})," value."]}),e.jsxs("p",{children:["The behavior when using ",e.jsx("code",{children:"JustClassName"})," should be consistent among all components that use it. This provides a consistent API for the consumer."]}),e.jsxs("ul",{className:"list-disc list-inside",children:[e.jsxs("li",{children:["When ",e.jsx("code",{children:"undefined"})," is passed, the default ",e.jsx("code",{children:"className"})," should be applied."]}),e.jsxs("li",{children:["When a ",e.jsx("code",{children:"string"})," is passed, it should be appended to the default"," ",e.jsx("code",{children:"className"}),"."]}),e.jsxs("li",{children:["When a ",e.jsx("code",{children:"function"})," is passed, it must receive the current render props with the default ",e.jsx("code",{children:"className"}),"."]}),e.jsxs("ul",{className:"list-disc list-inside pl-4",children:[e.jsxs("li",{children:["When the function returns ",e.jsx("code",{children:"undefined"}),", the ",e.jsx("code",{children:"className"})," should be reset to ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:["When the function returns a ",e.jsx("code",{children:"string"}),", that will be the"," ",e.jsx("code",{children:"className"})," to be applied."]})]})]})]})})]},h={tags:["source"],parameters:s({source:{code:g}}),decorators:[r({placement:"before"})]},t={name:"JustClassNameProps",tags:["type"],parameters:s({source:{code:N}}),decorators:[o({title:"JustClassNameProps",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustClassNameProps"})," defines the ",e.jsx("code",{children:"className"})," property with the type ",e.jsx("code",{children:"JustClassName"})]}),e.jsxs("p",{children:["It is a ready-made type for the typical ",e.jsx("code",{children:"className"})," props use case."]})]})}),r({placement:"before"})]};p(t,{availableImports:{"@just-web/toolkits":m,"@repobuddy/storybook":i,react:f},code:t.parameters?.docs?.source?.code});const a={name:"JustClassName",tags:["type"],parameters:s({source:{code:b}}),decorators:[o({title:"JustClassName",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustClassName"})," extends the basic ",e.jsx("code",{children:"className"})," type with a callback to invert the flow on control. This allows you to fully control the resulting"," ",e.jsx("code",{children:"className"}),"."]}),e.jsxs("p",{children:["Compare to ",e.jsx("code",{children:"JustClassNameProps"}),", ",e.jsx("code",{children:"JustClassName"})," allows you to use it on any props, not just the ",e.jsx("code",{children:"className"})," prop."]}),e.jsxs("p",{children:["In the callback, the function receives ",e.jsx("code",{children:"JustClassNameFnProps"}),", the full render props object with the ",e.jsx("code",{children:"className"})," property, which contains the base"," ",e.jsx("code",{children:"className"})," produced by the component."]}),e.jsxs("p",{children:["The consumer can append, amend, or override the ",e.jsx("code",{children:"className"})," based on the render props or return a completely different."]})]})}),r({placement:"before"})]};p(a,{availableImports:{"@just-web/toolkits":m,"@repobuddy/storybook":i},code:a.parameters?.docs?.source?.code});const n={name:"JustClassNameFnProps",tags:["type"],parameters:s({source:{code:P}}),decorators:[o({title:"JustClassNameFnProps",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["The render props type for ",e.jsx("code",{children:"JustClassName"})," resolver functions."]}),e.jsx("p",{children:"It is useful when you want to create a composable function."})]})}),r({placement:"before"})]};p(n,{availableImports:{"@just-web/toolkits":m,"@repobuddy/storybook":i},code:n.parameters?.docs?.source?.code});const c={tags:["use-case","editor","!test"],parameters:s({description:{story:"Using `JustClassName` without a type parameter: render props is `AnyRecord & { className?: string }`. Accepts string, function, or undefined."},source:{code:N}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["For non-interactive component, you can use ",e.jsx("code",{children:"JustClassName"})," without specifying the type parameter."]}),e.jsxs("p",{children:["The function form receives"," ",e.jsx("code",{children:"renderProps: AnyRecord & { className?: string | undefined }"})]}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"className"})," contains the base class name produced by the component."]}),e.jsxs("p",{children:["You can append or amend the ",e.jsx("code",{children:"className"})," by returning a string based off of it."]}),e.jsx("p",{children:"You can also return a completely new class name by returning different value."})]})}),r({placement:"before"})]};p(c,{availableImports:{"@just-web/toolkits":m,"@repobuddy/storybook":i,react:f},defaultEditorOptions:{},code:c.parameters?.docs?.source?.code});const d={tags:["use-case","editor","!test"],parameters:s({description:{story:"Using `JustClassName<RenderProps>` with a type parameter: the function receives typed render props (`RenderProps & { className?: string | undefined }`), enabling autocomplete and type checking for custom render props fields."},source:{code:C}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When using ",e.jsx("code",{children:"JustClassName<RenderProps>"})," with a type parameter, the function form receives"," ",e.jsxs("code",{children:["renderProps: RenderProps & ","{ className?: string | undefined }"]})]}),e.jsx("p",{children:"You can use it to customize the class name based on the render props."})]})}),r({placement:"before"})],play(){}};p(d,{availableImports:{"@repobuddy/storybook":i,"@just-web/toolkits":m,react:f},code:d.parameters?.docs?.source?.code});const l={name:"className vs defaultClassName",parameters:s({source:{code:x}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Comparing to"," ",e.jsx("a",{href:"https://react-aria.adobe.com/styling#render-props",children:"react-aria-components render props"}),", which uses ",e.jsx("code",{children:"defaultClassName"})," to provide the default value from the component, ",e.jsx("code",{children:"JustClassName"})," uses ",e.jsx("code",{children:"className"}),"."]}),e.jsx("p",{children:"The key benefit is that you can compose your style and logic:"})]})}),r({placement:"before"})]};p(l,{availableImports:{"@just-web/toolkits":m,"@repobuddy/storybook":i,react:f,clsx:{default:y}},defaultEditorOptions:{},code:l.parameters?.docs?.source?.code});u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showDocSource({
    placement: 'before'
  })]
}`,...h.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })],
  play() {}
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before'
  })]
}`,...l.parameters?.docs?.source}}};const V=["Specification","Source","JustClassNameProps","JustClassName","JustClassNameFnProps","NonInteractiveComponent","InteractiveComponent","ClassNameVSDefaultClassName"];export{l as ClassNameVSDefaultClassName,d as InteractiveComponent,a as JustClassName,n as JustClassNameFnProps,t as JustClassNameProps,c as NonInteractiveComponent,h as Source,u as Specification,V as __namedExportsOrder,H as default};
