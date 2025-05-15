import { defineDocsParam } from '@repobuddy/storybook'
import { showDocSource } from '@repobuddy/storybook/react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import dedent from 'dedent'
import { defineCSSProperties, getCSSPropValues } from '../index.js'

export default {
	title: 'utils/getCSSPropValues',
	tags: ['code-only', 'new', 'version:1.0.0'],
	decorators: [showDocSource()],
	render: () => <></>,
} satisfies Meta

export const SingleValue: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'can be used to get a single value',
		},
		source: {
			code: `getCSSPropValues('--color-gray-100')`,
		},
	}),
	play: () => {
		const [gray100] = getCSSPropValues('--color-gray-100')
		expect(gray100).toBe('oklch(96.7% 0.003 264.542)')
	},
}

export const MultipleValues: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'gets css prop values from document body',
		},
		source: {
			code: `getCSSPropValues('--color-white', '--color-gray-100')`,
		},
	}),
	play() {
		const [white, gray100] = getCSSPropValues('--color-white', '--color-gray-100')
		expect(white).toBe('#fff')
		expect(gray100).toBe('oklch(96.7% 0.003 264.542)')
	},
}

export const WithElement: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'can specify which element to get the property from',
		},
		source: {
			code: dedent`const element = canvas.getByTestId('subject')

			getCSSPropValues(element, '--text-red-100')`,
		},
	}),
	render() {
		return (
			<div
				data-testid="subject"
				style={defineCSSProperties({
					'--text-red-100': 'red',
				})}
			/>
		)
	},
	play({ canvas }) {
		const element = canvas.getByTestId('subject')
		expect(getCSSPropValues(element, '--text-red-100')).toEqual(['red'])
	},
}
