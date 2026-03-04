import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import type { Required } from 'type-plus'
import {
	dataAttributeThemeStore,
	parseDataAttribute,
	stringifyDataAttribute,
	type ThemeEntry,
	type ThemeMap,
	type ThemeStore,
	themeEntry
} from '#just-web/toolkits/theme'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../../../testing/theme/theme-store-demo.tsx'
import source from './data-attribute-theme-store.ts?raw'

const meta = {
	title: 'theme/theme-store/dataAttributeThemeStore',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Theme store that reads and writes theme via a data attribute. Bakes themes at creation; read/write/subscribe use theme keys only.'
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

type ExampleTheme = keyof typeof themes

const attributeName = 'data-theme' as const

function createStore(options?: { element?: Element }) {
	return dataAttributeThemeStore(themes, {
		attributeName,
		...options
	})
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
				const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
				<ThemeStoreDemo2 store={store} themes={themes} />
			`
		})
	],
	render: () => {
		const store = createStore()
		return <ThemeStoreDemo store={store} themes={themes} />
	},
	play: async ({ canvas }) => {
		const store = createStore()
		store.write(themeEntry(themes, 'grayscale'))
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale')
		)
		await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent(
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
				const themes = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast'
				} as const

				const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
			`
		})
	],
	loaders: [
		() => {
			const store = createStore()
			store.write(themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const store = createStore()
		const result = store.read()
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
				const themes = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast'
				} as const

				const store = dataAttributeThemeStore(themes, {
					attributeName: 'data-theme',
					element: document.body
				})
			`
		})
	],
	loaders: [
		() => {
			const store = createStore({ element: document.body })
			store.write(themeEntry(themes, 'high-contrast'))
			return {}
		}
	],
	render: () => {
		const store = createStore({ element: document.body })
		const result = store.read()
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
					title="store.read() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'high-contrast', value: themes['high-contrast'] }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: high-contrast')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
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
				const themes = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast'
				} as const

				const store = dataAttributeThemeStore(themes, {
					attributeName: 'data-theme',
					element: targetElement
				})
			`
		})
	],
	render: () => {
		const targetRef = useRef<HTMLDivElement | null>(null)
		const [store, setStore] = useState<Required<ThemeStore<typeof themes>> | null>(null)

		useLayoutEffect(() => {
			const el = targetRef.current
			if (!el) return
			const s = createStore({ element: el })
			s.write(themeEntry(themes, 'grayscale'))
			setStore(s)
		}, [])

		const result = store?.read()
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
							title="store.read() result"
							data-testid="store-read-result"
							result={result ?? { theme: 'grayscale', value: themes.grayscale }}
						/>
					</>
				) : (
					<p>Loading…</p>
				)}
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

export const ThemeMapStringValue: Story = {
	name: 'themes: string value',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story: 'themes values can be a single string per theme.'
		}
	}),
	decorators: [
		withStoryCard({
			content: <p>Each theme maps to one string value (attribute value).</p>
		}),
		showSource({
			source: dedent`
				const themes = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast'
				} as const

				const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
			`
		})
	],
	loaders: [
		() => {
			const store = createStore()
			store.write(themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const store = createStore()
		const result = store.read()
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

const themesArray = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100'],
	'high-contrast': 'theme-high-contrast'
} as const

function createStoreArray(options?: { element?: Element }) {
	return dataAttributeThemeStore(themesArray, {
		attributeName,
		...options
	})
}

export const ThemeMapArrayValues: Story = {
	name: 'themes: array values',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'themes values can be string[]. dataAttributeThemeStore uses only the first value for the attribute.'
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
				const themes = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100'],
					'high-contrast': 'theme-high-contrast'
				} as const

				const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
			`
		})
	],
	loaders: [
		() => {
			const store = createStoreArray()
			store.write(themeEntry(themesArray, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const store = createStoreArray()
		const result = store.read()
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
					title="store.read() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'grayscale', value: themesArray.grayscale }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: [theme-grayscale, app:bg-gray-100]'
		)
	}
}

export const Read: Story = {
	name: 'read',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.read() reads the current theme from the element data attribute.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
				const result = store.read()
			`
		})
	],
	loaders: [
		() => {
			const store = createStore()
			store.write(themeEntry(themes, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const store = createStore()
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

export const WriteStory: Story = {
	name: 'write',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.write() applies the theme value to the element data attribute.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
				store.write(themeEntry(themes, 'high-contrast'))
			`
		})
	],
	render: () => {
		const store = createStore()
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = store.read()
			return r?.theme ?? null
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themes) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`write-${theme}`}
							onClick={() => {
								store.write(themeEntry(themes, theme))
								setCurrentTheme(theme)
							}}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="store.read() after write"
					data-testid="store-write-result"
					result={
						currentTheme
							? { theme: currentTheme, value: themes[currentTheme] }
							: { theme: 'current', value: themes.current }
					}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('write-grayscale'))
		await expect(canvas.getByTestId('store-write-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-write-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const Subscribe: Story = {
	name: 'subscribe',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() calls the handler when the data attribute changes (no initial notify).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
				return store.subscribe((themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				})
			`
		})
	],
	render: () => {
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)

		useEffect(() => {
			const store = createStore()
			return store.subscribe!(setResult)
		}, [])

		const displayTheme = result?.theme ?? 'current'
		return (
			<ThemeResultCard
				title="store.subscribe() receives"
				data-testid="store-subscribe-result"
				result={themeEntry(themes, displayTheme)}
			/>
		)
	},
	play: async ({ canvas }) => {
		const store = createStore()
		store.write(themeEntry(themes, 'high-contrast'))

		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast')
		)
	}
}

const SEPARATOR_COMMA = ','

function createCommaSeparatedStore<Themes extends ThemeMap>(
	themes: Themes,
	attrName: typeof attributeName,
	element: Element
) {
	return dataAttributeThemeStore(themes, {
		attributeName: attrName,
		element,
		parse: (t, v) => parseDataAttribute(t, v, { separator: SEPARATOR_COMMA }),
		stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: SEPARATOR_COMMA })
	})
}

export const SpaceSeparatedDefault: Story = {
	name: 'space-separated (default)',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'By default, the data attribute is treated as space-separated. Read uses first value; write removes all theme tokens and adds the new one (className-style).'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					When <code>data-theme</code> has multiple values like{' '}
					<code>theme-current theme-grayscale</code>, read returns the first matching theme. Write
					removes all theme tokens and adds the new one.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore(themes, { attributeName: 'data-theme' })
				store.read()  // from "theme-current theme-grayscale" returns current
				store.write(themeEntry(themes, 'grayscale'))  // removes theme tokens, adds grayscale
			`
		})
	],
	loaders: [
		() => {
			const store = createStore()
			store.write(themeEntry(themes, 'current'))
			if (typeof document !== 'undefined') {
				document.documentElement.setAttribute(attributeName, 'theme-current theme-high-contrast')
			}
			return {}
		}
	],
	render: () => {
		const store = createStore()
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html[data-theme]" appearance="output">
					<code data-testid="space-attr-value">
						{typeof document !== 'undefined'
							? (document.documentElement.getAttribute(attributeName) ?? '(empty)')
							: ''}
					</code>
				</StoryCard>
				<ThemeResultCard
					title="store.read() - first value"
					data-testid="space-read-result"
					result={result ?? { theme: 'current', value: themes.current }}
				/>
				<ThemeStoreDemo
					store={store}
					themes={themes}
					setThemeKeys={['current', 'grayscale', 'high-contrast']}
					data-testid="space-demo"
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		const store = createStore()
		document.documentElement.setAttribute(attributeName, 'theme-current theme-next')
		await expect(canvas.getByTestId('space-read-result')).toHaveTextContent('theme: current')

		store.write(themeEntry(themes, 'grayscale'))
		await waitFor(() => {
			const attr = document.documentElement.getAttribute(attributeName) ?? ''
			expect(attr).toContain('theme-grayscale')
		})
		await expect(canvas.getByTestId('space-demo-observe')).toHaveTextContent('grayscale')
	}
}

export const ParseStringifyCommaSeparated: Story = {
	name: 'separator: comma',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Curry parseDataAttribute and stringifyDataAttribute with separator for comma-separated values. Read uses first value; write removes theme tokens and adds new one.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Curry <code>parseDataAttribute</code> and <code>stringifyDataAttribute</code> with{' '}
					<code>options.separator = ','</code> for comma-separated attribute values.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const store = dataAttributeThemeStore(themes, {
					attributeName,
					element: target,
					parse: (t, v) => parseDataAttribute(t, v, { separator: ',' }),
					stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
				})
			`
		})
	],
	render: () => {
		const [store, setStore] = useState<Required<ThemeStore<typeof themes>> | null>(null)

		useLayoutEffect(() => {
			const el = document.getElementById('comma-target')
			if (!el) return
			el.setAttribute(attributeName, 'theme-current')
			const s = createCommaSeparatedStore(themes, attributeName, el)
			setStore(s)
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div
					id="comma-target"
					data-testid="comma-target"
					className="rounded border border-gray-300 p-4"
				>
					Target element (data-theme uses comma-separated values)
				</div>
				{store && (
					<>
						<StoryCard title="target[data-theme]" appearance="output">
							<code data-testid="comma-attr-value">
								{typeof document !== 'undefined'
									? (document.getElementById('comma-target')?.getAttribute(attributeName) ??
										'(empty)')
									: ''}
							</code>
						</StoryCard>
						<ThemeStoreDemo
							store={store}
							themes={themes}
							setThemeKeys={['current', 'grayscale', 'high-contrast']}
							data-testid="comma-demo"
						/>
					</>
				)}
			</div>
		)
	},
	play: async ({ canvas }) => {
		const target = document.getElementById('comma-target')
		if (!target) return
		const store = createCommaSeparatedStore(themes, attributeName, target)
		target.setAttribute(attributeName, 'theme-current')

		store.write(themeEntry(themes, 'grayscale'))
		await waitFor(() => {
			const attrValue = target.getAttribute(attributeName) ?? ''
			expect(attrValue).toContain('theme-grayscale')
		})

		await expect(canvas.getByTestId('comma-demo-observe')).toHaveTextContent('grayscale')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
