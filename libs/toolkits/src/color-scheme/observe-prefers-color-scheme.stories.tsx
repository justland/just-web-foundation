import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showDocSource,
	withStoryCard,
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useState } from 'react'
import { getPrefersColorScheme, observePrefersColorScheme } from '#just-web/toolkits'
import code from './observe-prefers-color-scheme.ts?raw'

const meta: Meta<FnToArgTypes<typeof observePrefersColorScheme>> = {
	title: 'color-scheme/observePrefersColorScheme',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that observes system color scheme preferences and triggers callbacks when changes occur.',
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
			story: 'Observe `prefers-color-scheme` changes.',
		},
		source: {
			code: 'observePrefersColorScheme((value) => { ... }): () => void',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>observePrefersColorScheme(callback)</code> subscribes to{' '}
						<code>prefers-color-scheme</code> changes and runs your callback when the preference
						changes.
					</p>
					<p>
						Use this when you need reactive updates (e.g. UI that follows the system theme). For a
						one-off read, use <code>getPrefersColorScheme</code> instead.
					</p>
					<p>
						You should call the returned cleanup function to stop observing when you no longer need
						it.
					</p>
				</div>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
	render: () => {
		const [scheme, setScheme] = useState(getPrefersColorScheme())

		useEffect(() => observePrefersColorScheme(setScheme), [])

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
	decorators: [showDocSource()],
}
