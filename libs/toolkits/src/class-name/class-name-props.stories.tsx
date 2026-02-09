import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import * as React from 'react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import code from './class-name-props.editor.src.tsx?raw'
import source from './class-name-props.ts?raw'

const meta: Meta<toolkits.ClassNameProps> = {
	title: 'class-name/ClassNameProps',
	tags: ['type', 'version:next', 'autodocs'],
	render: () => <></>,
}

export default meta

export const BasicUsage: StoryObj = {
	tags: ['!test', 'editor'],
	parameters: defineDocsParam({
		description: {
			story: 'The `className` property accepts a string value for CSS class names.',
		},
		source: { code },
	}),
	decorators: [withStoryCard()],
}

makeLiveEditStory(BasicUsage, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		react: React,
	},
	code: BasicUsage.parameters?.['docs']?.['source']?.code,
})

export const Source: StoryObj = {
	tags: ['!test', 'source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [showDocSource({ placement: 'before' })],
}
