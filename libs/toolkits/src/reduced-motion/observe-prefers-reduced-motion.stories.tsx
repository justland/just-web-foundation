import { getPrefersReducedMotion, observePrefersReducedMotion } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useState } from 'react'
import code from './observe-prefers-reduced-motion.ts?raw'

const meta: Meta<FnToArgTypes<typeof observePrefersReducedMotion>> = {
	title: 'reduced-motion/observePrefersReducedMotion',
	tags: ['func', 'version:3.5'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that observes system reduced motion preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-motion` media feature.'
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
			story: 'Observe `prefers-reduced-motion` changes.'
		},
		source: {
			code: 'observePrefersReducedMotion((value) => { ... }): () => void'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>observePrefersReducedMotion(callback)</code> subscribes to{' '}
						<code>prefers-reduced-motion</code> changes and runs your callback when the preference
						changes.
					</p>
					<p>
						Use this when you need reactive updates (e.g. UI that follows the system reduced motion
						preference). For a one-off read, use <code>getPrefersReducedMotion</code> instead.
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
		const [reducedMotion, setReducedMotion] = useState(getPrefersReducedMotion())

		useEffect(() => observePrefersReducedMotion(setReducedMotion), [])

		return (
			<StoryCard
				title="Current Reduced Motion Preference (prefers-reduced-motion)"
				appearance="output"
			>
				Your system is currently set to: <strong>{reducedMotion}</strong>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
