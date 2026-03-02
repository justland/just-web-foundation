import { defineDocsParam, showSource } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { testType } from 'type-plus'
import { defineProperties, type Properties } from '#just-web/css'

export default {
	title: 'Properties/Properties',
	tags: ['autodocs', 'code-only', 'new', 'version:next'],
	decorators: [showSource()],
	render: () => <></>
} satisfies Meta

export const TypeUsage: StoryObj = {
	tags: ['!test'],
	parameters: defineDocsParam({
		description: {
			story: 'Extends CSS properties to support custom properties.'
		},
		source: {
			code: dedent`let style: Properties = {
				color: 'red',
				'--custom-property': '10px',
			}
			`
		}
	})
}

export const DefineFunction: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'Helper function to define CSS properties with type checking.'
		},
		source: {
			code: dedent`const style = defineProperties({
				color: 'red',
				fontSize: '16px',
				'--custom-property': '10px'
			})`
		}
	}),
	play: async () => {
		const style = defineProperties({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px'
		})
		await expect(style).toEqual({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px'
		})

		interface TypeParams<K extends keyof Properties> {
			property: K
			value: Properties[K]
		}
		testType.unknown<TypeParams<keyof Properties>>(false)
	}
}
