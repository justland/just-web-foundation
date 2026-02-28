import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { observeThemeByClassName, setThemeByClassName } from '#just-web/toolkits'
import { useAttribute } from '#just-web/toolkits/react'
import { Button } from '../testing/button.tsx'
import source from './observe-theme-by-class-name.ts?raw'

const themes = {
	light: ['your-light-class', 'app:text-black', 'app:bg-white'],
	dark: ['your-dark-class', 'app:text-white', 'app:bg-black'],
} as const

const classThemes = { light: 'your-light-class', dark: 'your-dark-class' } as const

const meta = {
	title: 'theme/observeThemeByClassName',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes element class changes and invokes a handler when the theme (by class) changes.',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Observe theme changes on <code>document.documentElement.className</code>.
				</p>
			),
		}),
		showSource({
			source: dedent`
				observeThemeByClassName({
				  themes: { light: 'your-light-class', dark: 'your-dark-class' },
				  handler: (value) => setTheme(value)
				})
			`,
		}),
	],
	render: () => {
		const [theme, setTheme] = useState<string>()
		const [className, setClassName] = useState<string>()

		useEffect(() => {
			const observer = observeThemeByClassName({
				themes: { light: 'your-light-class', dark: 'your-dark-class' },
				handler: (value) => {
					setTheme(value)
					setClassName(document.documentElement.className)
				},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(classThemes) as (keyof typeof classThemes)[]).map((theme) => (
						<Button key={theme} onPress={() => setThemeByClassName({ themes: classThemes, theme })}>
							{theme}
						</Button>
					))}
				</div>
				<StoryCard title="Theme" appearance="output">
					<code data-testid="theme">{theme ?? '(empty)'}</code>
				</StoryCard>
				<StoryCard title="documentElement.className" appearance="output">
					<code data-testid="document-class-name">{className ?? '(empty)'}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('(empty) -> light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('theme')).toHaveTextContent('light')
		})
		await step('light -> dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('theme')).toHaveTextContent('dark')
		})
	},
}

export const WithThemeArray: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Theme keys can map to different class values (e.g. your-light-theme, your-dark-theme).',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					When a theme value is an array, only the <strong>first</strong> value is used to determine
					the theme.
				</p>
			),
		}),
		showSource({
			source: dedent`
				observeThemeByClassName({
					themes: {
						light: ['your-light-class', 'app:text-black', 'app:bg-white'],
						dark: ['your-dark-class', 'app:text-white', 'app:bg-black'],
					},
					handler: (value) => setTheme(value),
				})
			`,
		}),
	],
	render: () => {
		const [theme, setTheme] = useState<string>()
		const [className, setClassName] = useState<string>()

		useEffect(() => {
			const observer = observeThemeByClassName({
				themes: themes,
				handler: (value) => {
					setTheme(value)
					setClassName(document.documentElement.className)
				},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((t) => (
						<Button key={t} onPress={() => setThemeByClassName({ themes, theme: t })}>
							{t}
						</Button>
					))}
				</div>
				<StoryCard title="Theme" appearance="output">
					<code data-testid="theme">{theme ?? '(empty)'}</code>
				</StoryCard>
				<StoryCard title="documentElement.className" appearance="output">
					<code data-testid="document-class-name">{className ?? '(empty)'}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('(empty) -> light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('theme')).toHaveTextContent('light')
		})
		await step('light -> dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('theme')).toHaveTextContent('dark')
		})
	},
}

export const WithDefaultTheme: Story = {
	name: 'With theme',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'When class is cleared, handler receives options.theme instead of undefined.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				observeThemeByClassName({
				  themes: { light: 'your-light-class', dark: 'your-dark-class' },
				  handler: (value) => setTheme(value),
				  theme: 'light',
				})
			`,
		}),
	],
	render: () => {
		const [theme, setTheme] = useState<string>()
		const [className] = useAttribute('class')

		useEffect(() => {
			const observer = observeThemeByClassName({
				theme: 'unset',
				themes: classThemes,
				handler: (value) => {
					setTheme(value)
				},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((t) => (
						<Button
							key={t}
							onPress={() =>
								setThemeByClassName({
									themes: classThemes,
									theme: t,
								})
							}
						>
							{t}
						</Button>
					))}
					<Button
						onPress={() => {
							document.documentElement.classList.remove(...Object.values(classThemes))
						}}
					>
						Clear
					</Button>
				</div>
				<StoryCard title="Theme" appearance="output">
					<code data-testid="theme">{theme ?? '(empty)'}</code>
				</StoryCard>
				<StoryCard title="documentElement.className" appearance="output">
					<code data-testid="document-class-name">{className ?? '(empty)'}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('(empty) -> light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('theme')).toHaveTextContent('light')
		})
		await step('light -> dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('theme')).toHaveTextContent('dark')
		})
		await step('dark -> unset (theme)', async () => {
			const btn = canvas.getByRole('button', { name: 'Clear' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('theme')).toHaveTextContent('unset')
		})
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()],
}
