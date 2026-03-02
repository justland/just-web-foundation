import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useMemo, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import {
	composeThemeStores,
	prefersColorSchemeThemeStore,
	type ThemeEntry,
	themeEntry
} from '#just-web/toolkits/theme'
import { ThemeResultCard } from '../../../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../../../testing/theme/theme-store-demo.tsx'
import source from './prefers-color-scheme-theme-store.ts?raw'

const meta = {
	title: 'theme/theme-store/prefersColorSchemeThemeStore',
	tags: ['func', 'version:next'],
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

/** Color-scheme themes: only light and dark are supported. */
const colorSchemeThemes = {
	light: 'theme-light',
	dark: 'theme-dark'
} as const

export const Playground: Story = {
	tags: ['playground'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>prefersColorSchemeThemeStore</code> is a read-only theme store for color-scheme
					only. Themes must include only <code>light</code> and <code>dark</code> keys—mirrors{' '}
					<code>prefers-color-scheme</code>. Returns <code>ThemeEntry</code> for <code>light</code>{' '}
					or <code>dark</code> based on system preference. No write method.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
				const store = prefersColorSchemeThemeStore(themes)
				<ThemeStoreDemo store={store} themes={themes} setThemeKeys={[]} />
			`
		})
	],
	render: () => {
		const store = prefersColorSchemeThemeStore(colorSchemeThemes)
		return <ThemeStoreDemo store={store} themes={colorSchemeThemes} setThemeKeys={[]} />
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-read'))
		await expect(canvas.getByTestId('theme-store-demo-read')).toHaveTextContent(/\b(light|dark)\b/)
	}
}

export const Read: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.read() returns ThemeEntry for current prefers-color-scheme (theme key is `light` or `dark` only).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
				const store = prefersColorSchemeThemeStore(themes)
				const result = store.read()
			`
		})
	],
	render: () => {
		const store = prefersColorSchemeThemeStore(colorSchemeThemes)
		const result = store.read()
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result ?? { theme: 'light', value: colorSchemeThemes.light }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(/\b(light|dark)\b/)
	}
}

export const Subscribe: Story = {
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() receives updates when system prefers-color-scheme changes. Change your OS light/dark setting to verify.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const themes = { light: 'theme-light', dark: 'theme-dark' }  // color-scheme only
				const store = prefersColorSchemeThemeStore(themes)
				return store.subscribe((entry) => {
					console.log('Color scheme:', entry?.theme)  // 'light' | 'dark'
				})
			`
		})
	],
	render: () => {
		const store = useMemo(() => prefersColorSchemeThemeStore(colorSchemeThemes), [])
		const [result, setResult] = useState<ThemeEntry<typeof colorSchemeThemes> | undefined | null>(
			undefined
		)

		useEffect(() => {
			setResult(store.read() ?? undefined)
			return store.subscribe(setResult)
		}, [store])

		const displayTheme = result?.theme ?? store.read()?.theme ?? 'light'
		return (
			<ThemeResultCard
				title="store.subscribe() receives (change OS theme to update)"
				data-testid="store-subscribe-result"
				result={themeEntry(colorSchemeThemes, displayTheme)}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent(/\b(light|dark)\b/)
	}
}

export const WithComposeThemeStores: Story = {
	name: 'with composeThemeStores',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Use as fallback in composeThemeStores: user preference first, then system prefers-color-scheme. Pass color-scheme themes ({ light, dark }) to prefersColorSchemeThemeStore.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				import { composeThemeStores, localStorageThemeStore, prefersColorSchemeThemeStore } from '#just-web/toolkits/theme'

				const colorSchemeThemes = { light: 'theme-light', dark: 'theme-dark' }
				const store = composeThemeStores(colorSchemeThemes, [
				  localStorageThemeStore(colorSchemeThemes, { storageKey: 'color-scheme' }),
				  prefersColorSchemeThemeStore(colorSchemeThemes)  // light | dark only
				], { defaultTheme: 'light' })
			`
		})
	],
	render: () => {
		const store = useMemo(
			() =>
				composeThemeStores(colorSchemeThemes, [prefersColorSchemeThemeStore(colorSchemeThemes)], {
					defaultTheme: 'light'
				}),
			[]
		)
		const [result, setResult] = useState<ThemeEntry<typeof colorSchemeThemes> | undefined | null>(
			undefined
		)

		useEffect(() => {
			void Promise.resolve(store.read()).then((value) => setResult(value ?? undefined))
			return store.subscribe?.((value) => setResult(value ?? undefined))
		}, [store])

		return (
			<ThemeResultCard
				title="Composed store (prefers-color-scheme as only source)"
				data-testid="composed-store-result"
				result={result ?? { theme: 'light', value: colorSchemeThemes.light }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('composed-store-result')).toHaveTextContent(/\b(light|dark)\b/)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
