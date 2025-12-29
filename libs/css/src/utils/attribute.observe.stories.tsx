import { observeAttributes } from '#just-web/css'
import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { LogPanel } from '../testing/log-panel.tsx'

const meta = {
	title: 'utils/observeAttributes',
	tags: ['autodocs', 'version:0.5'],
} satisfies Meta

export default meta

export const BasicUsage: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'Observes a single attribute change on the document root element.',
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
					<ToggleButton attribute="data-theme" />
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
				'aria-label': (value) => {
					setLog((prev) => [...prev, `aria-label: ${value}`])
				},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleButton attribute="data-theme" />
					<ToggleButton attribute="aria-label" />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		await step('data-theme', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument()
			await userEvent.click(btn)
			await expect(canvas.getByText('data-theme: null')).toBeInTheDocument()
		})

		await step('aria-label', async () => {
			const btn2 = canvas.getByRole('button', { name: 'Toggle aria-label' })
			await userEvent.click(btn2)
			await userEvent.click(btn2)
			await expect(canvas.getByText('aria-label: test-value')).toBeInTheDocument()
			await expect(canvas.getByText('aria-label: null')).toBeInTheDocument()
		})
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
					<ToggleButton attribute="data-theme" ref={customElementRef} />
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

const ToggleButton = forwardRef<HTMLElement, { attribute: string }>(({ attribute }, ref) => {
	const handleAttributeChange = useCallback(
		(attr: string) => {
			// Handle both RefObject and function ref cases
			const target = (ref && 'current' in ref ? ref.current : null) ?? document.documentElement
			const currentValue = target.getAttribute(attr)
			const newValue = currentValue ? null : 'test-value'

			if (newValue === null) {
				target.removeAttribute(attr)
			} else {
				target.setAttribute(attr, newValue)
			}
		},
		[ref],
	)

	return (
		<button
			key={attribute}
			className="bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800"
			onClick={() => handleAttributeChange(attribute)}
		>
			Toggle {attribute}
		</button>
	)
})
