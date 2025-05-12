import { defineDocsParam, showDocSource } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'ClassNameProps',
	render: () => <></>,
} satisfies Meta

export const Basic: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'The className property accepts a string value for CSS class names.',
		},
		source: {
			code: `
			import { ClassNameProps } from '@just-web/types'

			interface Props extends ClassNameProps {
				children: React.ReactNode
			}

			export const Component = ({ className, children }: Props) => {
				return <div className={className}>{children}</div>
			}
			`,
		},
	}),
	decorators: [showDocSource()],
}
