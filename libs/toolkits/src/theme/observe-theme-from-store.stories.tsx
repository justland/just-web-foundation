import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useState } from 'react'
import { expect } from 'storybook/test'
import {
	observeThemeFromStore,
	setThemeToStore,
	type ThemeResult,
	type ThemeStore,
} from '#just-web/toolkits'

const meta = {
	title: 'theme/observeThemeFromStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes theme from a generic store. Calls handler once on load and when the store notifies (if subscribe is provided).',
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

function createInMemoryStoreWithSubscribe(
	initial: ThemeResult<typeof themes>,
): ThemeStore<typeof themes> {
	let value = initial
	const listeners: Array<() => void> = []
	return {
		get() {
			return value
		},
		set(result) {
			value = result
			for (const fn of listeners) fn()
		},
		subscribe(handler) {
			listeners.push(handler)
			return () => {
				const i = listeners.indexOf(handler)
				if (i !== -1) listeners.splice(i, 1)
			}
		},
	}
}

function ObserveThemeFromStoreDemo({
	store,
	themes: themesOption,
	theme: defaultTheme,
}: {
	store: ThemeStore<typeof themes>
	themes: typeof themes
	theme?: keyof typeof themes | null
}) {
	const [result, setResult] = useState<ThemeResult<typeof themes>>(undefined)

	useEffect(() => {
		const observer = observeThemeFromStore({
			store,
			themes: themesOption,
			theme: defaultTheme ?? undefined,
			handler: setResult,
		})
		return () => observer.disconnect()
	}, [store, defaultTheme, themesOption])

	return (
		<StoryCard title="Observed theme from store" appearance="output">
			<p data-testid="observed-theme-from-store">
				theme: {result?.theme === undefined ? '(undefined)' : String(result?.theme)}
			</p>
			<p>
				value:{' '}
				{result?.value === null
					? '(missing)'
					: result?.value === ''
						? '(empty)'
						: Array.isArray(result?.value)
							? `[${result?.value.join(', ')}]`
							: result?.value}
			</p>
		</StoryCard>
	)
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Handler is called once on start with the current theme from the store. If the store
					provides <code>subscribe</code>, handler is called again when the store changes.
				</p>
			),
		}),
		showSource({
			source: dedent`
				const store = createInMemoryStoreWithSubscribe({ theme: 'grayscale', value: 'text-gray-100' })
				const observer = observeThemeFromStore({
				  store,
				  themes: { default: 'text-white', grayscale: 'text-gray-100' },
				  theme: 'default',
				  handler: (result) => setResult(result),
				})
				observer.disconnect()
			`,
		}),
	],
	render: () => {
		const store = createInMemoryStoreWithSubscribe({
			theme: 'grayscale',
			value: 'text-gray-100',
		})
		return <ObserveThemeFromStoreDemo store={store} themes={themes} theme="default" />
	},
	play: async () => {
		const store = createInMemoryStoreWithSubscribe({
			theme: 'grayscale',
			value: 'text-gray-100',
		})
		const results: ThemeResult<typeof themes>[] = []
		const observer = observeThemeFromStore({
			store,
			themes,
			theme: 'default',
			handler: (r) => results.push(r),
		})
		await new Promise((r) => setTimeout(r, 0))
		await setThemeToStore({ store, themes, theme: 'default' })
		await new Promise((r) => setTimeout(r, 0))
		observer.disconnect()
		await expect(results.length).toBeGreaterThanOrEqual(1)
		await expect(results[0]?.theme).toBe('grayscale')
		const afterSet = results[results.length - 1]
		await expect(afterSet?.theme).toBe('default')
	},
}
