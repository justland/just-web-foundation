import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { ThemeResultCard } from '../../testing/theme-result-card.tsx'
import { type AsyncThemeStore, type ThemeEntry, themeEntry } from '../index.ts'
import source from './async-theme-store.types.ts?raw'

const meta = {
	title: 'theme2/theme-store/AsyncThemeStore',
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
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When you specify only the <code>read</code> method, the store is read-only.{' '}
						<code>read</code> may return a value or <code>Promise</code>.
					</p>
					<p>
						When multiple stores have <code>read</code>, the first non-empty result is returned.
					</p>
				</>
			)
		}),
		showSource({
			source: 'read?: () => ThemeEntry | undefined | null | Promise<ThemeEntry | undefined | null>'
		}),
		showSource({
			source: dedent`
				const store: AsyncThemeStore = {
					read: async () => themeEntry('grayscale', themeMap)
				}
				await store.read()
			`
		})
	],
	render: () => {
		const [result, setResult] = useState<ThemeEntry<typeof themeMap> | undefined | null>(undefined)
		const store = {
			read: async () => themeEntry('grayscale', themeMap)
		} satisfies AsyncThemeStore<typeof themeMap>

		useEffect(() => {
			void store.read?.().then(setResult)
		}, [])

		return (
			<ThemeResultCard
				title="store.read() (async)"
				data-testid="read-only-result"
				result={result}
			/>
		)
	}
}

export const WriteOnly: Story = {
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When you specify only the <code>write</code> method, the store is write-only.{' '}
					<code>write</code> may be sync or async (return <code>Promise&lt;void&gt;</code>).
				</p>
			)
		}),
		showSource({
			source: 'write?: (entry: ThemeEntry | undefined) => void | Promise<void>'
		}),
		showSource({
			source: dedent`
				const store: AsyncThemeStore = {
					write: async (entry) => { /* persist */ }
				}
				await store.write?.(themeEntry('grayscale', themeMap))
			`
		})
	],
	render: () => {
		const [entry, setEntry] = useState<ThemeEntry<typeof themeMap> | undefined>(undefined)
		const store = {
			write: async (e: ThemeEntry<typeof themeMap> | undefined) => {
				setEntry(e)
			}
		} satisfies AsyncThemeStore<typeof themeMap>

		useEffect(() => {
			void store.write?.(themeEntry('grayscale', themeMap))
		}, [])

		return (
			<ThemeResultCard
				title="store.write() receives"
				data-testid="write-only-result"
				result={entry}
			/>
		)
	}
}

export const SubscribeOnly: Story = {
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When you specify only the <code>subscribe</code> method, the store is subscribe-only.
						<code>subscribe</code> is used to observe external changes (e.g. system preference,
						remote sync).
					</p>
					<p>
						The <code>handler</code> is called only when the theme changes.
					</p>
				</>
			)
		}),
		showSource({
			source:
				'subscribe?: (handler: (theme: ThemeEntry<Themes> | undefined | null) => void) => () => void'
		}),
		showSource({
			source: dedent`
				const store: AsyncThemeStore = {
					subscribe: (handler) => {
					  handlers.push(handler)
					  return () => { handlers = handlers.filter((h) => h !== handler) }
					}
				}
				store.subscribe?.((entry) => console.log(entry))
			`
		})
	],
	render: () => {
		const [entry, setEntry] = useState<ThemeEntry<typeof themeMap> | undefined | null>(undefined)
		const store = {
			subscribe: (handler: (theme: ThemeEntry<typeof themeMap> | undefined | null) => void) => {
				handler(themeEntry('grayscale', themeMap))
				return () => {}
			}
		} satisfies AsyncThemeStore<typeof themeMap>

		useEffect(() => {
			return store.subscribe?.(setEntry)
		}, [])

		return (
			<ThemeResultCard
				title="store.subscribe(handler) → handler receives"
				data-testid="subscribe-only-result"
				result={entry}
			/>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
