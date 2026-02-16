import * as repobuddyStorybook from '@repobuddy/storybook'
import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import * as React from 'react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import codeDefault from './just-children.editor.default.tsx?raw'
import source from './just-children.ts?raw'
import codePropsDefault from './just-children-props.editor.default.tsx?raw'

const meta: Meta = {
	title: 'children/JustChildren',
	tags: ['version:next', '!test'],
	parameters: defineDocsParam({
		description: {
			component:
				'`JustChildren` extends the basic `children` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `children` value.',
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
			),
		}),
	],
}

export const Source: StoryObj = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [showDocSource({ placement: 'before' })],
}

export const JustChildrenPropsStory: StoryObj = {
	name: 'JustChildrenProps',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codePropsDefault },
	}),
	decorators: [
		withStoryCard({
			title: 'JustChildrenProps',
			content: (
				<>
					<p>
						<code>JustChildrenProps</code> defines the <code>children</code> property with the type{' '}
						<code>JustChildren</code>.
					</p>
					<p>
						It is a ready-made type for the typical <code>children</code> props use case.
					</p>
				</>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
}

makeLiveEditStory(JustChildrenPropsStory, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
	},
	code: JustChildrenPropsStory.parameters?.['docs']?.['source']?.code,
})

export const JustChildrenStory: StoryObj = {
	name: 'JustChildren',
	tags: ['type'],
	parameters: defineDocsParam({
		source: { code: codeDefault },
	}),
	decorators: [
		withStoryCard({
			title: 'JustChildren',
			content: (
				<>
					<p>
						Compare to <code>JustChildrenProps</code>, <code>JustChildren</code> allows you to use
						it on its own (e.g. for a variable or parameter that can be static or a resolver).
					</p>
				</>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
}

makeLiveEditStory(JustChildrenStory, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
	},
	code: JustChildrenStory.parameters?.['docs']?.['source']?.code,
})
