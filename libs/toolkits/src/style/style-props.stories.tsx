import * as repobuddyStorybook from '@repobuddy/storybook'
import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import * as React from 'react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import code from './style-props.editor.tsx?raw'
import source from './style-props.ts?raw'

const meta: Meta<toolkits.StyleProps> = {
	title: 'style/StyleProps',
	tags: ['type', 'version:next', '!test'],
	render: () => <></>,
}

export default meta

export const Specification: StoryObj = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>StyleProps</code> describes the standard type of the <code>style</code> property.
				</p>
			),
		}),
		showSource(),
	],
}

export const BasicUsage: StoryObj = {
	tags: ['use-case', 'editor'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [
		withStoryCard({
			content: <p>Use it by itself or combine with other props.</p>,
		}),
		showSource(),
	],
}

makeLiveEditStory(BasicUsage, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		'@repobuddy/storybook': repobuddyStorybook,
		react: React,
	},
	code: BasicUsage.parameters?.['docs']?.['source']?.code,
})
