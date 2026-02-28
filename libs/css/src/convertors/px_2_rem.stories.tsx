import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { px2rem } from '#just-web/css'
import source from './px_2_rem.ts?raw'

const meta = {
	title: 'convertors/px2rem',
	tags: ['version:0.6'],
	parameters: defineDocsParam({
		description: {
			component:
				'Converts pixel values to rem units. Accepts a number or string (e.g. "16px" or "16") and optional base (default 16) and precision (default 4).',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case', 'snapshot'],
	parameters: defineDocsParam({
		description: {
			story: 'Convert pixel numbers to rem using the default base (16px).',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>px2rem(px)</code> returns the rem value. Default base is 16.
					</p>
				</>
			),
		}),
		showSource({
			source: dedent`
				px2rem(16)  // 1
				px2rem(32)  // 2
				px2rem(8)   // 0.5
				px2rem(24)  // 1.5
			`,
		}),
	],
	render() {
		const examples = [
			{ input: 16, expected: 1 },
			{ input: 32, expected: 2 },
			{ input: 8, expected: 0.5 },
			{ input: 24, expected: 1.5 },
		]
		return (
			<StoryCard title="Basic usage (default base: 16px)" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) =>
								`px2rem(${input}) → ${px2rem(input)}rem (expected: ${expected}rem)`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: 16, expected: 1 },
			{ input: 32, expected: 2 },
			{ input: 8, expected: 0.5 },
			{ input: 24, expected: 1.5 },
		]
		for (const { input, expected } of examples) {
			await expect(px2rem(input)).toBe(expected)
		}
	},
}

export const StringInput: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'String inputs like "16px" or "24" are parsed and converted.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2rem('16px')  // 1
				px2rem('32px')  // 2
				px2rem('24')    // 1.5
				px2rem('8.5px') // 0.5313
			`,
		}),
	],
	render() {
		const examples = [
			{ input: '16px', expected: 1 },
			{ input: '32px', expected: 2 },
			{ input: '24', expected: 1.5 },
			{ input: '8.5px', expected: 0.5313 },
		]
		return (
			<StoryCard title="String input" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) =>
								`px2rem('${input}') → ${px2rem(input)}rem (expected: ${expected}rem)`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: '16px', expected: 1 },
			{ input: '32px', expected: 2 },
			{ input: '24', expected: 1.5 },
			{ input: '8.5px', expected: 0.5313 },
		]
		for (const { input, expected } of examples) {
			await expect(px2rem(input)).toBe(expected)
		}
	},
}

export const CustomBase: Story = {
	name: 'custom base',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Pass a custom base (pixels per 1rem) via options.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2rem(20, { base: 20 })  // 1
				px2rem(40, { base: 20 })  // 2
				px2rem(10, { base: 20 })  // 0.5
				px2rem(30, { base: 20 })  // 1.5
			`,
		}),
	],
	render() {
		const examples = [
			{ input: 20, base: 20, expected: 1 },
			{ input: 40, base: 20, expected: 2 },
			{ input: 10, base: 20, expected: 0.5 },
			{ input: 30, base: 20, expected: 1.5 },
		]
		return (
			<StoryCard title="Custom base (20px)" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, base, expected }) =>
								`px2rem(${input}, { base: ${base} }) → ${px2rem(input, { base })}rem (expected: ${expected}rem)`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: 20, base: 20, expected: 1 },
			{ input: 40, base: 20, expected: 2 },
			{ input: 10, base: 20, expected: 0.5 },
			{ input: 30, base: 20, expected: 1.5 },
		]
		for (const { input, base, expected } of examples) {
			await expect(px2rem(input, { base })).toBe(expected)
		}
	},
}

export const CustomPrecision: Story = {
	name: 'custom precision',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Control decimal places with the precision option.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2rem(13, { precision: 0 }) // 1
				px2rem(13, { precision: 1 }) // 0.8
				px2rem(13, { precision: 2 }) // 0.81
				px2rem(13, { precision: 4 }) // 0.8125
			`,
		}),
	],
	render() {
		const input = 13
		const precisions = [0, 1, 2, 3, 4, 6]
		return (
			<StoryCard title="Custom precision (13px ÷ 16px)" appearance="output">
				<pre className="text-sm">
					{precisions
						.map(
							(precision) =>
								`px2rem(${input}, { precision: ${precision} }) → ${px2rem(input, { precision })}rem`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const input = 13
		const precisions = [0, 1, 2, 3, 4, 6]
		const expectedValues = [1, 0.8, 0.81, 0.813, 0.8125, 0.8125] // 13/16 with each precision
		for (let i = 0; i < precisions.length; i++) {
			await expect(px2rem(input, { precision: precisions[i] })).toBe(expectedValues[i])
		}
	},
}

export const AllOptions: Story = {
	name: 'base and precision',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Combine custom base and precision.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2rem(18, { base: 18, precision: 2 })
				px2rem(27, { base: 18, precision: 3 })
				px2rem('36px', { base: 18, precision: 1 })
				px2rem(9, { base: 18, precision: 0 })
			`,
		}),
	],
	render() {
		const examples = [
			{ input: 18 as number | string, base: 18, precision: 2 },
			{ input: 27, base: 18, precision: 3 },
			{ input: '36px' as number | string, base: 18, precision: 1 },
			{ input: 9, base: 18, precision: 0 },
		]
		return (
			<StoryCard title="Custom base and precision" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, base, precision }) =>
								`px2rem(${typeof input === 'string' ? `'${input}'` : input}, { base: ${base}, precision: ${precision} }) → ${px2rem(input, { base, precision })}rem`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: 18 as number | string, base: 18, precision: 2, expected: 1 },
			{ input: 27, base: 18, precision: 3, expected: 1.5 },
			{ input: '36px' as number | string, base: 18, precision: 1, expected: 2 },
			{ input: 9, base: 18, precision: 0, expected: 0.5 },
		]
		for (const { input, base, precision, expected } of examples) {
			await expect(px2rem(input, { base, precision })).toBe(expected)
		}
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()],
}
