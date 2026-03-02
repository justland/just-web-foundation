import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { atom, createStore } from 'jotai'
import { useMemo } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { createStore as createZustandStore } from 'zustand/vanilla'
import type { AsyncThemeStore, ThemeEntry, ThemeStore } from '#just-web/toolkits/theme'
import { ThemeStoreDemo } from '../testing/theme/theme-store-demo.tsx'

const meta = {
	title: 'theme/Use Cases',
	tags: ['version:next'],
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
	parameters: defineDocsParam({
		description: {
			story:
				'Theme store that simulates a backend API with async read/write and subscribe. Same pattern would work with axios or fetch.'
		}
	}),
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
					Theme store that simulates a backend API with async read/write and subscribe. No real
					HTTP; same pattern would work with axios or fetch.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = createBackendStore(undefined, 50)
				const theme = await store.read()
				await store.write(themeEntry(themes, 'grayscale'))
			`
		})
	],
	render: (_, { loaded: { store } }) => {
		return (
			<ThemeStoreDemo
				store={store}
				themes={themes}
				setThemeKeys={['current', 'grayscale']}
				data-testid="with-backend-demo"
			/>
		)
	},
	play: async ({ canvas }) => {
		const base = 'with-backend-demo'
		const observeTheme = () => canvas.getByTestId(`${base}-observe-theme`)
		const observeValue = () => canvas.getByTestId(`${base}-observe-value`)
		const readTheme = () => canvas.getByTestId(`${base}-read-theme`)
		const readValue = () => canvas.getByTestId(`${base}-read-value`)
		const btnRead = () => canvas.getByTestId(`${base}-btn-read`)
		const btnWriteCurrent = () => canvas.getByTestId(`${base}-btn-write-current`)
		const btnWriteGrayscale = () => canvas.getByTestId(`${base}-btn-write-grayscale`)

		// Initial observed state (undefined when store is empty)
		await waitFor(async () => {
			await expect(observeTheme()).toHaveTextContent(/current|\(undefined\)/)
		})

		// Set grayscale and verify observed updates
		await userEvent.click(btnWriteGrayscale())
		await waitFor(async () => {
			await expect(observeTheme()).toHaveTextContent('grayscale')
			await expect(observeValue()).toHaveTextContent('theme-grayscale')
		})

		// Read theme (one-time) and verify it matches current store
		await userEvent.click(btnRead())
		await waitFor(async () => {
			await expect(readTheme()).toHaveTextContent('grayscale')
			await expect(readValue()).toHaveTextContent('theme-grayscale')
		})

		// Set current and verify observed updates
		await userEvent.click(btnWriteCurrent())
		await waitFor(async () => {
			await expect(observeTheme()).toHaveTextContent('current')
			await expect(observeValue()).toHaveTextContent('theme-current')
		})

		// Read theme again and verify it shows current
		await userEvent.click(btnRead())
		await waitFor(async () => {
			await expect(readTheme()).toHaveTextContent('current')
			await expect(readValue()).toHaveTextContent('theme-current')
		})
	}
}

// --- Zustand use case ---
function createZustandThemeStore(initial: ThemeEntry<typeof themes> | undefined) {
	const zustandStore = createZustandStore<{ entry: ThemeEntry<typeof themes> | undefined }>(() => ({
		entry: initial
	}))
	const store = {
		read: () => zustandStore.getState().entry,
		write: (entry) => zustandStore.setState({ entry: entry ?? undefined }),
		subscribe: (handler) =>
			zustandStore.subscribe((state, prev) => {
				if (state.entry !== prev?.entry) handler(state.entry ?? null)
			})
	} satisfies ThemeStore<typeof themes>
	return { store, zustandStore }
}

export const WithZustand: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme store backed by Zustand vanilla store. read/write/subscribe map to
					getState/setState/subscribe.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const { store } = createZustandThemeStore(undefined)
				const theme = store.read()
				store.write(themeEntry(themes, 'grayscale'))
			`
		})
	],
	render: () => {
		const { store } = useMemo(() => createZustandThemeStore(undefined), [])
		return (
			<ThemeStoreDemo
				store={store}
				themes={themes}
				setThemeKeys={['current', 'grayscale']}
				data-testid="with-zustand-demo"
			/>
		)
	},
	play: async ({ canvas }) => {
		const base = 'with-zustand-demo'
		await userEvent.click(canvas.getByTestId(`${base}-btn-write-grayscale`))
		await waitFor(() =>
			expect(canvas.getByTestId(`${base}-observe-theme`)).toHaveTextContent('grayscale')
		)
		await expect(canvas.getByTestId(`${base}-observe-value`)).toHaveTextContent('theme-grayscale')
		await userEvent.click(canvas.getByTestId(`${base}-btn-read`))
		await waitFor(() =>
			expect(canvas.getByTestId(`${base}-read-theme`)).toHaveTextContent('grayscale')
		)
	}
}

// --- Jotai use case ---
function createJotaiThemeStore(initial: ThemeEntry<typeof themes> | undefined) {
	const entryAtom = atom<ThemeEntry<typeof themes> | undefined>(initial)
	const jotaiStore = createStore()
	jotaiStore.set(entryAtom, initial)
	return {
		read: () => jotaiStore.get(entryAtom),
		write: (entry) => jotaiStore.set(entryAtom, entry ?? undefined),
		subscribe: (handler) =>
			jotaiStore.sub(entryAtom, () => handler(jotaiStore.get(entryAtom) ?? null))
	} satisfies ThemeStore<typeof themes>
}

export const WithJotai: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme
					atom.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = createJotaiThemeStore(undefined)
				const theme = store.read()
				store.write(themeEntry(themes, 'grayscale'))
			`
		})
	],
	render: () => {
		const store = useMemo(() => createJotaiThemeStore(undefined), [])
		return (
			<ThemeStoreDemo
				store={store}
				themes={themes}
				setThemeKeys={['current', 'grayscale']}
				data-testid="with-jotai-demo"
			/>
		)
	},
	play: async ({ canvas }) => {
		const base = 'with-jotai-demo'
		await userEvent.click(canvas.getByTestId(`${base}-btn-write-grayscale`))
		await waitFor(() =>
			expect(canvas.getByTestId(`${base}-observe-theme`)).toHaveTextContent('grayscale')
		)
		await expect(canvas.getByTestId(`${base}-observe-value`)).toHaveTextContent('theme-grayscale')
		await userEvent.click(canvas.getByTestId(`${base}-btn-read`))
		await waitFor(() =>
			expect(canvas.getByTestId(`${base}-read-theme`)).toHaveTextContent('grayscale')
		)
	}
}
