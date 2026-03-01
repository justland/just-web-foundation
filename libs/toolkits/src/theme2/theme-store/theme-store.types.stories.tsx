import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { ThemeResultCard } from '../../testing/theme-result-card.tsx'
import { inMemoryThemeStore, themeEntry } from '../index.ts'
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

export const ReadOnly: Story = {
	name: 'read only',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Store with only <code>read</code> participates in waterfall read. Used when the store is read-only (e.g. data-attribute observer).'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>read</code> returns <code>ThemeEntry | undefined | null</code>. When multiple stores
					have read, values are read in waterfall order.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store: ThemeStore = {
					read: () => themeEntry('current', themeMap)
				}
				store.read()
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		store.write(themeEntry('current', themeMap))
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.read()"
					data-testid="read-only-result"
					result={store.read()}
				/>
			</div>
		)
	}
}

export const WriteOnlyStory: Story = {
	name: 'write only',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Store with only <code>write</code> receives writes from setTheme. Used when the store is write-only.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>write(entry)</code> receives theme entry or <code>undefined</code> to clear.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store: ThemeStore = {
					write: (entry) => { /* persist */ }
				}
				store.write(themeEntry('grayscale', themeMap))
			`
		})
	],
	render: () => (
		<div className="flex flex-col gap-4">
			<p className="text-sm text-gray-600">
				Write-only store receives writes; no visual output. See <code>inMemoryThemeStore</code> or
				concrete store stories for write behavior.
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
					<code>subscribe(handler)</code> calls handler with initial value and on changes. Returns
					unsubscribe function.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store: ThemeStore = {
					subscribe: (handler) => {
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
	name: 'full store (read + write + subscribe)',
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
					Full store with <code>read</code>, <code>write</code>, and <code>subscribe</code>. Used by
					<code> inMemoryThemeStore</code>, <code>localStorageThemeStore</code>, etc.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = inMemoryThemeStore<typeof themeMap>()
				store.read()       // undefined when empty
				store.write(themeEntry('grayscale', themeMap))
				store.read()       // { theme: 'grayscale', value: 'theme-grayscale' }
			`
		})
	],
	render: () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		store.write(themeEntry('grayscale', themeMap))
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.read() after write('grayscale')"
					data-testid="full-store-result"
					result={store.read()}
				/>
				<ThemeResultCard
					title="dummyThemeStore.read()"
					data-testid="dummy-result"
					result={dummyThemeStore.read()}
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
