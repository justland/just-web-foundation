import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import * as React from 'react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import code from './class-name-props.editor.src.tsx?raw'
import source from './class-name-props.ts?raw'

const meta: Meta<toolkits.ClassNameProps> = {
	title: 'class-name/ClassNameProps',
	tags: ['type', 'version:next'],
	render: () => <></>,
}

export default meta

export const Playground: StoryObj = {
	tags: ['!test', 'editor'],
	parameters: defineDocsParam({ source: { code } }),
}

makeLiveEditStory(Playground, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		react: React,
	},
	code: Playground.parameters?.['docs']?.['source']?.code,
})

export const Source: StoryObj = {
	tags: ['!test', 'source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [withStoryCard(), showDocSource({ placement: 'before' })],
}
