import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { useEffect, useState } from 'react'
import { observeThemeByClassName } from '../index.ts'
import { LogPanel } from '../testing/log-panel.js'
import { ToggleAttributeButton } from '../testing/toggle-attribute-button.js'

const meta = {
	title: 'theme/observeThemeByClassName',
	tags: ['autodocs', 'new', 'version:1.0.0'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByClassName({
				themes: {
					light: 'light',
					dark: 'dark',
				},
				handler: (value) => setLog((prev) => [...prev, `theme: ${value === undefined ? '(undefined)' : value}`]),
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="class" values={['light', 'dark']} />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
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
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByClassName({
				themes: {
					light: 'light-theme',
					dark: 'dark-theme',
				},
				handler: (value) => setLog((prev) => [...prev, `theme: ${value === undefined ? '(undefined)' : value}`]),
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="class" values={['light-theme', 'dark-theme']} />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
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
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeThemeByClassName({
				themes: {
					light: 'light',
					dark: 'dark',
				},
				handler: (value) => setLog((prev) => [...prev, `theme: ${value}`]),
				defaultTheme: 'light',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="class" values={['light', 'dark']} />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
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
