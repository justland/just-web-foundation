import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { ThemeResultCard } from '../testing/theme-result-card.tsx'
import { themeEntry } from './index.ts'
import source from './theme-map.types.ts?raw'

const meta = {
	title: 'theme2/ThemeMap',
	tags: ['type', 'version:next'],
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themeMapString = {
	current: 'theme-current',
	grayscale: 'theme-grayscale'
} as const

export const StringValue: Story = {
	name: 'string value',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Each theme maps to a single string. Most common case.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>themeMap</code> values can be a single string per theme (e.g.{' '}
					<code>{`{ current: 'theme-current' }`}</code>).
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale'
				} as const

				themeResult('current', themeMap)
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<ThemeResultCard
				title="themeResult('current', themeMap)"
				data-testid="string-result"
				result={themeEntry('current', themeMapString)}
			/>
		</div>
	)
}

const themeMapArray = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100']
} as const

export const ArrayValue: Story = {
	name: 'array value',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Values can be string[] for multiple tokens (e.g. multiple CSS classes). classNameThemeStore applies all; dataAttributeThemeStore uses first only.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>themeMap</code> values can be <code>readonly string[]</code> (e.g.{' '}
					<code>{`{ grayscale: ['theme-grayscale', 'app:bg-gray-100'] }`}</code>).
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100']
				} as const

				themeResult('grayscale', themeMap)
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<ThemeResultCard
				title="themeResult('grayscale', themeMap)"
				data-testid="array-result"
				result={themeEntry('grayscale', themeMapArray)}
			/>
		</div>
	)
}

const themeMapMixed = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100'],
	'high-contrast': 'theme-high-contrast'
} as const

export const Mixed: Story = {
	name: 'mixed',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'A themeMap can mix string and string[] values.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Mix string and array values in the same <code>themeMap</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100'],
					'high-contrast': 'theme-high-contrast'
				} as const

				themeResult('current', themeMap)
				themeResult('grayscale', themeMap)
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<ThemeResultCard
				title="themeResult('current', themeMap)"
				data-testid="mixed-string-result"
				result={themeEntry('current', themeMapMixed)}
			/>
			<ThemeResultCard
				title="themeResult('grayscale', themeMap)"
				data-testid="mixed-array-result"
				result={themeEntry('grayscale', themeMapMixed)}
			/>
		</div>
	)
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
