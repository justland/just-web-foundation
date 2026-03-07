import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { convertCssUnit } from '#just-web/toolkits'
import source from './convert-css-unit.ts?raw'

const meta = {
	title: 'units/convertCssUnit',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Converts a CSS length value from one unit to another. Supports px, rem, em, vw, vh, vmin, vmax, lh, rlh, ch, %, and absolute units. Uses browser auto-detect for rootFontSize and viewport when options omitted.'
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
			story: 'Convert between common units. Auto-detects fromUnit from string.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				convertCssUnit('16px', 'rem')     // 1
				convertCssUnit('1rem', 'px')      // 16
				convertCssUnit('96px', 'in')     // 1
				convertCssUnit('50%', 'px', { percentReference: 200 })  // 100
			`
		})
	],
	render() {
		const examples = [
			{ value: '16px', toUnit: 'rem' as const, opts: undefined, expected: 1 },
			{ value: '1rem', toUnit: 'px' as const, opts: undefined, expected: 16 },
			{ value: '96px', toUnit: 'in' as const, opts: undefined, expected: 1 },
			{
				value: '50%',
				toUnit: 'px' as const,
				opts: { percentReference: 200 },
				expected: 100
			}
		]
		return (
			<StoryCard title="Basic usage" appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ value, toUnit, opts, expected }) =>
								`convertCssUnit('${value}', '${toUnit}'${opts ? `, { percentReference: ${opts.percentReference} }` : ''}) → ${convertCssUnit(value, toUnit, opts)} (expected: ${expected})`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(convertCssUnit('16px', 'rem')).toBe(1)
		await expect(convertCssUnit('1rem', 'px')).toBe(16)
		await expect(convertCssUnit('96px', 'in')).toBe(1)
		await expect(convertCssUnit('50%', 'px', { percentReference: 200 })).toBe(100)
	}
}

export const ViewportUnits: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Convert viewport units (vw, vh) with explicit viewport dimensions.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				convertCssUnit('10vw', 'px', { viewportWidth: 375 })   // 37.5
				convertCssUnit('10vh', 'px', { viewportHeight: 812 }) // 81.2
			`
		})
	],
	render() {
		const vw = convertCssUnit('10vw', 'px', { viewportWidth: 375 })
		const vh = convertCssUnit('10vh', 'px', { viewportHeight: 812 })
		return (
			<StoryCard title="Viewport units" appearance="output">
				<pre className="text-sm">
					{`convertCssUnit('10vw', 'px', { viewportWidth: 375 }) → ${vw} (expected: 37.5)
convertCssUnit('10vh', 'px', { viewportHeight: 812 }) → ${vh} (expected: 81.2)`}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(convertCssUnit('10vw', 'px', { viewportWidth: 375 })).toBe(37.5)
		await expect(convertCssUnit('10vh', 'px', { viewportHeight: 812 })).toBe(81.2)
	}
}

export const RemToEmDirect: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Direct rem↔em conversion (no px intermediate).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				convertCssUnit('1rem', 'em', { rootFontSize: 16, elementFontSize: 16 })  // 1
				convertCssUnit('1rem', 'em', { rootFontSize: 16, elementFontSize: 12 }) // 1.3333
			`
		})
	],
	render() {
		const r1 = convertCssUnit('1rem', 'em', {
			rootFontSize: 16,
			elementFontSize: 16
		})
		const r2 = convertCssUnit('1rem', 'em', {
			rootFontSize: 16,
			elementFontSize: 12
		})
		return (
			<StoryCard title="rem↔em direct" appearance="output">
				<pre className="text-sm">
					{`root=16, element=16: 1rem → ${r1}em
root=16, element=12: 1rem → ${r2}em`}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(convertCssUnit('1rem', 'em', { rootFontSize: 16, elementFontSize: 16 })).toBe(1)
		await expect(convertCssUnit('1rem', 'em', { rootFontSize: 16, elementFontSize: 12 })).toBe(
			1.3333
		)
	}
}

export const NumberWithFromUnit: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Number or unitless string: default fromUnit is px, or pass fromUnit explicitly.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				convertCssUnit(16, 'rem')                    // 1 (assumes px)
				convertCssUnit(16, 'rem', { fromUnit: 'px' })  // 1
				convertCssUnit(1, 'px', { fromUnit: 'rem' })   // 16
			`
		})
	],
	render() {
		const a = convertCssUnit(16, 'rem')
		const b = convertCssUnit(16, 'rem', { fromUnit: 'px' })
		const c = convertCssUnit(1, 'px', { fromUnit: 'rem' })
		return (
			<StoryCard title="Number with fromUnit" appearance="output">
				<pre className="text-sm">
					{`convertCssUnit(16, 'rem') → ${a}
convertCssUnit(16, 'rem', { fromUnit: 'px' }) → ${b}
convertCssUnit(1, 'px', { fromUnit: 'rem' }) → ${c}`}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(convertCssUnit(16, 'rem')).toBe(1)
		await expect(convertCssUnit(16, 'rem', { fromUnit: 'px' })).toBe(1)
		await expect(convertCssUnit(1, 'px', { fromUnit: 'rem' })).toBe(16)
	}
}

export const ThrowsWhenContextMissing: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Throws when required context is missing. In browser, viewport auto-detects from window; lh and percentReference have no auto-detect.'
		}
	}),
	decorators: [withStoryCard()],
	play: async () => {
		await expect(() => convertCssUnit('2lh', 'px')).toThrow('lineHeight is required')
		await expect(() => convertCssUnit('50%', 'px')).toThrow('percentReference is required')
		await expect(() => convertCssUnit(100, '%', { fromUnit: 'px', percentReference: 0 })).toThrow(
			'percentReference'
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
