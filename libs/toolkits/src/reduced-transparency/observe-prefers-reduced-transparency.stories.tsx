import {
	getPrefersReducedTransparency,
	observePrefersReducedTransparency
} from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useState } from 'react'
import code from './observe-prefers-reduced-transparency.ts?raw'

const meta: Meta<FnToArgTypes<typeof observePrefersReducedTransparency>> = {
	title: 'reduced-transparency/observePrefersReducedTransparency',
	tags: ['func', 'version:3.5'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that observes system reduced transparency preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-transparency` media feature.'
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
			story: 'Observe `prefers-reduced-transparency` changes.'
		},
		source: {
			code: 'observePrefersReducedTransparency((value) => { ... }): () => void'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>observePrefersReducedTransparency(callback)</code> subscribes to{' '}
						<code>prefers-reduced-transparency</code> changes and runs your callback when the
						preference changes.
					</p>
					<p>
						Use this when you need reactive updates (e.g. UI that follows the system reduced
						transparency preference). For a one-off read, use{' '}
						<code>getPrefersReducedTransparency</code> instead.
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
		const [reducedTransparency, setReducedTransparency] = useState(getPrefersReducedTransparency())

		useEffect(() => observePrefersReducedTransparency(setReducedTransparency), [])

		return (
			<StoryCard
				title="Current Reduced Transparency Preference (prefers-reduced-transparency)"
				appearance="output"
			>
				Your system is currently set to: <strong>{reducedTransparency}</strong>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
