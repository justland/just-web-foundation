import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { rem2px } from '#just-web/toolkits'
import source from './rem-2-px.ts?raw'

const meta = {
	title: 'units/rem2px',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Converts rem values to pixel units. Accepts a number or string (e.g. "1rem" or "1") and optional base (default 16) and precision (default 4).',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Convert rem numbers to pixels using the default base (16px).',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>rem2px(rem)</code> returns the pixel value. Default base is 16.
					</p>
				</>
			),
		}),
		showSource({
			source: dedent`
				rem2px(1)    // 16
				rem2px(2)    // 32
				rem2px(0.5)  // 8
				rem2px(1.5)  // 24
			`,
		}),
	],
	render() {
		const examples = [
			{ input: 1, expected: 16 },
			{ input: 2, expected: 32 },
			{ input: 0.5, expected: 8 },
			{ input: 1.5, expected: 24 },
		]
		return (
			<StoryCard title="Basic usage (default base: 16px)" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) =>
								`rem2px(${input}) → ${rem2px(input)}px (expected: ${expected}px)`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: 1, expected: 16 },
			{ input: 2, expected: 32 },
			{ input: 0.5, expected: 8 },
			{ input: 1.5, expected: 24 },
		]
		for (const { input, expected } of examples) {
			await expect(rem2px(input)).toBe(expected)
		}
	},
}

export const StringInput: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'String inputs like "1rem" or "1.5" are parsed and converted.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				rem2px('1rem')     // 16
				rem2px('2rem')     // 32
				rem2px('1.5')      // 24
				rem2px('0.5313rem') // 8.5008
			`,
		}),
	],
	render() {
		const examples = [
			{ input: '1rem', expected: '16.0000' },
			{ input: '2rem', expected: '32.0000' },
			{ input: '1.5', expected: '24.0000' },
			{ input: '0.5313rem', expected: '8.5008' },
		]
		return (
			<StoryCard title="String input" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) =>
								`rem2px('${input}') → ${rem2px(input)}px (expected: ${expected}px)`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: '1rem', expected: 16 },
			{ input: '2rem', expected: 32 },
			{ input: '1.5', expected: 24 },
			{ input: '0.5313rem', expected: 8.5008 },
		]
		for (const { input, expected } of examples) {
			await expect(rem2px(input)).toBe(expected)
		}
	},
}

export const CustomBase: Story = {
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
				rem2px(1, { base: 20 })   // 20
				rem2px(2, { base: 20 })   // 40
				rem2px(0.5, { base: 20 }) // 10
				rem2px(1.5, { base: 20 }) // 30
			`,
		}),
	],
	render() {
		const examples = [
			{ input: 1, base: 20, expected: 20 },
			{ input: 2, base: 20, expected: 40 },
			{ input: 0.5, base: 20, expected: 10 },
			{ input: 1.5, base: 20, expected: 30 },
		]
		return (
			<StoryCard title="Custom base (20px)" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, base, expected }) =>
								`rem2px(${input}, { base: ${base} }) → ${rem2px(input, { base })}px (expected: ${expected}px)`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: 1, base: 20, expected: 20 },
			{ input: 2, base: 20, expected: 40 },
			{ input: 0.5, base: 20, expected: 10 },
			{ input: 1.5, base: 20, expected: 30 },
		]
		for (const { input, base, expected } of examples) {
			await expect(rem2px(input, { base })).toBe(expected)
		}
	},
}

export const CustomPrecision: Story = {
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
				rem2px(0.8125, { precision: 0 }) // 13
				rem2px(0.8125, { precision: 1 }) // 13.0
				rem2px(0.8125, { precision: 2 }) // 13.00
				rem2px(0.8125, { precision: 4 }) // 13.0000
			`,
		}),
	],
	render() {
		const input = 0.8125
		const precisions = [0, 1, 2, 3, 4, 6]
		return (
			<StoryCard title="Custom precision (0.8125rem × 16px)" appearance="output">
				<pre className="text-sm">
					{precisions
						.map(
							(precision) =>
								`rem2px(${input}, { precision: ${precision} }) → ${rem2px(input, { precision })}px`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const input = 0.8125
		const precisions = [0, 1, 2, 3, 4, 6]
		const expected = 13 // 0.8125 * 16
		for (const precision of precisions) {
			await expect(rem2px(input, { precision })).toBe(expected)
		}
	},
}

export const BaseAndPrecision: Story = {
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
				rem2px(1, { base: 18, precision: 2 })
				rem2px(1.5, { base: 18, precision: 3 })
				rem2px('2rem', { base: 18, precision: 1 })
				rem2px(0.5, { base: 18, precision: 0 })
			`,
		}),
	],
	render() {
		const examples = [
			{ input: 1 as number | string, base: 18, precision: 2 },
			{ input: 1.5, base: 18, precision: 3 },
			{ input: '2rem' as number | string, base: 18, precision: 1 },
			{ input: 0.5, base: 18, precision: 0 },
		]
		return (
			<StoryCard title="Custom base and precision" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, base, precision }) =>
								`rem2px(${typeof input === 'string' ? `'${input}'` : input}, { base: ${base}, precision: ${precision} }) → ${rem2px(input, { base, precision })}px`,
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: 1 as number | string, base: 18, precision: 2, expected: 18 },
			{ input: 1.5, base: 18, precision: 3, expected: 27 },
			{ input: '2rem' as number | string, base: 18, precision: 1, expected: 36 },
			{ input: 0.5, base: 18, precision: 0, expected: 9 },
		]
		for (const { input, base, precision, expected } of examples) {
			await expect(rem2px(input, { base, precision })).toBe(expected)
		}
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()],
}
