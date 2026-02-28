import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { observeAttributes } from '#just-web/toolkits'
import { LogPanel } from './log-panel.tsx'
import { ToggleAttributeButton } from './toggle-attribute-button.tsx'

const meta = {
	title: 'testing/ToggleAttributeButton',
	tags: ['autodocs', 'version:next'],
	component: ToggleAttributeButton,
} satisfies Meta<typeof ToggleAttributeButton>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'Toggles an attribute on document.documentElement when no ref is provided. Cycles through values then removes the attribute.',
		},
	}),
	args: {
		attribute: 'data-demo',
		values: ['test-value'],
	},
	render: () => {
		const [log, setLog] = useState<string[]>([])

		useEffect(() => {
			const observer = observeAttributes({
				'data-demo': (value) => {
					setLog((prev) => [...prev, `data-demo: ${value}`])
				},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="jwtk:font-sans jwtk:space-y-4">
				<div className="jwtk:flex jwtk:flex-wrap jwtk:gap-2">
					<ToggleAttributeButton attribute="data-demo" values={['test-value']} />
				</div>
				<LogPanel title="Attribute changes (on document):" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-demo' })
		await userEvent.click(btn)
		await expect(canvas.getByText('data-demo: test-value')).toBeInTheDocument()
		await userEvent.click(btn)
		await expect(canvas.getByText('data-demo: null')).toBeInTheDocument()
	},
}

export const WithCustomValues: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Cycles through custom values (e.g. light → dark → removed) when values prop is provided.',
		},
	}),
	args: {
		attribute: 'data-theme',
		values: ['light', 'dark'],
	},
	render: (args) => {
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
			<div className="jwtk:font-sans jwtk:space-y-4">
				<div className="jwtk:flex jwtk:flex-wrap jwtk:gap-2">
					<ToggleAttributeButton {...args} />
				</div>
				<LogPanel title="Attribute changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-theme' })
		await userEvent.click(btn)
		await expect(canvas.getByText('data-theme: light')).toBeInTheDocument()
		await userEvent.click(btn)
		await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument()
		await userEvent.click(btn)
		await expect(canvas.getByText('data-theme: null')).toBeInTheDocument()
	},
}

export const WithRefTarget: Story = {
	name: 'with ref target',
	parameters: defineDocsParam({
		description: {
			story:
				'When a ref is passed, the attribute is toggled on the ref target element instead of document.documentElement.',
		},
	}),
	args: {
		attribute: 'data-state',
		values: ['test-value'],
	},
	render: () => {
		const [log, setLog] = useState<string[]>([])
		const targetRef = useRef<HTMLDivElement>(null)

		useEffect(() => {
			if (!targetRef.current) return
			const observer = observeAttributes(
				{
					'data-state': (value) => {
						setLog((prev) => [...prev, `data-state: ${value}`])
					},
				},
				targetRef.current,
			)
			return () => observer.disconnect()
		}, [])

		return (
			<div className="jwtk:font-sans jwtk:space-y-4">
				<div className="jwtk:flex jwtk:flex-wrap jwtk:gap-2">
					<ToggleAttributeButton attribute="data-state" ref={targetRef} />
				</div>
				<div
					ref={targetRef}
					className="jwtk:p-4 jwtk:border-2 jwtk:border-neutral-300 jwtk:rounded jwtk:bg-neutral-50 dark:jwtk:bg-neutral-900"
				>
					Target element (attribute toggles here)
				</div>
				<LogPanel title="Attribute changes (on target element):" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: 'Toggle data-state' })
		const element = canvas.getByText('Target element (attribute toggles here)')

		await userEvent.click(btn)
		await expect(canvas.getByText('data-state: test-value')).toBeInTheDocument()
		await expect(element.getAttribute('data-state')).toBe('test-value')

		await userEvent.click(btn)
		await expect(canvas.getByText('data-state: null')).toBeInTheDocument()
		await expect(element.getAttribute('data-state')).toBeNull()
	},
}
