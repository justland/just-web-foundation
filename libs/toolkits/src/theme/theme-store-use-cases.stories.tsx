import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { atom, createStore } from 'jotai'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { createStore as createZustandStore } from 'zustand/vanilla'
import {
	getThemeFromStore,
	observeThemeFromStore,
	setThemeToStore,
	type ThemeResult,
	type ThemeStore,
} from '#just-web/toolkits'
import { useThemeStore } from '#just-web/toolkits/react'
import { ShowThemeFromStore } from '../testing/show-theme-from-store.tsx'
import { ThemeStoreDemo } from '../testing/theme-store-demo.tsx'

const meta = {
	title: 'theme/ThemeStore use cases',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Use-case stories showing getThemeFromStore, setThemeToStore, and observeThemeFromStore with different store backends: React Context, mock backend API, Zustand, Jotai.',
		},
	}),
	render: () => <></>,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

const themes = {
	default: 'text-white',
	grayscale: 'text-gray-100',
} as const

// --- Mock Backend API use case (simulated delay, no real HTTP) ---
function createBackendStore(
	initial: ThemeResult<typeof themes>,
	delayMs = 50,
): ThemeStore<typeof themes> {
	let value = initial
	const listeners: Array<() => void> = []
	return {
		get() {
			return new Promise<ThemeResult<typeof themes>>((resolve) => {
				setTimeout(() => resolve(value), delayMs)
			})
		},
		set(result) {
			return new Promise<void>((resolve) => {
				setTimeout(() => {
					value = result
					for (const fn of listeners) fn()
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
		},
	}
}

export const WithBackendStore: Story = {
	tags: ['use-case'],
	loaders: [
		async () => {
			const store = createBackendStore(undefined, 10)
			return { store }
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme store that simulates a backend API with async get/set and a short delay. No real
					HTTP; same pattern would work with axios or fetch.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store = createBackendStore(undefined, 50)
				const result = await getThemeFromStore({ store, themes, theme: 'default' })
				await setThemeToStore({ store, themes, theme: 'grayscale' })
			`,
		}),
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
	},
}

function createInMemoryStore(initial: ThemeResult<typeof themes>): ThemeStore<typeof themes> {
	let value = initial
	return {
		get() {
			return value
		},
		set(result) {
			value = result
		},
	}
}

function createInMemoryStoreWithSubscribe(
	initial: ThemeResult<typeof themes>,
): ThemeStore<typeof themes> {
	let value = initial
	const listeners: Array<() => void> = []
	return {
		get() {
			return value
		},
		set(result) {
			value = result
			for (const fn of listeners) fn()
		},
		subscribe(handler) {
			listeners.push(handler)
			return () => {
				const i = listeners.indexOf(handler)
				if (i !== -1) listeners.splice(i, 1)
			}
		},
	}
}

export const InMemoryStore: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets theme from an in-memory sync store.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = {
				  get: () => ({ theme: 'grayscale', value: 'text-gray-100' }),
				  set: () => {},
				}
				const result = await getThemeFromStore({
				  store,
				  themes: { default: 'text-white', grayscale: 'text-gray-100' },
				  theme: 'default',
				})
			`,
		}),
	],
	render: () => {
		const store = createInMemoryStore({
			theme: 'grayscale',
			value: 'text-gray-100',
		})
		return <ShowThemeFromStore store={store} themes={themes} theme="default" data-testid="result" />
	},
	play: async ({ canvas }) => {
		const resultTheme = await canvas.getByTestId('result-theme')
		await expect(resultTheme).toHaveTextContent('grayscale')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('text-gray-100')
	},
}

function UseThemeStoreDemo({
	store,
	'data-testid': dataTestId = 'use-theme-store',
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
			),
		}),
		showSource({
			source: dedent`
				const store = createInMemoryStoreWithSubscribe(undefined)
				const [theme, setTheme] = useThemeStore({ store, themes, theme: 'default' })
				setTheme('grayscale')
			`,
		}),
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
	},
}

// --- React Context use case ---
const ThemeContext = createContext<{
	result: ThemeResult<typeof themes>
	setResult: (r: ThemeResult<typeof themes>) => void
} | null>(null)

function useThemeStoreFromContext(): ThemeStore<typeof themes> {
	const ctx = useContext(ThemeContext)
	const listenersRef = useRef<Array<() => void>>([])
	const resultRef = useRef<ThemeResult<typeof themes>>(undefined)
	if (!ctx) throw new Error('ThemeProvider required')
	resultRef.current = ctx.result
	return useMemo(
		() => ({
			get() {
				return resultRef.current
			},
			set(result) {
				ctx.setResult(result)
				for (const fn of listenersRef.current) fn()
			},
			subscribe(handler) {
				listenersRef.current.push(handler)
				return () => {
					const i = listenersRef.current.indexOf(handler)
					if (i !== -1) listenersRef.current.splice(i, 1)
				}
			},
		}),
		[ctx],
	)
}

function ReactContextDemo() {
	const [result, setResult] = useState<ThemeResult<typeof themes>>(undefined)
	const store = useThemeStoreFromContext()
	useEffect(() => {
		const observer = observeThemeFromStore({
			store,
			themes,
			theme: 'default',
			handler: setResult,
		})
		return () => observer.disconnect()
	}, [store])
	const setDefault = useCallback(() => {
		setThemeToStore({ store, themes, theme: 'default' })
	}, [store])
	const setGrayscale = useCallback(() => {
		setThemeToStore({ store, themes, theme: 'grayscale' })
	}, [store])
	return (
		<StoryCard title="Theme from React Context" appearance="output">
			<p data-testid="context-theme">
				theme: {result?.theme === undefined ? '(undefined)' : String(result?.theme)}
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
			),
		}),
		showSource({
			source: dedent`
				const store = useThemeStoreFromContext()
				const result = await getThemeFromStore({ store, themes, theme: 'default' })
				await setThemeToStore({ store, themes, theme: 'grayscale' })
				observeThemeFromStore({ store, themes, theme: 'default', handler: setResult })
			`,
		}),
	],
	render: () => {
		const [result, setResult] = useState<ThemeResult<typeof themes>>({
			theme: 'grayscale',
			value: 'text-gray-100',
		})
		return (
			<ThemeContext.Provider value={{ result, setResult }}>
				<ReactContextDemo />
			</ThemeContext.Provider>
		)
	},
	play: async () => {
		const resultState = { current: undefined as ThemeResult<typeof themes> }
		const listenersRef = { current: [] as Array<() => void> }
		const store: ThemeStore<typeof themes> = {
			get: () => resultState.current,
			set: (r) => {
				resultState.current = r
				for (const fn of listenersRef.current) fn()
			},
			subscribe: (h) => {
				listenersRef.current.push(h)
				return () => {
					const i = listenersRef.current.indexOf(h)
					if (i !== -1) listenersRef.current.splice(i, 1)
				}
			},
		}
		await setThemeToStore({ store, themes, theme: 'grayscale' })
		const got = await getThemeFromStore({ store, themes, theme: 'default' })
		await expect(got?.theme).toBe('grayscale')
	},
}

// --- Zustand use case ---
function createZustandThemeStore(initial: ThemeResult<typeof themes>): {
	store: ThemeStore<typeof themes>
	zustandStore: ReturnType<typeof createZustandThemeStoreInner>
} {
	const zustandStore = createZustandThemeStoreInner(initial)
	const store: ThemeStore<typeof themes> = {
		get: () => zustandStore.getState().themeResult,
		set: (result) => zustandStore.setState({ themeResult: result }),
		subscribe: (handler) => zustandStore.subscribe(handler),
	}
	return { store, zustandStore }
}

function createZustandThemeStoreInner(initial: ThemeResult<typeof themes>) {
	return createZustandStore<{ themeResult: ThemeResult<typeof themes> }>(() => ({
		themeResult: initial,
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
			),
		}),
		showSource({
			source: dedent`
				const { store } = createZustandThemeStore(undefined)
				const result = await getThemeFromStore({ store, themes, theme: 'default' })
				await setThemeToStore({ store, themes, theme: 'grayscale' })
			`,
		}),
	],
	play: async () => {
		const { store } = createZustandThemeStore(undefined)
		await setThemeToStore({ store, themes, theme: 'grayscale' })
		const result = await getThemeFromStore({ store, themes, theme: 'default' })
		await expect(result?.theme).toBe('grayscale')
	},
}

// --- Jotai use case ---
function createJotaiThemeStore(initial: ThemeResult<typeof themes>): ThemeStore<typeof themes> {
	const themeResultAtom = atom<ThemeResult<typeof themes>>(initial)
	const jotaiStore = createStore()
	jotaiStore.set(themeResultAtom, initial)
	return {
		get: () => jotaiStore.get(themeResultAtom),
		set: (result) => jotaiStore.set(themeResultAtom, result),
		subscribe: (handler) => jotaiStore.sub(themeResultAtom, () => handler()),
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
			),
		}),
		showSource({
			source: dedent`
				const store = createJotaiThemeStore(undefined)
				const result = await getThemeFromStore({ store, themes, theme: 'default' })
				await setThemeToStore({ store, themes, theme: 'grayscale' })
			`,
		}),
	],
	play: async () => {
		const store = createJotaiThemeStore(undefined)
		await setThemeToStore({ store, themes, theme: 'grayscale' })
		const result = await getThemeFromStore({ store, themes, theme: 'default' })
		await expect(result?.theme).toBe('grayscale')
	},
}
