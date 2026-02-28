import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { expect } from 'storybook/test'
import { createSessionStorageThemeStore } from '#just-web/toolkits'
import { ThemeResultCard } from '../testing/theme-result-card.tsx'
import source from './create-session-storage-theme-store.ts?raw'

const meta = {
	title: 'theme/createSessionStorageThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Creates a theme store backed by sessionStorage for a fixed storage key. The store provides get, set, and subscribe that use the given key. Callers pass themes and optional default theme when calling get/set/subscribe.',
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

const STORAGE_KEY_BASIC = 'cs-ss-theme-basic'
const STORAGE_KEY_GET = 'cs-ss-theme-get'
const STORAGE_KEY_SET = 'cs-ss-theme-set'
const STORAGE_KEY_SUBSCRIBE = 'cs-ss-theme-subscribe'

function StoreGetDemo({
	storageKey,
	themes: themesOption,
	theme: defaultTheme,
}: {
	storageKey: string
	themes: typeof themes
	theme?: keyof typeof themes
}) {
	const store = createSessionStorageThemeStore<typeof themes>(storageKey)
	const result = store.get({ themes: themesOption, theme: defaultTheme })
	return (
		<ThemeResultCard title="store.get() result" data-testid="store-get-result" result={result} />
	)
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Create a store with a storage key, set a theme, then get and display the result.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = createSessionStorageThemeStore('app-theme')
				store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
				const result = store.get({ themes, theme: 'default' })
			`,
		}),
	],
	loaders: [
		() => {
			const store = createSessionStorageThemeStore<typeof themes>(STORAGE_KEY_BASIC)
			store.set({ themes, theme: 'default' })
			return { storageKey: STORAGE_KEY_BASIC }
		},
	],
	render: (_, { loaded: { storageKey } }) => {
		return <StoreGetDemo storageKey={storageKey} themes={themes} theme="default" />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: default')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-white')
	},
}

export const GetWithDefault: Story = {
	name: 'get: with default theme',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'When nothing is stored at the key, store.get() returns the default theme from options.',
		},
	}),
	loaders: [
		() => {
			const store = createSessionStorageThemeStore<typeof themes>(STORAGE_KEY_GET)
			store.set({ themes, theme: null })
			return { storageKey: STORAGE_KEY_GET }
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>store.get(&#123; themes, theme: &#39;grayscale&#39; &#125;)</code> returns grayscale
					when storage is empty.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store = createSessionStorageThemeStore('theme-get')
				const result = store.get({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: 'grayscale',
				})
			`,
		}),
	],
	render: (_, { loaded: { storageKey } }) => {
		return <StoreGetDemo storageKey={storageKey} themes={themes} theme="grayscale" />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100')
	},
}

export const SetThenGet: Story = {
	name: 'set then get',
	tags: ['use-case'],
	loaders: [
		() => {
			const store = createSessionStorageThemeStore<typeof themes>(STORAGE_KEY_SET)
			store.set({ themes, theme: 'grayscale' })
			return { storageKey: STORAGE_KEY_SET }
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>store.set()</code> persists the theme; <code>store.get()</code> reads it back.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store = createSessionStorageThemeStore('theme-set')
				store.set({ themes, theme: 'grayscale' })
				const result = store.get({ themes, theme: 'default' })
			`,
		}),
	],
	render: (_, { loaded: { storageKey } }) => {
		return <StoreGetDemo storageKey={storageKey} themes={themes} theme="default" />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100')
	},
}

function StoreSubscribeDemo({
	storageKey,
	themes: themesOption,
	theme: defaultTheme,
}: {
	storageKey: string
	themes: typeof themes
	theme?: keyof typeof themes
}) {
	const [result, setResult] = useState<
		{ theme: string; value: string | readonly string[] } | undefined
	>(undefined)

	useEffect(() => {
		const store = createSessionStorageThemeStore<typeof themes>(storageKey)
		const observer = store.subscribe({
			themes: themesOption,
			theme: defaultTheme,
			handler: setResult,
		})
		return () => observer.disconnect()
	}, [storageKey, defaultTheme, themesOption])

	return (
		<ThemeResultCard
			title="store.subscribe() handler"
			data-testid="store-subscribe-result"
			result={result}
		/>
	)
}

export const Subscribe: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() calls the handler once with the current theme and when the storage key changes in another tab.',
		},
	}),
	loaders: [
		() => {
			const store = createSessionStorageThemeStore<typeof themes>(STORAGE_KEY_SUBSCRIBE)
			store.set({ themes, theme: 'grayscale' })
			return { storageKey: STORAGE_KEY_SUBSCRIBE }
		},
	],
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = createSessionStorageThemeStore('theme-observe')
				const observer = store.subscribe({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: 'default',
					handler: (result) => console.log('Theme:', result?.theme, result?.value),
				})
				observer.disconnect()
			`,
		}),
	],
	render: (_, { loaded: { storageKey } }) => {
		return <StoreSubscribeDemo storageKey={storageKey} themes={themes} theme="default" />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('theme: grayscale')
	},
}

export const SameKeyReturnsCachedStore: Story = {
	name: 'same key returns cached store',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Calling createSessionStorageThemeStore with the same key returns the same store instance.',
		},
	}),
	loaders: [
		() => {
			const store1 = createSessionStorageThemeStore<typeof themes>('cs-ss-theme-cache')
			const store2 = createSessionStorageThemeStore<typeof themes>('cs-ss-theme-cache')
			return { sameReference: store1 === store2 }
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Two calls with the same <code>storageKey</code> return the same store (cached by key).
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store1 = createSessionStorageThemeStore('app-theme')
				const store2 = createSessionStorageThemeStore('app-theme')
				store1 === store2
			`,
		}),
	],
	render: (_, { loaded: { sameReference } }) => {
		return (
			<ThemeResultCard
				title="Same store reference"
				result={{
					theme: sameReference ? 'true' : 'false',
					value: String(sameReference),
				}}
			/>
		)
	},
	play: async ({ loaded: { sameReference } }) => {
		await expect(sameReference).toBe(true)
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()],
}
