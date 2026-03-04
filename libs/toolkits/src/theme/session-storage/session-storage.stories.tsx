import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import type { ThemeEntry } from '#just-web/toolkits/theme'
import { readSessionStorage, themeEntry, writeSessionStorage } from '#just-web/toolkits/theme'
import { Button } from '../../testing/button.tsx'
import { ThemeResultCard } from '../../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../../testing/theme/theme-store-demo.tsx'

const meta = {
	title: 'theme/session-storage',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Low-level functions for reading and writing theme via sessionStorage: readSessionStorage, writeSessionStorage. Persists per tab. No subscribe at function level.'
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

const STORAGE_KEY = 'theme-ss-func-demo'

function createSessionStorageStore(storageKey: string) {
	return {
		read: () => readSessionStorage(themes, storageKey),
		write: (entry: ThemeEntry<typeof themes> | undefined) =>
			writeSessionStorage(themes, storageKey, entry),
		subscribe: undefined as undefined
	}
}

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story:
				'Interactive demo: readSessionStorage, writeSessionStorage. No subscribe at function level.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = {
				  read: () => readSessionStorage(themes, storageKey),
				  write: (entry) => writeSessionStorage(themes, storageKey, entry),
				  subscribe: undefined
				}
				<ThemeStoreDemo store={store} themes={themes} />
			`
		})
	],
	loaders: [
		() => {
			window.sessionStorage.removeItem(STORAGE_KEY)
			return {}
		}
	],
	render: () => {
		const store = createSessionStorageStore(STORAGE_KEY)
		return <ThemeStoreDemo store={store} themes={themes} />
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'))
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-read'))
		await expect(canvas.getByTestId('theme-store-demo-read')).toHaveTextContent('grayscale')
	}
}

export const Read: Story = {
	name: 'readSessionStorage',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'readSessionStorage(themes, storageKey, options?) reads the current theme from sessionStorage.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readSessionStorage(themes, storageKey)
			`
		})
	],
	loaders: [
		() => {
			writeSessionStorage(themes, STORAGE_KEY, themeEntry(themes, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const result = readSessionStorage(themes, STORAGE_KEY)
		return (
			<ThemeResultCard
				title="readSessionStorage() result"
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
	name: 'readSessionStorage: undefined when empty',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When nothing is stored at the key, readSessionStorage returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readSessionStorage(themes, storageKey)
				// undefined when empty
			`
		})
	],
	loaders: [
		() => {
			window.sessionStorage.removeItem(STORAGE_KEY)
			return {}
		}
	],
	render: () => {
		const result = readSessionStorage(themes, STORAGE_KEY)
		return (
			<ThemeResultCard
				title="readSessionStorage() result"
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
	name: 'writeSessionStorage',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'writeSessionStorage(themes, storageKey, entry) persists the theme to sessionStorage.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				writeSessionStorage(themes, storageKey, themeEntry(themes, 'high-contrast'))
			`
		})
	],
	loaders: [
		() => {
			window.sessionStorage.removeItem(STORAGE_KEY)
			return {}
		}
	],
	render: () => {
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = readSessionStorage(themes, STORAGE_KEY)
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
								writeSessionStorage(themes, STORAGE_KEY, themeEntry(themes, theme))
								setCurrentTheme(theme)
							}}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="readSessionStorage() after write"
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

const STORAGE_KEY_PARSE = 'theme-ss-func-parse'

/** Custom parse: accept legacy { theme } without value, coerce to themeEntry */
function customParseLegacy<Themes extends typeof themes>(
	themesMap: Themes,
	value: string | null | undefined
): ThemeEntry<Themes> | undefined {
	let parsed: { theme?: string } | undefined
	try {
		parsed = value ? JSON.parse(value) : undefined
	} catch {
		return undefined
	}
	if (!parsed?.theme || typeof parsed.theme !== 'string' || !(parsed.theme in themesMap))
		return undefined
	const themeKey = parsed.theme as keyof Themes
	return { theme: themeKey, value: themesMap[themeKey] }
}

export const ParseOption: Story = {
	name: 'options.parse',
	tags: ['props', 'use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'The options.parse allows you to provide a custom parse function. Use it when migrating from legacy formats.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pre-seeded sessionStorage with legacy format <code>{`{ theme: "grayscale" }`}</code> (no
					value).
				</p>
			)
		}),
		showSource({
			source: dedent`
				const result = readSessionStorage(themes, storageKey, { parse: customParse })
			`
		})
	],
	loaders: [
		() => {
			window.sessionStorage.setItem(STORAGE_KEY_PARSE, JSON.stringify({ theme: 'grayscale' }))
			return {}
		}
	],
	render: () => {
		const result = readSessionStorage(themes, STORAGE_KEY_PARSE, {
			parse: customParseLegacy
		})
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="readSessionStorage() with custom parse"
					data-testid="store-read-result"
					result={result ?? { theme: 'grayscale', value: themes.grayscale }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const StorageKey: Story = {
	name: 'storageKey',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pass <code>storageKey</code> to determine the sessionStorage key used for persistence.
				</p>
			)
		}),
		showSource({
			source: dedent`
				readSessionStorage(themes, storageKey)
				writeSessionStorage(themes, storageKey, themeEntry(themes, 'current'))
			`
		})
	],
	loaders: [
		() => {
			writeSessionStorage(themes, STORAGE_KEY, themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const result = readSessionStorage(themes, STORAGE_KEY)
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="sessionStorage key" appearance="output">
					<code>{STORAGE_KEY}</code>
				</StoryCard>
				<ThemeResultCard
					title="readSessionStorage() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'current', value: themes.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current')
	}
}

const THEMEMAP_STORAGE_KEY = 'theme-ss-func-thememap'

export const ThemeMapStringValue: Story = {
	name: 'themes: string value',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'themes values can be a single string per theme.'
		}
	}),
	decorators: [
		withStoryCard({
			content: <p>Each theme maps to one string value.</p>
		}),
		showSource({
			source: dedent`
				readSessionStorage(themes, storageKey)
				writeSessionStorage(themes, storageKey, themeEntry(themes, 'current'))
			`
		})
	],
	loaders: [
		() => {
			window.sessionStorage.removeItem(THEMEMAP_STORAGE_KEY)
			writeSessionStorage(themes, THEMEMAP_STORAGE_KEY, themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const result = readSessionStorage(themes, THEMEMAP_STORAGE_KEY)
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="readSessionStorage() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'current', value: themes.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current')
	}
}

const themesArray = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100'],
	'high-contrast': 'theme-high-contrast'
} as const

export const ThemeMapArrayValues: Story = {
	name: 'themes: array values',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'themes values can be string[]. Stored and retrieved value is the full array.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Each theme can map to <code>string[]</code>. <code>ThemeResult.value</code> persists the
					full array.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themes = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100'],
					'high-contrast': 'theme-high-contrast'
				} as const

				readSessionStorage(themes, storageKey)
				writeSessionStorage(themes, storageKey, themeEntry(themes, 'grayscale'))
			`
		})
	],
	loaders: [
		() => {
			window.sessionStorage.removeItem(THEMEMAP_STORAGE_KEY)
			writeSessionStorage(themesArray, THEMEMAP_STORAGE_KEY, themeEntry(themesArray, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const result = readSessionStorage(themesArray, THEMEMAP_STORAGE_KEY)
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="readSessionStorage() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'grayscale', value: themesArray.grayscale }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: [theme-grayscale, app:bg-gray-100]'
		)
	}
}
