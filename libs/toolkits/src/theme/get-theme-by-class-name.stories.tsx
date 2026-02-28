import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { twMerge } from 'tailwind-merge'
import { getThemeByClassName, setThemeByClassName } from '#just-web/toolkits'
import { Button } from '../testing/button.tsx'
import source from './get-theme-by-class-name.ts?raw'

const meta = {
	title: 'theme/getThemeByClassName',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility that determines the current theme based on element class name against a themes map.',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
	light: ['light', 'text-black', 'bg-white'],
	dark: ['dark', 'text-white', 'bg-black'],
} as const

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Get the current theme from document class names.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				getThemeByClassName({
				  themes: { light: 'light', dark: 'dark' },
				  theme: 'dark',
				})
			`,
		}),
	],
	render: () => {
		const [currentTheme, setCurrentTheme] = useState<string | undefined>()

		useEffect(() => {
			const theme = getThemeByClassName({
				themes: { light: 'light', dark: 'dark' },
				theme: 'dark',
			})
			setCurrentTheme(theme)
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								setThemeByClassName({ themes, theme })
								setCurrentTheme(theme)
							}}
						>
							{theme}
						</Button>
					))}
				</div>
				<div className="p-4 border rounded-md border-gray-300 mb-4">
					Current theme: <span data-testid="current-theme">{currentTheme}</span>
				</div>
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
	},
}

export const DefaultTheme: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Falls back to default theme when class name is not found.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				document.documentElement.classList.remove('light', 'dark')
				getThemeByClassName({ themes, theme: 'dark' })
			`,
		}),
	],
	loaders: [
		() => {
			document.documentElement.classList.remove('light', 'dark')
			const theme = getThemeByClassName({
				themes,
				theme: 'dark',
			})
			return { theme }
		},
	],
	render: (_, { loaded: { theme } }) => {
		const value = document.documentElement.className
		return (
			<div className="flex flex-col gap-4">
				<div className="p-4 border rounded-md border-gray-300 mb-4">
					<p>
						Current theme:{' '}
						<span data-testid="current-theme">{theme === undefined ? '(undefined)' : theme}</span>
					</p>
					<p>Class name: {value === '' ? '(empty)' : value}</p>
				</div>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
	},
}

export const CustomElement: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets theme from a specific element.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`getThemeByClassName({ themes, theme: 'dark', element: myElement })`,
		}),
	],
	render: () => {
		const [currentTheme, setCurrentTheme] = useState<string | undefined>()
		const customElementRef = useRef<HTMLDivElement>(null)

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								setThemeByClassName({
									themes,
									theme,
									element: customElementRef.current ?? undefined,
								})
								setCurrentTheme(theme)
							}}
						>
							{theme}
						</Button>
					))}
				</div>
				<div
					ref={customElementRef}
					className={twMerge(
						'p-4 border rounded-md border-gray-300 mb-4',
						currentTheme ? (themes[currentTheme as keyof typeof themes] as any) : '',
					)}
				>
					Current theme: {currentTheme}
				</div>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByText('Current theme: light')).toBeInTheDocument()
		})
		await step('dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByText('Current theme: dark')).toBeInTheDocument()
		})
	},
}

export const InvalidTheme: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Falls back to default theme when no theme class is present.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				getThemeByClassName({
					themes: { light: 'not-exist-theme-light', dark: 'not-exist-theme-dark' },
					theme: 'dark',
				})
			`,
		}),
	],
	render: () => {
		const theme = getThemeByClassName({
			themes: {
				light: 'not-exist-theme-light',
				dark: 'not-exist-theme-dark',
			},
			theme: 'dark',
		})
		return (
			<div className="flex flex-col gap-4">
				<div className="p-4 border rounded-md border-gray-300 mb-4">Current theme: {theme}</div>
			</div>
		)
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()],
}
