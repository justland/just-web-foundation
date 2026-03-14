import { useThemeByDataAttribute } from '@just-web/toolkits/react.js'
import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { Button } from '../../testing/button.tsx'
import code from './use-theme-by-data-attribute.ts?raw'

const THEMES = { light: 'theme-light', dark: 'theme-dark' } as const

const meta = {
	title: 'react/hooks/useThemeByDataAttribute',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'React hook that returns the current theme (from element data attribute) and a setter. Subscribes to data attribute changes on the element so the returned theme stays in sync.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'Observe and set theme by data attribute on document.documentElement. The hook reads the matching theme from the attribute and setTheme updates the element attribute.'
		},
		source: {
			code: dedent`
				const themes = { light: 'theme-light', dark: 'theme-dark' }
				const [theme, setTheme] = useThemeByDataAttribute(themes, {
					attributeName: 'data-theme',
					defaultTheme: 'light'
				})
				setTheme('dark')
				setTheme('light')
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme, setTheme] = useThemeByDataAttribute(THEMES, {
			attributeName: 'data-theme',
			defaultTheme: 'light'
		})

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
				</div>
				<StoryCard
					title="Current theme (from document.documentElement data-theme)"
					appearance="output"
				>
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('Set dark', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set dark' }))
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
		})
		await step('Set light', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set light' }))
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		})
	}
}

export const CustomElement: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'Observe and set theme by data attribute on a specific element by passing it in options.element.'
		},
		source: {
			code: dedent`
				const [element, setElement] = useState<HTMLDivElement | null>(null)
				const [theme, setTheme] = useThemeByDataAttribute(
					{ light: 'theme-light', dark: 'theme-dark' },
					{ attributeName: 'data-theme', defaultTheme: 'light', element: element ?? undefined }
				)
				return <div ref={setElement}>...</div>
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [element, setElement] = useState<HTMLDivElement | null>(null)
		const [theme, setTheme] = useThemeByDataAttribute(THEMES, {
			attributeName: 'data-theme',
			defaultTheme: 'light',
			element: element ?? undefined
		})

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div
					ref={setElement}
					className="rounded border border-gray-300 p-4"
					data-testid="target-element"
				>
					Target element (theme attribute is observed here)
				</div>
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
				</div>
				<StoryCard title="Current theme on target" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('Set dark', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set dark' }))
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
		})
		await step('Set light', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set light' }))
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		})
	}
}

export const SyncFromElsewhere: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'The hook stays in sync when the element data attribute is changed outside of setTheme (e.g. by another component or direct DOM mutation).'
		},
		source: {
			code: dedent`
				const [theme] = useThemeByDataAttribute(themes, {
					attributeName: 'data-theme',
					defaultTheme: 'light'
				})
				// When something else updates the data attribute on the element,
				// theme updates automatically
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme] = useThemeByDataAttribute(THEMES, {
			attributeName: 'data-theme',
			defaultTheme: 'light'
		})

		const toggleExternally = () => {
			const el = document.documentElement
			const current = el.getAttribute('data-theme')
			if (current === 'theme-dark') {
				el.setAttribute('data-theme', 'theme-light')
			} else {
				el.setAttribute('data-theme', 'theme-dark')
			}
		}

		return (
			<div className="flex flex-col gap-4 font-sans">
				<Button onPress={toggleExternally}>Toggle theme via setAttribute (external)</Button>
				<StoryCard appearance="output">
					<p className="mb-2">Hook value (updates when attribute changes elsewhere):</p>
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: /Toggle theme via setAttribute/ })
		await userEvent.click(btn)
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
		await userEvent.click(btn)
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code }
	}),
	decorators: [showSource()]
}
