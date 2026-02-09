import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import * as React from 'react'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import code from './class-name.editor.src.tsx?raw'

const meta: Meta<toolkits.ClassNameProps> = {
	title: 'class-name/ClassNameProps',
	tags: ['type', 'version:next', 'autodocs'],
	render: () => <></>,
}

export default meta

export const Example: StoryObj = {
	tags: ['!test', 'editor'],
	parameters: defineDocsParam({
		description: {
			story: 'The `className` property accepts a string value for CSS class names.',
		},
		source: { code },
	}),
}

makeLiveEditStory(Example, {
	availableImports: {
		'@just-web/toolkits': toolkits,
		react: React,
	},
	code: Example.parameters?.['docs']?.['source']?.code,
})
