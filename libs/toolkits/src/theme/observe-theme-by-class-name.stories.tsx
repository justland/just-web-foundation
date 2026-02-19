import { defineDocsParam, StoryCard, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { observeThemeByClassName } from '#just-web/toolkits'
import { LogPanel } from '../testing/log-panel.tsx'
import { ToggleAttributeButton } from '../testing/toggle-attribute-button.tsx'
import source from './observe-theme-by-class-name.ts?raw'

const meta = {
	title: 'theme/observeThemeByClassName',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes element class changes and invokes a handler when the theme (by class) changes.',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Observe theme changes when document class is toggled.',
		},
	}),
	decorators: [
		withStoryCard(),
		showDocSource({
			placement: 'before',
			source: dedent`
				observeThemeByClassName({
				  themes: { light: 'light', dark: 'dark' },
				  handler: (value) => setLog(prev => [...prev, \`theme: \${value}\`]),
				})
			`,
		}),
	],
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByClassName({
				themes: { light: 'light', dark: 'dark' },
				handler: (value) =>
					setLog((prev) => [...prev, `theme: ${value === undefined ? '(undefined)' : value}`]),
			})
			return () => observer.disconnect()
		}, [])

		return (
			<StoryCard title="Attribute changes" appearance="output">
				<div className="font-sans p-4">
					<div className="flex flex-wrap gap-2 mb-4">
						<ToggleAttributeButton attribute="class" values={['light', 'dark']} />
					</div>
					<LogPanel title="Attribute Changes:" log={log} />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle class' })
		await step('undefined -> light', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: light')).toBeInTheDocument()
		})
		await step('light -> dark', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: dark')).toBeInTheDocument()
		})
		await step('dark -> undefined', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: (undefined)')).toBeInTheDocument()
		})
	},
}

export const WithDifferentAttributeValues: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Theme keys can map to different class values (e.g. light-theme, dark-theme).',
		},
	}),
	decorators: [withStoryCard()],
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByClassName({
				themes: { light: 'light-theme', dark: 'dark-theme' },
				handler: (value) =>
					setLog((prev) => [...prev, `theme: ${value === undefined ? '(undefined)' : value}`]),
			})
			return () => observer.disconnect()
		}, [])

		return (
			<StoryCard appearance="output">
				<div className="font-sans p-4">
					<div className="flex flex-wrap gap-2 mb-4">
						<ToggleAttributeButton attribute="class" values={['light-theme', 'dark-theme']} />
					</div>
					<LogPanel title="Attribute Changes:" log={log} />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle class' })
		await step('undefined -> light', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: light')).toBeInTheDocument()
		})
		await step('light -> dark', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: dark')).toBeInTheDocument()
		})
		await step('dark -> undefined', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: (undefined)')).toBeInTheDocument()
		})
	},
}

export const WithDefaultTheme: Story = {
	name: 'With defaultTheme',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'When class is cleared, handler receives defaultTheme instead of undefined.',
		},
	}),
	decorators: [withStoryCard()],
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByClassName({
				themes: { light: 'light', dark: 'dark' },
				handler: (value) => setLog((prev) => [...prev, `theme: ${value}`]),
				defaultTheme: 'light',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<StoryCard appearance="output">
				<div className="font-sans p-4">
					<div className="flex flex-wrap gap-2 mb-4">
						<ToggleAttributeButton attribute="class" values={['light', 'dark']} />
					</div>
					<LogPanel title="Attribute Changes:" log={log} />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle class' })
		await step('null -> light', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: light')).toBeInTheDocument()
		})
		await step('light -> dark', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: dark')).toBeInTheDocument()
		})
		await step('dark -> light (default)', async () => {
			await userEvent.click(btn)
			await expect(canvas.getAllByText('theme: light').length).toBe(2)
		})
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showDocSource()],
}
