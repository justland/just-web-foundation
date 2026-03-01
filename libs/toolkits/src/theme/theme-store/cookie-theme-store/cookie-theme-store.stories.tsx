import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useMemo } from 'react'
import { expect } from 'storybook/test'
import { cookieThemeStore, getThemeFromCookie, themeEntry } from '#just-web/toolkits/theme'
import { ThemeResultCard } from '../../../testing/theme-result-card.tsx'
import { ThemeStoreDemo2 } from '../../theme-store-demo2.tsx'
import source from './cookie-theme-store.ts?raw'

const meta = {
	title: 'theme/theme-store/cookieThemeStore',
	tags: ['func', 'version:next'],
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
		return <ThemeStoreDemo2 store={store} themes={themes} />
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
			store.write(themeEntry('current', themes))
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
			store.write(themeEntry('grayscale', themes))
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
				result={
					result !== undefined && result !== null ? result : { theme: undefined, value: undefined }
				}
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
		const cookieHeader = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(themeEntry('grayscale', themes)))}`
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
