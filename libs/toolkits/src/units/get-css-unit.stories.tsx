import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { getCssUnit } from '#just-web/toolkits'
import source from './get-css-unit.ts?raw'

const meta = {
	title: 'units/getCssUnit',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Extracts the unit from a CSS value string. Thin wrapper around parseCssValue(value)[1].'
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
			story: 'Extract unit from CSS value strings.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				getCssUnit('16px')   // 'px'
				getCssUnit('1rem')   // 'rem'
				getCssUnit('100%')   // '%'
				getCssUnit('0')      // undefined
				getCssUnit('2lh')    // 'lh'
			`
		})
	],
	render() {
		const examples = [
			{ input: '16px', expected: 'px' },
			{ input: '1rem', expected: 'rem' },
			{ input: '100%', expected: '%' },
			{ input: '0', expected: undefined },
			{ input: '2lh', expected: 'lh' }
		]
		return (
			<StoryCard title="Basic usage" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ input, expected }) =>
								`getCssUnit('${input}') → ${getCssUnit(input) ?? 'undefined'} (expected: ${expected ?? 'undefined'})`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(getCssUnit('16px')).toBe('px')
		await expect(getCssUnit('1rem')).toBe('rem')
		await expect(getCssUnit('100%')).toBe('%')
		await expect(getCssUnit('0')).toBeUndefined()
		await expect(getCssUnit('2lh')).toBe('lh')
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
				getCssUnit(null)      // null
				getCssUnit(undefined)  // undefined
			`
		})
	],
	render() {
		return (
			<StoryCard title="Null/undefined pass-through" appearance="output">
				<pre className="text-sm">
					{`getCssUnit(null) → ${getCssUnit(null)}
getCssUnit(undefined) → ${getCssUnit(undefined)}`}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(getCssUnit(null)).toBe(null)
		await expect(getCssUnit(undefined)).toBe(undefined)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
