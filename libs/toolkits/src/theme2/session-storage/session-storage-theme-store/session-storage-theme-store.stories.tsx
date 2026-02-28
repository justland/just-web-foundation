import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useMemo, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme-result-card.tsx'
import { sessionStorageThemeStore, type ThemeResult, themeResult } from '../../index.ts'
import { ThemeStoreDemo2 } from '../../theme-store-demo2.tsx'
import source from './session-storage-theme-store.ts?raw'

const meta = {
	title: 'theme2/session-storage/sessionStorageThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Theme store backed by sessionStorage. Persists per tab. Bakes themeMap at creation.'
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

const STORAGE_KEY = 'theme2-ss-demo'

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
				const store = sessionStorageThemeStore({
					storageKey: 'app-theme',
					themeMap,
				})
				<ThemeStoreDemo2 store={store} themes={themeMap} />
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
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
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

export const StorageKey: Story = {
	name: 'storageKey',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pass <code>options.storageKey</code> to determine the sessionStorage key used for
					persistence per tab.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({
					storageKey: 'app-theme',
					themeMap,
				})
			`
		})
	],
	loaders: [
		() => {
			const store = sessionStorageThemeStore<typeof themeMap>({
				storageKey: STORAGE_KEY,
				themeMap
			})
			store.set('current')
			return {}
		}
	],
	render: () => {
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="sessionStorage key" appearance="output">
					<code>{STORAGE_KEY}</code>
				</StoryCard>
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

export const Get: Story = {
	name: 'get',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.get() reads the current theme from sessionStorage.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme', themeMap })
				const result = store.get()
			`
		})
	],
	loaders: [
		() => {
			const store = sessionStorageThemeStore<typeof themeMap>({
				storageKey: STORAGE_KEY,
				themeMap
			})
			store.set('grayscale')
			return {}
		}
	],
	render: () => {
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
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
	name: 'get: when storage empty returns undefined',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When nothing is stored at the key, store.get() returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme-get', themeMap })
				const theme = store.get() // undefined when empty
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
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
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
			story: 'store.set() persists the theme to sessionStorage (per tab).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme', themeMap })
				store.set('high-contrast')
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
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = store.get()
			return r?.theme ?? null
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themeMap) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`set-${theme}`}
							onClick={() => {
								store.set(theme)
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
				'store.subscribe() calls the handler with the current theme and when storage changes in same tab.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme', themeMap })
				return store.subscribe((themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				})
			`
		})
	],
	loaders: [
		() => {
			const store = sessionStorageThemeStore<typeof themeMap>({
				storageKey: STORAGE_KEY,
				themeMap
			})
			store.set('grayscale')
			return {}
		}
	],
	render: () => {
		const store = useMemo(
			() =>
				sessionStorageThemeStore<typeof themeMap>({
					storageKey: STORAGE_KEY,
					themeMap
				}),
			[]
		)
		const [result, setResult] = useState<ThemeResult<typeof themeMap> | undefined | null>(undefined)

		useEffect(() => {
			return store.subscribe!(setResult)
		}, [store])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button data-testid="set-high-contrast" onClick={() => store.set('high-contrast')}>
						set('high-contrast')
					</Button>
					<Button data-testid="set-current" onClick={() => store.set('current')}>
						set('current')
					</Button>
				</div>
				<ThemeResultCard
					title="store.subscribe() receives"
					data-testid="store-subscribe-result"
					result={themeResult(displayTheme, themeMap)}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		// Handler receives grayscale from loader, then we trigger multiple updates
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
	name: 'subscribe: unsubscribe stops notifications',
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
				const store = sessionStorageThemeStore({ storageKey: 'theme', themeMap })
				const unsubscribe = store.subscribe((theme) => console.log(theme))
				store.set('grayscale')
				unsubscribe()
				store.set('current') // handler not called
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
		const store = useMemo(
			() =>
				sessionStorageThemeStore<typeof themeMap>({
					storageKey: STORAGE_KEY,
					themeMap
				}),
			[]
		)
		const [result, setResult] = useState<ThemeResult<typeof themeMap> | undefined | null>(undefined)
		const unsubRef = useRef<(() => void) | null>(null)

		useEffect(() => {
			if (unsubRef.current) return
			unsubRef.current = store.subscribe!(setResult)
			return () => {
				unsubRef.current?.()
				unsubRef.current = null
			}
		}, [store])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button data-testid="set-grayscale" onClick={() => store.set('grayscale')}>
						set('grayscale')
					</Button>
					<Button data-testid="set-current" onClick={() => store.set('current')}>
						set('current')
					</Button>
					<Button
						data-testid="unsubscribe"
						onClick={() => {
							unsubRef.current?.()
							unsubRef.current = null
						}}
					>
						unsubscribe()
					</Button>
				</div>
				<ThemeResultCard
					title="store.subscribe() receives (frozen after unsubscribe)"
					data-testid="store-subscribe-result"
					result={themeResult(displayTheme, themeMap)}
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
