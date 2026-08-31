import { getPrefersReducedData, observePrefersReducedData } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useState } from 'react'
import code from './observe-prefers-reduced-data.ts?raw'

const meta: Meta<FnToArgTypes<typeof observePrefersReducedData>> = {
	title: 'reduced-data/observePrefersReducedData',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that observes system reduced data preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-data` media feature.'
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
			story: 'Observe `prefers-reduced-data` changes.'
		},
		source: {
			code: 'observePrefersReducedData((value) => { ... }): () => void'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>observePrefersReducedData(callback)</code> subscribes to{' '}
						<code>prefers-reduced-data</code> changes and runs your callback when the preference
						changes.
					</p>
					<p>
						Use this when you need reactive updates (e.g. UI that follows the system reduced data
						preference). For a one-off read, use <code>getPrefersReducedData</code> instead.
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
		const [reducedData, setReducedData] = useState(getPrefersReducedData())

		useEffect(() => observePrefersReducedData(setReducedData), [])

		return (
			<StoryCard title="Current Reduced Data Preference (prefers-reduced-data)" appearance="output">
				Your system is currently set to: <strong>{reducedData}</strong>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
