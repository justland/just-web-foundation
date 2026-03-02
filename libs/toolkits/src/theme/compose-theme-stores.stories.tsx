import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useMemo, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import {
	classNameThemeStore,
	composeThemeStores,
	dataAttributeThemeStore,
	inMemoryThemeStore,
	localStorageThemeStore,
	type ThemeEntry,
	type ThemeMap,
	themeEntry
} from '#just-web/toolkits/theme'
import { Button } from '../testing/button.tsx'
import { ThemeResultCard } from '../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../testing/theme/theme-store-demo.tsx'
import source from './compose-theme-stores.ts?raw'

const meta = {
	title: 'theme/composeThemeStores',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Composes multiple theme stores into one. Waterfall read (first non-empty), write-to-all, aggregated subscribe. No initial notify.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
	current: 'theme-current',
	grayscale: 'theme-grayscale',
	'high-contrast': 'theme-high-contrast'
} as const

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story:
				'Interactive demo with ThemeStoreDemo2. Composed store from 2 in-memory stores, defaultTheme current.'
		},
		source: {
			code: dedent`
				const store1 = inMemoryThemeStore(themes)
				const store2 = inMemoryThemeStore(themes)
				const store = composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' })
				<ThemeStoreDemo2 store={store} themes={themes} />
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [result1, setResult1] = useState<ThemeEntry<typeof themes>>()
		const [result2, setResult2] = useState<ThemeEntry<typeof themes>>()
		const store1 = useMemo(() => inMemoryThemeStore(themes), [themes])
		const store2 = useMemo(() => inMemoryThemeStore(themes), [themes])
		const store = useMemo(
			() => composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' }),
			[store1, store2]
		)

		useEffect(() => {
			store1.subscribe((r) => setResult1(r ?? undefined))
			store2.subscribe((r) => setResult2(r ?? undefined))
		}, [store1, store2])
		return (
			<div className="flex flex-col gap-2">
				<ThemeStoreDemo store={store} themes={themes} />
				<ThemeResultCard title="Observed (store1.subscribe())" result={result1} />
				<ThemeResultCard title="Observed (store2.subscribe())" result={result2} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'))
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale')
		)
	}
}

export const ReadAllEmptyNoDefault: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When all stores empty and defaultTheme is undefined, read() returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = composeThemeStores(themes, [store1, store2])
				const result = await store.read()
			`
		})
	],
	render: () => {
		const store = useMemo(
			() => composeThemeStores(themes, [inMemoryThemeStore(themes), inMemoryThemeStore(themes)]),
			[]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themes>>()
		useEffect(() => {
			Promise.resolve(store.read?.()).then((r) => setResult(r ?? undefined))
		}, [store])
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result}
			/>
		)
	},
	play: async ({ canvas }) => {
		await waitFor(() =>
			expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)')
		)
	}
}

export const ReadAllEmptyWithDefault: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'When all stores empty and defaultTheme is set, read() returns themeEntry(defaultTheme, themes).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = composeThemeStores(themes, [store1, store2], { defaultTheme: 'grayscale' })
				const result = await store.read()
			`
		})
	],
	render: () => {
		const store = useMemo(
			() =>
				composeThemeStores(themes, [inMemoryThemeStore(themes), inMemoryThemeStore(themes)], {
					defaultTheme: 'grayscale'
				}),
			[]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themes>>()
		useEffect(() => {
			Promise.resolve(store.read?.()).then((r) => setResult(r ?? undefined))
		}, [store])
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result}
			/>
		)
	},
	play: async ({ canvas }) => {
		await waitFor(() =>
			expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		)
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const ReadWaterfallFirstHasValue: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'First store has value; composed read() returns that ThemeEntry.'
		}
	}),
	decorators: [withStoryCard(), showSource()],
	loaders: [
		() => {
			const store1 = inMemoryThemeStore(themes)
			const store2 = inMemoryThemeStore(themes)
			store1.write?.(themeEntry('grayscale', themes))
			return {
				store: composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' })
			}
		}
	],
	render: (_, { loaded: { store } }) => {
		const [result, setResult] = useState<ThemeEntry<typeof themes>>()
		useEffect(() => {
			Promise.resolve(store.read?.()).then((r) => setResult(r ?? undefined))
		}, [store])
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result}
			/>
		)
	},
	play: async ({ canvas }) => {
		await waitFor(() =>
			expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		)
	}
}

export const ReadWaterfallFirstEmptySecondHasValue: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'First store empty, second has value; waterfall returns second.'
		}
	}),
	decorators: [withStoryCard(), showSource()],
	loaders: [
		() => {
			const store1 = inMemoryThemeStore(themes)
			const store2 = inMemoryThemeStore(themes)
			store2.write?.(themeEntry('high-contrast', themes))
			return {
				store: composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' })
			}
		}
	],
	render: (_, { loaded: { store } }) => {
		const [result, setResult] = useState<ThemeEntry<typeof themes>>()
		useEffect(() => {
			Promise.resolve(store.read?.()).then((r) => setResult(r ?? undefined))
		}, [store])
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result}
			/>
		)
	},
	play: async ({ canvas }) => {
		await waitFor(() =>
			expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: high-contrast')
		)
	}
}

export const ReadSkipsStoreWithoutRead: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'Store without read is skipped; value from next store wins.'
		}
	}),
	decorators: [withStoryCard(), showSource()],
	loaders: [
		() => {
			const storeWithRead = inMemoryThemeStore(themes)
			storeWithRead.write?.(themeEntry('grayscale', themes))
			const storeWithoutRead = { write: (_entry: unknown) => {} }
			return {
				store: composeThemeStores(themes, [storeWithoutRead, storeWithRead] as any, {
					defaultTheme: 'current'
				})
			}
		}
	],
	render: (_, { loaded: { store } }) => {
		const [result, setResult] = useState<ThemeEntry<typeof themes>>()
		useEffect(() => {
			Promise.resolve(store.read?.()).then((r) => setResult(r ?? undefined))
		}, [store])
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result}
			/>
		)
	},
	play: async ({ canvas }) => {
		await waitFor(() =>
			expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		)
	}
}

export const WriteToAllStores: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'write() delegates to setThemeToStores; all stores with write receive the entry.'
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store1 = useMemo(() => inMemoryThemeStore(themes), [themes])
		const store2 = useMemo(() => inMemoryThemeStore(themes), [themes])
		const store = useMemo(
			() => composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' }),
			[store1, store2]
		)
		return <ThemeStoreDemo store={store} themes={themes} />
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-high-contrast'))
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-read'))
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo-read')).toHaveTextContent('high-contrast')
		)
	}
}

export const SubscribeNoInitialNotify: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'subscribe() does not call handler immediately; only when a child store emits.'
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(
			() =>
				composeThemeStores(themes, [inMemoryThemeStore(themes), inMemoryThemeStore(themes)], {
					defaultTheme: 'current'
				}),
			[]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)
		useEffect(() => store.subscribe?.(setResult), [store])
		return (
			<div className="flex flex-col gap-4">
				<p>Observed stays empty until Write is clicked (no initial notify)</p>
				<ThemeResultCard
					title="store.subscribe() receives"
					data-testid="store-subscribe-result"
					result={result}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('(undefined)')
	}
}

export const SubscribeReNotifyOnChildEmit: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When a child store emits (e.g. via write), composed subscribe handler is called.'
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store1 = useMemo(() => inMemoryThemeStore(themes), [themes])
		const store2 = useMemo(() => inMemoryThemeStore(themes), [themes])
		const store = useMemo(
			() => composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' }),
			[store1, store2]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)
		useEffect(() => store.subscribe?.(setResult), [store])
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="write-grayscale"
						onClick={() => store1.write?.(themeEntry('grayscale', themes))}
					>
						Write grayscale (store1)
					</Button>
				</div>
				<ThemeResultCard
					title="store.subscribe() receives"
					data-testid="store-subscribe-result"
					result={result}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('write-grayscale'))
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale')
		)
	}
}

export const SubscribeUnsubscribe: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'After unsubscribe, child store writes do not invoke handler.'
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store1 = useMemo(() => inMemoryThemeStore(themes), [themes])
		const store2 = useMemo(() => inMemoryThemeStore(themes), [themes])
		const store = useMemo(
			() => composeThemeStores(themes, [store1, store2], { defaultTheme: 'current' }),
			[store1, store2]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)
		const unSubRef = useRef<(() => void) | null>(null)
		useEffect(() => {
			unSubRef.current = store.subscribe(setResult)
			return () => {
				unSubRef.current?.()
			}
		}, [store])
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="write-grayscale"
						onClick={() => store1.write?.(themeEntry('grayscale', themes))}
					>
						Write grayscale
					</Button>
					<Button
						data-testid="write-current"
						onClick={() => store1.write?.(themeEntry('current', themes))}
					>
						Write current
					</Button>
					<Button
						data-testid="unsubscribe"
						onClick={() => {
							unSubRef.current?.()
							unSubRef.current = null
						}}
					>
						unsubscribe
					</Button>
				</div>
				<ThemeResultCard
					title="store.subscribe() receives (frozen after unsubscribe)"
					data-testid="store-subscribe-result"
					result={result}
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
		await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale')
	}
}

export const StoreFactoryPattern: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Accepts store factory tuples [factory] or [factory, options]. Each position has its own type for options autocomplete.'
		},
		source: {
			code: dedent`
				composeThemeStores(themes, [
				  [classNameThemeStore, { element: document.body }],
				  [dataAttributeThemeStore, { attributeName: 'data-theme', element: document.body }],
				  [localStorageThemeStore, { storageKey: 'my-theme-key' }]
				], { defaultTheme: 'current' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(
			() =>
				composeThemeStores(
					themes,
					[
						[classNameThemeStore, { element: document.body }],
						[
							dataAttributeThemeStore,
							{
								attributeName: 'data-theme',
								element: document.body
							}
						],
						[localStorageThemeStore, { storageKey: 'my-theme-key' }]
					],
					{ defaultTheme: 'current' }
				),
			[]
		)
		return <ThemeStoreDemo store={store} themes={themes} />
	}
}

/** Custom factory with options — demonstrates generic F for user-defined factories. */
function createInitializedThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: { initialTheme?: keyof Themes }
) {
	const store = inMemoryThemeStore(themes)
	if (options.initialTheme !== undefined) {
		store.write?.(themeEntry(options.initialTheme, themes))
	}
	return store
}

export const CustomStoreFactory: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Custom store factory with options. The F generic infers the factory type, enabling options autocomplete for user-defined factories.'
		},
		source: {
			code: dedent`
				function createInitializedThemeStore(themes, options: { initialTheme?: keyof Themes }) {
				  const store = inMemoryThemeStore(themes)
				  if (options.initialTheme) store.write?.(themeEntry(options.initialTheme, themes))
				  return store
				}
				composeThemeStores(themes, [
				  [createInitializedThemeStore, { initialTheme: 'grayscale' }]
				], { defaultTheme: 'current' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(
			() =>
				composeThemeStores(themes, [[createInitializedThemeStore, { initialTheme: 'grayscale' }]], {
					defaultTheme: 'current'
				}),
			[]
		)
		return <ThemeStoreDemo store={store} themes={themes} />
	},
	play: async ({ canvas }) => {
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale')
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
