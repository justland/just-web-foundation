import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { type AsyncThemeStore, type ThemeEntry, themeEntry } from '#just-web/toolkits/theme'
import { ThemeResultCard } from '../../testing/theme/theme-result-card.tsx'
import source from './async-theme-store.types.ts?raw'

const meta = {
	title: 'theme/theme-store/AsyncThemeStore',
	tags: ['type', 'version:1.0'],
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
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
			source: 'read?: () => ThemeEntry | undefined | Promise<ThemeEntry | undefined>'
		}),
		showSource({
			source: dedent`
				const store: AsyncThemeStore = {
					read: async () => themeEntry(themes, 'grayscale')
				}
				await store.read()
			`
		})
	],
	render: () => {
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)
		const store = {
			read: async () => themeEntry(themes, 'grayscale')
		} satisfies AsyncThemeStore<typeof themes>

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
				await store.write?.(themeEntry(themes, 'grayscale'))
			`
		})
	],
	render: () => {
		const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined>(undefined)
		const store = {
			write: async (e: ThemeEntry<typeof themes> | undefined) => {
				setEntry(e)
			}
		} satisfies AsyncThemeStore<typeof themes>

		useEffect(() => {
			void store.write?.(themeEntry(themes, 'grayscale'))
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
			source: 'subscribe?: (handler: (theme: ThemeEntry<Themes> | undefined) => void) => () => void'
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
		const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined>(undefined)
		const store = {
			subscribe: (handler: (theme: ThemeEntry<typeof themes> | undefined) => void) => {
				handler(themeEntry(themes, 'grayscale'))
				return () => {}
			}
		} satisfies AsyncThemeStore<typeof themes>

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
