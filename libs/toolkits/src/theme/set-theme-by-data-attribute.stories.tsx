import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useCallback, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { setThemeByDataAttribute } from '#just-web/toolkits'
import { useAttribute } from '#just-web/toolkits/react'
import { Button } from '../testing/button.tsx'
import source from './set-theme-by-data-attribute.ts?raw'

const meta = {
	title: 'theme/setThemeByDataAttribute',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				"A utility that sets the theme by applying the theme's value to a data attribute on an element."
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
	light: 'light',
	dark: 'dark'
} as const

const ATTRIBUTE_NAME = 'data-theme'

export const BasicUsage: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>setThemeByDataAttribute</code> by default sets the theme on{' '}
					<code>document.documentElement</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				setThemeByDataAttribute({
					attributeName: 'data-theme',
					themes: { light: 'light', dark: 'dark' },
					theme: ${'<value>'},
				})
			`
		})
	],
	render: () => {
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME)

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								setThemeByDataAttribute({
									themes,
									theme,
									attributeName: ATTRIBUTE_NAME
								})
							}}
						>
							{theme}
						</Button>
					))}
				</div>
				<span>
					Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
				</span>
				<StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
					<code>{dataTheme ?? '(not set)'}</code>
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

export const WithThemeArray: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When a theme value is an array, only the <strong>first</strong> value is used for the
						data attribute.
					</p>
					<p>The rest of the values are ignored.</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				setThemeByDataAttribute({
					attributeName: 'data-theme',
					themes: {
						light: ['light', 'app:text-gray-100', 'app:bg-gray-800'],
						dark: ['dark', 'app:text-gray-800', 'app:bg-gray-100'],
					},
					theme: ${'<value>'}
				})
			`
		})
	],
	render: () => {
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME)
		const themesWithArrays = {
			light: ['light', 'app:text-gray-100', 'app:bg-gray-800'],
			dark: ['dark', 'app:text-gray-800', 'app:bg-gray-100']
		} as const

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themesWithArrays) as (keyof typeof themesWithArrays)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								setThemeByDataAttribute({
									themes: themesWithArrays,
									theme,
									attributeName: ATTRIBUTE_NAME
								})
							}}
						>
							{theme}
						</Button>
					))}
				</div>
				<span>
					Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
				</span>
				<StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
					<code>{dataTheme ?? '(not set)'}</code>
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
					The data attribute is set on the target div below instead of{' '}
					<code>document.documentElement</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`setThemeByDataAttribute({
				attributeName: 'data-theme',
				element: myElement,
				themes: { light: 'light', dark: 'dark' },
				theme: ${'<value>'}
			})`
		})
	],
	render: () => {
		const customElementRef = useRef<HTMLDivElement>(null)
		const [customElement, setCustomElement] = useState<HTMLDivElement | null>(null)
		const [selectedTheme, setSelectedTheme] = useState<keyof typeof themes | null>(null)
		const setRef = useCallback((el: HTMLDivElement | null) => {
			customElementRef.current = el
			setCustomElement(el)
		}, [])
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME, customElement ?? undefined)

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								const el = customElementRef.current
								if (el) {
									setThemeByDataAttribute({
										themes,
										theme,
										attributeName: ATTRIBUTE_NAME,
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
				<StoryCard title="customElement.getAttribute('data-theme')" appearance="output">
					<code>{dataTheme ?? '(not set)'}</code>
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
