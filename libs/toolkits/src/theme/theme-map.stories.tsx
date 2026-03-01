import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { themeEntry } from '#just-web/toolkits/theme'
import { ThemeResultCard } from '../testing/theme-result-card.tsx'
import source from './theme-map.types.ts?raw'

const meta = {
	title: 'theme/ThemeMap',
	tags: ['type', 'version:next'],
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themesString = {
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
					<code>themes</code> values can be a single string per theme (e.g.{' '}
					<code>{`{ current: 'theme-current' }`}</code>).
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themes = {
					current: 'theme-current',
					grayscale: 'theme-grayscale'
				} as const

				themeResult('current', themes)
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<ThemeResultCard
				title="themeResult('current', themes)"
				data-testid="string-result"
				result={themeEntry('current', themesString)}
			/>
		</div>
	)
}

const themesArray = {
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
					<code>themes</code> values can be <code>readonly string[]</code> (e.g.{' '}
					<code>{`{ grayscale: ['theme-grayscale', 'app:bg-gray-100'] }`}</code>).
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themes = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100']
				} as const

				themeResult('grayscale', themes)
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<ThemeResultCard
				title="themeResult('grayscale', themes)"
				data-testid="array-result"
				result={themeEntry('grayscale', themesArray)}
			/>
		</div>
	)
}

const themesMixed = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100'],
	'high-contrast': 'theme-high-contrast'
} as const

export const Mixed: Story = {
	name: 'mixed',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Themes can mix string and string[] values.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Mix string and array values in the same <code>themes</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themes = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100'],
					'high-contrast': 'theme-high-contrast'
				} as const

				themeResult('current', themes)
				themeResult('grayscale', themes)
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<ThemeResultCard
				title="themeResult('current', themes)"
				data-testid="mixed-string-result"
				result={themeEntry('current', themesMixed)}
			/>
			<ThemeResultCard
				title="themeResult('grayscale', themes)"
				data-testid="mixed-array-result"
				result={themeEntry('grayscale', themesMixed)}
			/>
		</div>
	)
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
