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
		description: {
			story:
				'Returns the current prefers-color-scheme value. Re-renders when the user changes their OS or browser light/dark setting. Change your system theme to verify.'
		},
		source: {
			code: dedent`
				const scheme = usePrefersColorScheme()
				return <span>System prefers: \${scheme}</span>
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
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

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
