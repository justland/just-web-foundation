import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { useThemeByClassName } from '#just-web/toolkits/react'
import { Button } from '../../testing/button.tsx'
import code from './use-theme-by-class-name.ts?raw'

const THEMES = { light: 'theme-light', dark: 'theme-dark' } as const

const meta = {
	title: 'react/hooks/useThemeByClassName',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'React hook that returns the current theme (from element class) and a setter. Subscribes to class changes on the element so the returned theme stays in sync.',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'Observe and set theme by class name on document.documentElement. The hook reads the first matching theme class and setTheme updates the element class list.',
		},
		source: {
			code: dedent`
				const themes = { light: 'theme-light', dark: 'theme-dark' }
				const [theme, setTheme] = useThemeByClassName({ themes, theme: 'light' })
				setTheme('dark')
				setTheme('light')
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme, setTheme] = useThemeByClassName({
			themes: THEMES,
			theme: 'light',
		})

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
				</div>
				<StoryCard title="Current theme (from document.documentElement class)" appearance="output">
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
	},
}

export const CustomElement: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'Observe and set theme by class name on a specific element by passing it in options.element.',
		},
		source: {
			code: dedent`
				const [element, setElement] = useState<HTMLDivElement | null>(null)
				const [theme, setTheme] = useThemeByClassName({
					themes: { light: 'theme-light', dark: 'theme-dark' },
					theme: 'light',
					element: element ?? undefined,
				})
				return <div ref={setElement}>...</div>
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [element, setElement] = useState<HTMLDivElement | null>(null)
		const [theme, setTheme] = useThemeByClassName({
			themes: THEMES,
			theme: 'light',
			element: element ?? undefined,
		})

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div
					ref={setElement}
					className="rounded border border-gray-300 p-4"
					data-testid="target-element"
				>
					Target element (theme class is observed here)
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
	},
}

export const SyncFromElsewhere: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'The hook stays in sync when the element class is changed outside of setTheme (e.g. by another component or direct DOM mutation).',
		},
		source: {
			code: dedent`
				const [theme] = useThemeByClassName({ themes, theme: 'light' })
				// When something else adds/removes theme classes on the element,
				// theme updates automatically
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme] = useThemeByClassName({
			themes: THEMES,
			theme: 'light',
		})

		const toggleExternally = () => {
			const el = document.documentElement
			const hasDark = el.classList.contains('theme-dark')
			if (hasDark) {
				el.classList.remove('theme-dark')
				el.classList.add('theme-light')
			} else {
				el.classList.remove('theme-light')
				el.classList.add('theme-dark')
			}
		}

		return (
			<div className="flex flex-col gap-4 font-sans">
				<Button onPress={toggleExternally}>Toggle theme via classList (external)</Button>
				<StoryCard appearance="output">
					<p className="mb-2">Hook value (updates when class changes elsewhere):</p>
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: /Toggle theme via classList/ })
		await userEvent.click(btn)
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
		await userEvent.click(btn)
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code },
	}),
	decorators: [showSource()],
}
