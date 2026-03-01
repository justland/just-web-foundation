import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { ThemeResultCard } from '../../testing/theme-result-card.tsx'
import { asyncThemeStore, type ThemeEntry, themeEntry } from '../index.ts'
import { ThemeStoreDemo2 } from '../theme-store-demo2.tsx'
import source from './async-theme-store.ts?raw'

const meta = {
	title: 'theme2/async/asyncThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Creates an AsyncThemeStore from user-provided get, set, and/or subscribe. Useful for remote persistence, polling, or WebSocket-based sync. Returns a store with only the provided methods.'
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
			story:
				'Interactive demo: Get theme, set themes via buttons, and observe subscribe updates. ThemeStoreDemo2 supports both sync and async stores.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = asyncThemeStore({
					get: async () => wrote,
					set: async (entry) => { wrote = entry ?? undefined; notify?.(wrote) },
					subscribe: (handler) => { notify = handler; handler(wrote); return () => { notify = undefined } }
				})
				<ThemeStoreDemo2 store={store} themes={themeMap} />
			`
		})
	],
	render: () => {
		const store = useMemo(() => {
			let wrote: ThemeEntry<typeof themeMap> | undefined
			let notify: ((v: ThemeEntry<typeof themeMap> | undefined | null) => void) | undefined
			return asyncThemeStore({
				get: async () => wrote,
				set: async (entry) => {
					wrote = entry ?? undefined
					notify?.(wrote)
				},
				subscribe: (handler) => {
					notify = handler
					handler(wrote)
					return () => (notify = undefined)
				}
			})
		}, [])
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

export const OptionsStructure: Story = {
	name: 'options: get / set / subscribe',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pass optional <code>get</code>, <code>set</code>, and/or <code>subscribe</code>. The store
					exposes only the methods you provide.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = asyncThemeStore({
					get: async () => { /* fetch from API */ },
					set: async (entry) => { /* persist to API */ },
					subscribe: (handler) => { /* WebSocket, polling */; return () => {} }
				})
			`
		})
	],
	render: () => (
		<StoryCard title="Options" appearance="output">
			<pre className="text-sm">{'{ get?, set?, subscribe? }'}</pre>
		</StoryCard>
	)
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

				const store = asyncThemeStore({
					get: async () => wrote,
					set: async (entry) => { wrote = entry ?? undefined; notify?.(wrote) },
					subscribe: (handler) => { notify = handler; handler(wrote); return () => { notify = undefined } }
				})
			`
		})
	],
	render: () => {
		const wroteRef = useRef<ThemeEntry<typeof themeMap> | undefined>(
			themeEntry('current', themeMap)
		)
		const notifyRef = useRef<
			((v: ThemeEntry<typeof themeMap> | undefined | null) => void) | undefined
		>(undefined)
		const store = useMemo(
			() =>
				asyncThemeStore<typeof themeMap>({
					get: () => wroteRef.current,
					set: async (entry) => {
						wroteRef.current = entry ?? undefined
						notifyRef.current?.(wroteRef.current)
					},
					subscribe: (handler) => {
						notifyRef.current = handler
						handler(wroteRef.current)
						return () => (notifyRef.current = undefined)
					}
				}),
			[]
		)
		const result = store.get?.()
		const displayResult =
			result && typeof result === 'object' && 'theme' in result ? result : wroteRef.current
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={displayResult}
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
			story: 'themeMap values can be string[]. ThemeEntry.value can be the full array.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Each theme can map to <code>string[]</code>. <code>ThemeEntry.value</code> is the full
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

				const store = asyncThemeStore({
					get: async () => wrote,
					set: async (entry) => { wrote = entry ?? undefined; notify?.(wrote) },
					subscribe: (handler) => { notify = handler; handler(wrote); return () => { notify = undefined } }
				})
			`
		})
	],
	render: () => {
		const wroteRef = useRef<ThemeEntry<typeof themeMapArray> | undefined>(
			themeEntry('grayscale', themeMapArray)
		)
		const notifyRef = useRef<
			((v: ThemeEntry<typeof themeMapArray> | undefined | null) => void) | undefined
		>(undefined)
		const store = useMemo(
			() =>
				asyncThemeStore<typeof themeMapArray>({
					get: () => wroteRef.current,
					set: async (entry) => {
						wroteRef.current = entry ?? undefined
						notifyRef.current?.(wroteRef.current)
					},
					subscribe: (handler) => {
						notifyRef.current = handler
						handler(wroteRef.current)
						return () => (notifyRef.current = undefined)
					}
				}),
			[]
		)
		const result = store.get?.()
		const displayResult =
			result && typeof result === 'object' && 'theme' in result ? result : wroteRef.current
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={displayResult}
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
			story:
				'store.get() reads the current theme. Can return a Promise for async sources (e.g. API, localStorage with parsing).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = asyncThemeStore({
					get: async () => ({ theme: 'grayscale', value: themeMap.grayscale })
				})
				const result = await store.get?.()
			`
		})
	],
	loaders: [
		async () => {
			const store = asyncThemeStore<typeof themeMap>({
				get: async () => ({ theme: 'grayscale', value: themeMap.grayscale })
			})
			const result = await store.get?.()
			return { result }
		}
	],
	render: (_, { loaded: { result } }) => (
		<ThemeResultCard
			title="store.get() result (async)"
			data-testid="store-get-result"
			result={result ?? { theme: 'grayscale', value: themeMap.grayscale }}
		/>
	),
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
			story: 'When get is provided but no theme has been set yet, get() returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = asyncThemeStore({
					get: async () => undefined
				})
				const result = await store.get?.()
			`
		})
	],
	loaders: [
		async () => {
			const store = asyncThemeStore<typeof themeMap>({
				get: async () => undefined
			})
			const result = await store.get?.()
			return { result }
		}
	],
	render: (_, { loaded: { result } }) => (
		<ThemeResultCard
			title="store.get() result"
			data-testid="store-get-result"
			result={
				result !== undefined && result !== null ? result : { theme: undefined, value: undefined }
			}
		/>
	),
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('(undefined)')
	}
}

export const SetStory: Story = {
	name: 'set',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.set() persists the theme. Can return a Promise for async persistence.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = asyncThemeStore({
					get: async () => wrote,
					set: async (entry) => { wrote = entry ?? undefined; notify?.(wrote) }
				})
				await store.set?.(themeEntry('high-contrast', themeMap))
			`
		})
	],
	render: () => {
		const wroteRef = useRef<ThemeEntry<typeof themeMap> | undefined>(undefined)
		const notifyRef = useRef<
			((v: ThemeEntry<typeof themeMap> | undefined | null) => void) | undefined
		>(undefined)
		const store = useMemo(
			() =>
				asyncThemeStore<typeof themeMap>({
					get: async () => wroteRef.current,
					set: async (entry) => {
						wroteRef.current = entry ?? undefined
						notifyRef.current?.(wroteRef.current)
					},
					subscribe: (handler) => {
						notifyRef.current = handler
						handler(wroteRef.current)
						return () => {
							notifyRef.current = undefined
						}
					}
				}),
			[]
		)
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(null)

		useLayoutEffect(() => {
			let cancelled = false
			;(async () => {
				const r = await store.get?.()
				if (!cancelled) setCurrentTheme(r?.theme ?? null)
			})()
			return () => {
				cancelled = true
			}
		}, [store])

		useEffect(() => {
			return store.subscribe?.((r) => {
				setCurrentTheme(r?.theme ?? null)
			})
		}, [store])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themeMap) as ExampleTheme[]).map((theme) => (
						<button
							key={theme}
							type="button"
							data-testid={`set-${theme}`}
							onClick={async () => {
								await store.set?.(themeEntry(theme, themeMap))
								setCurrentTheme(theme)
							}}
							className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm"
						>
							set({theme})
						</button>
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
		await waitFor(() =>
			expect(canvas.getByTestId('store-set-result')).toHaveTextContent('theme: grayscale')
		)
		await expect(canvas.getByTestId('store-set-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const Subscribe: Story = {
	name: 'subscribe',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() calls the handler with the current theme and when set() triggers a change.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = asyncThemeStore({
					set: async (entry) => { wrote = entry ?? undefined; notify?.(wrote) },
					subscribe: (handler) => { notify = handler; handler(wrote); return () => { notify = undefined } }
				})
				return store.subscribe((themeEntry) => console.log('Theme:', themeEntry))
			`
		})
	],
	render: () => {
		const wroteRef = useRef<ThemeEntry<typeof themeMap> | undefined>(undefined)
		const notifyRef = useRef<
			((v: ThemeEntry<typeof themeMap> | undefined | null) => void) | undefined
		>(undefined)
		const store = useMemo(
			() =>
				asyncThemeStore<typeof themeMap>({
					set: async (entry) => {
						wroteRef.current = entry ?? undefined
						notifyRef.current?.(wroteRef.current)
					},
					subscribe: (handler) => {
						notifyRef.current = handler
						handler(wroteRef.current)
						return () => {
							notifyRef.current = undefined
						}
					}
				}),
			[]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themeMap> | undefined | null>(undefined)

		useEffect(() => store.subscribe?.(setResult), [store])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<button
						type="button"
						data-testid="set-high-contrast"
						onClick={() => store.set?.(themeEntry('high-contrast', themeMap))}
						className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm"
					>
						set('high-contrast')
					</button>
					<button
						type="button"
						data-testid="set-current"
						onClick={() => store.set?.(themeEntry('current', themeMap))}
						className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm"
					>
						set('current')
					</button>
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
				const store = asyncThemeStore({ set, subscribe })
				const unsubscribe = store.subscribe((theme) => console.log(theme))
				await store.set?.(themeEntry('grayscale', themeMap))
				unsubscribe()
				await store.set?.(themeEntry('current', themeMap)) // handler not called
			`
		})
	],
	render: () => {
		const wroteRef = useRef<ThemeEntry<typeof themeMap> | undefined>(undefined)
		const notifyRef = useRef<
			((v: ThemeEntry<typeof themeMap> | undefined | null) => void) | undefined
		>(undefined)
		const store = useMemo(
			() =>
				asyncThemeStore<typeof themeMap>({
					set: async (entry) => {
						wroteRef.current = entry ?? undefined
						notifyRef.current?.(wroteRef.current)
					},
					subscribe: (handler) => {
						notifyRef.current = handler
						handler(wroteRef.current)
						return () => {
							notifyRef.current = undefined
						}
					}
				}),
			[]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themeMap> | undefined | null>(undefined)
		const unSubRef = useRef<(() => void) | undefined>(undefined)

		useEffect(() => {
			if (unSubRef.current) return
			unSubRef.current = store.subscribe?.(setResult)
			return () => {
				unSubRef.current?.()
				unSubRef.current = undefined
			}
		}, [store])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<button
						type="button"
						data-testid="set-grayscale"
						onClick={() => store.set?.(themeEntry('grayscale', themeMap))}
						className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm"
					>
						set('grayscale')
					</button>
					<button
						type="button"
						data-testid="set-current"
						onClick={() => store.set?.(themeEntry('current', themeMap))}
						className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm"
					>
						set('current')
					</button>
					<button
						type="button"
						data-testid="unsubscribe"
						onClick={() => {
							unSubRef.current?.()
							unSubRef.current = undefined
						}}
						className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-sm"
					>
						unsubscribe()
					</button>
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
		await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale')
	}
}

export const SetOnlyStoreShape: Story = {
	name: 'set-only: store shape',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'When only set is provided, store.get and store.subscribe are undefined; store.set is defined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = asyncThemeStore({ set: async () => {} })
				store.get // undefined
				store.set // defined
				store.subscribe // undefined
			`
		})
	],
	render: () => {
		const store = asyncThemeStore<typeof themeMap>({ set: async () => {} })
		return (
			<StoryCard title="Store shape (set-only)" appearance="output">
				<pre className="text-sm" data-testid="store-shape">
					{`{ get: ${store.get !== undefined}, set: ${store.set !== undefined}, subscribe: ${store.subscribe !== undefined} }`}
				</pre>
			</StoryCard>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-shape')).toHaveTextContent('get: false')
		await expect(canvas.getByTestId('store-shape')).toHaveTextContent('set: true')
		await expect(canvas.getByTestId('store-shape')).toHaveTextContent('subscribe: false')
	}
}

export const SetOnly: Story = {
	name: 'set-only: write-only sink',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Create a write-only store for side effects (e.g. analytics) without persisting. No get or subscribe.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>set</code>-only store receives theme changes but does not participate in read. Use
					for analytics or logging.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const analyticsStore = asyncThemeStore({
					set: async (entry) => track('theme_changed', { theme: entry?.theme })
				})
			`
		})
	],
	loaders: [
		async () => {
			const events: string[] = []
			const store = asyncThemeStore<typeof themeMap>({
				set: async (entry) => {
					if (entry) events.push(entry.theme)
				}
			})
			await store.set?.(themeEntry('high-contrast', themeMap))
			await store.set?.(themeEntry('next', themeMap))
			return { events }
		}
	],
	render: (_, { loaded: { events } }) => (
		<ThemeResultCard
			title="Events captured"
			data-testid="store-events"
			result={{ theme: 'events', value: events.join(', ') }}
		/>
	),
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-events')).toHaveTextContent('high-contrast, next')
	}
}

export const EmptyStore: Story = {
	name: 'empty: no options',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When no options are provided, returns an empty store (no get, set, or subscribe).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = asyncThemeStore({})
				store.get // undefined
				store.set // undefined
				store.subscribe // undefined
			`
		})
	],
	render: () => {
		const store = asyncThemeStore<typeof themeMap>({})
		return (
			<StoryCard title="Store shape" appearance="output">
				<pre className="text-sm" data-testid="store-shape">
					{`{ get: ${store.get !== undefined}, set: ${store.set !== undefined}, subscribe: ${store.subscribe !== undefined} }`}
				</pre>
			</StoryCard>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-shape')).toHaveTextContent('get: false')
		await expect(canvas.getByTestId('store-shape')).toHaveTextContent('set: false')
		await expect(canvas.getByTestId('store-shape')).toHaveTextContent('subscribe: false')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
