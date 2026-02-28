import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { px2num } from '#just-web/toolkits'

const meta = {
	title: 'convertors/px2num',
	tags: ['version:0.7'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta

export default meta

function RenderTestCases({
	title,
	testcases,
}: {
	title: string
	testcases: {
		description?: string
		input: number | string
		expected: number
	}[]
}) {
	return (
		<div className="jwtk:space-y-4">
			<h3 className="jwtk:text-lg jwtk:font-semibold">{title}</h3>
			<div className="jwtk:space-y-2">
				{testcases.map(({ input, expected, description }, index) => (
					<div
						key={`${index}-${input}`}
						className="jwtk:flex jwtk:items-center jwtk:space-x-4 jwtk:p-2 jwtk:bg-gray-50 dark:jwtk:bg-gray-800 jwtk:rounded"
					>
						<code className="jwtk:text-sm">px2num({input})</code>
						<span>→</span>
						<code className="jwtk:text-sm jwtk:font-mono">{px2num(input)}</code>
						<span className="jwtk:text-gray-500 jwtk:text-sm">
							({description ? `${description}, ` : ''}expected: {expected})
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

type Story = StoryObj<typeof RenderTestCases>

export const BasicUsage: Story = {
	args: {
		title: 'Basic Usage (Number Input)',
		testcases: [
			{ input: 16, expected: 16 },
			{ input: 32, expected: 32 },
			{ input: 8, expected: 8 },
			{ input: 24, expected: 24 },
		],
	},
	render: RenderTestCases,
	play: async ({ args: { testcases } }) => {
		for (const testcase of testcases) {
			await expect(px2num(testcase.input)).toBe(testcase.expected)
		}
	},
}

export const StringInput: Story = {
	args: {
		title: 'String Input',
		testcases: [
			{ input: '16px', expected: 16 },
			{ input: '32px', expected: 32 },
			{ input: '24', expected: 24 },
			{ input: '8.5px', expected: 8.5 },
		],
	},
	render: RenderTestCases,
	play: async ({ args: { testcases } }) => {
		for (const testcase of testcases) {
			await expect(px2num(testcase.input)).toBe(testcase.expected)
		}
	},
}

export const DecimalValues: Story = {
	args: {
		title: 'Decimal Values',
		testcases: [
			{ input: '12.5px', expected: 12.5 },
			{ input: '0.5px', expected: 0.5 },
			{ input: '1.75px', expected: 1.75 },
			{ input: '100.25px', expected: 100.25 },
		],
	},
	render: RenderTestCases,
	play: async ({ args: { testcases } }) => {
		for (const testcase of testcases) {
			await expect(px2num(testcase.input)).toBe(testcase.expected)
		}
	},
}

export const EdgeCases: Story = {
	args: {
		title: 'Edge Cases',
		testcases: [
			{ input: '0px', expected: 0 },
			{ input: 0, expected: 0 },
			{ input: '1px', expected: 1 },
			{ input: 1, expected: 1 },
			{ input: '1000px', expected: 1000 },
			{ input: 1000, expected: 1000 },
		],
	},
	render: RenderTestCases,
	play: async ({ args: { testcases } }) => {
		for (const testcase of testcases) {
			await expect(px2num(testcase.input)).toBe(testcase.expected)
		}
	},
}

export const MixedInputs: Story = {
	args: {
		title: 'Mixed Input Types',
		testcases: [
			{ input: 16, description: 'Number input', expected: 16 },
			{ input: '16px', description: 'String with px suffix', expected: 16 },
			{ input: '16', description: 'String without px suffix', expected: 16 },
			{ input: 32.5, description: 'Decimal number', expected: 32.5 },
			{ input: '32.5px', description: 'Decimal string with px', expected: 32.5 },
		],
	},
	render: RenderTestCases,
	play: async ({ args: { testcases } }) => {
		for (const testcase of testcases) {
			await expect(px2num(testcase.input)).toBe(testcase.expected)
		}
	},
}

export const Validation: Story = {
	render() {
		const invalidInputs = [
			{ input: '', expected: 'NaN', description: 'Empty string' },
			{ input: 'px', expected: 'NaN', description: 'Only px suffix' },
			{ input: 'abc', expected: 'NaN', description: 'Non-numeric string' },
			{ input: 'abcpx', expected: 'NaN', description: 'Non-numeric with px' },
			{ input: '16pxpx', expected: 16, description: 'Double px suffix' },
			{ input: '16.5.5px', expected: 16.5, description: 'Invalid decimal format' },
			{ input: ' 16px ', expected: 16, description: 'Whitespace around value' },
			{ input: '16PX', expected: 16, description: 'Uppercase PX' },
			{ input: '16Px', expected: 16, description: 'Mixed case Px' },
		]

		return (
			<div className="jwtk:space-y-4">
				<h3 className="jwtk:text-lg jwtk:font-semibold">Validation & Edge Cases</h3>
				<div className="jwtk:space-y-2">
					{invalidInputs.map(({ input, expected, description }) => {
						const result = px2num(input)
						const isValid = !Number.isNaN(result) && result === Number(expected)

						return (
							<div
								key={input}
								className={`jwtk:flex jwtk:items-center jwtk:space-x-4 jwtk:p-2 jwtk:rounded ${
									isValid ? 'jwtk:bg-green-50 dark:jwtk:bg-green-900/20' : 'jwtk:bg-red-50 dark:jwtk:bg-red-900/20'
								}`}
							>
								<code className="jwtk:text-sm">px2num('{input}')</code>
								<span>→</span>
								<code className="jwtk:text-sm jwtk:font-mono">{Number.isNaN(result) ? 'NaN' : result}</code>
								<span
									className={`jwtk:text-sm ${isValid ? 'jwtk:text-green-600 dark:jwtk:text-green-400' : 'jwtk:text-red-600 dark:jwtk:text-red-400'}`}
								>
									({description})
								</span>
								{!isValid && (
									<span className="jwtk:text-xs jwtk:text-red-500 dark:jwtk:text-red-400">Expected: {expected}</span>
								)}
							</div>
						)
					})}
				</div>
			</div>
		)
	},
}

export const TypeValidation: Story = {
	render() {
		const typeTests = [
			{ input: null, description: 'null value' },
			{ input: undefined, description: 'undefined value' },
			{ input: true, description: 'boolean true' },
			{ input: false, description: 'boolean false' },
			{ input: [], description: 'empty array' },
			{ input: {}, description: 'empty object' },
			{ input: () => {}, description: 'function' },
		]

		return (
			<div className="jwtk:space-y-4">
				<h3 className="jwtk:text-lg jwtk:font-semibold">Type Validation</h3>
				<div className="jwtk:space-y-2">
					{typeTests.map(({ input, description }) => {
						let result: number
						let error: string | null = null

						try {
							result = px2num(input as any)
						} catch (err) {
							error = err instanceof Error ? err.message : String(err)
							result = Number.NaN
						}

						return (
							<div
								key={description}
								className="jwtk:flex jwtk:items-center jwtk:space-x-4 jwtk:p-2 jwtk:bg-yellow-50 dark:jwtk:bg-yellow-900/20 jwtk:rounded"
							>
								<code className="jwtk:text-sm">px2num({Array.isArray(input) ? '[]' : String(input)})</code>
								<span>→</span>
								{error ? (
									<code className="jwtk:text-sm jwtk:font-mono jwtk:text-red-600 dark:jwtk:text-red-400">
										Error: {error}
									</code>
								) : (
									<code className="jwtk:text-sm jwtk:font-mono">{Number.isNaN(result) ? 'NaN' : result}</code>
								)}
								<span className="jwtk:text-sm jwtk:text-yellow-600 dark:jwtk:text-yellow-400">({description})</span>
							</div>
						)
					})}
				</div>
			</div>
		)
	},
}

export const PerformanceTest: Story = {
	render() {
		const testCases = [
			{ count: 1000, input: '16px' },
			{ count: 1000, input: 16 },
			{ count: 1000, input: '123.456px' },
		]

		return (
			<div className="jwtk:space-y-4">
				<h3 className="jwtk:text-lg jwtk:font-semibold">Performance Test</h3>
				<div className="jwtk:space-y-2">
					{testCases.map(({ count, input }) => {
						const start = performance.now()

						for (let i = 0; i < count; i++) {
							px2num(input)
						}

						const end = performance.now()
						const duration = end - start

						return (
							<div
								key={`${input}-${count}`}
								className="jwtk:flex jwtk:items-center jwtk:space-x-4 jwtk:p-2 jwtk:bg-blue-50 dark:jwtk:bg-blue-900/20 jwtk:rounded"
							>
								<code className="jwtk:text-sm">
									{count} × px2num({typeof input === 'string' ? `'${input}'` : input})
								</code>
								<span>→</span>
								<code className="jwtk:text-sm jwtk:font-mono">{duration.toFixed(2)}ms</code>
								<span className="jwtk:text-sm jwtk:text-blue-600 dark:jwtk:text-blue-400">
									({(duration / count).toFixed(4)}ms per call)
								</span>
							</div>
						)
					})}
				</div>
			</div>
		)
	},
}
