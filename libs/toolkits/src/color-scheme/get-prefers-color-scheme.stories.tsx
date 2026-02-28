import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard,
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { getPrefersColorScheme } from '#just-web/toolkits'
import code from './get-prefers-color-scheme.ts?raw'

const meta: Meta<FnToArgTypes<typeof getPrefersColorScheme>> = {
	title: 'color-scheme/getPrefersColorTheme',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that returns the current preferred color scheme. It can only be "light" or "dark".',
		},
	}),
	render: () => <></>,
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Read the current `prefers-color-scheme` value.',
		},
		source: {
			code: 'getPrefersColorScheme(): "light" | "dark"',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersColorScheme()</code> reads the current <code>prefers-color-scheme</code>{' '}
						value.
					</p>
					<p>
						Use this when you need a one-off read of the user's color scheme (e.g. for initial
						render or non-reactive logic). For reactive updates when the preference changes, use{' '}
						<code>observePrefersColorScheme</code> instead.
					</p>
				</div>
			),
		}),
		showSource(),
	],
	render: () => {
		const scheme = getPrefersColorScheme()

		return (
			<StoryCard title="Current Color Scheme Preference (prefers-color-scheme)" appearance="output">
				Your system is currently set to: <strong>{scheme}</strong> mode
			</StoryCard>
		)
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()],
}
