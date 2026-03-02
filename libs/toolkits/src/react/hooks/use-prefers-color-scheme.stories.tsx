import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { usePrefersColorScheme } from '#just-web/toolkits/react'
import code from './use-prefers-color-scheme.ts?raw'

const meta = {
	title: 'react/hooks/usePrefersColorScheme',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'React hook that returns the current system color scheme preference and re-renders when it changes.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		source: {
			code: dedent`
				const scheme = usePrefersColorScheme()
				return <span>System prefers: \${scheme}</span>
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>usePrefersColorScheme()</code> returns the current prefers-color-scheme value.
					</p>
					<p>
						Re-renders when the user changes their OS or browser light/dark setting. Change your
						system theme to verify.
					</p>
					<p>
						Accepts optional <code>defaultColorScheme</code> (default <code>'light'</code>) used
						when <code>matchMedia</code> is unavailable (e.g. SSR). On the client, reads the real
						value immediately to avoid flicker.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const scheme = usePrefersColorScheme()
		return (
			<StoryCard title="Current Color Scheme Preference (prefers-color-scheme)" appearance="output">
				<pre data-testid="current-scheme" className="font-mono">
					{scheme}
				</pre>
			</StoryCard>
		)
	}
}

export const WithDefaultColorScheme: Story = {
	name: 'defaultColorScheme',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
				const scheme = usePrefersColorScheme('dark')
				return <span>System prefers: \${scheme}</span>
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>usePrefersColorScheme('dark')</code> uses <code>'dark'</code> when{' '}
						<code>matchMedia</code> is unavailable (SSR). When your app defaults to dark theme, pass{' '}
						<code>'dark'</code> so the initial render matches and avoids a flash of light.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const scheme = usePrefersColorScheme('dark')
		return (
			<StoryCard title="With defaultColorScheme: 'dark'" appearance="output">
				<pre data-testid="current-scheme" className="font-mono">
					{scheme}
				</pre>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
