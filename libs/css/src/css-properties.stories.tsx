import { defineDocsParam, showDocSource } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import dedent from 'dedent'

export default {
	title: 'Types/CSSProperties',
	tags: ['code-only'],
	render: () => <></>,
} satisfies Meta

export const TypicalUsage: StoryObj = {
	tags: ['!test'],
	parameters: defineDocsParam({
		description: {
			story: 'Extends CSS properties to include custom properties.',
		},
		source: {
			code: dedent`import type { CSSProperties } from '@just-web/types'

			let style: CSSProperties = {
				color: 'red',
				'--custom-property': '10px',
			}
			`,
		},
	}),
	decorators: [showDocSource()],
}
