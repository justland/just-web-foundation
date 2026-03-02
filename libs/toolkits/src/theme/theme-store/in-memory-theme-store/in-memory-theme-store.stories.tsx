import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useMemo, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { inMemoryThemeStore, type ThemeEntry, themeEntry } from '#just-web/toolkits/theme'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../../../testing/theme/theme-store-demo.tsx'
import source from './in-memory-theme-store.ts?raw'

const meta = {
	title: 'theme/theme-store/inMemoryThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'In-memory theme store. Transient state; no persistence. Bakes themes at creation; read/write/subscribe use theme keys only.'
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

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story:
				'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore(themes)
				<ThemeStoreDemo2 store={store} themes={themes} />
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore(themes)
		return <ThemeStoreDemo store={store} themes={themes} />
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'))
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale')
		)
		await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent(
			'theme-grayscale'
		)
	}
}

export const ThemeMapOption: Story = {
	name: 'Themes type param',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pass <code>Themes</code> as the type parameter to define valid theme keys and their
					values.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore(themes)
				store.write(themeResult('current', themes))
			`
		})
	],
	loaders: [
		() => {
			const store = inMemoryThemeStore(themes)
			store.write(themeEntry('current', themes))
			return { store }
		}
	],
	render: (_, { loaded: { store } }) => {
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="store.read() after write" appearance="output">
					<ThemeResultCard
						title="store.read() result"
						data-testid="store-read-result"
						result={result ?? { theme: 'current', value: themes.current }}
					/>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current')
	}
}

export const ThemeMapStringValue: Story = {
	name: 'themes: string value',
	tags: ['use-case', 'props'],
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
				const themes = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast'
				} as const

				const store = inMemoryThemeStore(themes)
			`
		})
	],
	loaders: [
		() => {
			const store = inMemoryThemeStore(themes)
			store.write(themeEntry('current', themes))
			return { store }
		}
	],
	render: (_, { loaded: { store } }) => {
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.read() result"
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
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'themes values can be string[] for multiple tokens. ThemeResult.value stores the full array.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Each theme can map to <code>string[]</code>. <code>ThemeResult.value</code> is the full
					array.
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

				const store = inMemoryThemeStore(themes)
			`
		})
	],
	loaders: [
		() => {
			const store = inMemoryThemeStore(themesArray)
			store.write(themeEntry('grayscale', themesArray))
			return { store }
		}
	],
	render: (_, { loaded: { store } }) => {
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.read() result"
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

export const Read: Story = {
	name: 'read',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.read() reads the current theme from in-memory state.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore(themes)
				store.write(themeResult('grayscale', themes))
				const result = store.read()
			`
		})
	],
	loaders: [
		() => {
			const store = inMemoryThemeStore(themes)
			store.write(themeEntry('grayscale', themes))
			return { store }
		}
	],
	render: (_, { loaded: { store } }) => {
		const result = store.read()
		return (
			<ThemeResultCard
				title="store.read() result"
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
	name: 'read: undefined',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When no theme has been written, store.read() returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore(themes)
				const theme = store.read() // undefined when empty
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore(themes)
		const result = store.read()
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={
					result !== undefined && result !== null ? result : { theme: undefined, value: undefined }
				}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)')
	}
}

export const WriteStory: Story = {
	name: 'write',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.write() updates the in-memory theme and notifies subscribers.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore(themes)
				store.write(themeResult('high-contrast', themes))
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore(themes)
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | undefined>(() => {
			const r = store.read()
			return r?.theme
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themes) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`write-${theme}`}
							onClick={() => {
								store.write(themeEntry(theme, themes))
								setCurrentTheme(theme)
							}}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="store.read() after write"
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

export const Subscribe: Story = {
	name: 'subscribe',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.subscribe() calls the handler when write() is called (no initial notify).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore(themes)
				return store.subscribe((themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				})
			`
		})
	],
	render: () => {
		const store = useMemo(() => inMemoryThemeStore(themes), [themes])
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)

		useEffect(() => {
			return store.subscribe(setResult)
		}, [store])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="write-high-contrast"
						onClick={() => store.write(themeEntry('high-contrast', themes))}
					>
						write('high-contrast')
					</Button>
					<Button
						data-testid="write-current"
						onClick={() => store.write(themeEntry('current', themes))}
					>
						write('current')
					</Button>
				</div>
				<ThemeResultCard
					title="store.subscribe() receives"
					data-testid="store-subscribe-result"
					result={themeEntry(displayTheme, themes)}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		// No initial notify; handler fires on first write
		await userEvent.click(canvas.getByTestId('write-high-contrast'))
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast')
		)
		await userEvent.click(canvas.getByTestId('write-current'))
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('current')
		)
	}
}

export const SubscribeUnsubscribe: Story = {
	name: 'subscribe: unsubscribe',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'After calling the function returned by subscribe(), further write() calls do not invoke the handler.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore(themes)
				const unsubscribe = store.subscribe((theme) => console.log(theme))
				store.write(themeResult('grayscale', themes))
				unsubscribe()
				store.write(themeResult('current', themes)) // handler not called
			`
		})
	],
	render: () => {
		const store = useMemo(() => inMemoryThemeStore(themes), [themes])
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)
		const unSubRef = useRef<(() => void) | null>(null)

		useEffect(() => {
			if (unSubRef.current) return
			unSubRef.current = store.subscribe!(setResult)
			return () => {
				unSubRef.current?.()
				unSubRef.current = null
			}
		}, [store])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="write-grayscale"
						onClick={() => store.write(themeEntry('grayscale', themes))}
					>
						write('grayscale')
					</Button>
					<Button
						data-testid="write-current"
						onClick={() => store.write(themeEntry('current', themes))}
					>
						write('current')
					</Button>
					<Button
						data-testid="unsubscribe"
						onClick={() => {
							unSubRef.current?.()
							unSubRef.current = null
						}}
					>
						unsubscribe()
					</Button>
				</div>
				<ThemeResultCard
					title="store.subscribe() receives (frozen after unsubscribe)"
					data-testid="store-subscribe-result"
					result={themeEntry(displayTheme, themes)}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('write-grayscale'))
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale')
		)
		await userEvent.click(canvas.getByTestId('unsubscribe'))
		await userEvent.click(canvas.getByTestId('write-current'))
		// Display should stay grayscale because we unsubscribed before write('current')
		await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
