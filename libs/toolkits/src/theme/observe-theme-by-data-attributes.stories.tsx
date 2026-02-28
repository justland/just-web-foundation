import { defineDocsParam, StoryCard, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { observeThemeByDataAttributes } from '#just-web/toolkits'
import { LogPanel } from '../testing/log-panel.tsx'
import { ToggleAttributeButton } from '../testing/toggle-attribute-button.tsx'
import source from './observe-theme-by-data-attributes.ts?raw'

const meta = {
	title: 'theme/observeThemeByDataAttributes',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes a data attribute (e.g. data-theme) and invokes a handler when the theme value changes.',
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
			story: 'Observe theme changes when data-theme attribute is toggled.',
		},
	}),
	decorators: [
		withStoryCard(),
		showDocSource({
			placement: 'before',
			source: dedent`
				observeThemeByDataAttributes({
				  attributeName: 'data-theme',
				  themes: { light: 'light', dark: 'dark' },
				  handler: (value) => setLog(prev => [...prev, \`data-theme: \${value}\`]),
				})
			`,
		}),
	],
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				attributeName: 'data-theme',
				themes: { light: 'light', dark: 'dark' },
				handler: (value) =>
					setLog((prev) => [...prev, `data-theme: ${value === null ? '(null)' : value}`]),
			})
			return () => observer.disconnect()
		}, [])

		return (
			<StoryCard title="Attribute changes" appearance="output">
				<div className="font-sans p-4">
					<div className="flex flex-wrap gap-2 mb-4">
						<ToggleAttributeButton attribute="data-theme" values={['light', 'dark']} />
					</div>
					<LogPanel title="Attribute Changes:" log={log} />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		await step('null -> light', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: light')).toBeInTheDocument()
		})
		await step('light -> dark', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument()
		})
		await step('dark -> null', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: (null)')).toBeInTheDocument()
		})
	},
}

export const WithDifferentAttributeValues: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Theme keys can map to different attribute values (e.g. light-theme, dark-theme).',
		},
	}),
	decorators: [withStoryCard()],
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				themes: { light: 'light-theme', dark: 'dark-theme' },
				handler: (value) =>
					setLog((prev) => [...prev, `data-theme: ${value === null ? '(null)' : value}`]),
				attributeName: 'data-theme',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<StoryCard appearance="output">
				<div className="font-sans p-4">
					<div className="flex flex-wrap gap-2 mb-4">
						<ToggleAttributeButton attribute="data-theme" values={['light-theme', 'dark-theme']} />
					</div>
					<LogPanel title="Attribute Changes:" log={log} />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		await step('null -> light', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: light')).toBeInTheDocument()
		})
		await step('light -> dark', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument()
		})
		await step('dark -> null', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: (null)')).toBeInTheDocument()
		})
	},
}

export const WithDefaultTheme: Story = {
	name: 'With defaultTheme',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'When attribute is removed, handler receives defaultTheme instead of null.',
		},
	}),
	decorators: [withStoryCard()],
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				themes: { light: 'light', dark: 'dark' },
				handler: (value) =>
					setLog((prev) => [...prev, `data-theme: ${value === null ? '(null)' : value}`]),
				defaultTheme: 'light',
				attributeName: 'data-theme',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<StoryCard appearance="output">
				<div className="font-sans p-4">
					<div className="flex flex-wrap gap-2 mb-4">
						<ToggleAttributeButton attribute="data-theme" values={['light', 'dark']} />
					</div>
					<LogPanel title="Attribute Changes:" log={log} />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		await step('null -> light', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: light')).toBeInTheDocument()
		})
		await step('light -> dark', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument()
		})
		await step('dark -> light (default)', async () => {
			await userEvent.click(btn)
			await expect(canvas.getAllByText('data-theme: light').length).toBe(2)
		})
	},
}

export const WithAllowCustom: Story = {
	name: 'With allowCustom',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'When allowCustom is true, handler receives custom attribute values that do not match a theme.',
		},
	}),
	decorators: [withStoryCard()],
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				themes: { light: 'light', dark: 'dark' },
				handler: (value) =>
					setLog((prev) => [...prev, `data-theme: ${value === null ? '(null)' : value}`]),
				allowCustom: true,
				attributeName: 'data-theme',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<StoryCard appearance="output">
				<div className="font-sans p-4">
					<div className="flex flex-wrap gap-2 mb-4">
						<ToggleAttributeButton attribute="data-theme" values={['light', 'custom']} />
					</div>
					<LogPanel title="Attribute Changes:" log={log} />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		await step('null -> light', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: light')).toBeInTheDocument()
		})
		await step('light -> custom', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: custom')).toBeInTheDocument()
		})
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showDocSource()],
}
