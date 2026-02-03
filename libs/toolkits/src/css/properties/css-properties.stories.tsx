import { defineDocsParam, showDocSource } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { defineCSSProperties } from '#just-web/toolkits'

export default {
	title: 'Properties/Properties',
	tags: ['autodocs', 'code-only', 'new', 'version:next'],
	decorators: [showDocSource()],
	render: () => <></>,
} satisfies Meta

export const TypeUsage: StoryObj = {
	tags: ['!test'],
	parameters: defineDocsParam({
		description: {
			story: 'Extends CSS properties to support custom properties.',
		},
		source: {
			code: dedent`let style: Properties = {
				color: 'red',
				'--custom-property': '10px',
			}
			`,
		},
	}),
}

export const DefineFunction: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'Helper function to define CSS properties with type checking.',
		},
		source: {
			code: dedent`const style = defineCSSProperties({
				color: 'red',
				fontSize: '16px',
				'--custom-property': '10px'
			})`,
		},
	}),
	play: async () => {
		const style = defineCSSProperties({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px',
		})
		await expect(style).toEqual({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px',
		})
	},
}
