import { defineDocsParam } from '@repobuddy/storybook'
import { showDocSource } from '@repobuddy/storybook/react'
import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'

export default {
	title: 'Types/ClassNameProps',
	tags: ['code-only'],
	render: () => <div />,
} satisfies Meta

export const TypicalUsage: StoryObj = {
	tags: ['!test'],
	parameters: defineDocsParam({
		description: {
			story: 'The className property accepts a string value for CSS class names.',
		},
		source: {
			code: dedent`import type { ClassNameProps } from '@just-web/css'

			const Component = ({ className, children }: PropsWithChildren<ClassNameProps>) => {
				return <div className={className}>{children}</div>
			}
			`,
		},
	}),
	decorators: [showDocSource()],
}
