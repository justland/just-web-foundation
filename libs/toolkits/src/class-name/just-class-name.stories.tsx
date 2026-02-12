import * as repobuddyStorybook from '@repobuddy/storybook'
import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import * as React from 'react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import codeDefault from './just-class-name.basic.code.tsx?raw'
import source from './just-class-name.ts?raw'
import codeTyped from './just-class-name.typed.code.tsx?raw'

const meta: Meta = {
	title: 'class-name/JustClassName',
	tags: ['type', 'version:next', 'autodocs'],
	parameters: defineDocsParam({
		description: {
			component:
				'Type for a class name that can be a string, a function `(state: States & { className? }) => string | undefined`, or undefined. Use with `resolveClassName()` to resolve the final class string.',
		},
	}),
	render: () => <></>,
}

export default meta

export const BasicUsage: StoryObj = {
	tags: ['!test', 'editor'],
	parameters: defineDocsParam({
		description: {
			story:
				'Using `JustClassName` without a type parameter: state is `AnyRecord & { className?: string }`. Accepts string, function, or undefined.',
		},
		source: { code: codeDefault },
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>JustClassName</code> accepts string, function, or undefined.
					</p>
				</>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
	play() {},
}

makeLiveEditStory(BasicUsage, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
	},
	defaultEditorOptions: {},
	code: BasicUsage.parameters?.['docs']?.['source']?.code,
})

export const WithTypeParam: StoryObj = {
	tags: ['!test', 'editor'],
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
						When using <code>JustClassName&lt;States&gt;</code> with a type parameter,
					</p>
					<p>
						the function form receives <code>state: States & {'{ className?: string | undefined }'}</code>
					</p>
					<p>You can use it to customize the class name based on the state.</p>
				</>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
	play() {},
}

makeLiveEditStory(WithTypeParam, {
	availableImports: {
		'@repobuddy/storybook': repobuddyStorybook,
		'@just-web/toolkits': toolkits,
		react: React,
	},
	code: WithTypeParam.parameters?.['docs']?.['source']?.code,
})

export const Source: StoryObj = {
	tags: ['!test', 'source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [showDocSource({ placement: 'before' })],
}
