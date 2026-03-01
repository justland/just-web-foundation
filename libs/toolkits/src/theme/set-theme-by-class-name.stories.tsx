import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useCallback, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { setThemeByClassName } from '#just-web/toolkits'
import { useAttribute } from '#just-web/toolkits/react'
import { Button } from '../testing/button.tsx'
import source from './set-theme-by-class-name.ts?raw'

const meta = {
	title: 'theme/setThemeByClassName',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				"A utility that sets the theme by applying the theme's class name(s) to an element, removing other theme classes first."
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>setThemeByClassName</code> by default sets the theme on{' '}
					<code>document.documentElement</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				setThemeByClassName({
					themes: { light: 'your-light-class', dark: 'your-dark-class' },
					theme: ${'<value>'}
				})
			`
		})
	],
	render: () => {
		const [className] = useAttribute('class')

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(['light', 'dark'] as const).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								setThemeByClassName({
									themes: { light: 'your-light-class', dark: 'your-dark-class' },
									theme
								})
							}}
						>
							{theme}
						</Button>
					))}
				</div>
				<StoryCard title="document.documentElement.className" appearance="output">
					<code data-testid="class-name">{className}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('class-name')).toHaveTextContent('your-light-class')
		})
		await step('dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('class-name')).toHaveTextContent('your-dark-class')
		})
	}
}

export const WithThemeArray: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When a theme value is an array, <strong>all</strong> values are applied as class names.
					</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				setThemeByClassName({
					themes: {
						light: ['your-light-class', 'app:text-gray-100', 'app:bg-gray-800'],
						dark: ['your-dark-class', 'app:text-gray-800', 'app:bg-gray-100'],
					},
					theme: ${'<value>'}
				})
			`
		})
	],
	render: () => {
		const [className] = useAttribute('class')
		const themesWithArrays = {
			light: ['your-light-class', 'app:text-gray-100', 'app:bg-gray-800'],
			dark: ['your-dark-class', 'app:text-gray-800', 'app:bg-gray-100']
		} as const

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themesWithArrays) as (keyof typeof themesWithArrays)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								setThemeByClassName({
									themes: themesWithArrays,
									theme
								})
							}}
						>
							{theme}
						</Button>
					))}
				</div>
				<StoryCard title="document.documentElement.className" appearance="output">
					<code data-testid="class-name">{className}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('class-name')).toHaveTextContent(
				'your-light-class app:text-gray-100 app:bg-gray-800'
			)
		})
		await step('dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('class-name')).toHaveTextContent(
				'your-dark-class app:text-gray-800 app:bg-gray-100'
			)
		})
	}
}

export const WithCustomElement: Story = {
	tags: ['use-case'],
	parameters: {
		...defineDocsParam({
			description: {
				story: 'Set theme on a specific element via the element option.'
			}
		})
	},
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme classes are applied to the target div below instead of{' '}
					<code>document.documentElement</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`setThemeByClassName({
				themes: { light: 'your-light-class', dark: 'your-dark-class' },
				theme: ${'<value>'},
				element: myElement,
			})`
		})
	],
	render: () => {
		const customElementRef = useRef<HTMLDivElement>(null)
		const [customElement, setCustomElement] = useState<HTMLDivElement | null>(null)
		const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | null>(null)
		const setRef = useCallback((el: HTMLDivElement | null) => {
			customElementRef.current = el
			setCustomElement(el)
		}, [])
		const [className] = useAttribute('class', customElement ?? undefined)

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(['light', 'dark'] as const).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								const el = customElementRef.current
								if (el) {
									setThemeByClassName({
										themes: { light: 'your-light-class', dark: 'your-dark-class' },
										theme,
										element: el
									})
									setSelectedTheme(theme)
								}
							}}
						>
							{theme}
						</Button>
					))}
				</div>
				<div ref={setRef} className="min-h-8 rounded border border-gray-300 p-2">
					{selectedTheme !== null && (
						<span>
							Current theme: <span data-testid="current-theme">{selectedTheme}</span>
						</span>
					)}
				</div>
				<StoryCard title="customElement.className" appearance="output">
					<code>{className}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		})
		await step('dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
		})
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
