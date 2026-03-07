import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { parseCssValue } from '#just-web/toolkits'
import source from './parse-css-value.ts?raw'

const meta = {
	title: 'units/parseCssValue',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Parses a CSS value in one pass and returns both the numeric part and the unit as [number, unit | undefined].'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Parse CSS values with various units; returns [number, unit] tuple.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				parseCssValue('16px')   // [16, 'px']
				parseCssValue('1.5rem') // [1.5, 'rem']
				parseCssValue('100%')   // [100, '%']
				parseCssValue('0')      // [0, undefined]
				parseCssValue(16)       // [16, undefined]
			`
		})
	],
	render() {
		const examples = [
			{ input: '16px', expected: [16, 'px'] },
			{ input: '1.5rem', expected: [1.5, 'rem'] },
			{ input: '100%', expected: [100, '%'] },
			{ input: '0', expected: [0, undefined] },
			{ input: 16, expected: [16, undefined] }
		]
		return (
			<StoryCard title="Basic usage" appearance="output">
				<pre className="text-sm">
					{examples
						.map(({ input, expected }) => {
							const result = parseCssValue(input)
							const expStr =
								typeof expected[1] === 'string'
									? `[${expected[0]}, '${expected[1]}']`
									: `[${expected[0]}, undefined]`
							return `parseCssValue(${typeof input === 'string' ? `'${input}'` : input}) → [${result[0]}, ${result[1] === undefined ? 'undefined' : `'${result[1]}'`}] (expected: ${expStr})`
						})
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples: Array<{ input: number | string; expected: [number, string | undefined] }> = [
			{ input: '16px', expected: [16, 'px'] },
			{ input: '1.5rem', expected: [1.5, 'rem'] },
			{ input: '100%', expected: [100, '%'] },
			{ input: '0', expected: [0, undefined] },
			{ input: 16, expected: [16, undefined] }
		]
		for (const { input, expected } of examples) {
			const result = parseCssValue(input)
			await expect(result[0]).toBe(expected[0])
			await expect(result[1]).toBe(expected[1])
		}
	}
}

export const VariousUnits: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Supports px, rem, em, %, lh, ch, vw, vh, and other CSS units.'
		}
	}),
	decorators: [withStoryCard()],
	render() {
		const examples = ['0px', '0rem', '0em', '0%', '0lh', '0ch', '0vw', '0vh', '1em', '2lh', '50vw']
		return (
			<StoryCard title="Various units" appearance="output">
				<pre className="text-sm">
					{examples
						.map((input) => {
							const [value, unit] = parseCssValue(input)
							return `parseCssValue('${input}') → [${value}, ${unit === undefined ? 'undefined' : `'${unit}'`}]`
						})
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(parseCssValue('0px')).toEqual([0, 'px'])
		await expect(parseCssValue('0rem')).toEqual([0, 'rem'])
		await expect(parseCssValue('50vw')).toEqual([50, 'vw'])
	}
}

export const InvalidInput: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Invalid input returns [NaN, undefined].'
		}
	}),
	decorators: [withStoryCard()],
	render() {
		const examples = ['', 'abc', 'px', undefined]
		return (
			<StoryCard title="Invalid input" appearance="output">
				<pre className="text-sm">
					{examples
						.map((input) => {
							const result = parseCssValue(input as string | undefined)
							const inputStr =
								input === undefined ? 'undefined' : input === '' ? "''" : `'${input}'`
							return `parseCssValue(${inputStr}) → [${Number.isNaN(result[0]) ? 'NaN' : result[0]}, undefined]`
						})
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const result1 = parseCssValue('abc')
		await expect(Number.isNaN(result1[0])).toBe(true)
		await expect(result1[1]).toBeUndefined()

		const result2 = parseCssValue(undefined)
		await expect(Number.isNaN(result2[0])).toBe(true)
		await expect(result2[1]).toBeUndefined()
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
