import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { getThemeFromStore, type ThemeResult, type ThemeStore } from '#just-web/toolkits'
import { ShowThemeFromStore } from '../testing/show-theme-from-store.tsx'

const meta = {
	title: 'theme/getThemeFromStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Gets the theme from a generic store (sync or async). Validates against the themes map and uses the default theme when missing or invalid.',
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

function createInMemoryStore(initial: ThemeResult<typeof themes>): ThemeStore<typeof themes> {
	let value = initial
	return {
		get() {
			return value
		},
		set(result) {
			value = result
		},
	}
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets theme from an in-memory sync store.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = {
				  get: () => ({ theme: 'grayscale', value: 'text-gray-100' }),
				  set: () => {},
				}
				const result = await getThemeFromStore({
				  store,
				  themes: { default: 'text-white', grayscale: 'text-gray-100' },
				  theme: 'default',
				})
			`,
		}),
	],
	render: () => {
		const store = createInMemoryStore({
			theme: 'grayscale',
			value: 'text-gray-100',
		})
		return <ShowThemeFromStore store={store} themes={themes} theme="default" />
	},
	play: async () => {
		const store = createInMemoryStore({
			theme: 'grayscale',
			value: 'text-gray-100',
		})
		const result = await getThemeFromStore({ store, themes, theme: 'default' })
		await expect(result?.theme).toBe('grayscale')
		await expect(result?.value).toBe('text-gray-100')
	},
}
