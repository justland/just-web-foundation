import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { type ThemeEntry, type ThemeStore, themeEntry } from '#just-web/toolkits/theme'
import { ThemeResultCard } from '../../testing/theme/theme-result-card.tsx'
import source from './theme-store.types.ts?raw'

const meta = {
	title: 'theme/theme-store/ThemeStore',
	tags: ['type', 'version:next'],
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
						When you specify only the <code>read</code> method, the store is read-only.
					</p>
					<p>
						When multiple stores have <code>read</code>, the first non-empty result is returned.
					</p>
				</>
			)
		}),
		showSource({
			source: 'read?: () => ThemeEntry | undefined'
		}),
		showSource({
			source: dedent`
				const store: ThemeStore = {
					read: () => themeEntry(themes, 'current')
				}
				store.read()
			`
		})
	],
	render: () => {
		const store = {
			read: () => themeEntry(themes, 'grayscale')
		} satisfies ThemeStore<typeof themes>

		return (
			<ThemeResultCard title="store.read()" data-testid="read-only-result" result={store.read()} />
		)
	}
}

export const WriteOnly: Story = {
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When you specify only the <code>write</code> method, the store is write-only.
				</p>
			)
		}),
		showSource({
			source: 'write?: (entry: ThemeEntry | undefined) => void'
		}),
		showSource({
			source: dedent`
				const store: ThemeStore = {
					write: (entry) => { /* persist */ }
				}
				store.write(themeEntry(themes, 'grayscale'))
			`
		})
	],
	render: () => {
		const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined>(undefined)
		const store = {
			write: (entry) => {
				setEntry(entry)
			}
		} satisfies ThemeStore<typeof themes>

		useEffect(() => {
			store.write(themeEntry(themes, 'grayscale'))
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
				const store: ThemeStore = {
					subscribe: (handler) => {
					  handlers.push(handler)

						return () => { handlers = handlers.filter((h) => h !== handler) }
					}
				}
				store.subscribe((entry) => console.log(entry))

				// wait for the handler to be called
			`
		})
	],
	render: () => {
		const [entry, setEntry] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)
		const store = {
			subscribe: (handler: (theme: ThemeEntry<typeof themes> | undefined | null) => void) => {
				handler(themeEntry(themes, 'grayscale'))
				return () => {}
			}
		} satisfies ThemeStore<typeof themes>

		useEffect(() => {
			return store.subscribe(setEntry)
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
