import { defineDocsParam, showDocSource } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'

const meta = {
	title: 'Types/DataAttributeProps',
	tags: ['code-only'],
	render: () => <></>,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Basic usage of DataAttributeProps with predefined attributes.',
		},
		source: {
			code: dedent`
				import type { DataAttributeProps } from '@just-web/types'

				const props: DataAttributeProps = {
					'data-metrics': 'button-click',
					'data-testid': 'submit-button'
				}
			`,
		},
	}),
	decorators: [showDocSource()],
}

export const CustomDataAttributes: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Using custom data-* attributes with any value type.',
		},
		source: {
			code: dedent`
				import type { DataAttributeProps } from '@just-web/types'

				const props: DataAttributeProps = {
					'data-metrics': 'form-submit',
					'data-testid': 'contact-form',
					'data-custom': 'value',
					'data-count': 42,
					'data-enabled': true
				}
			`,
		},
	}),
	decorators: [showDocSource()],
}

export const OptionalAttributes: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'All attributes are optional, allowing for flexible usage.',
		},
		source: {
			code: dedent`
				import type { DataAttributeProps } from '@just-web/types'

				// All attributes are optional
				const props: DataAttributeProps = {}
			`,
		},
	}),
	decorators: [showDocSource()],
}
