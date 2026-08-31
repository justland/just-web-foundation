import { getPrefersReducedTransparency } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import code from './get-prefers-reduced-transparency.ts?raw'

const meta: Meta<FnToArgTypes<typeof getPrefersReducedTransparency>> = {
	title: 'reduced-transparency/getPrefersReducedTransparency',
	tags: ['func', 'version:3.5'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that returns the current preferred reduced transparency setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'
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
			code: 'getPrefersReducedTransparency(): "no-preference" | "reduce"'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersReducedTransparency()</code> reads the current{' '}
						<code>prefers-reduced-transparency</code> value.
					</p>
					<p>
						Accepts optional <code>defaultReducedTransparency</code> (default{' '}
						<code>'no-preference'</code>) returned when <code>matchMedia</code> is unavailable (e.g.
						SSR).
					</p>
					<p>
						Use this when you need a one-off read of the user's reduced transparency preference
						(e.g. for initial render or non-reactive logic). For reactive updates when the
						preference changes, use <code>observePrefersReducedTransparency</code> instead.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const reducedTransparency = getPrefersReducedTransparency()

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

export const WithDefaultReducedTransparency: Story = {
	name: 'defaultReducedTransparency',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: "getPrefersReducedTransparency('reduce'): 'no-preference' | 'reduce'"
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersReducedTransparency('reduce')</code> returns <code>'reduce'</code> when{' '}
						<code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
						real system preference.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const reducedTransparency = getPrefersReducedTransparency('reduce')
		return (
			<StoryCard title="With defaultReducedTransparency: 'reduce'" appearance="output">
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
