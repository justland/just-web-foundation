import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect, userEvent } from 'storybook/test'
import { useThemeByLocalStorage } from '#just-web/toolkits/react'
import { Button } from '../../testing/button.tsx'
import code from './use-theme-by-local-storage.ts?raw'

const STORAGE_KEY = 'use-theme-by-local-storage-story'
const THEMES = { light: { themeValue: 'theme-light' }, dark: { themeValue: 'theme-dark' } } as const

const meta = {
	title: 'react/hooks/useThemeByLocalStorage',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'React hook that returns the current theme (from localStorage) and a setter. Subscribes to storage changes so the returned theme stays in sync across tabs.'
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
				'Observe and set theme from localStorage. The theme persists across page reloads and stays in sync across browser tabs via StorageEvent.'
		},
		source: {
			code: dedent`
				const themes = { light: { themeValue: 'theme-light' }, dark: { themeValue: 'theme-dark' } }
				const [theme, setTheme] = useThemeByLocalStorage(themes, {
					storageKey: 'app-theme',
					defaultTheme: 'light'
				})
				setTheme('dark')
				setTheme('light')
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme, setTheme] = useThemeByLocalStorage(THEMES, {
			storageKey: STORAGE_KEY,
			defaultTheme: 'light'
		})

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
				</div>
				<StoryCard title="Current theme (from localStorage)" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	afterEach: () => {
		window.localStorage.removeItem(STORAGE_KEY)
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

export const StorageKey: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Pass options.storageKey to control the localStorage key used for persistence.'
		},
		source: {
			code: dedent`
				const [theme, setTheme] = useThemeByLocalStorage(themes, {
					storageKey: 'my-app-theme',
					defaultTheme: 'light'
				})
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme, setTheme] = useThemeByLocalStorage(THEMES, {
			storageKey: STORAGE_KEY,
			defaultTheme: 'light'
		})

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
				</div>
				<StoryCard title="localStorage key" appearance="output">
					<pre data-testid="storage-key" className="font-mono">
						{STORAGE_KEY}
					</pre>
				</StoryCard>
				<StoryCard title="Current theme" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	afterEach: () => {
		window.localStorage.removeItem(STORAGE_KEY)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByRole('button', { name: 'Set dark' }))
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code }
	}),
	decorators: [showSource()]
}
