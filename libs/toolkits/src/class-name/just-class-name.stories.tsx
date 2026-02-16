import * as repobuddyStorybook from '@repobuddy/storybook'
import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
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
				'`JustClassName` extends the basic `className` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `className`.',
		},
	}),
	render: () => <></>,
}

export default meta

export const Source: StoryObj = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [showDocSource({ placement: 'before' })],
}

export const JustClassNameProps: StoryObj = {
	name: 'JustClassNameProps',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codePropsDefault },
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
			),
		}),
		showDocSource({ placement: 'before' }),
	],
}

makeLiveEditStory(JustClassNameProps, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
	},
	code: JustClassNameProps.parameters?.['docs']?.['source']?.code,
})

export const JustClassName: StoryObj = {
	name: 'JustClassName',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codeDefault },
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
						In the callback, the function receives <code>JustClassNameResolverState</code>, the full
						state object with the <code>className</code> property, which contains the base{' '}
						<code>className</code> produced by the component.
					</p>
					<p>
						The consumer can append, amend, or override the <code>className</code> based on the
						state.
					</p>
				</>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
}

makeLiveEditStory(JustClassName, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
	},
	code: JustClassName.parameters?.['docs']?.['source']?.code,
})

export const JustClassNameResolverState: StoryObj = {
	name: 'JustClassNameResolverState',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codeResolverStateDefault },
	}),
	decorators: [
		withStoryCard({
			title: 'JustClassNameResolverState',
			content: (
				<>
					<p>
						The state type for <code>JustClassName</code> resolver functions.
					</p>
				</>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
}

makeLiveEditStory(JustClassNameResolverState, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
	},
	code: JustClassNameResolverState.parameters?.['docs']?.['source']?.code,
})

export const NonInteractiveComponent: StoryObj = {
	tags: ['use-case', 'editor', '!test'],
	parameters: defineDocsParam({
		description: {
			story:
				'Using `JustClassName` without a type parameter: state is `AnyRecord & { className?: string }`. Accepts string, function, or undefined.',
		},
		source: { code: codePropsDefault },
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
						<code>{'state: AnyRecord & { className?: string | undefined }'}</code>
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
			),
		}),
		showDocSource({ placement: 'before' }),
	],
}

makeLiveEditStory(NonInteractiveComponent, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
	},
	defaultEditorOptions: {},
	code: NonInteractiveComponent.parameters?.['docs']?.['source']?.code,
})

export const InteractiveComponent: StoryObj = {
	tags: ['use-case', 'editor', '!test'],
	parameters: defineDocsParam({
		description: {
			story:
				'Using `JustClassName<States>` with a type parameter: the function receives typed state (`States & { className?: string | undefined }`), enabling autocomplete and type checking for custom state fields.',
		},
		source: { code: codeTyped },
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When using <code>JustClassName&lt;States&gt;</code> with a type parameter, the function
						form receives <code>state: States & {'{ className?: string | undefined }'}</code>
					</p>
					<p>You can use it to customize the class name based on the state.</p>
				</>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
	play() {},
}

makeLiveEditStory(InteractiveComponent, {
	availableImports: {
		'@repobuddy/storybook': repobuddyStorybook,
		'@just-web/toolkits': toolkits,
		react: React,
	},
	code: InteractiveComponent.parameters?.['docs']?.['source']?.code,
})

export const ClassNameVSDefaultClassName: StoryObj = {
	name: 'className vs defaultClassName',
	parameters: defineDocsParam({
		source: { code: codeDefaultClassName },
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
			),
		}),
		showDocSource({ placement: 'before' }),
	],
}

makeLiveEditStory(ClassNameVSDefaultClassName, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
		clsx: { default: clsx },
	},
	defaultEditorOptions: {},
	code: ClassNameVSDefaultClassName.parameters?.['docs']?.['source']?.code,
})
