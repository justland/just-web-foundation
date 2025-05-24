import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent } from '@storybook/test'
import { useEffect, useState } from 'react'
import { observeThemeByDataAttributes } from '../index.ts'
import { LogPanel } from '../testing/log-panel.js'
import { ToggleAttributeButton } from '../testing/toggle-attribute-button.js'

const meta = {
	title: 'theme/observeThemeByDataAttributes',
	tags: ['autodocs', 'new', 'version:1.0.0'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				attributeName: 'data-theme',
				themes: {
					light: 'light',
					dark: 'dark',
				},
				handler: (value) => setLog((prev) => [...prev, `data-theme: ${value === null ? '(null)' : value}`]),
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="data-theme" values={['light', 'dark']} />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
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
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				themes: {
					light: 'light-theme',
					dark: 'dark-theme',
				},
				handler: (value) => setLog((prev) => [...prev, `data-theme: ${value === null ? '(null)' : value}`]),
				attributeName: 'data-theme',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="data-theme" values={['light-theme', 'dark-theme']} />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
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
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				themes: {
					light: 'light',
					dark: 'dark',
				},
				handler: (value) => setLog((prev) => [...prev, `data-theme: ${value === null ? '(null)' : value}`]),
				defaultTheme: 'light',
				attributeName: 'data-theme',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="data-theme" values={['light', 'dark']} />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
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
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				themes: {
					light: 'light',
					dark: 'dark',
				},
				handler: (value) => setLog((prev) => [...prev, `data-theme: ${value === null ? '(null)' : value}`]),
				allowCustom: true,
				attributeName: 'data-theme',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="data-theme" values={['light', 'custom']} />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
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
