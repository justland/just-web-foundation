import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useMemo } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Button } from '../../testing/button.tsx'
import { inMemoryThemeStore, themeEntry } from '../../theme2/index.ts'
import { createThemeHook } from '../index.ts'
import code from './create-theme-hook.ts?raw'

type Theme = 'current' | 'grayscale' | 'high-contrast'

const themes = {
	current: 'current',
	grayscale: 'grayscale',
	'high-contrast': 'high-contrast'
} as const satisfies Record<Theme, string>

const meta = {
	title: 'react/theme/createThemeHook',
	tags: ['func', 'version:next'],
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
				const store = inMemoryThemeStore<typeof themes>()
				const useTheme = createThemeHook({ stores: [store], defaultTheme: 'current', themes: themes })
				const [theme, setTheme] = useTheme()
				setTheme('high-contrast')
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	loaders: [
		async () => {
			const store = inMemoryThemeStore<typeof themes>()
			const useTheme = createThemeHook({
				stores: [store],
				defaultTheme: 'current',
				themes: themes
			})
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

export const OverrideDefaultTheme: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Pass an override default theme to useTheme(). When stores are empty, that override is used instead of the configured defaultTheme.'
		},
		source: {
			code: dedent`
				const store = inMemoryThemeStore<typeof themes>()
				const useTheme = createThemeHook({ stores: [store], defaultTheme: 'current', themes: themes })
				const [theme] = useTheme('high-contrast') // theme === 'high-contrast' when store empty
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		function Demo() {
			const store = useMemo(() => inMemoryThemeStore<typeof themes>(), [])
			const useTheme = useMemo(
				() =>
					createThemeHook({
						stores: [store],
						defaultTheme: 'current',
						themes: themes
					}),
				[store]
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

export const StoryWithValue: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'When the store already has a value, useTheme returns it on first render.'
		},
		source: {
			code: dedent`
				const store = inMemoryThemeStore<typeof themes>()
				store.write?.(themeEntry('grayscale', themes))
				const useTheme = createThemeHook({ stores: [store], defaultTheme: 'current', themes: themes })
				const [theme] = useTheme() // theme === 'grayscale'
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(() => {
			const s = inMemoryThemeStore<typeof themes>()
			s.write?.(themeEntry('grayscale', themes))
			return s
		}, [])
		const useTheme = useMemo(
			() =>
				createThemeHook({
					stores: [store],
					defaultTheme: 'current',
					themes: themes
				}),
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

				const useTheme = createThemeHook({ stores: [store], defaultTheme: 'current', themes: themes })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(() => inMemoryThemeStore<typeof themes>(), [])
		const useTheme = useMemo(
			() =>
				createThemeHook({
					stores: [store],
					defaultTheme: 'current',
					themes: themes
				}),
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

				const useTheme = createThemeHook({ stores: [store], defaultTheme: 'current', themes: themes })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const store = useMemo(() => inMemoryThemeStore<typeof themesArray>(), [])
		const useTheme = useMemo(
			() =>
				createThemeHook({
					stores: [store],
					defaultTheme: 'current',
					themes: themesArray
				}),
			[store]
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

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
