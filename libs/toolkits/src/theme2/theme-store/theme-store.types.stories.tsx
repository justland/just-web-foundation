import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { ThemeResultCard } from '../../testing/theme-result-card.tsx'
import { inMemoryThemeStore, themeEntry } from '../index.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { dummyThemeStore } from './dummy-theme-store.ts'
import source from './theme-store.types.ts?raw'

const meta = {
	title: 'theme2/theme-store/ThemeStore',
	tags: ['type', 'version:next'],
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themeMap = {
	current: 'theme-current',
	grayscale: 'theme-grayscale'
} as const

export const GetOnly: Story = {
	name: 'get only',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Store with only <code>get</code> participates in waterfall read. Used when the store is read-only (e.g. data-attribute observer).'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>get</code> returns <code>ThemeEntry | undefined | null</code>. When multiple stores
					have get, values are read in waterfall order.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store: ThemeStore = {
					get: (themes) => themeEntry('current', themes)
				}
				store.get(themeMap)
			`
		})
	],
	render: () => {
		const store = {
			get: <T extends ThemeMap>(themes: T) => themeEntry('current', themes)
		}
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.get(themeMap)"
					data-testid="get-only-result"
					result={store.get(themeMap)}
				/>
			</div>
		)
	}
}

export const SetOnly: Story = {
	name: 'set only',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Store with only <code>set</code> receives writes from setTheme. Used when the store is write-only.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>set(themes, theme)</code> receives theme key or <code>undefined</code> to clear.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store: ThemeStore = {
					set: (themes, theme) => { /* persist */ }
				}
				store.set(themeMap, 'grayscale')
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<p className="text-sm text-gray-600">
				Set-only store receives writes; no visual output. See <code>inMemoryThemeStore</code> or
				concrete store stories for set behavior.
			</p>
		</div>
	)
}

export const SubscribeOnly: Story = {
	name: 'subscribe only',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Store with only <code>subscribe</code> is observed for external changes (e.g. system preference, remote sync).'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>subscribe(themes, handler)</code> calls handler with initial value and on changes.
					Returns unsubscribe function.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store: ThemeStore = {
					subscribe: (themes, handler) => {
						handler(undefined)
						return () => {}
					}
				}
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<p className="text-sm text-gray-600">
				Subscribe-only store observes external sources. See <code>observeThemeFromStores</code> for
				usage.
			</p>
		</div>
	)
}

export const FullStore: Story = {
	name: 'full store (get + set + subscribe)',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'<code>inMemoryThemeStore</code> implements all three methods. <code>dummyThemeStore</code> is a no-op stub.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Full store with <code>get</code>, <code>set</code>, and <code>subscribe</code>. Used by
					<code> inMemoryThemeStore</code>, <code>localStorageThemeStore</code>, etc.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore<typeof themeMap>()
				store.get(themeMap)       // undefined when empty
				store.set(themeMap, 'grayscale')
				store.get(themeMap)       // { theme: 'grayscale', value: 'theme-grayscale' }
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		store.set(themeEntry('grayscale', themeMap))
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.get() after set('grayscale')"
					data-testid="full-store-result"
					result={store.get()}
				/>
				<ThemeResultCard
					title="dummyThemeStore.get()"
					data-testid="dummy-result"
					result={dummyThemeStore.get()}
				/>
			</div>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
