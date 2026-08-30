import { getPrefersContrast, observePrefersContrast } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useState } from 'react'
import code from './observe-prefers-contrast.ts?raw'

const meta: Meta<FnToArgTypes<typeof observePrefersContrast>> = {
	title: 'contrast/observePrefersContrast',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that observes system contrast preferences and triggers callbacks when changes occur. Reports "no-preference", "less", "more" or "custom" as reported by the `prefers-contrast` media feature.'
		}
	}),
	render: () => <></>
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Observe `prefers-contrast` changes.'
		},
		source: {
			code: 'observePrefersContrast((value) => { ... }): () => void'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>observePrefersContrast(callback)</code> subscribes to{' '}
						<code>prefers-contrast</code> changes and runs your callback when the preference
						changes.
					</p>
					<p>
						Use this when you need reactive updates (e.g. UI that follows the system contrast
						preference). For a one-off read, use <code>getPrefersContrast</code> instead.
					</p>
					<p>
						You should call the returned cleanup function to stop observing when you no longer need
						it.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const [contrast, setContrast] = useState(getPrefersContrast())

		useEffect(() => observePrefersContrast(setContrast), [])

		return (
			<StoryCard title="Current Contrast Preference (prefers-contrast)" appearance="output">
				Your system is currently set to: <strong>{contrast}</strong>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
