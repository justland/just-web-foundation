import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { getPrefersColorTheme } from '../index.ts'

const meta = {
	title: 'utils/getPrefersColorScheme',
	tags: ['autodocs', 'new', 'version:1.0.0'],
	parameters: defineDocsParam({
		description: {
			component: 'A utility function that returns the current preferred color theme from the system settings.',
		},
	}),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'This demo shows how the `getPrefersColorScheme` function returns the current preferred color theme from the system settings.',
		},
	}),
	render: () => {
		const scheme = getPrefersColorTheme('light', 'dark')

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
			</div>
		)
	},
}
