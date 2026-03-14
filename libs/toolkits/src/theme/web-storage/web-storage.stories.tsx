import { readWebStorage, themeEntry, writeWebStorage } from '@just-web/toolkits/theme.js'
import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { Button } from '../../testing/button.tsx'
import { ThemeResultCard } from '../../testing/theme/theme-result-card.tsx'

const meta = {
	title: 'theme/web-storage',
	tags: ['func', 'version:2.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Generic low-level functions for reading and writing theme via any Storage (localStorage or sessionStorage): readWebStorage, writeWebStorage. Requires options.storage.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
	current: 'theme-current',
	next: 'theme-next',
	grayscale: 'theme-grayscale',
	'high-contrast': 'theme-high-contrast'
} as const

type ExampleTheme = keyof typeof themes

const STORAGE_KEY = 'theme-ws-func-demo'
const STORAGE_KEY_LOCAL = 'theme-ws-func-local'
const STORAGE_KEY_SESSION = 'theme-ws-func-session'

export const Read: Story = {
	name: 'readWebStorage',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'readWebStorage(themes, storageKey, { storage }) reads the current theme from the given Storage.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readWebStorage(themes, storageKey, {
				  storage: window.localStorage
				})
			`
		})
	],
	loaders: [
		() => {
			writeWebStorage(themes, STORAGE_KEY, themeEntry(themes, 'grayscale'), {
				storage: window.localStorage
			})
			return {}
		}
	],
	render: () => {
		const result = readWebStorage(themes, STORAGE_KEY, {
			storage: window.localStorage
		})
		return (
			<ThemeResultCard
				title="readWebStorage() result"
				data-testid="store-read-result"
				result={result ?? { theme: 'grayscale', value: themes.grayscale }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const ReadWhenEmpty: Story = {
	name: 'readWebStorage: undefined when empty',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When nothing is stored at the key, readWebStorage returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readWebStorage(themes, storageKey, { storage: window.localStorage })
				// undefined when empty
			`
		})
	],
	loaders: [
		() => {
			window.localStorage.removeItem(STORAGE_KEY)
			return {}
		}
	],
	render: () => {
		const result = readWebStorage(themes, STORAGE_KEY, {
			storage: window.localStorage
		})
		return (
			<ThemeResultCard
				title="readWebStorage() result"
				data-testid="store-read-result"
				result={result !== undefined ? result : { theme: undefined, value: undefined }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)')
	}
}

export const Write: Story = {
	name: 'writeWebStorage',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'writeWebStorage(themes, storageKey, entry, { storage }) persists the theme to the given Storage.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				writeWebStorage(themes, storageKey, themeEntry(themes, 'grayscale'), {
				  storage: window.localStorage
				})
			`
		})
	],
	loaders: [
		() => {
			window.localStorage.removeItem(STORAGE_KEY)
			return {}
		}
	],
	render: () => {
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = readWebStorage(themes, STORAGE_KEY, { storage: window.localStorage })
			return r?.theme ?? null
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themes) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`write-${theme}`}
							onPress={() => {
								writeWebStorage(themes, STORAGE_KEY, themeEntry(themes, theme), {
									storage: window.localStorage
								})
								setCurrentTheme(theme)
							}}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="readWebStorage() after write"
					data-testid="store-write-result"
					result={
						currentTheme
							? { theme: currentTheme, value: themes[currentTheme] }
							: { theme: 'current', value: themes.current }
					}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('write-grayscale'))
		await expect(canvas.getByTestId('store-write-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-write-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const StorageOption: Story = {
	name: 'storage: localStorage vs sessionStorage',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Pass options.storage to target localStorage or sessionStorage. Each Storage is independent.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>readWebStorage</code> and <code>writeWebStorage</code> require{' '}
					<code>options.storage</code> (e.g. <code>window.localStorage</code> or{' '}
					<code>window.sessionStorage</code>). Used by readLocalStorage/writeLocalStorage and
					readSessionStorage/writeSessionStorage.
				</p>
			)
		}),
		showSource({
			source: dedent`
				// localStorage
				readWebStorage(themes, key, { storage: window.localStorage })
				writeWebStorage(themes, key, entry, { storage: window.localStorage })

				// sessionStorage
				readWebStorage(themes, key, { storage: window.sessionStorage })
				writeWebStorage(themes, key, entry, { storage: window.sessionStorage })
			`
		})
	],
	loaders: [
		() => {
			window.localStorage.removeItem(STORAGE_KEY_LOCAL)
			window.sessionStorage.removeItem(STORAGE_KEY_SESSION)
			writeWebStorage(themes, STORAGE_KEY_LOCAL, themeEntry(themes, 'current'), {
				storage: window.localStorage
			})
			writeWebStorage(themes, STORAGE_KEY_SESSION, themeEntry(themes, 'grayscale'), {
				storage: window.sessionStorage
			})
			return {}
		}
	],
	render: () => {
		const localResult = readWebStorage(themes, STORAGE_KEY_LOCAL, {
			storage: window.localStorage
		})
		const sessionResult = readWebStorage(themes, STORAGE_KEY_SESSION, {
			storage: window.sessionStorage
		})
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="localStorage"
					data-testid="local-result"
					result={localResult ?? { theme: 'current', value: themes.current }}
				/>
				<ThemeResultCard
					title="sessionStorage"
					data-testid="session-result"
					result={sessionResult ?? { theme: 'grayscale', value: themes.grayscale }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('local-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('session-result')).toHaveTextContent('theme: grayscale')
	}
}
