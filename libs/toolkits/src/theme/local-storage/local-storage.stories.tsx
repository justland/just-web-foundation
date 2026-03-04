import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import type { ThemeEntry } from '#just-web/toolkits/theme'
import { readLocalStorage, themeEntry, writeLocalStorage } from '#just-web/toolkits/theme'
import { Button } from '../../testing/button.tsx'
import { ThemeResultCard } from '../../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../../testing/theme/theme-store-demo.tsx'

const meta = {
	title: 'theme/local-storage',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Low-level functions for reading and writing theme via localStorage: readLocalStorage, writeLocalStorage. No subscribe at function level (store uses StorageEvent).'
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

const STORAGE_KEY = 'theme-ls-func-demo'

function createLocalStorageStore(storageKey: string) {
	return {
		read: () => readLocalStorage(themes, storageKey),
		write: (entry: ThemeEntry<typeof themes> | undefined) =>
			writeLocalStorage(themes, storageKey, entry),
		subscribe: undefined as undefined
	}
}

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story:
				'Interactive demo: readLocalStorage, writeLocalStorage. No subscribe (StorageEvent is at store level).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = {
				  read: () => readLocalStorage(themes, storageKey),
				  write: (entry) => writeLocalStorage(themes, storageKey, entry),
				  subscribe: undefined
				}
				<ThemeStoreDemo store={store} themes={themes} />
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
		const store = createLocalStorageStore(STORAGE_KEY)
		return <ThemeStoreDemo store={store} themes={themes} />
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'))
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-read'))
		await expect(canvas.getByTestId('theme-store-demo-read')).toHaveTextContent('grayscale')
	}
}

export const Read: Story = {
	name: 'readLocalStorage',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'readLocalStorage(themes, storageKey, options?) reads the current theme from localStorage.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readLocalStorage(themes, storageKey)
			`
		})
	],
	loaders: [
		() => {
			writeLocalStorage(themes, STORAGE_KEY, themeEntry(themes, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const result = readLocalStorage(themes, STORAGE_KEY)
		return (
			<ThemeResultCard
				title="readLocalStorage() result"
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
	name: 'readLocalStorage: undefined when empty',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When nothing is stored at the key, readLocalStorage returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readLocalStorage(themes, storageKey)
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
		const result = readLocalStorage(themes, STORAGE_KEY)
		return (
			<ThemeResultCard
				title="readLocalStorage() result"
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
	name: 'writeLocalStorage',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'writeLocalStorage(themes, storageKey, entry) persists the theme to localStorage.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				writeLocalStorage(themes, storageKey, themeEntry(themes, 'high-contrast'))
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
			const r = readLocalStorage(themes, STORAGE_KEY)
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
								writeLocalStorage(themes, STORAGE_KEY, themeEntry(themes, theme))
								setCurrentTheme(theme)
							}}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="readLocalStorage() after write"
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

const STORAGE_KEY_VALIDATION = 'theme-ls-func-validation'

export const StoredValidationShapeMismatch: Story = {
	name: 'Stored Validation: legacy format returns undefined',
	tags: ['integration'],
	parameters: defineDocsParam({
		description: {
			story:
				'Strict validation: when stored JSON has no value field (legacy format), readLocalStorage returns undefined.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pre-seeded localStorage with legacy format <code>{`{ theme: "dark" }`}</code> (no value).
					readLocalStorage returns undefined.
				</p>
			)
		}),
		showSource({
			source: dedent`
				// Legacy storage: { theme: "dark" } - no value field
				// readLocalStorage(themes, key) returns undefined (strict validation)
			`
		})
	],
	loaders: [
		() => {
			window.localStorage.setItem(STORAGE_KEY_VALIDATION, JSON.stringify({ theme: 'dark' }))
			return {}
		}
	],
	render: () => {
		const result = readLocalStorage(themes, STORAGE_KEY_VALIDATION)
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="readLocalStorage() result"
					data-testid="store-read-result"
					result={result !== undefined ? result : { theme: undefined, value: undefined }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)')
	}
}

const STORAGE_KEY_PARSE = 'theme-ls-func-parse'

/** Custom parse: accept legacy { theme } without value, coerce to themeEntry */
function customParseLegacy<Themes extends typeof themes>(
	themesMap: Themes,
	value: string | undefined
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
				'The options.parse allows you to provide a custom parse function. Use it when migrating from legacy formats. This example accepts legacy format { theme } (no value field).'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pre-seeded localStorage with legacy format <code>{`{ theme: "grayscale" }`}</code> (no
					value).
				</p>
			)
		}),
		showSource({
			source: dedent`
				const result = readLocalStorage(themes, storageKey, { parse: customParse })
			`
		})
	],
	loaders: [
		() => {
			window.localStorage.setItem(STORAGE_KEY_PARSE, JSON.stringify({ theme: 'grayscale' }))
			return {}
		}
	],
	render: () => {
		const result = readLocalStorage(themes, STORAGE_KEY_PARSE, {
			parse: customParseLegacy
		})
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="readLocalStorage() with custom parse"
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
					Pass <code>storageKey</code> to determine the localStorage key used for persistence.
				</p>
			)
		}),
		showSource({
			source: dedent`
				readLocalStorage(themes, storageKey)
				writeLocalStorage(themes, storageKey, themeEntry(themes, 'current'))
			`
		})
	],
	loaders: [
		() => {
			writeLocalStorage(themes, STORAGE_KEY, themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const result = readLocalStorage(themes, STORAGE_KEY)
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="localStorage key" appearance="output">
					<code>{STORAGE_KEY}</code>
				</StoryCard>
				<ThemeResultCard
					title="readLocalStorage() result"
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

const THEMEMAP_STORAGE_KEY = 'theme-ls-func-thememap'

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
				readLocalStorage(themes, storageKey)
				writeLocalStorage(themes, storageKey, themeEntry(themes, 'current'))
			`
		})
	],
	loaders: [
		() => {
			window.localStorage.removeItem(THEMEMAP_STORAGE_KEY)
			writeLocalStorage(themes, THEMEMAP_STORAGE_KEY, themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const result = readLocalStorage(themes, THEMEMAP_STORAGE_KEY)
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="readLocalStorage() result"
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

				readLocalStorage(themes, storageKey)
				writeLocalStorage(themes, storageKey, themeEntry(themes, 'grayscale'))
			`
		})
	],
	loaders: [
		() => {
			window.localStorage.removeItem(THEMEMAP_STORAGE_KEY)
			writeLocalStorage(themesArray, THEMEMAP_STORAGE_KEY, themeEntry(themesArray, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const result = readLocalStorage(themesArray, THEMEMAP_STORAGE_KEY)
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="readLocalStorage() result"
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

const themesObject = {
	light: 'theme-light',
	dark: { themeValue: 'theme-dark', contrast: 'high' }
} as const

export const ThemeMapObjectValue: Story = {
	name: 'themes: object value',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'themes values can be { themeValue: string | string[] }. Extra props (e.g. contrast) are preserved when read from storage.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Each theme can map to <code>{'{ themeValue, ...extra }'}</code>. Stored and retrieved
					value preserves extra props for user metadata.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themes = {
					light: 'theme-light',
					dark: { themeValue: 'theme-dark', contrast: 'high' }
				} as const

				readLocalStorage(themes, storageKey)
				writeLocalStorage(themes, storageKey, { theme: 'dark', value: themes.dark })
			`
		})
	],
	loaders: [
		() => {
			window.localStorage.removeItem(THEMEMAP_STORAGE_KEY)
			writeLocalStorage(themesObject, THEMEMAP_STORAGE_KEY, {
				theme: 'dark',
				value: { themeValue: 'theme-dark', contrast: 'high' }
			})
			return {}
		}
	],
	render: () => {
		const result = readLocalStorage(themesObject, THEMEMAP_STORAGE_KEY)
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="readLocalStorage() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'dark', value: themesObject.dark }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: dark')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme-dark')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('contrast')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('high')
	}
}
