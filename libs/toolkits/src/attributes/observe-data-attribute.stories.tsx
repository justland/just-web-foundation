import { defineDocsParam, type FnToArgTypes, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { observeDataAttributes, setThemeByDataAttribute } from '#just-web/toolkits'
import { Button } from '../testing/button.tsx'
import { LogPanel } from '../testing/log-panel.tsx'
import code from './observe-data-attribute.ts?raw'

const testValueThemes = { 'test-value': 'test-value' } as const

const meta: Meta<FnToArgTypes<typeof observeDataAttributes, ['element']>> = {
	title: 'attributes/observeDataAttributes',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes changes to `data-*` attributes on an element and calls corresponding handlers.',
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
			story: 'Observes a single data-* attribute change on the document root element.',
		},
		source: {
			code: dedent`
				const observer = observeDataAttributes({
					'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
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
			const observer = observeDataAttributes({
				'data-theme': (value) => {
					setLog((prev) => [...prev, `data-theme: ${value}`])
				},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					<Button
						onPress={() =>
							setThemeByDataAttribute({
								attributeName: 'data-theme',
								themes: testValueThemes,
								theme: 'test-value',
							})
						}
					>
						test-value
					</Button>
					<Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
						Clear
					</Button>
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const setBtn = canvas.getByRole('button', { name: 'test-value' })
		const clearBtn = canvas.getByRole('button', { name: 'Clear' })
		await userEvent.click(setBtn)
		await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument()
		await userEvent.click(clearBtn)
		await expect(canvas.getByText('data-theme: null')).toBeInTheDocument()
	},
}

export const MultipleAttributes: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Observes multiple data-* attributes simultaneously.',
		},
		source: {
			code: dedent`
				const observer = observeDataAttributes({
					'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
					'data-color-scheme': (value) => setLog((prev) => [...prev, \`data-color-scheme: \${value}\`]),
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
			const observer = observeDataAttributes({
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
					<Button
						onPress={() =>
							setThemeByDataAttribute({
								attributeName: 'data-theme',
								themes: testValueThemes,
								theme: 'test-value',
							})
						}
					>
						Set data-theme
					</Button>
					<Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
						Clear data-theme
					</Button>
					<Button
						onPress={() =>
							setThemeByDataAttribute({
								attributeName: 'data-color-scheme',
								themes: testValueThemes,
								theme: 'test-value',
							})
						}
					>
						Set data-color-scheme
					</Button>
					<Button onPress={() => document.documentElement.removeAttribute('data-color-scheme')}>
						Clear data-color-scheme
					</Button>
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('data-theme', async () => {
			const setBtn = canvas.getByRole('button', { name: 'Set data-theme' })
			const clearBtn = canvas.getByRole('button', { name: 'Clear data-theme' })
			await userEvent.click(setBtn)
			await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument()
			await userEvent.click(clearBtn)
			await expect(canvas.getByText('data-theme: null')).toBeInTheDocument()
		})

		await step('data-color-scheme', async () => {
			const setBtn = canvas.getByRole('button', { name: 'Set data-color-scheme' })
			const clearBtn = canvas.getByRole('button', { name: 'Clear data-color-scheme' })
			await userEvent.click(setBtn)
			await expect(canvas.getByText('data-color-scheme: test-value')).toBeInTheDocument()
			await userEvent.click(clearBtn)
			await expect(canvas.getByText('data-color-scheme: null')).toBeInTheDocument()
		})
	},
}

export const CustomElement: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Observes data-* attribute changes on a custom element instead of the document root.',
		},
		source: {
			code: dedent`
				const observer = observeDataAttributes(
					{
						'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
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
			const observer = observeDataAttributes(
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
					<Button
						onPress={() => {
							const el = customElementRef.current ?? document.documentElement
							setThemeByDataAttribute({
								attributeName: 'data-theme',
								themes: testValueThemes,
								theme: 'test-value',
								element: el,
							})
						}}
					>
						test-value
					</Button>
					<Button
						onPress={() => {
							;(customElementRef.current ?? document.documentElement).removeAttribute('data-theme')
						}}
					>
						Clear
					</Button>
				</div>
				<div ref={customElementRef} className="p-4 border border-gray-300 mb-4">
					Custom Element to observe
				</div>
				<LogPanel title="Attribute Changes:" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		const setBtn = canvas.getByRole('button', { name: 'test-value' })
		const clearBtn = canvas.getByRole('button', { name: 'Clear' })
		const element = canvas.getByText('Custom Element to observe')

		await userEvent.click(setBtn)
		await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument()
		const dataTheme = element.getAttribute('data-theme')
		await expect(dataTheme).toBe('test-value')

		await userEvent.click(clearBtn)
		await expect(canvas.getByText('data-theme: null')).toBeInTheDocument()
		const dataTheme2 = element.getAttribute('data-theme')
		await expect(dataTheme2).toBeNull()
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code },
	}),
	decorators: [showSource()],
}
