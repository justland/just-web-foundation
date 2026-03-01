import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useMemo, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme-result-card.tsx'
import { inMemoryThemeStore, type ThemeEntry, themeEntry } from '../../index.ts'
import { ThemeStoreDemo2 } from '../../theme-store-demo2.tsx'
import source from './in-memory-theme-store.ts?raw'

const meta = {
	title: 'theme2/theme-store/inMemoryThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'In-memory theme store. Transient state; no persistence. Bakes themeMap at creation; get/set/subscribe use theme keys only.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themeMap = {
	current: 'theme-current',
	next: 'theme-next',
	grayscale: 'theme-grayscale',
	'high-contrast': 'theme-high-contrast'
} as const

type ExampleTheme = keyof typeof themeMap

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story: 'Interactive demo: Get theme, set themes via buttons, and observe subscribe updates.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore<typeof themeMap>()
				<ThemeStoreDemo2 store={store} themes={themeMap} />
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		return <ThemeStoreDemo2 store={store} themes={themeMap} />
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo2-btn-set-grayscale'))
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo2-observe')).toHaveTextContent('grayscale')
		)
		await expect(canvas.getByTestId('theme-store-demo2-observe')).toHaveTextContent(
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
				const store = inMemoryThemeStore<typeof themeMap>()
				store.set(themeResult('current', themeMap))
			`
		})
	],
	loaders: [
		() => {
			const store = inMemoryThemeStore<typeof themeMap>()
			store.set(themeEntry('current', themeMap))
			return { store }
		}
	],
	render: (_, { loaded: { store } }) => {
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="store.get() after set" appearance="output">
					<ThemeResultCard
						title="store.get() result"
						data-testid="store-get-result"
						result={result ?? { theme: 'current', value: themeMap.current }}
					/>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-current')
	}
}

export const ThemeMapStringValue: Story = {
	name: 'themeMap: string value',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story: 'themeMap values can be a single string per theme.'
		}
	}),
	decorators: [
		withStoryCard({
			content: <p>Each theme maps to one string value.</p>
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const

				const store = inMemoryThemeStore<typeof themeMap>()
			`
		})
	],
	loaders: [
		() => {
			const store = inMemoryThemeStore<typeof themeMap>()
			store.set(themeEntry('current', themeMap))
			return { store }
		}
	],
	render: (_, { loaded: { store } }) => {
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={result ?? { theme: 'current', value: themeMap.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-current')
	}
}

const themeMapArray = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100'],
	'high-contrast': 'theme-high-contrast'
} as const

export const ThemeMapArrayValues: Story = {
	name: 'themeMap: array values',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'themeMap values can be string[] for multiple tokens. ThemeResult.value stores the full array.'
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
				const themeMap = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100'],
					'high-contrast': 'theme-high-contrast',
				} as const

				const store = inMemoryThemeStore<typeof themeMap>()
			`
		})
	],
	loaders: [
		() => {
			const store = inMemoryThemeStore<typeof themeMapArray>()
			store.set(themeEntry('grayscale', themeMapArray))
			return { store }
		}
	],
	render: (_, { loaded: { store } }) => {
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={result ?? { theme: 'grayscale', value: themeMapArray.grayscale }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent(
			'value: [theme-grayscale, app:bg-gray-100]'
		)
	}
}

export const Get: Story = {
	name: 'get',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.get() reads the current theme from in-memory state.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore<typeof themeMap>()
				store.set(themeResult('grayscale', themeMap))
				const result = store.get()
			`
		})
	],
	loaders: [
		() => {
			const store = inMemoryThemeStore<typeof themeMap>()
			store.set(themeEntry('grayscale', themeMap))
			return { store }
		}
	],
	render: (_, { loaded: { store } }) => {
		const result = store.get()
		return (
			<ThemeResultCard
				title="store.get() result"
				data-testid="store-get-result"
				result={result ?? { theme: 'grayscale', value: themeMap.grayscale }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const GetWhenEmpty: Story = {
	name: 'get: undefined',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When no theme has been set, store.get() returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore<typeof themeMap>()
				const theme = store.get() // undefined when empty
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		const result = store.get()
		return (
			<ThemeResultCard
				title="store.get() result"
				data-testid="store-get-result"
				result={
					result !== undefined && result !== null ? result : { theme: undefined, value: undefined }
				}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('(undefined)')
	}
}

export const SetStory: Story = {
	name: 'set',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.set() updates the in-memory theme and notifies subscribers.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore<typeof themeMap>()
				store.set(themeResult('high-contrast', themeMap))
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | undefined>(() => {
			const r = store.get()
			return r?.theme
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themeMap) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`set-${theme}`}
							onClick={() => {
								store.set(themeEntry(theme, themeMap))
								setCurrentTheme(theme)
							}}
						>
							set({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="store.get() after set"
					data-testid="store-set-result"
					result={
						currentTheme
							? { theme: currentTheme, value: themeMap[currentTheme] }
							: { theme: 'current', value: themeMap.current }
					}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('set-grayscale'))
		await expect(canvas.getByTestId('store-set-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-set-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const Subscribe: Story = {
	name: 'subscribe',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() calls the handler with the current theme immediately and when set() is called.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore<typeof themeMap>()
				return store.subscribe((themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				})
			`
		})
	],
	render: () => {
		const store = useMemo(() => inMemoryThemeStore<typeof themeMap>(), [])
		const [result, setResult] = useState<ThemeEntry<typeof themeMap> | undefined | null>(undefined)

		useEffect(() => {
			return store.subscribe(setResult)
		}, [store])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="set-high-contrast"
						onClick={() => store.set(themeEntry('high-contrast', themeMap))}
					>
						set('high-contrast')
					</Button>
					<Button
						data-testid="set-current"
						onClick={() => store.set(themeEntry('current', themeMap))}
					>
						set('current')
					</Button>
				</div>
				<ThemeResultCard
					title="store.subscribe() receives"
					data-testid="store-subscribe-result"
					result={themeEntry(displayTheme, themeMap)}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		// Handler receives undefined initially, then we trigger multiple updates
		await userEvent.click(canvas.getByTestId('set-high-contrast'))
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast')
		)
		await userEvent.click(canvas.getByTestId('set-current'))
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
				'After calling the function returned by subscribe(), further set() calls do not invoke the handler.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore<typeof themeMap>()
				const unsubscribe = store.subscribe((theme) => console.log(theme))
				store.set(themeResult('grayscale', themeMap))
				unsubscribe()
				store.set(themeResult('current', themeMap)) // handler not called
			`
		})
	],
	render: () => {
		const store = useMemo(() => inMemoryThemeStore<typeof themeMap>(), [])
		const [result, setResult] = useState<ThemeEntry<typeof themeMap> | undefined | null>(undefined)
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
						data-testid="set-grayscale"
						onClick={() => store.set(themeEntry('grayscale', themeMap))}
					>
						set('grayscale')
					</Button>
					<Button
						data-testid="set-current"
						onClick={() => store.set(themeEntry('current', themeMap))}
					>
						set('current')
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
					result={themeEntry(displayTheme, themeMap)}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('set-grayscale'))
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale')
		)
		await userEvent.click(canvas.getByTestId('unsubscribe'))
		await userEvent.click(canvas.getByTestId('set-current'))
		// Display should stay grayscale because we unsubscribed before set('current')
		await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
