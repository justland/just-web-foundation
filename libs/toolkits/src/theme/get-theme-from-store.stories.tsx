import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { ShowThemeFromStore } from '../testing/show-theme-from-store.tsx'
import type { ThemeEntry } from '../theme2/theme-entry.types.ts'
import type { ThemeMap } from '../theme2/theme-map.types.ts'
import type { AsyncThemeStore } from '../theme2/theme-store/async-theme-store.types.ts'
import type { ThemeStore } from '../theme2/theme-store/theme-store.types.ts'

const meta = {
	title: 'theme/getThemeFromStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Gets the theme from stores using getThemeFromStores. Uses the default theme when all stores return empty.'
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

function createSyncStore<Themes extends ThemeMap>(
	initial?: ThemeEntry<Themes> | undefined
): ThemeStore<Themes> {
	const value = initial
	return {
		read() {
			return value
		}
	}
}

function createAsyncStore<Themes extends ThemeMap>(
	initial?: ThemeEntry<Themes> | undefined
): AsyncThemeStore<Themes> {
	const value = initial
	return {
		read() {
			return Promise.resolve(value)
		}
	}
}

export const SyncStore: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>getThemeFromStore</code> gets the theme from a generic store.
					</p>
					<p>
						Validates against the themes map and uses the default theme when missing or invalid.
					</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				const store = { theme: 'grayscale', value: 'text-gray-100' }
				const result = await getThemeFromStore({
					store: { get: () => store },
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
				})
			`
		})
	],
	render: () => {
		const store = createSyncStore({ theme: 'grayscale', value: 'text-gray-100' })
		return <ShowThemeFromStore store={store} themes={themes} data-testid="result" />
	},
	play: async ({ canvas }) => {
		const resultTheme = await canvas.getByTestId('result-theme')
		await expect(resultTheme).toHaveTextContent('grayscale')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('text-gray-100')
	}
}

export const AsyncStore: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When <code>store.get()</code> returns a Promise, <code>getThemeFromStore</code> awaits it
					and returns the resolved theme.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = {}
				const result = await getThemeFromStore({
					store: { get: () => Promise.resolve(store) },
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
				})
			`
		})
	],
	render: () => {
		const store = createAsyncStore({ theme: 'grayscale', value: 'text-gray-100' })
		return <ShowThemeFromStore store={store} themes={themes} data-testid="result" />
	},
	play: async ({ canvas }) => {
		const resultTheme = await canvas.getByTestId('result-theme')
		await expect(resultTheme).toHaveTextContent('grayscale')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('text-gray-100')
	}
}

export const DefaultTheme: Story = {
	decorators: [
		withStoryCard({
			content: <p>Uses the default theme when the stored value is missing or invalid.</p>
		}),
		showSource({
			source: dedent`
				const result = await getThemeFromStore({
					store: { get: () => undefined },
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: 'grayscale',
				})
			`
		})
	],
	render: () => {
		const store = createSyncStore(undefined)
		return (
			<ShowThemeFromStore store={store} themes={themes} theme="grayscale" data-testid="result" />
		)
	},
	play: async ({ canvas }) => {
		const result = await canvas.getByTestId('result-theme')
		await expect(result).toHaveTextContent('grayscale')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('text-gray-100')
	}
}

export const NoDefaultTheme: Story = {
	decorators: [
		withStoryCard({
			content: (
				<p>
					Returns <code>undefined</code> when the stored value is missing and no default theme is
					provided.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const result = await getThemeFromStore({
					store: { get: () => undefined },
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
				})
			`
		})
	],
	render: () => {
		const store = createSyncStore()
		return <ShowThemeFromStore store={store} themes={themes} data-testid="result" />
	},
	play: async ({ canvas }) => {
		const result = await canvas.getByTestId('result-theme')
		await expect(result).toHaveTextContent('undefined')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('undefined')
	}
}

export const DefaultThemeNull: Story = {
	decorators: [
		withStoryCard({
			content: (
				<p>
					When <code>theme</code> is explicitly <code>null</code> and the store is empty or invalid,
					result is <code>undefined</code> (same as no default theme).
				</p>
			)
		}),
		showSource({
			source: dedent`
				const result = await getThemeFromStore({
					store: { get: () => undefined },
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: null,
				})
			`
		})
	],
	render: () => {
		const store = createSyncStore(undefined)
		return <ShowThemeFromStore store={store} themes={themes} theme={null} data-testid="result" />
	},
	play: async ({ canvas }) => {
		const result = await canvas.getByTestId('result-theme')
		await expect(result).toHaveTextContent('undefined')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('undefined')
	}
}

const themesWithArray = {
	default: 'a',
	other: ['b', 'c'] as const
} as const

export const ThemeMapArrayValue: Story = {
	tags: ['unit'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When the themes map has array values (<code>readonly string[]</code>), a valid stored
					result with that value is returned as-is.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themes = { default: 'a', other: ['b', 'c'] }
				const result = await getThemeFromStore({
					store: { get: () => ({ theme: 'other', value: ['b', 'c'] }) },
					themes,
				})
			`
		})
	],
	render: () => {
		const store = createSyncStore({
			theme: 'other',
			value: themesWithArray.other
		})
		return <ShowThemeFromStore store={store} themes={themesWithArray} data-testid="result" />
	},
	play: async ({ canvas }) => {
		const resultTheme = await canvas.getByTestId('result-theme')
		await expect(resultTheme).toHaveTextContent('other')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('[b, c]')
	}
}

export const InvalidStoredValue: Story = {
	tags: ['unit'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Uses default theme when the store returns empty or the resolved value has no valid theme
					key.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = { read: () => undefined }
				const theme = await getThemeFromStores([store], 'grayscale')
			`
		})
	],
	render: () => {
		return (
			<ShowThemeFromStore
				store={{
					read: () => undefined
				}}
				themes={themes}
				theme="grayscale"
				data-testid="result"
			/>
		)
	},
	play: async ({ canvas }) => {
		const result = await canvas.getByTestId('result-theme')
		await expect(result).toHaveTextContent('grayscale')
		const resultValue = await canvas.getByTestId('result-value')
		await expect(resultValue).toHaveTextContent('text-gray-100')
	}
}
