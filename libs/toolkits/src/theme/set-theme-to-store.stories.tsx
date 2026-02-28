import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import {
	getThemeFromStore,
	setThemeToStore,
	type ThemeResult,
	type ThemeStore,
} from '#just-web/toolkits'
import { ShowThemeFromStore } from '../testing/show-theme-from-store.tsx'

const meta = {
	title: 'theme/setThemeToStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Sets the theme in a generic store (sync or async). Clears when theme is null or undefined.',
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
			story: 'Sets theme in an in-memory store then reads it back.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = createInMemoryStore(undefined)
				await setThemeToStore({ store, themes, theme: 'grayscale' })
				const result = await getThemeFromStore({ store, themes, theme: 'default' })
			`,
		}),
	],
	loaders: [
		async () => {
			const store = createInMemoryStore(undefined)
			await setThemeToStore({ store, themes, theme: 'grayscale' })
			return { store }
		},
	],
	render: (_, { loaded: { store } }) => {
		return <ShowThemeFromStore store={store} themes={themes} theme="default" />
	},
	play: async () => {
		const store = createInMemoryStore(undefined)
		await setThemeToStore({ store, themes, theme: 'grayscale' })
		const result = await getThemeFromStore({ store, themes, theme: 'default' })
		await expect(result?.theme).toBe('grayscale')
		await expect(result?.value).toBe('text-gray-100')
	},
}
