import { parseCssNumber } from '@just-web/toolkits'
import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import source from './parse-css-number.ts?raw'

const meta = {
	title: 'units/parseCssNumber',
	tags: ['func', 'version:3.1'],
	parameters: defineDocsParam({
		description: {
			component:
				'Extracts the numeric part from any CSS length/percentage value. Thin wrapper around parseCssValue(value)[0].'
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
			story: 'Extract numeric value from CSS strings with various units.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				parseCssNumber('16px')   // 16
				parseCssNumber('1.5rem') // 1.5
				parseCssNumber('100%')   // 100
				parseCssNumber('0lh')    // 0
				parseCssNumber(16)       // 16
			`
		})
	],
	render() {
		const examples = [
			{ input: '16px', expected: 16 },
			{ input: '1.5rem', expected: 1.5 },
			{ input: '100%', expected: 100 },
			{ input: '0lh', expected: 0 },
			{ input: 16, expected: 16 }
		]
		return (
			<StoryCard title="Basic usage" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) =>
								`parseCssNumber(${typeof input === 'string' ? `'${input}'` : input}) → ${parseCssNumber(input)} (expected: ${expected})`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(parseCssNumber('16px')).toBe(16)
		await expect(parseCssNumber('1.5rem')).toBe(1.5)
		await expect(parseCssNumber('100%')).toBe(100)
		await expect(parseCssNumber('0lh')).toBe(0)
		await expect(parseCssNumber(16)).toBe(16)
	}
}

export const NullUndefinedPassThrough: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'null and undefined are passed through as-is.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				parseCssNumber(null)      // null
				parseCssNumber(undefined)  // undefined
			`
		})
	],
	render() {
		return (
			<StoryCard title="Null/undefined pass-through" appearance="output">
				<pre className="text-sm">
					{`parseCssNumber(null) → ${parseCssNumber(null)}
parseCssNumber(undefined) → ${parseCssNumber(undefined)}`}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(parseCssNumber(null)).toBe(null)
		await expect(parseCssNumber(undefined)).toBe(undefined)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
