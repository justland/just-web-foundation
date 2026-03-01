import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { getThemeFromSessionStorage, setThemeToSessionStorage } from '#just-web/toolkits'
import { ShowThemeFromSessionStorage } from '../testing/show-theme-from-session-storage.tsx'
import { defineThemeStorageOptions } from './define-theme-storage-options.ts'
import source from './get-theme-from-session-storage.ts?raw'

const meta = {
	title: 'theme/getThemeFromSessionStorage',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Gets the theme key stored in sessionStorage, validated against a themes map. Returns defaultTheme when the key is missing, empty, or the stored value is not in the themes map.'
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

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets theme from sessionStorage when a valid theme key is stored.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				getThemeFromSessionStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					storageKey: 'theme',
				})
			`
		})
	],
	loaders: [
		() => {
			const options = defineThemeStorageOptions({
				themes,
				theme: 'default',
				storageKey: 'theme'
			})
			setThemeToSessionStorage(options)
			return { options }
		}
	],
	render: (_, { loaded: { options } }) => {
		return <ShowThemeFromSessionStorage {...options} />
	},
	play: async ({ loaded: { options } }) => {
		const stored = getThemeFromSessionStorage(options)
		await expect(stored?.theme).toBe('default')
		await expect(stored?.value).toBe('text-white')
	}
}

export const ThemeNotExists: Story = {
	name: 'theme: not exists',
	tags: ['use-case', 'props'],
	loaders: [
		() => {
			const options = defineThemeStorageOptions({
				themes,
				theme: 'grayscale',
				storageKey: 'theme-not-exists'
			})
			setThemeToSessionStorage({ ...options, theme: null })
			return { options }
		}
	],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						Returns <code>theme</code> when nothing is stored at the key
					</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				getThemeFromSessionStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: 'grayscale',
					storageKey: 'theme-not-exists',
				})
			`
		})
	],
	render: (_, { loaded: { options } }) => {
		return <ShowThemeFromSessionStorage {...options} />
	},
	play: async ({ loaded: { options } }) => {
		const result = getThemeFromSessionStorage(options)
		await expect(result?.theme).toBe('grayscale')
		await expect(result?.value).toBe('text-gray-100')
	}
}

export const InvalidStoredValue: Story = {
	name: 'theme: invalid stored value',
	tags: ['props', 'unit'],
	loaders: [
		() => {
			window.sessionStorage.setItem('theme-invalid-value', 'invalid-theme')

			const options = defineThemeStorageOptions({
				themes,
				theme: 'grayscale',
				storageKey: 'theme-invalid-value'
			})
			return { options }
		}
	],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Returns <code>theme</code> when the stored value is not a valid theme entry.
				</p>
			)
		}),
		showSource({
			source: dedent`
				getThemeFromSessionStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: 'grayscale',
					storageKey: 'theme-invalid-value',
				})
			`
		})
	],
	render: (_, { loaded: { options } }) => {
		return <ShowThemeFromSessionStorage {...options} />
	},
	play: async ({ loaded: { options } }) => {
		const result = getThemeFromSessionStorage(options)
		await expect(result?.theme).toBe('grayscale')
		await expect(result?.value).toBe('text-gray-100')
	}
}

export const WithThemeArray: Story = {
	name: 'themes: with theme array',
	tags: ['props', 'use-case'],
	loaders: [
		() => {
			const options = defineThemeStorageOptions({
				themes: {
					default: ['text-white', 'bg-white'],
					grayscale: ['text-gray-100', 'bg-gray-100']
				},
				storageKey: 'theme-array-with-theme'
			})
			setThemeToSessionStorage({ ...options, theme: 'default' })
			return {
				options
			}
		}
	],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>Gets the theme from sessionStorage when the theme value is an array</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				getThemeFromSessionStorage({
					themes: {
						default: ['text-white', 'bg-white'],
						grayscale: ['text-gray-100', 'bg-gray-100'],
					},
					storageKey: 'theme-array-with-theme',
				})
			`
		})
	],
	render: (_, { loaded: { options } }) => {
		return <ShowThemeFromSessionStorage {...options} />
	},
	play: async ({ loaded: { options } }) => {
		const stored = getThemeFromSessionStorage(options)
		await expect(stored?.theme).toBe('default')
		await expect(stored?.value).toEqual(['text-white', 'bg-white'])
	}
}

export const InvalidStoredValueNoTheme: Story = {
	name: 'Invalid stored value without theme',
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Returns undefined when the stored value is invalid and no defaultTheme is provided.'
		}
	}),
	loaders: [
		() => {
			window.sessionStorage.setItem('theme-no-default', 'invalid-theme')
			return {
				options: defineThemeStorageOptions({
					themes,
					storageKey: 'theme-no-default'
				})
			}
		}
	],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						Returns <code>undefined</code> when storage is invalid and <code>theme</code> is not
						provided
					</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				getThemeFromSessionStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					storageKey: 'theme-no-default',
				})
			`
		})
	],
	render: (_, { loaded: { options } }) => {
		return <ShowThemeFromSessionStorage {...options} />
	},
	play: async ({ loaded: { options } }) => {
		const result = getThemeFromSessionStorage(options)
		await expect(result).toBeUndefined()
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
