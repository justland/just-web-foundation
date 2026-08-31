import { getPrefersReducedMotion } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import code from './get-prefers-reduced-motion.ts?raw'

const meta: Meta<FnToArgTypes<typeof getPrefersReducedMotion>> = {
	title: 'reduced-motion/getPrefersReducedMotion',
	tags: ['func', 'version:3.5'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that returns the current preferred reduced motion setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'
		}
	}),
	render: () => <></>
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: 'getPrefersReducedMotion(): "no-preference" | "reduce"'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersReducedMotion()</code> reads the current{' '}
						<code>prefers-reduced-motion</code> value.
					</p>
					<p>
						Accepts optional <code>defaultReducedMotion</code> (default <code>'no-preference'</code>
						) returned when <code>matchMedia</code> is unavailable (e.g. SSR).
					</p>
					<p>
						Use this when you need a one-off read of the user's reduced motion preference (e.g. for
						initial render or non-reactive logic). For reactive updates when the preference changes,
						use <code>observePrefersReducedMotion</code> instead.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const reducedMotion = getPrefersReducedMotion()

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

export const WithDefaultReducedMotion: Story = {
	name: 'defaultReducedMotion',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: "getPrefersReducedMotion('reduce'): 'no-preference' | 'reduce'"
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersReducedMotion('reduce')</code> returns <code>'reduce'</code> when{' '}
						<code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
						real system preference.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const reducedMotion = getPrefersReducedMotion('reduce')
		return (
			<StoryCard title="With defaultReducedMotion: 'reduce'" appearance="output">
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
