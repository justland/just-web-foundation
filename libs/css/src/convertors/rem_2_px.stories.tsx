import type { Meta, StoryObj } from '@storybook/react-vite'
import { rem2px } from '#just-web/css'

const meta = {
	title: 'convertors/rem2px',
	tags: ['version:0.6'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	render() {
		const examples = [
			{ input: 1, expected: '16.0000' },
			{ input: 2, expected: '32.0000' },
			{ input: 0.5, expected: '8.0000' },
			{ input: 1.5, expected: '24.0000' },
		]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Basic Usage (default base: 16px)</h3>
				<div className="space-y-2">
					{examples.map(({ input, expected }) => (
						<div
							key={input}
							className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded"
						>
							<code className="text-sm">rem2px({input})</code>
							<span>→</span>
							<code className="text-sm font-mono">{rem2px(input)}px</code>
							<span className="text-gray-500 text-sm">(expected: {expected}px)</span>
						</div>
					))}
				</div>
			</div>
		)
	},
}

export const StringInput: Story = {
	render() {
		const examples = [
			{ input: '1rem', expected: '16.0000' },
			{ input: '2rem', expected: '32.0000' },
			{ input: '1.5', expected: '24.0000' },
			{ input: '0.5313rem', expected: '8.5008' },
		]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">String Input</h3>
				<div className="space-y-2">
					{examples.map(({ input, expected }) => (
						<div
							key={input}
							className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded"
						>
							<code className="text-sm">rem2px('{input}')</code>
							<span>→</span>
							<code className="text-sm font-mono">{rem2px(input)}px</code>
							<span className="text-gray-500 text-sm">(expected: {expected}px)</span>
						</div>
					))}
				</div>
			</div>
		)
	},
}

export const CustomBase: Story = {
	render() {
		const examples = [
			{ input: 1, base: 20, expected: '20.0000' },
			{ input: 2, base: 20, expected: '40.0000' },
			{ input: 0.5, base: 20, expected: '10.0000' },
			{ input: 1.5, base: 20, expected: '30.0000' },
		]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Custom Base (20px)</h3>
				<div className="space-y-2">
					{examples.map(({ input, base, expected }) => (
						<div
							key={input}
							className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded"
						>
							<code className="text-sm">{`rem2px(${input}, { base: ${base} })`}</code>
							<span>→</span>
							<code className="text-sm font-mono">{rem2px(input, { base })}px</code>
							<span className="text-gray-500 text-sm">(expected: {expected}px)</span>
						</div>
					))}
				</div>
			</div>
		)
	},
}

export const CustomPrecision: Story = {
	render() {
		const input = 0.8125
		const precisions = [0, 1, 2, 3, 4, 6]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Custom Precision (0.8125rem × 16px)</h3>
				<div className="space-y-2">
					{precisions.map((precision) => (
						<div
							key={precision}
							className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded"
						>
							<code className="text-sm">{`rem2px(${input}, { precision: ${precision} })`}</code>
							<span>→</span>
							<code className="text-sm font-mono">{rem2px(input, { precision })}px</code>
						</div>
					))}
				</div>
			</div>
		)
	},
}

export const AllOptions: Story = {
	render() {
		const examples = [
			{ input: 1, base: 18, precision: 2 },
			{ input: 1.5, base: 18, precision: 3 },
			{ input: '2rem', base: 18, precision: 1 },
			{ input: 0.5, base: 18, precision: 0 },
		]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Custom Base and Precision</h3>
				<div className="space-y-2">
					{examples.map(({ input, base, precision }) => (
						<div
							key={`${input}-${base}-${precision}`}
							className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded"
						>
							<code className="text-sm">
								{`rem2px(${typeof input === 'string' ? `'${input}'` : input}, { base: ${base}, precision: ${precision} })`}
							</code>
							<span>→</span>
							<code className="text-sm font-mono">{rem2px(input, { base, precision })}px</code>
						</div>
					))}
				</div>
			</div>
		)
	},
}
