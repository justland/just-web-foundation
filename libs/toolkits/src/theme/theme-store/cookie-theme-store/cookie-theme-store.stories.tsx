import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useMemo } from 'react'
import { expect } from 'storybook/test'
import {
	cookieThemeStore,
	getThemeFromCookie,
	type ThemeEntry,
	themeEntry
} from '#just-web/toolkits/theme'
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
	current: 'theme-current',
	next: 'theme-next',
	grayscale: 'theme-grayscale',
	'high-contrast': 'theme-high-contrast'
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

const COOKIE_NAME_PARSE = 'theme-cookie-parse'

function clearCookieParse() {
	// biome-ignore lint/suspicious/noDocumentCookie: Needed for story setup
	document.cookie = `${COOKIE_NAME_PARSE}=; path=/; max-age=0`
}

/** Custom parse: accept legacy { theme } without value, coerce to themeEntry */
function customParseLegacy<Themes extends typeof themes>(
	themes: Themes,
	value: string | null | undefined
): ThemeEntry<Themes> | undefined {
	let parsed: { theme?: string } | undefined
	try {
		parsed = value ? JSON.parse(value) : undefined
	} catch {
		return undefined
	}
	if (!parsed?.theme || typeof parsed.theme !== 'string' || !(parsed.theme in themes))
		return undefined
	const themeKey = parsed.theme as keyof Themes
	return { theme: themeKey, value: themes[themeKey] }
}

export const ParseOption: Story = {
	name: 'options.parse',
	tags: ['props', 'use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						The <code>options.parse</code> allows you to provide a custom parse function to parse
						the stored value to a specific structure you wanted. Use it when migrating from legacy
						formats, supporting custom serialization, or relaxing validation.
					</p>
					<p>
						The example below pre-seeds the cookie with legacy format{' '}
						<code>{`{ theme: "grayscale" }`}</code> (no value).
					</p>
				</>
			)
		}),
		showSource({
			source: dedent`
				const customParse = (themes, value) => {
					const parsed = JSON.parse(value || '{}')
					if (!parsed?.theme || !(parsed.theme in themes)) return undefined
					return { theme: parsed.theme, value: themes[parsed.theme] }
				}
				const store = cookieThemeStore(themes, { cookieName: 'theme', parse: customParse })
			`
		})
	],
	loaders: [
		() => {
			clearCookieParse()
			// biome-ignore lint/suspicious/noDocumentCookie: Needed for story setup
			document.cookie = `${COOKIE_NAME_PARSE}=${encodeURIComponent(
				JSON.stringify({ theme: 'grayscale' })
			)}; path=/; max-age=60`
			return {}
		}
	],
	render: () => {
		const store = cookieThemeStore(themes, {
			cookieName: COOKIE_NAME_PARSE,
			parse: customParseLegacy
		})
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<ThemeResultCard
					title="store.read() with custom parse"
					data-testid="store-read-result"
					result={result ?? { theme: 'grayscale', value: themes.grayscale }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const CookieName: Story = {
	name: 'options.cookieName',
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
