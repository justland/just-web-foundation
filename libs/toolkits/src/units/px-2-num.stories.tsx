import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { px2num } from '#just-web/toolkits'
import source from './px-2-num.ts?raw'

const meta = {
	title: 'units/px2num',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Converts pixel values to numbers. Accepts a number or string (e.g. "16px" or "16") and returns the numeric value.'
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
			story: 'Convert numeric pixel values; number input is returned as-is.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>px2num(px)</code> returns the numeric value. Number input is passed through.
					</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				px2num(16)  // 16
				px2num(32)  // 32
				px2num(8)   // 8
				px2num(24)  // 24
			`
		})
	],
	render() {
		const examples = [
			{ input: 16, expected: 16 },
			{ input: 32, expected: 32 },
			{ input: 8, expected: 8 },
			{ input: 24, expected: 24 }
		]
		return (
			<StoryCard title="Basic usage (number input)" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) => `px2num(${input}) → ${px2num(input)} (expected: ${expected})`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: 16, expected: 16 },
			{ input: 32, expected: 32 },
			{ input: 8, expected: 8 },
			{ input: 24, expected: 24 }
		]
		for (const { input, expected } of examples) {
			await expect(px2num(input)).toBe(expected)
		}
	}
}

export const StringInput: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'String inputs like "16px" or "16" are parsed to numbers.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2num('16px')  // 16
				px2num('32px')  // 32
				px2num('24')    // 24
				px2num('8.5px') // 8.5
			`
		})
	],
	render() {
		const examples = [
			{ input: '16px', expected: 16 },
			{ input: '32px', expected: 32 },
			{ input: '24', expected: 24 },
			{ input: '8.5px', expected: 8.5 }
		]
		return (
			<StoryCard title="String input" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) =>
								`px2num('${input}') → ${px2num(input)} (expected: ${expected})`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: '16px', expected: 16 },
			{ input: '32px', expected: 32 },
			{ input: '24', expected: 24 },
			{ input: '8.5px', expected: 8.5 }
		]
		for (const { input, expected } of examples) {
			await expect(px2num(input)).toBe(expected)
		}
	}
}

export const DecimalValues: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Decimal pixel values are parsed correctly.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2num('12.5px')   // 12.5
				px2num('0.5px')    // 0.5
				px2num('1.75px')   // 1.75
				px2num('100.25px') // 100.25
			`
		})
	],
	render() {
		const examples = [
			{ input: '12.5px', expected: 12.5 },
			{ input: '0.5px', expected: 0.5 },
			{ input: '1.75px', expected: 1.75 },
			{ input: '100.25px', expected: 100.25 }
		]
		return (
			<StoryCard title="Decimal values" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) =>
								`px2num('${input}') → ${px2num(input)} (expected: ${expected})`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: '12.5px', expected: 12.5 },
			{ input: '0.5px', expected: 0.5 },
			{ input: '1.75px', expected: 1.75 },
			{ input: '100.25px', expected: 100.25 }
		]
		for (const { input, expected } of examples) {
			await expect(px2num(input)).toBe(expected)
		}
	}
}

export const EdgeCases: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Edge cases: zero, one, and large values.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2num('0px')   // 0
				px2num(0)       // 0
				px2num('1px')   // 1
				px2num(1)       // 1
				px2num('1000px') // 1000
				px2num(1000)    // 1000
			`
		})
	],
	render() {
		const examples = [
			{ input: '0px', expected: 0 },
			{ input: 0, expected: 0 },
			{ input: '1px', expected: 1 },
			{ input: 1, expected: 1 },
			{ input: '1000px', expected: 1000 },
			{ input: 1000, expected: 1000 }
		]
		return (
			<StoryCard title="Edge cases" appearance="output">
				<pre className="text-sm">
					{examples
						.map(({ input, expected }) =>
							typeof input === 'string'
								? `px2num('${input}') → ${px2num(input)} (expected: ${expected})`
								: `px2num(${input}) → ${px2num(input)} (expected: ${expected})`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: '0px' as number | string, expected: 0 },
			{ input: 0, expected: 0 },
			{ input: '1px' as number | string, expected: 1 },
			{ input: 1, expected: 1 },
			{ input: '1000px' as number | string, expected: 1000 },
			{ input: 1000, expected: 1000 }
		]
		for (const { input, expected } of examples) {
			await expect(px2num(input)).toBe(expected)
		}
	}
}

export const SameResultFromNumberOrString: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Number and string inputs both produce the same numeric result.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2num(16)      // 16  (number)
				px2num('16px')  // 16  (string with px)
				px2num('16')    // 16  (string without px)
				px2num(32.5)    // 32.5
				px2num('32.5px') // 32.5
			`
		})
	],
	render() {
		const examples = [
			{ input: 16, description: 'Number input', expected: 16 },
			{ input: '16px', description: 'String with px suffix', expected: 16 },
			{ input: '16', description: 'String without px suffix', expected: 16 },
			{ input: 32.5, description: 'Decimal number', expected: 32.5 },
			{ input: '32.5px', description: 'Decimal string with px', expected: 32.5 }
		]
		return (
			<StoryCard title="Same result from number or string" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, description }) =>
								`px2num(${typeof input === 'string' ? `'${input}'` : input}) → ${px2num(input)} (${description})`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const examples = [
			{ input: 16 as number | string, expected: 16 },
			{ input: '16px', expected: 16 },
			{ input: '16', expected: 16 },
			{ input: 32.5, expected: 32.5 },
			{ input: '32.5px', expected: 32.5 }
		]
		for (const { input, expected } of examples) {
			await expect(px2num(input)).toBe(expected)
		}
	}
}

export const Validation: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Validation and edge cases: empty string, non-numeric, double px, whitespace, case.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				px2num('')        // NaN
				px2num('px')      // NaN
				px2num('16pxpx')  // 16
				px2num(' 16px ')  // 16
				px2num('16PX')    // 16
			`
		})
	],
	render() {
		const testCases = [
			{ input: '', expected: Number.NaN, description: 'Empty string' },
			{ input: 'px', expected: Number.NaN, description: 'Only px suffix' },
			{ input: 'abc', expected: Number.NaN, description: 'Non-numeric string' },
			{ input: '16pxpx', expected: 16, description: 'Double px suffix' },
			{ input: ' 16px ', expected: 16, description: 'Whitespace around value' },
			{ input: '16PX', expected: 16, description: 'Uppercase PX' }
		]
		return (
			<StoryCard title="Validation & edge cases" appearance="output">
				<pre className="text-sm">
					{testCases
						.map(({ input, expected, description }) => {
							const result = px2num(input)
							const shown = Number.isNaN(result) ? 'NaN' : result
							const exp = Number.isNaN(expected) ? 'NaN' : expected
							return `px2num('${input}') → ${shown} (expected: ${exp}, ${description})`
						})
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(Number.isNaN(px2num(''))).toBe(true)
		await expect(Number.isNaN(px2num('px'))).toBe(true)
		await expect(Number.isNaN(px2num('abc'))).toBe(true)
		await expect(px2num('16pxpx')).toBe(16)
		await expect(px2num(' 16px ')).toBe(16)
		await expect(px2num('16PX')).toBe(16)
	}
}

export const TypeValidation: Story = {
	name: 'type validation',
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Behavior with invalid types (null, undefined, boolean, etc.).'
		}
	}),
	decorators: [withStoryCard()],
	render() {
		const typeTests = [
			{ input: null, description: 'null value' },
			{ input: undefined, description: 'undefined value' },
			{ input: true, description: 'boolean true' },
			{ input: false, description: 'boolean false' }
		]
		return (
			<StoryCard title="Type validation" appearance="output">
				<pre className="text-sm">
					{typeTests
						.map(({ input, description }) => {
							let result: number
							try {
								result = px2num(input as number | string | undefined)
							} catch {
								result = Number.NaN
							}
							const shown = Number.isNaN(result) ? 'NaN' : result
							return `px2num(${input === null ? 'null' : String(input)}) → ${shown} (${description})`
						})
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(Number.isNaN(px2num(undefined))).toBe(true)
	}
}

export const PerformanceTest: Story = {
	name: 'performance test',
	tags: ['unit', '!test'],
	parameters: defineDocsParam({
		description: {
			story: 'Rough throughput for number and string inputs.'
		}
	}),
	decorators: [withStoryCard()],
	render() {
		const testCases = [
			{ count: 1000, input: '16px' as number | string },
			{ count: 1000, input: 16 },
			{ count: 1000, input: '123.456px' as number | string }
		]
		return (
			<StoryCard title="Performance test" appearance="output">
				<pre className="text-sm">
					{testCases
						.map(({ count, input }) => {
							const start = performance.now()
							for (let i = 0; i < count; i++) px2num(input)
							const duration = performance.now() - start
							return `${count} × px2num(${typeof input === 'string' ? `'${input}'` : input}) → ${duration.toFixed(2)}ms`
						})
						.join('\n')}
				</pre>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
