import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { isEffectivelyZero } from '#just-web/toolkits'
import source from './is-effectively-zero.ts?raw'

const meta = {
	title: 'units/isEffectivelyZero',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Determines if a CSS value is effectively 0 regardless of unit. Uses default epsilon 1e-10 for floating-point safety.'
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
			story: 'Zero values in any unit return true.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				isEffectivelyZero(0)       // true
				isEffectivelyZero('0')     // true
				isEffectivelyZero('0px')   // true
				isEffectivelyZero('0rem')  // true
				isEffectivelyZero('0%')    // true
				isEffectivelyZero('0lh')   // true
				isEffectivelyZero('16px')  // false
			`
		})
	],
	render() {
		const zeroExamples = [0, '0', '0px', '0rem', '0em', '0%', '0lh', '0ch', '0vw', '0vh']
		const nonZeroExamples = ['16px', '1rem', '100%', 1, -1]
		return (
			<StoryCard title="Basic usage" appearance="output">
				<pre className="text-sm">
					{[
						...zeroExamples.map(
							(input) =>
								`isEffectivelyZero(${typeof input === 'string' ? `'${input}'` : input}) → ${isEffectivelyZero(input)} (expected: true)`
						),
						...nonZeroExamples.map(
							(input) =>
								`isEffectivelyZero(${typeof input === 'string' ? `'${input}'` : input}) → ${isEffectivelyZero(input)} (expected: false)`
						)
					].join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(isEffectivelyZero(0)).toBe(true)
		await expect(isEffectivelyZero('0')).toBe(true)
		await expect(isEffectivelyZero('0px')).toBe(true)
		await expect(isEffectivelyZero('0rem')).toBe(true)
		await expect(isEffectivelyZero('0%')).toBe(true)
		await expect(isEffectivelyZero('16px')).toBe(false)
		await expect(isEffectivelyZero('1rem')).toBe(false)
	}
}

export const EpsilonOption: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Optional epsilon for floating-point tolerance. Default 1e-10 treats tiny values as zero.'
		}
	}),
	decorators: [withStoryCard()],
	render() {
		const examples = [
			{ value: 0.0001, epsilon: undefined, expected: false },
			{ value: 0.00000000001, epsilon: undefined, expected: true },
			{ value: 0.0001, epsilon: 0.001, expected: true }
		]
		return (
			<StoryCard title="Epsilon option" appearance="output">
				<pre className="text-sm">
					{examples
						.map(({ value, epsilon, expected }) => {
							const opts = epsilon !== undefined ? `{ epsilon: ${epsilon} }` : undefined
							const result = isEffectivelyZero(value, opts ? { epsilon } : undefined)
							return `isEffectivelyZero(${value}${opts ? `, ${opts}` : ''}) → ${result} (expected: ${expected})`
						})
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(isEffectivelyZero(0.0001)).toBe(false)
		await expect(isEffectivelyZero(0.00000000001)).toBe(true)
		await expect(isEffectivelyZero(0.0001, { epsilon: 0.001 })).toBe(true)
	}
}

export const NullUndefinedPassThrough: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'null and undefined are passed through as-is.'
		}
	}),
	decorators: [withStoryCard()],
	render() {
		return (
			<StoryCard title="Null/undefined pass-through" appearance="output">
				<pre className="text-sm">
					{`isEffectivelyZero(null) → ${isEffectivelyZero(null)}
isEffectivelyZero(undefined) → ${isEffectivelyZero(undefined)}`}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(isEffectivelyZero(null)).toBe(null)
		await expect(isEffectivelyZero(undefined)).toBe(undefined)
	}
}

export const InvalidInput: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Invalid input (empty string, non-numeric) returns false.'
		}
	}),
	decorators: [withStoryCard()],
	render() {
		const examples = ['', 'abc']
		return (
			<StoryCard title="Invalid input" appearance="output">
				<pre className="text-sm">
					{examples
						.map((input) => {
							const inputStr = input === '' ? "''" : `'${input}'`
							return `isEffectivelyZero(${inputStr}) → ${isEffectivelyZero(input)} (expected: false)`
						})
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(isEffectivelyZero('')).toBe(false)
		await expect(isEffectivelyZero('abc')).toBe(false)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
