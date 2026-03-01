import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useMemo, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme-result-card.tsx'
import { sessionStorageThemeStore, type ThemeEntry, themeEntry } from '../../index.ts'
import { ThemeStoreDemo2 } from '../../theme-store-demo2.tsx'
import source from './session-storage-theme-store.ts?raw'

const meta = {
	title: 'theme/theme-store/sessionStorageThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component: 'Theme store backed by sessionStorage. Persists per tab. Bakes themes at creation.'
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

const STORAGE_KEY = 'theme-ss-demo'

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
				const store = sessionStorageThemeStore({
					storageKey: 'app-theme',
					themes: themes
				})
				<ThemeStoreDemo2 store={store} themes={themes} />
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
		const store = sessionStorageThemeStore<typeof themes>({
			storageKey: STORAGE_KEY,
			themes: themes
		})
		return <ThemeStoreDemo2 store={store} themes={themes} />
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo2-btn-write-grayscale'))
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
					themes: themes
				})
			`
		})
	],
	loaders: [
		() => {
			const store = sessionStorageThemeStore<typeof themes>({
				storageKey: STORAGE_KEY,
				themes: themes
			})
			store.write(themeEntry('current', themes))
			return {}
		}
	],
	render: () => {
		const store = sessionStorageThemeStore<typeof themes>({
			storageKey: STORAGE_KEY,
			themes: themes
		})
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="sessionStorage key" appearance="output">
					<code>{STORAGE_KEY}</code>
				</StoryCard>
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

const THEMEMAP_STORAGE_KEY = 'theme-ss-thememap'

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

				const store = sessionStorageThemeStore({
					storageKey: 'theme',
					themes: themes
				})
			`
		})
	],
	loaders: [
		() => {
			window.sessionStorage.removeItem(THEMEMAP_STORAGE_KEY)
			const store = sessionStorageThemeStore<typeof themes>({
				storageKey: THEMEMAP_STORAGE_KEY,
				themes: themes
			})
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

				const store = sessionStorageThemeStore({
					storageKey: 'theme',
					themes: themes
				})
			`
		})
	],
	loaders: [
		() => {
			window.sessionStorage.removeItem(THEMEMAP_STORAGE_KEY)
			const store = sessionStorageThemeStore<typeof themesArray>({
				storageKey: THEMEMAP_STORAGE_KEY,
				themes: themesArray
			})
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
			story: 'store.read() reads the current theme from sessionStorage.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme', themes: themes })
				const result = store.read()
			`
		})
	],
	loaders: [
		() => {
			const store = sessionStorageThemeStore<typeof themes>({
				storageKey: STORAGE_KEY,
				themes: themes
			})
			store.write(themeEntry('grayscale', themes))
			return {}
		}
	],
	render: () => {
		const store = sessionStorageThemeStore<typeof themes>({
			storageKey: STORAGE_KEY,
			themes: themes
		})
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
			story: 'When nothing is stored at the key, store.read() returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme-get', themes: themes })
				const theme = store.read() // undefined when empty
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
		const store = sessionStorageThemeStore<typeof themes>({
			storageKey: STORAGE_KEY,
			themes: themes
		})
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
			story: 'store.write() persists the theme to sessionStorage (per tab).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme', themes: themes })
				store.write(themeResult('high-contrast', themes))
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
		const store = sessionStorageThemeStore<typeof themes>({
			storageKey: STORAGE_KEY,
			themes: themes
		})
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = store.read()
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
			story:
				'store.subscribe() calls the handler when storage changes in same tab (no initial notify).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme', themes: themes })
				return store.subscribe((themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				})
			`
		})
	],
	loaders: [
		() => {
			const store = sessionStorageThemeStore<typeof themes>({
				storageKey: STORAGE_KEY,
				themes: themes
			})
			store.write(themeEntry('grayscale', themes))
			return {}
		}
	],
	render: () => {
		const store = useMemo(
			() =>
				sessionStorageThemeStore<typeof themes>({
					storageKey: STORAGE_KEY,
					themes: themes
				}),
			[]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)

		useEffect(() => {
			return store.subscribe!(setResult)
		}, [store])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="write-high-contrast"
						onPress={() => store.write(themeEntry('high-contrast', themes))}
					>
						write('high-contrast')
					</Button>
					<Button
						data-testid="write-current"
						onPress={() => store.write(themeEntry('current', themes))}
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
		// Handler receives grayscale from loader, then we trigger multiple updates
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

export const SubscribeOnlyWhenThemeChanges: Story = {
	name: 'subscribe: only when themeEntry changes',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = sessionStorageThemeStore({ storageKey: 'theme', themes: themes })
				store.subscribe((entry) => {
					invocationCount++
					setObserved(entry)
				})
				store.write(themeEntry('grayscale', themes)) // handler runs
				store.write(themeEntry('grayscale', themes)) // handler NOT run (same theme)
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
				sessionStorageThemeStore<typeof themes>({
					storageKey: STORAGE_KEY,
					themes: themes
				}),
			[]
		)
		const [invocationCount, setInvocationCount] = useState(0)
		const [observed, setObserved] = useState<ThemeEntry<typeof themes> | undefined | null>(null)

		useEffect(() => {
			return store.subscribe!((entry) => {
				setInvocationCount((c) => c + 1)
				setObserved(entry)
			})
		}, [store])

		const displayTheme = observed?.theme ?? '(none)'
		return (
			<div className="flex flex-col gap-4" data-testid="subscribe-only-when-theme-changes">
				<StoryCard title="Handler invocations" appearance="output">
					<pre data-testid="invocation-count" className="font-mono">
						{invocationCount}
					</pre>
				</StoryCard>
				<StoryCard title="Observed theme" appearance="output">
					<pre data-testid="observed-theme" className="font-mono">
						{displayTheme}
					</pre>
				</StoryCard>
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="write-grayscale-twice"
						onPress={() => {
							store.write(themeEntry('grayscale', themes))
							store.write(themeEntry('grayscale', themes))
						}}
					>
						write(grayscale) twice
					</Button>
					<Button
						data-testid="write-high-contrast"
						onPress={() => store.write(themeEntry('high-contrast', themes))}
					>
						write(high-contrast)
					</Button>
				</div>
			</div>
		)
	},
	play: async ({ canvas }) => {
		// No initial notify - count starts at 0
		await expect(canvas.getByTestId('invocation-count')).toHaveTextContent('0')

		// write(grayscale) twice: first write notifies (count=1), second write should NOT notify (count stays 1)
		await userEvent.click(canvas.getByTestId('write-grayscale-twice'))
		await waitFor(() => expect(canvas.getByTestId('invocation-count')).toHaveTextContent('1'))
		await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('grayscale')
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
				const store = sessionStorageThemeStore({ storageKey: 'theme', themes: themes })
				const unsubscribe = store.subscribe((theme) => console.log(theme))
				store.write(themeResult('grayscale', themes))
				unsubscribe()
				store.write(themeResult('current', themes)) // handler not called
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
				sessionStorageThemeStore<typeof themes>({
					storageKey: STORAGE_KEY,
					themes: themes
				}),
			[]
		)
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)
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
					<Button
						data-testid="write-grayscale"
						onPress={() => store.write(themeEntry('grayscale', themes))}
					>
						write('grayscale')
					</Button>
					<Button
						data-testid="write-current"
						onPress={() => store.write(themeEntry('current', themes))}
					>
						write('current')
					</Button>
					<Button
						data-testid="unsubscribe"
						onPress={() => {
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
