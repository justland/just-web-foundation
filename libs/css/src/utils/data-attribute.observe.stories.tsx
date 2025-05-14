import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent } from '@storybook/test'
import { useEffect, useRef, useState } from 'react'
import { observeAttributes } from '../index.ts'
import { LogPanel } from '../testing/log-panel.tsx'
import { ToggleAttributeButton } from '../testing/toggle-attribute-button.tsx'

const meta = {
	title: 'utils/observeDataAttribute',
	tags: ['autodocs', 'new', 'version:1.0.0'],
} satisfies Meta

export default meta

export const BasicUsage: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'Observes a single data-* attribute change on the document root element.',
		},
	}),
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeAttributes({
				'data-theme': (value) => {
					setLog((prev) => [...prev, `data-theme: ${value}`])
				},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="data-theme" />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		await userEvent.click(btn)
		await userEvent.click(btn)
		await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument()
		await expect(canvas.getByText('data-theme: null')).toBeInTheDocument()
	},
}

export const MultipleAttributes: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'Observes multiple attributes simultaneously.',
		},
	}),
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeAttributes({
				'data-theme': (value) => {
					setLog((prev) => [...prev, `data-theme: ${value}`])
				},
				'data-color-scheme': (value) => {
					setLog((prev) => [...prev, `data-color-scheme: ${value}`])
				},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="data-theme" />
					<ToggleAttributeButton attribute="data-color-scheme" />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		await userEvent.click(btn)
		await userEvent.click(btn)
		await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument()
		await expect(canvas.getByText('data-theme: null')).toBeInTheDocument()

		const btn2 = canvas.getByRole('button', { name: 'Toggle data-color-scheme' })
		await userEvent.click(btn2)
		await userEvent.click(btn2)
		await expect(canvas.getByText('data-color-scheme: test-value')).toBeInTheDocument()
		await expect(canvas.getByText('data-color-scheme: null')).toBeInTheDocument()
	},
}

export const CustomElement: StoryObj = {
	args: {
		attributes: ['data-theme'],
		element: 'custom',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Observes attribute changes on a custom element instead of the document root.',
		},
	}),
	render: () => {
		const [log, setLog] = useState<string[]>([])
		const customElementRef = useRef<HTMLDivElement>(null)

		useEffect(() => {
			if (!customElementRef.current) return
			const observer = observeAttributes(
				{
					'data-theme': (value) => {
						setLog((prev) => [...prev, `data-theme: ${value}`])
					},
				},
				customElementRef.current,
			)
			return () => observer.disconnect()
		}, [customElementRef])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleAttributeButton attribute="data-theme" ref={customElementRef} />
				</div>
				<div ref={customElementRef} className="p-4 border border-gray-300 mb-4">
					Custom Element to observe
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		const element = canvas.getByText('Custom Element to observe')

		await userEvent.click(btn)
		await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument()
		const dataTheme = element.getAttribute('data-theme')
		await expect(dataTheme).toBe('test-value')

		await userEvent.click(btn)
		await expect(canvas.getByText('data-theme: null')).toBeInTheDocument()
		const dataTheme2 = element.getAttribute('data-theme')
		await expect(dataTheme2).toBeNull()
	},
}
