import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as types from './index.js'

export default {
	title: 'Playground',
	tags: ['code-only'],
	render: () => <></>
} satisfies Meta

export const DataAttributeProps: StoryObj = {
	tags: ['editor'],
	parameters: defineDocsParam({
		description: {
			story: 'The data-attribute property accepts a string value for data attributes.'
		}
	})
}

makeLiveEditStory(DataAttributeProps, {
	availableImports: {
		'@just-web/types': types
	},
	code: dedent`import type { DataAttributeProps } from '@just-web/types'

	const Component = ({ 'data-attribute': dataAttribute }: DataAttributeProps) => {
		return <div data-attribute={dataAttribute}>Try it out in the Live code editor panel</div>
	}

	export default () => <Component data-attribute="test" />`
})
