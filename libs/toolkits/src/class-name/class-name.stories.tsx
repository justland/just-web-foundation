import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as toolkits from '#just-web/toolkits'
import code from './class-name.editor.src.tsx?raw'

const meta: Meta<toolkits.ClassNameProps> = {
	title: 'class-name/ClassNameProps',
	tags: ['type', 'version:0.1', 'autodocs', 'new'],
	render: () => <div />,
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
	},
	code: Example.parameters?.['docs']?.['source']?.code,
})
