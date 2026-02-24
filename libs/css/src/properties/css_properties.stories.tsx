import { defineCSSProperties, type CSSProperties } from '#just-web/css'
import { defineDocsParam, showDocSource } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { testType } from 'type-plus'

export default {
	title: 'Properties/CSSProperties',
	tags: ['autodocs', 'code-only', 'new', 'version:0.1'],
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
			code: dedent`let style: CSSProperties = {
				color: 'red',
				'--custom-property': '10px',
			}
			`,
		},
	}),
	play: () => {
		const style: CSSProperties = {
			color: 'red',
			'--custom-property': '10px',
		}
		expect(style).toEqual({
			color: 'red',
			'--custom-property': '10px',
		})

		interface TypeParams<K extends keyof CSSProperties> {
			property: K
			value: CSSProperties[K]
		}
		testType.unknown<TypeParams<keyof CSSProperties>>(false)
	},
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
	play: () => {
		const style = defineCSSProperties({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px',
		})
		expect(style).toEqual({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px',
		})
	},
}
