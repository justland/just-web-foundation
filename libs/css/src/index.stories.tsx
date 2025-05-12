import * as css from '@just-web/css'
import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'
import { makeLiveEditStory } from 'storybook-addon-code-editor'

export default {
	title: 'Playground',
	tags: ['code-only'],
	render: () => <></>,
} satisfies Meta

export const ClassNameProps: StoryObj = {
	tags: ['editor'],
	parameters: defineDocsParam({
		description: {
			story: 'The className property accepts a string value for CSS class names.',
		},
	}),
}

makeLiveEditStory(ClassNameProps, {
	availableImports: {
		'@just-web/css': css,
	},
	code: dedent`import type { ClassNameProps } from '@just-web/css'

	const Component = ({ className }: ClassNameProps) => {
		return <div className={className}>Try it out in the Live code editor panel</div>
	}

	export default () => <Component className="text-blue-800" />`,
})
