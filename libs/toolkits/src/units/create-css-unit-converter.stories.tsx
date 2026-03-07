import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { createCssUnitConverter } from '#just-web/toolkits'
import source from './create-css-unit-converter.ts?raw'

const meta = {
	title: 'units/createCssUnitConverter',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Creates a pre-configured CSS unit converter with fixed context. Configure once, then call with just value and toUnit.'
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
			story: 'Configure context once, convert multiple values without passing options.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const convert = createCssUnitConverter({
				  rootFontSize: 16,
				  viewportWidth: 375,
				  viewportHeight: 812,
				})
				convert('1rem', 'px')   // 16
				convert('10vw', 'px')   // 37.5
				convert(16, 'rem', { fromUnit: 'px' })  // 1
			`
		})
	],
	render() {
		const convert = createCssUnitConverter({
			rootFontSize: 16,
			viewportWidth: 375,
			viewportHeight: 812
		})
		const r1 = convert('1rem', 'px')
		const r2 = convert('10vw', 'px')
		const r3 = convert(16, 'rem', { fromUnit: 'px' })
		return (
			<StoryCard title="Factory usage" appearance="output">
				<pre className="text-sm">
					{`convert('1rem', 'px') → ${r1}
convert('10vw', 'px') → ${r2}
convert(16, 'rem', { fromUnit: 'px' }) → ${r3}`}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const convert = createCssUnitConverter({
			rootFontSize: 16,
			viewportWidth: 375,
			viewportHeight: 812
		})
		await expect(convert('1rem', 'px')).toBe(16)
		await expect(convert('10vw', 'px')).toBe(37.5)
		await expect(convert(16, 'rem', { fromUnit: 'px' })).toBe(1)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
