import { getPrefersContrast } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import code from './get-prefers-contrast.ts?raw'

const meta: Meta<FnToArgTypes<typeof getPrefersContrast>> = {
	title: 'contrast/getPrefersContrast',
	tags: ['func', 'version:3.5'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that returns the current preferred contrast. It can be "no-preference", "less", "more" or "custom". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'
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
			code: 'getPrefersContrast(): "no-preference" | "less" | "more" | "custom"'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersContrast()</code> reads the current <code>prefers-contrast</code> value.
					</p>
					<p>
						Accepts optional <code>defaultContrast</code> (default <code>'no-preference'</code>)
						returned when <code>matchMedia</code> is unavailable (e.g. SSR).
					</p>
					<p>
						Use this when you need a one-off read of the user's contrast preference (e.g. for
						initial render or non-reactive logic). For reactive updates when the preference changes,
						use <code>observePrefersContrast</code> instead.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const contrast = getPrefersContrast()

		return (
			<StoryCard title="Current Contrast Preference (prefers-contrast)" appearance="output">
				Your system is currently set to: <strong>{contrast}</strong>
			</StoryCard>
		)
	}
}

export const WithDefaultContrast: Story = {
	name: 'defaultContrast',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: "getPrefersContrast('more'): 'no-preference' | 'less' | 'more' | 'custom'"
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getPrefersContrast('more')</code> returns <code>'more'</code> when{' '}
						<code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
						real system preference.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const contrast = getPrefersContrast('more')
		return (
			<StoryCard title="With defaultContrast: 'more'" appearance="output">
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
