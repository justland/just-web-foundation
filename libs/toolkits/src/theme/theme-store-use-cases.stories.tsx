import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { expect } from 'storybook/test'
import {
	getThemeFromStore,
	observeThemeFromStore,
	setThemeToStore,
	type ThemeResult,
	type ThemeStore,
} from '#just-web/toolkits'

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

// --- Mock Backend API use case (simulated delay, no real HTTP) ---
function createMockBackendStore(
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

export const WithMockBackend: Story = {
	tags: ['use-case'],
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
				const store = createMockBackendStore(undefined, 50)
				const result = await getThemeFromStore({ store, themes, theme: 'default' })
				await setThemeToStore({ store, themes, theme: 'grayscale' })
			`,
		}),
	],
	play: async () => {
		const store = createMockBackendStore(undefined, 10)
		const result = await getThemeFromStore({ store, themes, theme: 'default' })
		await expect(result?.theme).toBe('default')
		await setThemeToStore({ store, themes, theme: 'grayscale' })
		const after = await getThemeFromStore({ store, themes, theme: 'default' })
		await expect(after?.theme).toBe('grayscale')
	},
}
