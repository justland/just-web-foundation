import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useMemo } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { createThemeHook } from '#just-web/toolkits/react'
import {
	classNameThemeStore,
	composeThemeStores,
	dataAttributeThemeStore,
	inMemoryThemeStore,
	localStorageThemeStore,
	themeEntry
} from '#just-web/toolkits/theme'
import { Button } from '../../testing/button.tsx'
import { ThemeStoreDemo } from '../../testing/theme/theme-store-demo.tsx'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import code from './create-theme-hook.ts?raw'

type Theme = 'current' | 'grayscale' | 'high-contrast'

const themes = {
	current: 'current',
	grayscale: 'grayscale',
	'high-contrast': 'high-contrast'
} as const satisfies Record<Theme, string>

const meta = {
	title: 'react/theme/createThemeHook',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Factory that creates a React hook returning [theme, setTheme]. Subscribes to theme stores and keeps the returned theme in sync.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story:
				'When stores are empty, useTheme returns defaultTheme. setTheme updates stores and the returned theme.'
		},
		source: {
			code: dedent`
				const store = inMemoryThemeStore(themes)
				const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
				const [theme, setTheme] = useTheme()
				setTheme('high-contrast')
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	loaders: [
		async () => {
			const store = inMemoryThemeStore(themes)
			const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
			return { store, useTheme }
		}
	],
	render: (_, { loaded: { useTheme } }) => {
		const [theme, setTheme] = useTheme()
		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('current')}>Set current</Button>
					<Button onPress={() => setTheme('grayscale')}>Set grayscale</Button>
					<Button onPress={() => setTheme('high-contrast')}>Set high-contrast</Button>
				</div>
				<StoryCard title="Current theme" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('Initial state is defaultTheme', async () => {
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('current')
		})
		await step('Set grayscale', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set grayscale' }))
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('grayscale')
		})
		await step('Set high-contrast', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set high-contrast' }))
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('high-contrast')
		})
	}
}

export const StoryWithValue: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'When the store already has a value, useTheme returns it on first render.'
		},
		source: {
			code: dedent`
				const store = inMemoryThemeStore(themes)
				store.write?.(themeEntry(themes, 'grayscale'))
				const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
				const [theme] = useTheme() // theme === 'grayscale'
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(() => {
			const s = inMemoryThemeStore(themes)
			s.write(themeEntry(themes, 'grayscale'))
			return s
		}, [])
		const useTheme = useMemo(
			() => createThemeHook(themes, [store], { defaultTheme: 'current' }),
			[store]
		)
		const [theme] = useTheme()
		return (
			<StoryCard title="Theme from store with value" appearance="output">
				<pre data-testid="current-theme" className="font-mono">
					{theme ?? '(none)'}
				</pre>
			</StoryCard>
		)
	},
	play: async ({ canvas }) => {
		await waitFor(
			() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('grayscale'),
			{ timeout: 2000 }
		)
	}
}

export const ThemeMapStringValue: Story = {
	name: 'themes: string value',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'themes values can be a single string per theme.'
		},
		source: {
			code: dedent`
				const themes = {
					current: 'current',
					grayscale: 'grayscale',
					'high-contrast': 'high-contrast'
				} as const

				const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(() => inMemoryThemeStore(themes), [themes])
		const useTheme = useMemo(
			() => createThemeHook(themes, [store], { defaultTheme: 'current' }),
			[store]
		)

		function Demo() {
			const [theme] = useTheme()
			return (
				<StoryCard title="useTheme() with string themes" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			)
		}
		return <Demo />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('current')
	}
}

const themesArray = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100'],
	'high-contrast': 'theme-high-contrast'
} as const

export const ThemeMapArrayValues: Story = {
	name: 'themes: array values',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'themes values can be string[]. createThemeHook accepts both; theme keys work the same.'
		},
		source: {
			code: dedent`
				const themes = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100'],
					'high-contrast': 'theme-high-contrast'
				} as const

				const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const useTheme = useMemo(
			() => createThemeHook(themesArray, [[inMemoryThemeStore]], { defaultTheme: 'current' }),
			[]
		)

		function Demo() {
			const [theme] = useTheme()
			return (
				<StoryCard title="useTheme() with array themes" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			)
		}
		return <Demo />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('current')
	}
}
const themesStoreFactory = {
	current: 'theme-current',
	grayscale: 'theme-grayscale',
	'high-contrast': 'theme-high-contrast'
} as const

export const StoresConcrete: Story = {
	name: 'stores: concrete stores',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'Accepts concrete stores.'
		},
		source: {
			code: dedent`
				createThemeHook(themes, [
					classNameThemeStore(themes),
					dataAttributeThemeStore(themes, { attributeName: 'data-theme' }),
					localStorageThemeStore(themes, { storageKey: 'my-theme-key' })
				], { defaultTheme: 'current' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(
			() =>
				composeThemeStores(
					themesStoreFactory,
					[
						classNameThemeStore(themesStoreFactory),
						dataAttributeThemeStore(themesStoreFactory, { attributeName: 'data-theme' }),
						localStorageThemeStore(themesStoreFactory, { storageKey: 'my-theme-key' })
					],
					{ defaultTheme: 'current' }
				),
			[]
		)
		return <ThemeStoreDemo store={store} themes={themesStoreFactory} />
	}
}

export const StoreFactoryPattern: Story = {
	name: 'stores: factory tuples',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Accepts store factory tuples [factory] or [factory, options]. Each position has its own type for options autocomplete.'
		},
		source: {
			code: dedent`
				createThemeHook(themes, [
				  [classNameThemeStore, { element: document.body }],
				  [dataAttributeThemeStore, { attributeName: 'data-theme', element: document.body }],
				  [localStorageThemeStore, { storageKey: 'my-theme-key' }]
				], { defaultTheme: 'current' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(
			() =>
				composeThemeStores(
					themesStoreFactory,
					[
						[classNameThemeStore, { element: document.body }],
						[
							dataAttributeThemeStore,
							{
								attributeName: 'data-theme',
								element: document.body
							}
						],
						[localStorageThemeStore, { storageKey: 'my-theme-key' }]
					],
					{ defaultTheme: 'current' }
				),
			[]
		)
		return <ThemeStoreDemo store={store} themes={themesStoreFactory} />
	}
}

/** Custom factory with options — same pattern as composeThemeStores CustomStoreFactory. */
function createInitializedThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: { initialTheme?: keyof Themes }
) {
	const store = inMemoryThemeStore(themes)
	if (options.initialTheme !== undefined) {
		store.write?.(themeEntry(themes, options.initialTheme))
	}
	return store
}

export const CustomStoreFactory: Story = {
	name: 'stores: custom store factory',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Custom store factory with options. The F generic infers the factory type, enabling options autocomplete for user-defined factories. Same StoreFactoryPattern as composeThemeStores.'
		},
		source: {
			code: dedent`
				function createInitializedThemeStore(themes, options: { initialTheme?: keyof Themes }) {
				  const store = inMemoryThemeStore(themes)
				  if (options.initialTheme) store.write?.(themeEntry(themes, options.initialTheme))
				  return store
				}
				const useTheme = createThemeHook(
				  themes,
				  [[createInitializedThemeStore, { initialTheme: 'grayscale' }]],
				  { defaultTheme: 'current' }
				)
				const [theme] = useTheme() // theme === 'grayscale' (from factory init)
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const useTheme = useMemo(
			() =>
				createThemeHook(themes, [[createInitializedThemeStore, { initialTheme: 'grayscale' }]], {
					defaultTheme: 'current'
				}),
			[]
		)

		function Demo() {
			const [theme, setTheme] = useTheme()
			return (
				<div className="flex flex-col gap-4 font-sans">
					<div className="flex flex-wrap gap-2">
						<Button onPress={() => setTheme('current')}>Set current</Button>
						<Button onPress={() => setTheme('grayscale')}>Set grayscale</Button>
						<Button onPress={() => setTheme('high-contrast')}>Set high-contrast</Button>
					</div>
					<StoryCard title="Theme (factory-initialized)" appearance="output">
						<pre data-testid="current-theme" className="font-mono">
							{theme ?? '(none)'}
						</pre>
					</StoryCard>
				</div>
			)
		}
		return <Demo />
	},
	play: async ({ canvas }) => {
		await waitFor(
			() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('grayscale'),
			{ timeout: 2000 }
		)
	}
}

export const DefaultTheme: Story = {
	name: 'defaultTheme',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'When stores are empty, useTheme() returns the configured defaultTheme. No override is passed.'
		},
		source: {
			code: dedent`
				const store = inMemoryThemeStore(themes)
				const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
				const [theme] = useTheme() // theme === 'current' when store empty
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		function Demo() {
			const useTheme = useMemo(
				() => createThemeHook(themes, [[inMemoryThemeStore]], { defaultTheme: 'current' }),
				[]
			)
			const [theme] = useTheme()
			return (
				<StoryCard title="Theme with default (no override)" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			)
		}
		return <Demo />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('current')
	}
}

export const DefaultThemeOverriddenInHook: Story = {
	name: 'defaultTheme: overridden in hook',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Pass an override default theme to useTheme(). When stores are empty, that override is used instead of the configured defaultTheme.'
		},
		source: {
			code: dedent`
				const store = inMemoryThemeStore(themes)
				const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
				const [theme] = useTheme('high-contrast') // theme === 'high-contrast' when store empty
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		function Demo() {
			const useTheme = useMemo(
				() => createThemeHook(themes, [[inMemoryThemeStore]], { defaultTheme: 'current' }),
				[]
			)
			const [theme] = useTheme('high-contrast')
			return (
				<StoryCard title="Theme with override default" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			)
		}
		return <Demo />
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('high-contrast')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
