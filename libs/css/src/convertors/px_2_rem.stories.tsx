import type { Meta, StoryObj } from '@storybook/react-vite'
import { px2rem } from '#just-web/css'

const meta = {
	title: 'convertors/px2rem',
	tags: ['version:0.6'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['snapshot'],
	render() {
		const examples = [
			{ input: 16, expected: '1.0000' },
			{ input: 32, expected: '2.0000' },
			{ input: 8, expected: '0.5000' },
			{ input: 24, expected: '1.5000' },
		]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Basic Usage (default base: 16px)</h3>
				<div className="space-y-2">
					{examples.map(({ input, expected }) => (
						<div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
							<code className="text-sm">px2rem({input})</code>
							<span>→</span>
							<code className="text-sm font-mono">{px2rem(input)}rem</code>
							<span className="text-gray-500 text-sm">(expected: {expected}rem)</span>
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
			{ input: '16px', expected: '1.0000' },
			{ input: '32px', expected: '2.0000' },
			{ input: '24', expected: '1.5000' },
			{ input: '8.5px', expected: '0.5313' },
		]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">String Input</h3>
				<div className="space-y-2">
					{examples.map(({ input, expected }) => (
						<div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
							<code className="text-sm">px2rem('{input}')</code>
							<span>→</span>
							<code className="text-sm font-mono">{px2rem(input)}rem</code>
							<span className="text-gray-500 text-sm">(expected: {expected}rem)</span>
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
			{ input: 20, base: 20, expected: '1.0000' },
			{ input: 40, base: 20, expected: '2.0000' },
			{ input: 10, base: 20, expected: '0.5000' },
			{ input: 30, base: 20, expected: '1.5000' },
		]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Custom Base (20px)</h3>
				<div className="space-y-2">
					{examples.map(({ input, base, expected }) => (
						<div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
							<code className="text-sm">{`px2rem(${input}, { base: ${base} })`}</code>
							<span>→</span>
							<code className="text-sm font-mono">{px2rem(input, { base })}rem</code>
							<span className="text-gray-500 text-sm">(expected: {expected}rem)</span>
						</div>
					))}
				</div>
			</div>
		)
	},
}

export const CustomPrecision: Story = {
	render() {
		const input = 13
		const precisions = [0, 1, 2, 3, 4, 6]

		return (
			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Custom Precision (13px ÷ 16px)</h3>
				<div className="space-y-2">
					{precisions.map((precision) => (
						<div key={precision} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
							<code className="text-sm">{`px2rem(${input}, { precision: ${precision} })`}</code>
							<span>→</span>
							<code className="text-sm font-mono">{px2rem(input, { precision })}rem</code>
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
			{ input: 18, base: 18, precision: 2 },
			{ input: 27, base: 18, precision: 3 },
			{ input: '36px', base: 18, precision: 1 },
			{ input: 9, base: 18, precision: 0 },
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
								{`px2rem(${typeof input === 'string' ? `'${input}'` : input}, { base: ${base}, precision: ${precision} })`}
							</code>
							<span>→</span>
							<code className="text-sm font-mono">{px2rem(input, { base, precision })}rem</code>
						</div>
					))}
				</div>
			</div>
		)
	},
}
