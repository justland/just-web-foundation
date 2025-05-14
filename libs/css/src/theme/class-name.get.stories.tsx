import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent } from '@storybook/test'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getThemeByClassName } from '../index.ts'
import { LogPanel } from '../testing/log-panel.tsx'

const meta = {
	title: 'theme/getThemeByClassName',
	tags: ['autodocs', 'new', 'version:1.0.0'],
	parameters: defineDocsParam({
		description: {
			component: 'A utility function that determines the current theme based on element class name.',
		},
	}),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Demonstrates how `getThemeByClassName` gets the current theme based on class names.',
		},
	}),
	render: () => {
		const [currentTheme, setCurrentTheme] = useState<string>()
		const themes = {
			light: 'light',
			dark: 'dark',
		}

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
			<div className="p-4">
				<div className="mb-4 font-medium">
					<span className="font-bold">Current Theme:</span> <span data-testid="current-theme">{currentTheme}</span>
				</div>
				<div className="flex gap-2">
					{Object.keys(themes).map((theme: any) => (
						<ThemeButton key={theme} theme={theme} onChange={handleThemeChange} currentTheme={currentTheme} />
					))}
				</div>
			</div>
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
			<div className="font-sans">
				<p>
					Current theme: <span data-testid="current-theme">{theme === undefined ? '(undefined)' : theme}</span>
				</p>
				<p>Class name: {value === '' ? '(empty)' : value}</p>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
	},
}

export const CustomElement: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Gets theme from specific element.',
		},
	}),
	render: () => {
		const [log, setLog] = useState<string[]>([])
		const [currentTheme, setCurrentTheme] = useState<string>()
		const customElementRef = useRef<HTMLDivElement>(null)

		const handleThemeChange = useCallback(
			(theme: keyof typeof themes) => {
				if (!customElementRef.current) return
				for (const [key, value] of Object.entries(themes)) {
					if (key === theme) {
						customElementRef.current?.classList.add(value)
					} else {
						customElementRef.current?.classList.remove(value)
					}
				}
				const result = getThemeByClassName({
					themes,
					defaultTheme: 'dark',
					element: customElementRef.current,
				})

				setCurrentTheme(result)
				setLog((prev) => [...prev, `theme: ${result}`])
			},
			[customElementRef.current],
		)

		return (
			<div className="font-sans">
				<div className="flex flex-wrap gap-2 mb-4">
					{Object.keys(themes).map((theme: any) => (
						<ThemeButton key={theme} theme={theme} onChange={handleThemeChange} currentTheme={currentTheme} />
					))}
				</div>
				<div ref={customElementRef} className="p-4 border border-gray-300 mb-4">
					Custom Element to observe
				</div>
				<LogPanel title="Theme by className" log={log} />
			</div>
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
			story: 'Falls back to default theme when class name is not found.',
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
		return <div>Current theme: {theme}</div>
	},
}

const themes = {
	light: 'light-theme',
	dark: 'dark-theme',
}

type ThemeButtonProps<Theme extends string> = {
	theme: Theme
	onChange: (theme: Theme) => void
	currentTheme: string | undefined
}

function ThemeButton<Theme extends string>({ theme, onChange, currentTheme }: ThemeButtonProps<Theme>) {
	return (
		<button
			onClick={() => onChange(theme)}
			className={`
								px-4 py-2
								rounded
								font-medium
								transition-colors
								${
									currentTheme === theme
										? 'bg-blue-600 text-white hover:bg-blue-700'
										: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
								}
							`}
		>
			{theme as string}
		</button>
	)
}
