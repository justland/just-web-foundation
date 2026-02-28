import * as repobuddyStorybook from '@repobuddy/storybook'
import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import clsx from 'clsx'
import * as React from 'react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import codeDefault from './just-class-name.editor.default.tsx?raw'
import codeDefaultClassName from './just-class-name.editor.default-class-name.tsx?raw'
import codeTyped from './just-class-name.editor.type-param.tsx?raw'
import source from './just-class-name.ts?raw'
import codePropsDefault from './just-class-name-props.editor.default.tsx?raw'
import codeResolverStateDefault from './just-class-name-resolver-state.editor.default.tsx?raw'

const meta: Meta = {
	title: 'class-name/JustClassName',
	tags: ['version:next', '!test'],
	parameters: defineDocsParam({
		description: {
			component:
				'`JustClassName` extends the basic `className` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `className`.'
		}
	}),
	render: () => <></>
}

export default meta

export const Specification: StoryObj = {
	decorators: [
		withStoryCard({
			content: (
				<>
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
			)
		})
	]
}

export const JustClassNameProps: StoryObj = {
	name: 'JustClassNameProps',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codePropsDefault }
	}),
	decorators: [
		withStoryCard({
			title: 'JustClassNameProps',
			content: (
				<>
					<p>
						<code>JustClassNameProps</code> defines the <code>className</code> property with the
						type <code>JustClassName</code>
					</p>
					<p>
						It is a ready-made type for the typical <code>className</code> props use case.
					</p>
				</>
			)
		}),
		showSource()
	]
}

makeLiveEditStory(JustClassNameProps, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React
	},
	code: JustClassNameProps.parameters?.['docs']?.['source']?.code
})

export const JustClassName: StoryObj = {
	name: 'JustClassName',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codeDefault }
	}),
	decorators: [
		withStoryCard({
			title: 'JustClassName',
			content: (
				<>
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
			)
		}),
		showSource()
	]
}

makeLiveEditStory(JustClassName, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook
	},
	code: JustClassName.parameters?.['docs']?.['source']?.code
})

export const JustClassNameFnProps: StoryObj = {
	name: 'JustClassNameFnProps',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codeResolverStateDefault }
	}),
	decorators: [
		withStoryCard({
			title: 'JustClassNameFnProps',
			content: (
				<>
					<p>
						The render props type for <code>JustClassName</code> resolver functions.
					</p>
					<p>It is useful when you want to create a composable function.</p>
				</>
			)
		}),
		showSource()
	]
}

makeLiveEditStory(JustClassNameFnProps, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook
	},
	code: JustClassNameFnProps.parameters?.['docs']?.['source']?.code
})

export const NonInteractiveComponent: StoryObj = {
	tags: ['use-case', 'editor', '!test'],
	parameters: defineDocsParam({
		description: {
			story:
				'Using `JustClassName` without a type parameter: render props is `AnyRecord & { className?: string }`. Accepts string, function, or undefined.'
		},
		source: { code: codePropsDefault }
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
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
			)
		}),
		showSource()
	]
}

makeLiveEditStory(NonInteractiveComponent, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React
	},
	defaultEditorOptions: {},
	code: NonInteractiveComponent.parameters?.['docs']?.['source']?.code
})

export const InteractiveComponent: StoryObj = {
	tags: ['use-case', 'editor', '!test'],
	parameters: defineDocsParam({
		description: {
			story:
				'Using `JustClassName<RenderProps>` with a type parameter: the function receives typed render props (`RenderProps & { className?: string | undefined }`), enabling autocomplete and type checking for custom render props fields.'
		},
		source: { code: codeTyped }
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When using <code>JustClassName&lt;RenderProps&gt;</code> with a type parameter, the
						function form receives{' '}
						<code>renderProps: RenderProps & {'{ className?: string | undefined }'}</code>
					</p>
					<p>You can use it to customize the class name based on the render props.</p>
				</>
			)
		}),
		showSource()
	],
	play() {}
}

makeLiveEditStory(InteractiveComponent, {
	availableImports: {
		'@repobuddy/storybook': repobuddyStorybook,
		'@just-web/toolkits': toolkits,
		react: React
	},
	code: InteractiveComponent.parameters?.['docs']?.['source']?.code
})

export const ClassNameVSDefaultClassName: StoryObj = {
	name: 'className vs defaultClassName',
	parameters: defineDocsParam({
		source: { code: codeDefaultClassName }
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
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
			)
		}),
		showSource()
	]
}

makeLiveEditStory(ClassNameVSDefaultClassName, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
		clsx: { default: clsx }
	},
	defaultEditorOptions: {},
	code: ClassNameVSDefaultClassName.parameters?.['docs']?.['source']?.code
})

export const Source: StoryObj = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source }
	}),
	decorators: [showSource()]
}
