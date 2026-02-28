import * as repobuddyStorybook from '@repobuddy/storybook'
import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import * as React from 'react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import codeDefault from './just-style.editor.default.tsx?raw'
import codeTyped from './just-style.editor.type-param.tsx?raw'
import source from './just-style.ts?raw'
import codePropsDefault from './just-style-props.editor.default.tsx?raw'
import codeResolverStateDefault from './just-style-resolver-state.editor.default.tsx?raw'

const meta: Meta = {
	title: 'style/JustStyle',
	tags: ['version:next', '!test'],
	parameters: defineDocsParam({
		description: {
			component:
				'`JustStyle` extends the basic `style` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `style`.',
		},
	}),
	render: () => <></>,
}

export default meta

export const Specification: StoryObj = {
	decorators: [
		withStoryCard({
			content: (
				<>
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
			),
		}),
	],
}

export const JustStylePropsStory: StoryObj = {
	name: 'JustStyleProps',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codePropsDefault },
	}),
	decorators: [
		withStoryCard({
			title: 'JustStyleProps',
			content: (
				<>
					<p>
						<code>JustStyleProps</code> defines the <code>style</code> property with the type{' '}
						<code>JustStyle</code>.
					</p>
					<p>
						It is a ready-made type for the typical <code>style</code> props use case.
					</p>
				</>
			),
		}),
		showSource(),
	],
}

makeLiveEditStory(JustStylePropsStory, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
	},
	code: JustStylePropsStory.parameters?.['docs']?.['source']?.code,
})

export const JustStyleStory: StoryObj = {
	name: 'JustStyle',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codeDefault },
	}),
	decorators: [
		withStoryCard({
			title: 'JustStyle',
			content: (
				<>
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
			),
		}),
		showSource(),
	],
}

makeLiveEditStory(JustStyleStory, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
	},
	code: JustStyleStory.parameters?.['docs']?.['source']?.code,
})

export const JustStyleFnPropsStory: StoryObj = {
	name: 'JustStyleFnProps',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codeResolverStateDefault },
	}),
	decorators: [
		withStoryCard({
			title: 'JustStyleFnProps',
			content: (
				<>
					<p>
						The render props type for <code>JustStyle</code> resolver functions.
					</p>
					<p>It is useful when you want to create a composable function.</p>
				</>
			),
		}),
		showSource(),
	],
}

makeLiveEditStory(JustStyleFnPropsStory, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
	},
	code: JustStyleFnPropsStory.parameters?.['docs']?.['source']?.code,
})

export const NonInteractiveComponent: StoryObj = {
	tags: ['use-case', 'editor', '!test'],
	parameters: defineDocsParam({
		description: {
			story:
				'Using `JustStyle` without a type parameter: render props is `AnyRecord & { style?: CSSProperties }`. Accepts object, function, or undefined.',
		},
		source: { code: codePropsDefault },
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
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
			),
		}),
		showSource(),
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
				'Using `JustStyle<RenderProps>` with a type parameter: the function receives typed render props (`RenderProps & { style?: CSSProperties }`), enabling autocomplete and type checking for custom render props fields.',
		},
		source: { code: codeTyped },
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When using <code>JustStyle&lt;RenderProps&gt;</code> with a type parameter, the function
						form receives{' '}
						<code>renderProps: RenderProps & {'{ style?: CSSProperties | undefined }'}</code>
					</p>
					<p>You can use it to customize the style based on the render props.</p>
				</>
			),
		}),
		showSource(),
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

export const Source: StoryObj = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [showSource()],
}
