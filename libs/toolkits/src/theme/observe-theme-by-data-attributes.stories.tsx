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
				'Observe theme with allowCustom: unknown attribute values are passed to the handler as-is.',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<strong>What it does:</strong> By default, the handler only receives theme <em>keys</em>{' '}
						that exist in <code>themes</code> (e.g. <code>light</code>, <code>dark</code>). If the
						attribute is set to a value not in <code>themes</code> (e.g.{' '}
						<code>data-theme="custom"</code>), the handler is not called. With{' '}
						<code>allowCustom: true</code>, any attribute value is passed through: known themes are
						still normalized to their key, but unknown values are passed as-is (e.g.{' '}
						<code>custom</code>, <code>brand-blue</code>).
					</p>
					<p>
						<strong>When to use it:</strong> Enable <code>allowCustom</code> when you need theme
						names that are not known at build time—e.g. user-defined themes, CMS-driven theme slugs,
						or A/B test variants. Your handler can then branch on known keys vs custom strings, or
						forward the raw value to a system that resolves theme by name.
					</p>
					<p>
						Use the button below to cycle <code>data-theme</code> through <code>light</code> and{' '}
						<code>custom</code>. With <code>allowCustom: true</code>, both values reach the handler;
						without it, the handler would not run when the attribute is set to <code>custom</code>.
					</p>
				</>
			),
		}),
		showDocSource({
			placement: 'before',
			source: dedent`
				observeThemeByDataAttributes({
				  attributeName: 'data-theme',
				  themes: { light: 'light', dark: 'dark' },
				  allowCustom: true,  // pass through values not in themes
				  handler: (value) => setLog(prev => [...prev, \`data-theme: \${value}\`]),
				})
			`,
		}),
	],
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
			<StoryCard title="Demo" appearance="output">
				<div className="font-sans p-4 space-y-4">
					<div className="flex flex-wrap gap-2">
						<ToggleAttributeButton attribute="data-theme" values={['light', 'custom']} />
					</div>
					<LogPanel title="Handler received:" log={log} />
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
