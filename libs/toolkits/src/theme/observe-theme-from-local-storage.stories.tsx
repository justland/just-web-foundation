import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { expect } from 'storybook/test'
import { observeThemeFromLocalStorage, setThemeToLocalStorage } from '#just-web/toolkits'
import { ThemeResultCard } from '../testing/theme-result-card.tsx'
import { defineThemeStorageOptions } from './define-theme-storage-options.ts'
import source from './observe-theme-from-local-storage.ts?raw'

const meta = {
	title: 'theme/observeThemeFromLocalStorage',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes the theme stored in localStorage and invokes a handler with the current theme. The handler is called once on start and when another tab/window changes the same storage key.'
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

const STORAGE_KEY = 'theme-observe'

function ObserveThemeDemo({
	storageKey,
	themes: themesOption,
	theme: defaultTheme
}: {
	storageKey: string
	themes: typeof themes
	theme?: keyof typeof themes | null
}) {
	const [result, setResult] = useState<
		{ theme: string; value: string | readonly string[] } | undefined
	>(undefined)

	useEffect(() => {
		const options = defineThemeStorageOptions({
			themes: themesOption,
			theme: defaultTheme ?? undefined,
			storageKey
		})
		const observer = observeThemeFromLocalStorage({
			...options,
			handler: setResult
		})
		return () => observer.disconnect()
	}, [storageKey, defaultTheme, themesOption])

	return (
		<ThemeResultCard
			title="Observed theme from localStorage"
			data-testid="observed-theme"
			result={result}
		/>
	)
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Handler is called once on start with the current theme from <code>localStorage</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				observeThemeFromLocalStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: 'default',
					storageKey: 'theme-observe',
					handler: (result) => console.log('Theme:', result?.theme, result?.value),
				})
			`
		})
	],
	loaders: [
		() => {
			const options = defineThemeStorageOptions({
				themes,
				theme: 'grayscale',
				storageKey: STORAGE_KEY
			})
			setThemeToLocalStorage(options)
			return { options }
		}
	],
	render: (_, { loaded: { options } }) => {
		return (
			<ObserveThemeDemo
				storageKey={options.storageKey}
				themes={options.themes}
				theme={options.theme ?? undefined}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('theme: grayscale')
	}
}

export const Disconnect: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Call disconnect() to stop observing and remove the storage listener.'
		}
	}),
	loaders: [
		() => {
			const options = defineThemeStorageOptions({
				themes,
				theme: 'grayscale',
				storageKey: 'theme-disconnect'
			})
			setThemeToLocalStorage(options)
			return { options }
		}
	],
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const observer = observeThemeFromLocalStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: 'grayscale',
					storageKey: 'theme-disconnect',
					handler: (result) => console.log('Theme:', result?.theme, result?.value),
				})
				observer.disconnect()
				setThemeToLocalStorage({ ...options, theme: 'default' })
			`
		})
	],
	render: (_, { loaded: { options } }) => {
		const [theme, setTheme] = useState<string | undefined>(undefined)
		useEffect(() => {
			const observer = observeThemeFromLocalStorage({
				...options,
				handler: (result) => setTheme(result?.theme)
			})

			observer.disconnect()
			setThemeToLocalStorage({ ...options, theme: 'default' })
		}, [options])
		return (
			<StoryCard title="After disconnect" appearance="output">
				Theme remains to be: <span data-testid="theme">{theme ?? '(empty)'}</span>
			</StoryCard>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('theme')).toHaveTextContent('grayscale')
	}
}

export const ThemeNotExists: Story = {
	name: 'theme: not exists',
	tags: ['props'],
	loaders: [
		() => {
			const options = defineThemeStorageOptions({
				themes,
				theme: 'grayscale',
				storageKey: 'theme-not-exists'
			})
			setThemeToLocalStorage({ ...options, theme: null })
			return { options }
		}
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Handler receives <code>theme</code> when nothing is stored at the key.
				</p>
			)
		}),
		showSource({
			source: dedent`
				observeThemeFromLocalStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: 'grayscale',
					storageKey: 'theme-not-exists',
					handler: (result) => console.log('Theme:', result?.theme, result?.value),
				})
			`
		})
	],
	render: (_, { loaded: { options } }) => {
		return (
			<ObserveThemeDemo
				storageKey={options.storageKey}
				themes={options.themes}
				theme={options.theme ?? undefined}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('theme: grayscale')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
