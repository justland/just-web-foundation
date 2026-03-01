import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { atom, createStore } from 'jotai'
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { createStore as createZustandStore } from 'zustand/vanilla'
import { useThemeStore } from '#just-web/toolkits/react'
import { inMemoryThemeStore, themeEntry } from '#just-web/toolkits/theme'
import { ShowThemeFromStore } from '../testing/show-theme-from-store.tsx'
import { ThemeStoreDemo } from '../testing/theme-store-demo.tsx'
import type { ThemeEntry } from './theme-entry.types.ts'
import type { AsyncThemeStore } from './theme-store/async-theme-store.types.ts'
import type { ThemeStore } from './theme-store/theme-store.types.ts'
import { getThemeFromStores } from './utils/get-theme-from-stores.ts'
import { setThemeToStores } from './utils/set-theme-to-stores.ts'

const meta = {
	title: 'theme/ThemeStore use cases',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Use-case stories showing getThemeFromStore, setThemeToStore, and observeThemeFromStore with different store backends: React Context, mock backend API, Zustand, Jotai.'
		}
	}),
	render: () => <></>
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

const themes = {
	default: 'text-white',
	grayscale: 'text-gray-100'
} as const

// --- Mock Backend API use case (simulated delay, no real HTTP) ---
function createBackendStore(
	initial: ThemeEntry<typeof themes> | undefined,
	delayMs = 50
): AsyncThemeStore<typeof themes> {
	let value = initial
	const listeners: Array<(entry: ThemeEntry<typeof themes> | undefined | null) => void> = []
	return {
		async read() {
			return new Promise((resolve) => {
				setTimeout(() => resolve(value ?? undefined), delayMs)
			})
		},
		async write(entry) {
			return new Promise((resolve) => {
				setTimeout(() => {
					value = entry ?? undefined
					for (const fn of listeners) fn(entry ?? null)
					resolve()
				}, delayMs)
			})
		},
		subscribe(handler) {
			listeners.push(handler)
			return () => {
				const i = listeners.indexOf(handler)
				if (i !== -1) listeners.splice(i, 1)
			}
		}
	}
}

export const WithBackendStore: Story = {
	tags: ['use-case'],
	loaders: [
		async () => {
			const store = createBackendStore(undefined, 10)
			return { store }
		}
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme store that simulates a backend API with async get/set and a short delay. No real
					HTTP; same pattern would work with axios or fetch.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = createBackendStore(undefined, 50)
				const theme = await getThemeFromStores([store], 'default')
				await setThemeToStores([store], themeEntry('grayscale', themes))
			`
		})
	],
	render: (_, { loaded: { store } }) => {
		return (
			<ThemeStoreDemo
				store={store}
				themes={themes}
				theme="default"
				data-testid="with-backend-demo"
			/>
		)
	},
	play: async ({ canvas }) => {
		const base = 'with-backend-demo'
		const observeTheme = () => canvas.getByTestId(`${base}-observe-theme`)
		const observeValue = () => canvas.getByTestId(`${base}-observe-value`)
		const getTheme = () => canvas.getByTestId(`${base}-get-theme`)
		const getValue = () => canvas.getByTestId(`${base}-get-value`)
		const btnGet = () => canvas.getByTestId(`${base}-btn-get`)
		const btnSetDefault = () => canvas.getByTestId(`${base}-btn-set-default`)
		const btnSetGrayscale = () => canvas.getByTestId(`${base}-btn-set-grayscale`)

		// Initial observed state (default theme when store is undefined)
		await waitFor(async () => {
			await expect(observeTheme()).toHaveTextContent(/default|\(undefined\)/)
		})

		// Set grayscale and verify observed updates
		await userEvent.click(btnSetGrayscale())
		await waitFor(async () => {
			await expect(observeTheme()).toHaveTextContent('grayscale')
			await expect(observeValue()).toHaveTextContent('text-gray-100')
		})

		// Get theme (one-time) and verify it matches current store
		await userEvent.click(btnGet())
		await waitFor(async () => {
			await expect(getTheme()).toHaveTextContent('grayscale')
			await expect(getValue()).toHaveTextContent('text-gray-100')
		})

		// Set default and verify observed updates
		await userEvent.click(btnSetDefault())
		await waitFor(async () => {
			await expect(observeTheme()).toHaveTextContent('default')
			await expect(observeValue()).toHaveTextContent('text-white')
		})

		// Get theme again and verify it shows default
		await userEvent.click(btnGet())
		await waitFor(async () => {
			await expect(getTheme()).toHaveTextContent('default')
			await expect(getValue()).toHaveTextContent('text-white')
		})
	}
}

function createInMemoryStoreWithSubscribe(
	initial: ThemeEntry<typeof themes> | undefined
): ThemeStore<typeof themes> {
	const store = inMemoryThemeStore<typeof themes>()
	if (initial) store.write(initial)
	return store
}

export const InMemoryStore: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets theme from an in-memory sync store.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore()
				store.write(themeEntry('grayscale', themes))
				const theme = await getThemeFromStores([store], 'default')
			`
		})
	],
	render: () => {
		const store = useMemo(() => {
			const s = inMemoryThemeStore<typeof themes>()
			s.write(themeEntry('grayscale', themes))
			return s
		}, [])
		return <ShowThemeFromStore store={store} themes={themes} theme="default" data-testid="result" />
	},
	play: async ({ canvas }) => {
		const resultTheme = await canvas.getByTestId('result-theme')
		await expect(resultTheme).toHaveTextContent('grayscale')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('text-gray-100')
	}
}

function UseThemeStoreDemo({
	store,
	'data-testid': dataTestId = 'use-theme-store'
}: {
	store: ThemeStore<typeof themes>
	'data-testid'?: string
}) {
	const [theme, setTheme] = useThemeStore({ store, themes, theme: 'default' })
	return (
		<StoryCard title="useThemeStore" data-testid={dataTestId} appearance="output">
			<p>
				theme:{' '}
				<span data-testid={`${dataTestId}-theme`}>
					{theme === undefined ? '(undefined)' : theme}
				</span>
			</p>
			<button
				type="button"
				onClick={() => setTheme('default')}
				data-testid={`${dataTestId}-btn-default`}
			>
				Set default
			</button>
			<button
				type="button"
				onClick={() => setTheme('grayscale')}
				data-testid={`${dataTestId}-btn-grayscale`}
			>
				Set grayscale
			</button>
		</StoryCard>
	)
}

export const UseThemeStore: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>useThemeStore</code> returns the current theme and a setter. Subscribes to store
					changes so the returned theme stays in sync.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = createInMemoryStoreWithSubscribe(undefined)
				const [theme, setTheme] = useThemeStore({ store, themes, theme: 'default' })
				setTheme('grayscale')
			`
		})
	],
	render: () => {
		const store = createInMemoryStoreWithSubscribe(undefined)
		return <UseThemeStoreDemo store={store} data-testid="use-theme-store" />
	},
	play: async ({ canvas }) => {
		const themeEl = () => canvas.getByTestId('use-theme-store-theme')
		const btnDefault = () => canvas.getByTestId('use-theme-store-btn-default')
		const btnGrayscale = () => canvas.getByTestId('use-theme-store-btn-grayscale')

		await waitFor(async () => {
			await expect(themeEl()).toHaveTextContent('default')
		})

		await userEvent.click(btnGrayscale())
		await waitFor(async () => {
			await expect(themeEl()).toHaveTextContent('grayscale')
		})

		await userEvent.click(btnDefault())
		await waitFor(async () => {
			await expect(themeEl()).toHaveTextContent('default')
		})
	}
}

// --- React Context use case ---
const ThemeContext = createContext<{
	entry: ThemeEntry<typeof themes> | undefined
	setEntry: (e: ThemeEntry<typeof themes> | undefined) => void
} | null>(null)

function useThemeStoreFromContext(): ThemeStore<typeof themes> {
	const ctx = useContext(ThemeContext)
	const listenersRef = useRef<Array<(entry: ThemeEntry<typeof themes> | undefined | null) => void>>(
		[]
	)
	const entryRef = useRef<ThemeEntry<typeof themes> | undefined>(undefined)
	if (!ctx) throw new Error('ThemeProvider required')
	entryRef.current = ctx.entry
	return useMemo(
		() => ({
			read() {
				return entryRef.current
			},
			write(entry) {
				ctx.setEntry(entry ?? undefined)
				for (const fn of listenersRef.current) fn(entry ?? null)
			},
			subscribe(handler) {
				listenersRef.current.push(handler)
				return () => {
					const i = listenersRef.current.indexOf(handler)
					if (i !== -1) listenersRef.current.splice(i, 1)
				}
			}
		}),
		[ctx]
	)
}

function ReactContextDemo() {
	const store = useThemeStoreFromContext()
	const [theme, setTheme] = useThemeStore({ store, themes, theme: 'default' })
	const setDefault = useCallback(() => setTheme('default'), [setTheme])
	const setGrayscale = useCallback(() => setTheme('grayscale'), [setTheme])
	return (
		<StoryCard title="Theme from React Context" appearance="output">
			<p data-testid="context-theme">
				theme: {theme === undefined ? '(undefined)' : String(theme)}
			</p>
			<button type="button" onClick={setDefault}>
				Set default
			</button>
			<button type="button" onClick={setGrayscale}>
				Set grayscale
			</button>
		</StoryCard>
	)
}

export const WithReactContext: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme store backed by React Context. get/set/subscribe are implemented with useState and a
					listener list.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = useThemeStoreFromContext()
				const [theme, setTheme] = useThemeStore({ store, themes, theme: 'default' })
				setThemeToStores([store], themeEntry('grayscale', themes))
			`
		})
	],
	render: () => {
		const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined>(
			themeEntry('grayscale', themes)
		)
		return (
			<ThemeContext.Provider value={{ entry, setEntry }}>
				<ReactContextDemo />
			</ThemeContext.Provider>
		)
	},
	play: async () => {
		const entryState = { current: undefined as ThemeEntry<typeof themes> | undefined }
		const listenersRef = {
			current: [] as Array<(e: ThemeEntry<typeof themes> | undefined | null) => void>
		}
		const store: ThemeStore<typeof themes> = {
			read: () => entryState.current,
			write: (e) => {
				entryState.current = e ?? undefined
				for (const fn of listenersRef.current) fn(e ?? null)
			},
			subscribe: (h) => {
				listenersRef.current.push(h)
				return () => {
					const i = listenersRef.current.indexOf(h)
					if (i !== -1) listenersRef.current.splice(i, 1)
				}
			}
		}
		await setThemeToStores([store], themeEntry('grayscale', themes))
		const got = await getThemeFromStores([store], 'default')
		await expect(got).toBe('grayscale')
	}
}

// --- Zustand use case ---
function createZustandThemeStore(initial: ThemeEntry<typeof themes> | undefined): {
	store: ThemeStore<typeof themes>
	zustandStore: ReturnType<typeof createZustandThemeStoreInner>
} {
	const zustandStore = createZustandThemeStoreInner(initial)
	const store: ThemeStore<typeof themes> = {
		read: () => zustandStore.getState().entry,
		write: (entry) => zustandStore.setState({ entry: entry ?? undefined }),
		subscribe: (handler) =>
			zustandStore.subscribe((state, prev) => {
				if (state.entry !== prev?.entry) handler(state.entry ?? null)
			})
	}
	return { store, zustandStore }
}

function createZustandThemeStoreInner(initial: ThemeEntry<typeof themes> | undefined) {
	return createZustandStore<{ entry: ThemeEntry<typeof themes> | undefined }>(() => ({
		entry: initial
	}))
}

export const WithZustand: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme store backed by Zustand vanilla store. get/set/subscribe map to
					getState/setState/subscribe.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const { store } = createZustandThemeStore(undefined)
				const theme = await getThemeFromStores([store], 'default')
				await setThemeToStores([store], themeEntry('grayscale', themes))
			`
		})
	],
	play: async () => {
		const { store } = createZustandThemeStore(undefined)
		await setThemeToStores([store], themeEntry('grayscale', themes))
		const result = await getThemeFromStores([store], 'default')
		await expect(result).toBe('grayscale')
	}
}

// --- Jotai use case ---
function createJotaiThemeStore(
	initial: ThemeEntry<typeof themes> | undefined
): ThemeStore<typeof themes> {
	const entryAtom = atom<ThemeEntry<typeof themes> | undefined>(initial)
	const jotaiStore = createStore()
	jotaiStore.set(entryAtom, initial)
	return {
		read: () => jotaiStore.get(entryAtom),
		write: (entry) => jotaiStore.set(entryAtom, entry ?? undefined),
		subscribe: (handler) =>
			jotaiStore.sub(entryAtom, () => handler(jotaiStore.get(entryAtom) ?? null))
	}
}

export const WithJotai: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme store backed by Jotai. get/set/subscribe map to store.get/set/sub on a theme atom.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = createJotaiThemeStore(undefined)
				const theme = await getThemeFromStores([store], 'default')
				await setThemeToStores([store], themeEntry('grayscale', themes))
			`
		})
	],
	play: async () => {
		const store = createJotaiThemeStore(undefined)
		await setThemeToStores([store], themeEntry('grayscale', themes))
		const result = await getThemeFromStores([store], 'default')
		await expect(result).toBe('grayscale')
	}
}
