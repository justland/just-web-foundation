import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useRef, useState } from 'react'
import { expect } from 'storybook/test'
import { defineCSSProperties, getCSSVariableValue } from '#just-web/toolkits'
import source from './get-css-variable-value.ts?raw'

const meta = {
	title: 'style/getCSSVariableValue',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function to retrieve CSS custom property values from an element or document body.'
		}
	}),
	render: () => <></>
} satisfies Meta<typeof getCSSVariableValue>

export default meta

type Story = StoryObj<typeof meta>

export const Specification: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source }
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>getCSSVariableValue</code> retrieves CSS custom property values from an element or{' '}
					<code>document.body</code>.
				</p>
			)
		}),
		showSource()
	]
}

export const SingleVariable: Story = {
	name: 'single variable',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets a single CSS variable value from document body when given one property name.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`getCSSVariableValue('--color-gray-100')`
		})
	],
	render() {
		const [gray100] = getCSSVariableValue('--color-gray-100')
		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify([gray100])}</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const [gray100] = getCSSVariableValue('--color-gray-100')
		await expect(gray100).toBe('oklch(96.7% 0.003 264.542)')
	}
}

export const MultipleVariables: Story = {
	name: 'multiple variables',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets multiple CSS variable values from document body.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`getCSSVariableValue('--color-white', '--color-gray-100')`
		})
	],
	render() {
		const [white, gray100] = getCSSVariableValue('--color-white', '--color-gray-100')
		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify([white, gray100])}</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const [white, gray100] = getCSSVariableValue('--color-white', '--color-gray-100')
		await expect(white).toBe('#fff')
		await expect(gray100).toBe('oklch(96.7% 0.003 264.542)')
	}
}

function WithElementDemo() {
	const ref = useRef<HTMLDivElement>(null)
	const [value, setValue] = useState<string[] | null>(null)
	useEffect(() => {
		if (ref.current) setValue(getCSSVariableValue(ref.current, '--text-red-100'))
	}, [])
	return (
		<>
			<div
				ref={ref}
				data-testid="subject"
				style={defineCSSProperties({ '--text-red-100': 'red' })}
			/>
			<StoryCard appearance="output">
				<pre>{value === null ? '...' : JSON.stringify(value)}</pre>
			</StoryCard>
		</>
	)
}

export const FromElement: Story = {
	name: 'from element',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets CSS variable values from a specific element when passed as the first argument.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`const element = canvas.getByTestId('subject')
getCSSVariableValue(element, '--text-red-100')`
		})
	],
	render: () => <WithElementDemo />,
	play: async ({ canvas }) => {
		const element = canvas.getByTestId('subject')
		await expect(getCSSVariableValue(element, '--text-red-100')).toEqual(['red'])
	}
}

export const VariableDoesNotExist: Story = {
	name: 'when variable does not exist',
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Returns empty string for each requested variable that is not defined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`getCSSVariableValue('--nonexistent-var')`
		})
	],
	render() {
		const [value] = getCSSVariableValue('--nonexistent-var')
		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify([value])}</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const [value] = getCSSVariableValue('--nonexistent-var')
		await expect(value).toBe('')
	}
}
