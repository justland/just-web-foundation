import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { getThemeFromSessionStorage, setThemeToSessionStorage } from '#just-web/toolkits'
import { ShowThemeFromSessionStorage } from '../testing/show-theme-from-session-storage.tsx'
import { defineThemeStorageOptions } from './define-theme-storage-options.ts'
import source from './set-theme-to-session-storage.ts?raw'

const meta = {
	title: 'theme/setThemeToSessionStorage',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Sets the theme key in sessionStorage. Writes only when the theme is in the themes map; removes the storage item by passing null or undefined to the theme option.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Writes the theme to sessionStorage'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				setThemeToSessionStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100', },
					theme: 'default',
					storageKey: 'theme'
				})
			`
		})
	],
	loaders: [
		() => {
			const options = defineThemeStorageOptions({
				themes: { default: 'text-white', grayscale: 'text-gray-100' },
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

export const RemoveTheme: Story = {
	tags: ['use-case'],
	loaders: [
		() => {
			setThemeToSessionStorage({
				themes: { default: 'default', grayscale: 'grayscale' },
				theme: 'grayscale',
				storageKey: 'remove-theme'
			})
			const options = defineThemeStorageOptions({
				themes: { default: 'default', grayscale: 'grayscale' },
				theme: null,
				storageKey: 'remove-theme'
			})
			setThemeToSessionStorage(options)
			return { options }
		}
	],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						Removes the theme from sessionStorage by passing <code>null</code> to the theme option
					</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				setThemeToSessionStorage({
					themes: { default: 'text-white', grayscale: 'text-gray-100' },
					theme: null,
					storageKey: 'remove-theme',
				})
			`
		})
	],
	render: (_, { loaded: { options } }) => {
		return <ShowThemeFromSessionStorage {...options} />
	},
	play: async ({ loaded: { options } }) => {
		const stored = getThemeFromSessionStorage({
			...options,
			storageKey: 'remove-theme'
		})
		await expect(stored).toBeUndefined()
	}
}

export const WithThemeArray: Story = {
	tags: ['use-case'],
	loaders: [
		() => {
			setThemeToSessionStorage({
				themes: {
					default: ['text-white', 'bg-white'],
					grayscale: ['text-gray-100', 'bg-gray-100']
				},
				theme: 'default',
				storageKey: 'theme-array'
			})
			return {
				options: defineThemeStorageOptions({
					themes: {
						default: ['text-white', 'bg-white'],
						grayscale: ['text-gray-100', 'bg-gray-100']
					},
					theme: 'default',
					storageKey: 'theme-array'
				})
			}
		}
	],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>Writes the theme to sessionStorage when the theme value is an array</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				setThemeToSessionStorage({
					themes: {
						default: ['text-white', 'bg-white'],
						grayscale: ['text-gray-100', 'bg-gray-100'],
					},
					theme: 'default',
					storageKey: 'theme-array',
				})
			`
		})
	],
	render: (_, { loaded: { options } }) => {
		return <ShowThemeFromSessionStorage {...options} />
	},
	play: async ({ loaded: { options } }) => {
		const stored = getThemeFromSessionStorage({
			...options,
			storageKey: 'theme-array'
		})
		await expect(stored?.theme).toBe('default')
		await expect(stored?.value).toEqual(['text-white', 'bg-white'])
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
