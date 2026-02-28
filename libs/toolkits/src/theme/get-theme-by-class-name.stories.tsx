import { defineDocsParam, StoryCard, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useCallback, useEffect, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { getThemeByClassName } from '#just-web/toolkits'
import { LogPanel } from '../testing/log-panel.tsx'
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
	light: 'light',
	dark: 'dark',
} as const

type ThemeButtonProps = {
	theme: string
	onChange: (theme: keyof typeof themes) => void
	currentTheme: string | undefined
}

function ThemeButton({ theme, onChange, currentTheme }: ThemeButtonProps) {
	return (
		<button
			onClick={() => onChange(theme as keyof typeof themes)}
			className={
				currentTheme === theme
					? 'bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded font-medium transition-colors'
					: 'bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded font-medium transition-colors'
			}
		>
			{theme}
		</button>
	)
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Get the current theme from document class names.',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>getThemeByClassName(&#123; themes, defaultTheme &#125;)</code> returns the theme
						key whose class is present on the element (defaults to document.documentElement).
					</p>
				</>
			),
		}),
		showDocSource({
			placement: 'before',
			source: dedent`
				getThemeByClassName({
				  themes: { light: 'light', dark: 'dark' },
				  defaultTheme: 'dark',
				})
			`,
		}),
	],
	render: () => {
		const [currentTheme, setCurrentTheme] = useState<string | undefined>()

		useEffect(() => {
			const theme = getThemeByClassName({
				themes,
				defaultTheme: 'dark',
			})
			setCurrentTheme(theme)
		}, [])

		const handleThemeChange = (theme: keyof typeof themes) => {
			for (const [key, value] of Object.entries(themes)) {
				if (key === theme) {
					document.documentElement.classList.add(value)
				} else {
					document.documentElement.classList.remove(value)
				}
			}
			setCurrentTheme(theme)
		}

		return (
			<StoryCard title="Current theme by class name" appearance="output">
				<div className="p-4">
					<div className="mb-4 font-medium">
						<span className="font-bold">Current Theme:</span>{' '}
						<span data-testid="current-theme">{currentTheme}</span>
					</div>
					<div className="flex gap-2">
						{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
							<ThemeButton
								key={theme}
								theme={theme}
								onChange={handleThemeChange}
								currentTheme={currentTheme}
							/>
						))}
					</div>
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		const btn = canvas.getByRole('button', { name: 'light' })
		await step('light', async () => {
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
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
	loaders: [
		() => {
			document.documentElement.classList.remove('light', 'dark')
			const theme = getThemeByClassName({
				themes,
				defaultTheme: 'dark',
			})
			return { theme }
		},
	],
	render: (_, { loaded: { theme } }) => {
		const value = document.documentElement.className
		return (
			<StoryCard title="Default theme when no class matches" appearance="output">
				<div className="font-sans p-4">
					<p>
						Current theme:{' '}
						<span data-testid="current-theme">{theme === undefined ? '(undefined)' : theme}</span>
					</p>
					<p>Class name: {value === '' ? '(empty)' : value}</p>
				</div>
			</StoryCard>
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
		showDocSource({
			placement: 'before',
			source: dedent`getThemeByClassName({ themes, defaultTheme: 'dark', element: myElement })`,
		}),
	],
	render: () => {
		const [log, setLog] = useState<string[]>([])
		const [currentTheme, setCurrentTheme] = useState<string | undefined>()
		const customElementRef = useRef<HTMLDivElement>(null)

		const handleThemeChange = useCallback((theme: keyof typeof themes) => {
			if (!customElementRef.current) return
			for (const [key, value] of Object.entries(themes)) {
				if (key === theme) {
					customElementRef.current.classList.add(value)
				} else {
					customElementRef.current.classList.remove(value)
				}
			}
			const result = getThemeByClassName({
				themes,
				defaultTheme: 'dark',
				element: customElementRef.current,
			})
			setCurrentTheme(result)
			setLog((prev) => [...prev, `theme: ${result}`])
		}, [])

		return (
			<StoryCard appearance="output">
				<div className="font-sans p-4">
					<div className="flex flex-wrap gap-2 mb-4">
						{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
							<ThemeButton
								key={theme}
								theme={theme}
								onChange={handleThemeChange}
								currentTheme={currentTheme}
							/>
						))}
					</div>
					<div ref={customElementRef} className="p-4 border border-gray-300 mb-4">
						Custom element to observe
					</div>
					<LogPanel title="Theme by className" log={log} />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas, step }) => {
		await step('light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: light')).toBeInTheDocument()
		})
		await step('dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByText('theme: dark')).toBeInTheDocument()
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
	render: () => {
		const theme = getThemeByClassName({
			themes: {
				light: 'not-exist-theme-light',
				dark: 'not-exist-theme-dark',
			},
			defaultTheme: 'dark',
		})
		return (
			<StoryCard appearance="output">
				<div>Current theme: {theme}</div>
			</StoryCard>
		)
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showDocSource()],
}
