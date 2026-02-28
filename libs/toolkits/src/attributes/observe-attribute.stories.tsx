import { defineDocsParam, type FnToArgTypes, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { observeAttributes } from '#just-web/toolkits'
import { LogPanel } from '../testing/log-panel.tsx'
import code from './observe-attribute.ts?raw'

const meta: Meta<FnToArgTypes<typeof observeAttributes, ['element']>> = {
	title: 'attributes/observeAttributes',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component: 'Observes attribute changes on an element and calls corresponding handlers.',
		},
	}),
	argTypes: {
		element: {
			control: false,
		},
	},
	render: () => <></>,
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Observes a single attribute change on the document root element.',
		},
		source: {
			code: dedent`
				const observer = observeAttributes({
					'data-theme': (value) => { ... },
				})
				// cleanup
				observer.disconnect()
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
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
			<>
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleButton attribute="data-theme" />
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</>
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

export const MultipleAttributes: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Observes multiple attributes simultaneously.',
		},
		source: {
			code: dedent`
				const observer = observeAttributes({
					'data-theme': (value) => { ... },
					'aria-label': (value) => { ... },
				})
				// cleanup
				observer.disconnect()
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
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

export const CustomElement: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Observes attribute changes on a custom element instead of the document root.',
		},
		source: {
			code: dedent`
				const observer = observeAttributes(
					{
						'data-anything': (value) => { ... },
					},
					customElementRef.current,
				)
				// cleanup
				observer.disconnect()
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [log, setLog] = useState<string[]>([])
		const customElementRef = useRef<HTMLDivElement>(null)

		useEffect(() => {
			if (!customElementRef.current) return
			const observer = observeAttributes(
				{
					'data-anything': (value) => {
						setLog((prev) => [...prev, `data-anything: ${value}`])
					},
				},
				customElementRef.current,
			)
			return () => observer.disconnect()
		}, [customElementRef])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<ToggleButton attribute="data-anything" ref={customElementRef} />
				</div>
				<div ref={customElementRef} className="p-4 border border-gray-300 mb-4">
					Custom Element to observe
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-anything' })
		const element = canvas.getByText('Custom Element to observe')

		await userEvent.click(btn)
		await expect(canvas.getByText('data-anything: test-value')).toBeInTheDocument()
		const dataAnything = element.getAttribute('data-anything')
		await expect(dataAnything).toBe('test-value')

		await userEvent.click(btn)
		await expect(canvas.getByText('data-anything: null')).toBeInTheDocument()
		const dataAnything2 = element.getAttribute('data-anything')
		await expect(dataAnything2).toBeNull()
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

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code },
	}),
	decorators: [showSource()],
}
