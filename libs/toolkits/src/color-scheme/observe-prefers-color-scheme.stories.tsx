import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'
import { getPrefersColorTheme, observePrefersColorScheme } from '#just-web/toolkits'

const meta = {
	title: 'color-scheme/observePrefersColorScheme',
	tags: ['autodocs', 'version:0.1'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function that observes system color scheme preferences and triggers callbacks when changes occur.',
		},
	}),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'This demo shows how the `observePrefersColorScheme` function responds to system color scheme changes. Change your system theme to see it in action.',
		},
	}),
	render: () => {
		const [scheme, setScheme] = useState<'light' | 'dark' | null>(null)

		useEffect(() => {
			setScheme(getPrefersColorTheme('light', 'dark'))

			return observePrefersColorScheme<'light' | 'dark'>({
				light: (value) => setScheme(value),
				dark: (value) => setScheme(value),
			})
		}, [])

		return (
			<div
				style={{
					padding: '2rem',
					backgroundColor: scheme === 'dark' ? '#333' : '#fff',
					color: scheme === 'dark' ? '#fff' : '#333',
					borderRadius: '8px',
					transition: 'all 0.3s ease',
				}}
			>
				<h2>Current Color Scheme Preference (prefers-color-scheme)</h2>
				<p>
					Your system is currently set to: <strong>{scheme}</strong> mode
				</p>
				<p>Try changing your system's or browser's color scheme to see this update!</p>
			</div>
		)
	},
}
