import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { expect, waitFor } from 'storybook/test'
import { classNameThemeStore } from '#just-web/toolkits'
import { ThemeResultCard } from '../testing/theme-result-card.tsx'
import source from './class-name-theme-store.ts?raw'

const meta = {
	title: 'theme/classNameThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Theme store that reads and writes theme via element class names. The store provides get, set, and subscribe for the given element (or document.documentElement when omitted).',
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

function StoreGetDemo({
	themes: themesOption,
	defaultTheme,
}: {
	themes: typeof themes
	defaultTheme?: keyof typeof themes
}) {
	const store = classNameThemeStore<typeof themes>()
	const result = store.get({ themes: themesOption, defaultTheme })
	return (
		<ThemeResultCard
			title="store.get() result"
			data-testid="store-get-result"
			result={result !== undefined ? { theme: result, value: themesOption[result] } : undefined}
		/>
	)
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Create a store (default element), set a theme, then get and display the result.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = classNameThemeStore()
				store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
				const theme = store.get({ themes, defaultTheme: 'default' })
			`,
		}),
	],
	loaders: [
		() => {
			const store = classNameThemeStore<typeof themes>()
			store.set({ themes, theme: 'default' })
			return {}
		},
	],
	render: () => {
		return <StoreGetDemo themes={themes} defaultTheme="default" />
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
				'When no matching class is on the element, store.get() returns the default theme from options.',
		},
	}),
	loaders: [
		() => {
			const el = document.documentElement
			el.className = el.className
				.replace(/\btext-white\b/, '')
				.replace(/\btext-gray-100\b/, '')
				.replace(/\s+/g, ' ')
				.trim()
			return {}
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>store.get(&#123; themes, defaultTheme: &#39;grayscale&#39; &#125;)</code> returns
					grayscale when no theme class is present.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store = classNameThemeStore()
				const theme = store.get({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					defaultTheme: 'grayscale',
				})
			`,
		}),
	],
	render: () => {
		return <StoreGetDemo themes={themes} defaultTheme="grayscale" />
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
			const store = classNameThemeStore<typeof themes>()
			store.set({ themes, theme: 'grayscale' })
			return {}
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>store.set()</code> applies theme classes; <code>store.get()</code> reads the current
					theme.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store = classNameThemeStore()
				store.set({ themes, theme: 'grayscale' })
				const theme = store.get({ themes, defaultTheme: 'default' })
			`,
		}),
	],
	render: () => {
		return <StoreGetDemo themes={themes} defaultTheme="default" />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100')
	},
}

function StoreSubscribeDemo({
	themes: themesOption,
	defaultTheme,
}: {
	themes: typeof themes
	defaultTheme?: keyof typeof themes
}) {
	const [result, setResult] = useState<string | undefined>(undefined)

	useEffect(() => {
		const store = classNameThemeStore<typeof themes>()
		const observer = store.subscribe({
			themes: themesOption,
			defaultTheme,
			handler: setResult,
		})
		return () => observer.disconnect()
	}, [defaultTheme, themesOption])

	return (
		<ThemeResultCard
			title="store.subscribe() handler"
			data-testid="store-subscribe-result"
			result={
				result !== undefined
					? { theme: result, value: themesOption[result as keyof typeof themes] }
					: undefined
			}
		/>
	)
}

export const Subscribe: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() calls the handler once with the current theme and when the class attribute changes.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = classNameThemeStore()
				const observer = store.subscribe({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					defaultTheme: 'default',
					handler: (theme) => console.log('Theme:', theme),
				})
				observer.disconnect()
			`,
		}),
	],
	render: () => {
		return <StoreSubscribeDemo themes={themes} defaultTheme="default" />
	},
	play: async ({ canvas }) => {
		const store = classNameThemeStore<typeof themes>()
		store.set({ themes, theme: 'grayscale' })

		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result-theme')).toHaveTextContent('grayscale'),
		)
		await expect(canvas.getByTestId('store-subscribe-result-value')).toHaveTextContent(
			'text-gray-100',
		)
	},
}

export const SameElementReturnsCachedStore: Story = {
	name: 'same element returns cached store',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Calling classNameThemeStore with the same element (or both undefined for documentElement) returns the same store instance.',
		},
	}),
	loaders: [
		() => {
			const store1 = classNameThemeStore<typeof themes>()
			const store2 = classNameThemeStore<typeof themes>()
			return { sameReference: store1 === store2 }
		},
	],
	decorators: [
		withStoryCard({
			content: <p>Two calls with the same element return the same store (cached by element).</p>,
		}),
		showSource({
			source: dedent`
				const store1 = classNameThemeStore()
				const store2 = classNameThemeStore()
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
