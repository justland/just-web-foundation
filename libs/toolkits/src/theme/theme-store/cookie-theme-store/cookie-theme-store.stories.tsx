import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useMemo, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import {
	cookieThemeStore,
	getThemeFromCookie,
	type ThemeEntry,
	themeEntry
} from '#just-web/toolkits/theme'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../../../testing/theme/theme-store-demo.tsx'
import source from './cookie-theme-store.ts?raw'

const meta = {
	title: 'theme/theme-store/cookieThemeStore',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Theme store backed by cookies. Persists across sessions; SSR-readable. Cross-tab sync is not supported.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
	current: { themeValue: 'theme-current' },
	next: { themeValue: 'theme-next' },
	grayscale: { themeValue: 'theme-grayscale' },
	'high-contrast': { themeValue: 'theme-high-contrast' }
} as const

const COOKIE_NAME = 'theme-cookie-demo'

function clearCookie(name: string) {
	// biome-ignore lint/suspicious/noDocumentCookie: Needed for story cleanup
	document.cookie = `${name}=; path=/; max-age=0`
}

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story:
				'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
				<ThemeStoreDemo2 store={store} themes={themes} />
			`
		})
	],
	loaders: [
		() => {
			clearCookie(COOKIE_NAME)
			return {}
		}
	],
	render: () => {
		const store = useMemo(() => cookieThemeStore(themes, { cookieName: COOKIE_NAME }), [])
		return <ThemeStoreDemo store={store} themes={themes} />
	}
	// Play omitted: document.cookie can be restricted in Storybook test iframe (third-party context)
}

export const CookieName: Story = {
	name: 'cookieName',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Pass <code>options.cookieName</code> to determine the cookie name used for persistence.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = cookieThemeStore(themes, { cookieName: 'app-theme' })
			`
		})
	],
	loaders: [
		() => {
			const store = cookieThemeStore(themes, { cookieName: COOKIE_NAME })
			store.write(themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const store = cookieThemeStore(themes, { cookieName: COOKIE_NAME })
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="Cookie name" appearance="output">
					<code>{COOKIE_NAME}</code>
				</StoryCard>
				<ThemeResultCard
					title="store.read() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'current', value: themes.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current')
	}
}

const CUSTOM_PARSE_COOKIE_NAME = 'theme-cookie-custom-parse'

const themesLightDark = {
	light: { themeValue: 'theme-light' },
	dark: { themeValue: 'theme-dark' }
} as const

/** Value with optional timestamp for polymorphic storage demo. */
type ThemeValueWithTimestamp = { themeValue: string; timestamp?: number }

function parseThemeEntryWithTimestamp<Themes extends typeof themesLightDark>(
	themes: Themes,
	value: string | null | undefined
): ThemeEntry<Themes> | undefined {
	let parsed: { theme?: string; value?: ThemeValueWithTimestamp }
	try {
		parsed = JSON.parse(value ?? '{}') as typeof parsed
	} catch {
		return undefined
	}
	if (!parsed?.theme || !(parsed.theme in themes)) return undefined
	const base = themes[parsed.theme as keyof Themes]
	const mergedValue = { ...base, ...parsed.value }
	return { theme: parsed.theme as keyof Themes, value: mergedValue }
}

export const ParseOption: Story = {
	name: 'options.parse',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Provide a custom parse function to read and preserve extra data (e.g. timestamp) stored alongside the theme.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use <code>options.parse</code> to parse stored JSON and return a <code>ThemeEntry</code>.
					The store writes the full entry via <code>JSON.stringify(entry)</code>, so you can persist
					extra fields (e.g. <code>timestamp</code>) in <code>value</code> and restore them on read.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themes = { light: { themeValue: 'theme-light' }, dark: { themeValue: 'theme-dark' } }

				function parseThemeEntryWithTimestamp(themes, value) {
					const parsed = JSON.parse(value ?? '{}')
					if (!parsed?.theme || !(parsed.theme in themes)) return undefined
					const base = themes[parsed.theme]
					return { theme: parsed.theme, value: { ...base, ...parsed.value } }
				}

				const store = cookieThemeStore(themes, {
					cookieName: 'theme',
					parse: parseThemeEntryWithTimestamp
				})

				store.write({ theme: 'dark', value: { themeValue: 'theme-dark', timestamp: Date.now() } })
				const entry = store.read()
				// entry.value.timestamp
			`
		})
	],
	loaders: [
		() => {
			clearCookie(CUSTOM_PARSE_COOKIE_NAME)
			const store = cookieThemeStore(themesLightDark, {
				cookieName: CUSTOM_PARSE_COOKIE_NAME,
				parse: parseThemeEntryWithTimestamp
			})
			store.write({
				theme: 'dark',
				value: { themeValue: 'theme-dark', timestamp: 1_700_000_000_000 }
			})
			return {}
		}
	],
	render: () => {
		const store = cookieThemeStore(themesLightDark, {
			cookieName: CUSTOM_PARSE_COOKIE_NAME,
			parse: parseThemeEntryWithTimestamp
		})
		const [entry, setEntry] = useState<ThemeEntry<typeof themesLightDark> | undefined>(() =>
			store.read()
		)

		const valueWithTs = entry?.value as ThemeValueWithTimestamp | undefined

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="write-light"
						onPress={() => {
							store.write({
								theme: 'light',
								value: { themeValue: 'theme-light', timestamp: Date.now() }
							})
							setEntry(store.read())
						}}
					>
						write(light + timestamp)
					</Button>
					<Button
						data-testid="write-dark"
						onPress={() => {
							store.write({
								theme: 'dark',
								value: { themeValue: 'theme-dark', timestamp: Date.now() }
							})
							setEntry(store.read())
						}}
					>
						write(dark + timestamp)
					</Button>
				</div>
				<StoryCard title="store.read() result" appearance="output" data-testid="parse-result">
					<div className="text-sm font-mono space-y-1">
						<p>
							theme: <span data-testid="parse-result-theme">{entry?.theme ?? '(none)'}</span>
						</p>
						<p>
							value.themeValue:{' '}
							<span data-testid="parse-result-theme-value">
								{valueWithTs?.themeValue ?? '(none)'}
							</span>
						</p>
						<p>
							value.timestamp:{' '}
							<span data-testid="parse-result-timestamp">
								{valueWithTs?.timestamp != null
									? new Date(valueWithTs.timestamp).toISOString()
									: '(none)'}
							</span>
						</p>
					</div>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('parse-result-theme')).toHaveTextContent('dark')
		await expect(canvas.getByTestId('parse-result-theme-value')).toHaveTextContent('theme-dark')
		await expect(canvas.getByTestId('parse-result-timestamp')).toHaveTextContent('2023')

		await userEvent.click(canvas.getByTestId('write-light'))
		await waitFor(() => expect(canvas.getByTestId('parse-result-theme')).toHaveTextContent('light'))
		await expect(canvas.getByTestId('parse-result-theme-value')).toHaveTextContent('theme-light')
	}
}

export const Read: Story = {
	name: 'read',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.read() reads the current theme from the cookie.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = cookieThemeStore(themes, { cookieName: 'theme' })
				const result = store.read()
			`
		})
	],
	loaders: [
		() => {
			const store = cookieThemeStore(themes, { cookieName: COOKIE_NAME })
			store.write(themeEntry(themes, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const store = cookieThemeStore(themes, { cookieName: COOKIE_NAME })
		const result = store.read()
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result ?? { theme: 'grayscale', value: themes.grayscale }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const ReadWhenEmpty: Story = {
	name: 'read: undefined',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When no theme cookie exists, store.read() returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = cookieThemeStore(themes, { cookieName: 'theme-get' })
				const theme = store.read() // undefined when empty
			`
		})
	],
	loaders: [
		() => {
			clearCookie(COOKIE_NAME)
			return {}
		}
	],
	render: () => {
		const store = cookieThemeStore(themes, { cookieName: COOKIE_NAME })
		const result = store.read()
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result !== undefined ? result : { theme: undefined, value: undefined }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)')
	}
}

export const GetThemeFromCookie: Story = {
	name: 'getThemeFromCookie (SSR)',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Read theme from Cookie header during SSR. Use with raw header string or a getter (e.g. Next.js cookies()).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				// With raw Cookie header (Express, Remix)
				const theme = getThemeFromCookie(request.headers.get('Cookie') ?? '', themes)

				// With Next.js cookies()
				const theme = getThemeFromCookie(
				  (name) => cookies().get(name)?.value ?? undefined,
				  themes
				)
			`
		})
	],
	render: () => {
		const cookieHeader = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(themeEntry(themes, 'grayscale')))}`
		const result = getThemeFromCookie(cookieHeader, themes, { cookieName: COOKIE_NAME })
		return (
			<ThemeResultCard
				title="getThemeFromCookie result"
				data-testid="get-theme-result"
				result={result ?? { theme: 'grayscale', value: themes.grayscale }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('get-theme-result')).toHaveTextContent('theme: grayscale')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
