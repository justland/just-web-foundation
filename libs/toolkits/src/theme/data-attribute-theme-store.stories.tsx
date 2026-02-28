import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { expect, waitFor } from 'storybook/test'
import { dataAttributeThemeStore } from '#just-web/toolkits'
import { ThemeResultCard } from '../testing/theme-result-card.tsx'
import source from './data-attribute-theme-store.ts?raw'

const meta = {
	title: 'theme/dataAttributeThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Theme store that reads and writes theme via a data attribute on an element. The store provides get, set, and subscribe for the given attribute name and element.',
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

const ATTR = 'data-theme-cs' as const

function StoreGetDemo({
	attributeName,
	themes: themesOption,
	defaultTheme,
}: {
	attributeName: `data-${string}`
	themes: typeof themes
	defaultTheme?: keyof typeof themes
}) {
	const store = dataAttributeThemeStore<typeof themes>(attributeName)
	const result = store.get({ themes: themesOption, defaultTheme })
	return (
		<ThemeResultCard
			title="store.get() result"
			data-testid="store-get-result"
			result={
				result !== undefined
					? {
							theme: String(result),
							value:
								result in themesOption
									? themesOption[result as keyof typeof themes]
									: String(result),
						}
					: undefined
			}
		/>
	)
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Create a store with an attribute name, set a theme, then get and display the result.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore('data-theme')
				store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
				const theme = store.get({ themes, defaultTheme: 'default' })
			`,
		}),
	],
	loaders: [
		() => {
			const store = dataAttributeThemeStore<typeof themes>(ATTR)
			store.set({ themes, theme: 'default' })
			return { attributeName: ATTR }
		},
	],
	render: (_, { loaded: { attributeName } }) => {
		return <StoreGetDemo attributeName={attributeName} themes={themes} defaultTheme="default" />
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
				'When the attribute is missing or does not match a theme, store.get() returns the default theme from options.',
		},
	}),
	loaders: [
		() => {
			document.documentElement.removeAttribute(ATTR)
			return { attributeName: ATTR }
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>store.get(&#123; themes, defaultTheme: &#39;grayscale&#39; &#125;)</code> returns
					grayscale when the attribute is not set.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore('data-theme')
				const theme = store.get({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					defaultTheme: 'grayscale',
				})
			`,
		}),
	],
	render: (_, { loaded: { attributeName } }) => {
		return <StoreGetDemo attributeName={attributeName} themes={themes} defaultTheme="grayscale" />
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
			const store = dataAttributeThemeStore<typeof themes>(ATTR)
			store.set({ themes, theme: 'grayscale' })
			return { attributeName: ATTR }
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>store.set()</code> writes the attribute; <code>store.get()</code> reads it back.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore('data-theme')
				store.set({ themes, theme: 'grayscale' })
				const theme = store.get({ themes, defaultTheme: 'default' })
			`,
		}),
	],
	render: (_, { loaded: { attributeName } }) => {
		return <StoreGetDemo attributeName={attributeName} themes={themes} defaultTheme="default" />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100')
	},
}

function StoreSubscribeDemo({
	attributeName,
	themes: themesOption,
	defaultTheme,
}: {
	attributeName: `data-${string}`
	themes: typeof themes
	defaultTheme?: keyof typeof themes
}) {
	const [result, setResult] = useState<string | null | undefined>(undefined)

	useEffect(() => {
		const store = dataAttributeThemeStore<typeof themes>(attributeName)
		const observer = store.subscribe({
			themes: themesOption,
			defaultTheme,
			handler: setResult,
		})
		return () => observer.disconnect()
	}, [attributeName, defaultTheme, themesOption])

	return (
		<ThemeResultCard
			title="store.subscribe() handler"
			data-testid="store-subscribe-result"
			result={
				result != null
					? {
							theme: result,
							value: result in themesOption ? themesOption[result as keyof typeof themes] : result,
						}
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
				'store.subscribe() calls the handler once with the current theme and when the attribute changes.',
		},
	}),
	loaders: [
		() => {
			return { attributeName: ATTR }
		},
	],
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore('data-theme')
				const observer = store.subscribe({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					defaultTheme: 'default',
					handler: (theme) => console.log('Theme:', theme),
				})
				observer.disconnect()
			`,
		}),
	],
	render: (_, { loaded: { attributeName } }) => {
		return (
			<StoreSubscribeDemo attributeName={attributeName} themes={themes} defaultTheme="default" />
		)
	},
	play: async ({ canvas }) => {
		const store = dataAttributeThemeStore<typeof themes>(ATTR)
		store.set({ themes, theme: 'grayscale' })
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result-theme')).toHaveTextContent('grayscale'),
		)
		await expect(canvas.getByTestId('store-subscribe-result-value')).toHaveTextContent(
			'text-gray-100',
		)
	},
}

export const SameAttributeReturnsCachedStore: Story = {
	name: 'same attribute returns cached store',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Calling dataAttributeThemeStore with the same attribute name (and no element) returns the same store instance.',
		},
	}),
	loaders: [
		() => {
			const store1 = dataAttributeThemeStore<typeof themes>('data-theme-cache')
			const store2 = dataAttributeThemeStore<typeof themes>('data-theme-cache')
			return { sameReference: store1 === store2 }
		},
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Two calls with the same <code>attributeName</code> (and default element) return the same
					store.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store1 = dataAttributeThemeStore('data-theme')
				const store2 = dataAttributeThemeStore('data-theme')
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
