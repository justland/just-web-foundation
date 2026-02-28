import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import type { Required } from 'type-plus'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme-result-card.tsx'
import {
	dataAttributeThemeStore,
	type ThemeResult,
	type ThemeStore,
	themeResult
} from '../../index.ts'
import { ThemeStoreDemo2 } from '../../theme-store-demo2.tsx'
import source from './data-attribute-theme-store.ts?raw'

const meta = {
	title: 'theme2/data-attribute/dataAttributeThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Theme store that reads and writes theme via a data attribute. Bakes themeMap at creation; get/set/subscribe use theme keys only.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themeMap = {
	current: 'theme-current',
	next: 'theme-next',
	grayscale: 'theme-grayscale',
	'high-contrast': 'theme-high-contrast'
} as const

type ExampleTheme = keyof typeof themeMap

const attributeName = 'data-theme' as const

function createStore(options?: { element?: Element }) {
	return dataAttributeThemeStore({
		attributeName,
		themeMap,
		...options
	})
}

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story: 'Interactive demo: Get theme, set themes via buttons, and observe subscribe updates.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
				})
				<ThemeStoreDemo2 store={store} themes={themeMap} />
			`
		})
	],
	render: () => {
		const store = createStore()
		return <ThemeStoreDemo2 store={store} themes={themeMap} />
	},
	play: async ({ canvas }) => {
		const store = createStore()
		store.set('grayscale')
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo2-observe')).toHaveTextContent('grayscale')
		)
		await expect(canvas.getByTestId('theme-store-demo2-observe')).toHaveTextContent(
			'theme-grayscale'
		)
	}
}

export const ElementDefault: Story = {
	name: 'element: html (default)',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme is applied to <code>document.documentElement</code> (html) via data attribute by
					default when <code>options.element</code> is not specified.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const;

				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
				})
			`
		})
	],
	loaders: [
		() => {
			const store = createStore()
			store.set('current')
			return {}
		}
	],
	render: () => {
		const store = createStore()
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html[data-theme]" appearance="output">
					<code>
						{typeof document !== 'undefined'
							? (document.documentElement.getAttribute(attributeName) ?? '(empty)')
							: ''}
					</code>
				</StoryCard>
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={result ?? { theme: 'current', value: themeMap.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-current')
	}
}

export const ElementBody: Story = {
	name: 'element: body',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme is applied to <code>document.body</code> via data attribute when passing it in{' '}
					<code>options.element</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const;

				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
					element: document.body,
				})
			`
		})
	],
	loaders: [
		() => {
			const store = createStore({ element: document.body })
			store.set('high-contrast')
			return {}
		}
	],
	render: () => {
		const store = createStore({ element: document.body })
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="body[data-theme]" appearance="output">
					<code>
						{typeof document !== 'undefined'
							? (document.body.getAttribute(attributeName) ?? '(empty)')
							: ''}
					</code>
				</StoryCard>
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={result ?? { theme: 'high-contrast', value: themeMap['high-contrast'] }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: high-contrast')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent(
			'value: theme-high-contrast'
		)
	}
}

export const ElementCustom: Story = {
	name: 'element: custom element',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme is applied to a custom element via data attribute by passing it in{' '}
					<code>options.element</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const;

				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
					element: targetElement,
				})
			`
		})
	],
	render: () => {
		const targetRef = useRef<HTMLDivElement | null>(null)
		const [store, setStore] = useState<Required<ThemeStore<typeof themeMap>> | null>(null)

		useLayoutEffect(() => {
			const el = targetRef.current
			if (!el) return
			const s = createStore({ element: el })
			s.set('grayscale')
			setStore(s)
		}, [])

		const result = store?.get()
		return (
			<div className="flex flex-col gap-2">
				<div
					ref={targetRef}
					id="target"
					data-testid="target-element"
					className="rounded border border-gray-300 p-4"
				>
					Target element (theme data attribute is observed here)
				</div>
				{store ? (
					<>
						<StoryCard title="target[data-theme]" appearance="output">
							<code>{targetRef.current?.getAttribute(attributeName) ?? '(empty)'}</code>
						</StoryCard>
						<ThemeResultCard
							title="store.get() result"
							data-testid="store-get-result"
							result={result ?? { theme: 'grayscale', value: themeMap.grayscale }}
						/>
					</>
				) : (
					<p>Loading…</p>
				)}
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const ThemeMapStringValue: Story = {
	name: 'themeMap: string value',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story: 'themeMap values can be a single string per theme.'
		}
	}),
	decorators: [
		withStoryCard({
			content: <p>Each theme maps to one string value (attribute value).</p>
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const

				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
				})
			`
		})
	],
	loaders: [
		() => {
			const store = createStore()
			store.set('current')
			return {}
		}
	],
	render: () => {
		const store = createStore()
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html[data-theme]" appearance="output">
					<code>
						{typeof document !== 'undefined'
							? (document.documentElement.getAttribute('data-theme') ?? '(none)')
							: ''}
					</code>
				</StoryCard>
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={result ?? { theme: 'current', value: themeMap.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-current')
	}
}

const themeMapArray = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100'],
	'high-contrast': 'theme-high-contrast'
} as const

function createStoreArray(options?: { element?: Element }) {
	return dataAttributeThemeStore({
		attributeName,
		themeMap: themeMapArray,
		...options
	})
}

export const ThemeMapArrayValues: Story = {
	name: 'themeMap: array values',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'themeMap values can be string[]. dataAttributeThemeStore uses only the first value for the attribute.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					With <code>string[]</code> values, only the first value is used for the data attribute.{' '}
					<code>ThemeResult.value</code> remains the full array.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100'],
					'high-contrast': 'theme-high-contrast',
				} as const

				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
				})
			`
		})
	],
	loaders: [
		() => {
			const store = createStoreArray()
			store.set('grayscale')
			return {}
		}
	],
	render: () => {
		const store = createStoreArray()
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html[data-theme]" appearance="output">
					<code>
						{typeof document !== 'undefined'
							? (document.documentElement.getAttribute('data-theme') ?? '(none)')
							: ''}
					</code>
				</StoryCard>
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={result ?? { theme: 'grayscale', value: themeMapArray.grayscale }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent(
			'value: theme-grayscale, app:bg-gray-100'
		)
	}
}

export const Get: Story = {
	name: 'get',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.get() reads the current theme from the element data attribute.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
				})
				const result = store.get()
			`
		})
	],
	loaders: [
		() => {
			const store = createStore()
			store.set('grayscale')
			return {}
		}
	],
	render: () => {
		const store = createStore()
		const result = store.get()
		return (
			<ThemeResultCard
				title="store.get() result"
				data-testid="store-get-result"
				result={result ?? { theme: 'grayscale', value: themeMap.grayscale }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const SetStory: Story = {
	name: 'set',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.set() applies the theme value to the element data attribute.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
				})
				store.set('high-contrast')
			`
		})
	],
	render: () => {
		const store = createStore()
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = store.get()
			return r?.theme ?? null
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themeMap) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`set-${theme}`}
							onClick={() => {
								store.set(theme)
								setCurrentTheme(theme)
							}}
						>
							set({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="store.get() after set"
					data-testid="store-set-result"
					result={
						currentTheme
							? { theme: currentTheme, value: themeMap[currentTheme] }
							: { theme: 'current', value: themeMap.current }
					}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('set-grayscale'))
		await expect(canvas.getByTestId('store-set-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-set-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const Subscribe: Story = {
	name: 'subscribe',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() calls the handler with the current theme and when the data attribute changes.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore({
					attributeName: 'data-theme',
					themeMap,
				})
				return store.subscribe((themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				})
			`
		})
	],
	render: () => {
		const [result, setResult] = useState<ThemeResult<typeof themeMap> | undefined | null>(undefined)

		useEffect(() => {
			const store = createStore()
			return store.subscribe!(setResult)
		}, [])

		const displayTheme = result?.theme ?? 'current'
		return (
			<ThemeResultCard
				title="store.subscribe() receives"
				data-testid="store-subscribe-result"
				result={themeResult(displayTheme, themeMap)}
			/>
		)
	},
	play: async ({ canvas }) => {
		const store = createStore()
		store.set('high-contrast')

		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast')
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
