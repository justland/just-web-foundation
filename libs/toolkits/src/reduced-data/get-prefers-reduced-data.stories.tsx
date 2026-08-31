import { getPrefersReducedData } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import code from './get-prefers-reduced-data.ts?raw'

const meta: Meta<FnToArgTypes<typeof getPrefersReducedData>> = {
	title: 'reduced-data/getPrefersReducedData',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that returns the current preferred reduced data setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'
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
			code: 'getPrefersReducedData(): "no-preference" | "reduce"'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersReducedData()</code> reads the current <code>prefers-reduced-data</code>{' '}
						value.
					</p>
					<p>
						Accepts optional <code>defaultReducedData</code> (default <code>'no-preference'</code>)
						returned when <code>matchMedia</code> is unavailable (e.g. SSR).
					</p>
					<p>
						Use this when you need a one-off read of the user's reduced data preference (e.g. for
						initial render or non-reactive logic). For reactive updates when the preference changes,
						use <code>observePrefersReducedData</code> instead.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const reducedData = getPrefersReducedData()

		return (
			<StoryCard title="Current Reduced Data Preference (prefers-reduced-data)" appearance="output">
				Your system is currently set to: <strong>{reducedData}</strong>
			</StoryCard>
		)
	}
}

export const WithDefaultReducedData: Story = {
	name: 'defaultReducedData',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: "getPrefersReducedData('reduce'): 'no-preference' | 'reduce'"
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersReducedData('reduce')</code> returns <code>'reduce'</code> when{' '}
						<code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
						real system preference.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const reducedData = getPrefersReducedData('reduce')
		return (
			<StoryCard title="With defaultReducedData: 'reduce'" appearance="output">
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
