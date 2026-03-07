import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import type { ThemeEntry, ThemeMap } from '#just-web/toolkits/theme'
import {
	parseDataAttribute,
	readDataAttribute,
	stringifyDataAttribute,
	subscribeDataAttribute,
	themeEntry,
	writeDataAttribute
} from '#just-web/toolkits/theme'
import { Button } from '../../testing/button.tsx'
import { ThemeResultCard } from '../../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../../testing/theme/theme-store-demo.tsx'

const meta = {
	title: 'theme/data-attribute',
	tags: ['func', 'version:2.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Low-level functions for reading and writing theme via data attributes: readDataAttribute, writeDataAttribute, subscribeDataAttribute, parseDataAttribute, stringifyDataAttribute.'
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

function createDataAttributeStore(
	element: Element = document.documentElement,
	attrName: `data-${string}` = attributeName
) {
	return {
		read: () => readDataAttribute(themes, attrName, { element }),
		write: (entry: ThemeEntry<typeof themes> | undefined) =>
			writeDataAttribute(themes, attrName, entry, { element }),
		subscribe: (handler: (entry: ThemeEntry<typeof themes> | undefined) => void) =>
			subscribeDataAttribute(themes, attrName, handler, { element })
	}
}

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story:
				'Interactive demo: readDataAttribute, writeDataAttribute, subscribeDataAttribute used together.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = {
				  read: () => readDataAttribute(themes, 'data-theme', { element }),
				  write: (entry) => writeDataAttribute(themes, 'data-theme', entry, { element }),
				  subscribe: (handler) => subscribeDataAttribute(themes, 'data-theme', handler, { element })
				}
				<ThemeStoreDemo store={store} themes={themes} />
			`
		})
	],
	render: () => {
		const store = createDataAttributeStore()
		return <ThemeStoreDemo store={store} themes={themes} />
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'))
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale')
		)
		await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent(
			'theme-grayscale'
		)
	}
}

export const Read: Story = {
	name: 'readDataAttribute',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'readDataAttribute(themes, attributeName, { element }) reads the current theme from the element data attribute.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readDataAttribute(themes, 'data-theme', { element })
			`
		})
	],
	loaders: [
		() => {
			writeDataAttribute(themes, attributeName, themeEntry(themes, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const result = readDataAttribute(themes, attributeName)
		return (
			<ThemeResultCard
				title="readDataAttribute() result"
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
	name: 'readDataAttribute: undefined when no theme',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When no theme attribute value is present, readDataAttribute returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readDataAttribute(themes, 'data-theme', { element })
				// undefined when no theme
			`
		})
	],
	loaders: [
		() => {
			if (typeof document !== 'undefined') {
				document.documentElement.removeAttribute(attributeName)
			}
			return {}
		}
	],
	render: () => {
		const result = readDataAttribute(themes, attributeName)
		return (
			<ThemeResultCard
				title="readDataAttribute() result"
				data-testid="store-read-result"
				result={result !== undefined ? result : { theme: undefined, value: undefined }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)')
	}
}

export const Write: Story = {
	name: 'writeDataAttribute',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'writeDataAttribute(themes, attributeName, entry, { element }) applies the theme value to the element data attribute.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'), { element })
			`
		})
	],
	render: () => {
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = readDataAttribute(themes, attributeName)
			return r?.theme ?? null
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themes) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`write-${theme}`}
							onPress={() => {
								writeDataAttribute(themes, attributeName, themeEntry(themes, theme))
								setCurrentTheme(theme)
							}}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="readDataAttribute() after write"
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
	name: 'subscribeDataAttribute',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'subscribeDataAttribute(themes, attributeName, handler, { element }) calls the handler when the data attribute changes (no initial notify).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				subscribeDataAttribute(themes, 'data-theme', (themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				}, { element })
			`
		})
	],
	render: () => {
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)

		useEffect(() => {
			return subscribeDataAttribute(themes, attributeName, setResult)
		}, [])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themes) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`write-${theme}`}
							onPress={() => writeDataAttribute(themes, attributeName, themeEntry(themes, theme))}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="subscribeDataAttribute() receives"
					data-testid="store-subscribe-result"
					result={themeEntry(themes, displayTheme)}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('write-high-contrast'))
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast')
		)
	}
}

export const ParseDataAttribute: Story = {
	name: 'parseDataAttribute',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Pure function: parseDataAttribute(themes, value, options?) parses a data attribute value string into a ThemeEntry. Uses first token when separator is space (default).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = parseDataAttribute(themes, 'theme-current other-value')
				// { theme: 'current', value: 'theme-current' }
			`
		})
	],
	render: () => {
		const result = parseDataAttribute(themes, 'theme-current other-value')
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="Input" appearance="output">
					<code data-testid="parse-input">theme-current other-value</code>
				</StoryCard>
				<ThemeResultCard
					title="parseDataAttribute() result"
					data-testid="parse-result"
					result={result ?? { theme: 'current', value: themes.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('parse-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('parse-result')).toHaveTextContent('value: theme-current')
	}
}

export const StringifyDataAttribute: Story = {
	name: 'stringifyDataAttribute',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Pure function: stringifyDataAttribute(themes, existing, entry, options?) produces attribute value. Removes theme tokens from existing, adds entry value (first only for arrays).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = stringifyDataAttribute(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'))
				// 'app-layout theme-grayscale'
			`
		})
	],
	render: () => {
		const result = stringifyDataAttribute(
			themes,
			'app-layout theme-current',
			themeEntry(themes, 'grayscale')
		)
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="Input" appearance="output">
					<code data-testid="stringify-input">
						themes, &apos;app-layout theme-current&apos;, themeEntry(themes, &apos;grayscale&apos;)
					</code>
				</StoryCard>
				<StoryCard title="stringifyDataAttribute() result" appearance="output">
					<code data-testid="stringify-result">{result}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('stringify-result')).toHaveTextContent('app-layout')
		await expect(canvas.getByTestId('stringify-result')).toHaveTextContent('theme-grayscale')
	}
}

export const ElementDefault: Story = {
	name: 'element: html (default)',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Reads from <code>document.documentElement</code> (html) by default when{' '}
					<code>options.element</code> is not specified.
				</p>
			)
		}),
		showSource({
			source: dedent`
				readDataAttribute(themes, 'data-theme')
				writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'current'))
			`
		})
	],
	loaders: [
		() => {
			writeDataAttribute(themes, attributeName, themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const result = readDataAttribute(themes, attributeName)
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
					title="readDataAttribute() result"
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
					Reads from <code>document.body</code> when passing it in <code>options.element</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				readDataAttribute(themes, 'data-theme', { element: document.body })
				writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'high-contrast'), { element: document.body })
			`
		})
	],
	loaders: [
		() => {
			writeDataAttribute(themes, attributeName, themeEntry(themes, 'high-contrast'), {
				element: document.body
			})
			return {}
		}
	],
	render: () => {
		const result = readDataAttribute(themes, attributeName, { element: document.body })
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
					title="readDataAttribute() result"
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
				readDataAttribute(themes, 'data-theme', { element: targetElement })
				writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'), { element: targetElement })
			`
		})
	],
	render: () => {
		const targetRef = useRef<HTMLDivElement | null>(null)
		const [mounted, setMounted] = useState(false)

		useLayoutEffect(() => {
			const el = targetRef.current
			if (!el) return
			writeDataAttribute(themes, attributeName, themeEntry(themes, 'grayscale'), {
				element: el
			})
			setMounted(true)
		}, [])

		const result = targetRef.current
			? readDataAttribute(themes, attributeName, { element: targetRef.current })
			: null
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
				{mounted ? (
					<>
						<StoryCard title="target[data-theme]" appearance="output">
							<code>{targetRef.current?.getAttribute(attributeName) ?? '(empty)'}</code>
						</StoryCard>
						<ThemeResultCard
							title="readDataAttribute() result"
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

				readDataAttribute(themes, 'data-theme')
			`
		})
	],
	loaders: [
		() => {
			writeDataAttribute(themes, attributeName, themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const result = readDataAttribute(themes, attributeName)
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html[data-theme]" appearance="output">
					<code>
						{typeof document !== 'undefined'
							? (document.documentElement.getAttribute(attributeName) ?? '(none)')
							: ''}
					</code>
				</StoryCard>
				<ThemeResultCard
					title="readDataAttribute() result"
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

export const ThemeMapArrayValues: Story = {
	name: 'themes: array values',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'themes values can be string[]. writeDataAttribute uses only the first value for the attribute.'
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

				readDataAttribute(themes, 'data-theme')
				writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'))
			`
		})
	],
	loaders: [
		() => {
			writeDataAttribute(themesArray, attributeName, themeEntry(themesArray, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const result = readDataAttribute(themesArray, attributeName)
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html[data-theme]" appearance="output">
					<code>
						{typeof document !== 'undefined'
							? (document.documentElement.getAttribute(attributeName) ?? '(none)')
							: ''}
					</code>
				</StoryCard>
				<ThemeResultCard
					title="readDataAttribute() result"
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

const SEPARATOR_COMMA = ','

function createCommaSeparatedStore<Themes extends ThemeMap>(
	themesMap: Themes,
	attrName: typeof attributeName,
	element: Element
) {
	return {
		read: () =>
			readDataAttribute(themesMap, attrName, {
				element,
				parse: (t, v) => parseDataAttribute(t, v, { separator: SEPARATOR_COMMA })
			}),
		write: (entry: ThemeEntry<Themes> | undefined) =>
			writeDataAttribute(themesMap, attrName, entry, {
				element,
				stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: SEPARATOR_COMMA })
			}),
		subscribe: (handler: (entry: ThemeEntry<Themes> | undefined) => void) =>
			subscribeDataAttribute(themesMap, attrName, handler, {
				element,
				parse: (t, v) => parseDataAttribute(t, v, { separator: SEPARATOR_COMMA })
			})
	}
}

export const SeparatorOption: Story = {
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
					<code>options.separator = &apos;,&apos;</code> for comma-separated attribute values.
				</p>
			)
		}),
		showSource({
			source: dedent`
				readDataAttribute(themes, 'data-theme', {
					element: target,
					parse: (t, v) => parseDataAttribute(t, v, { separator: ',' })
				})
				writeDataAttribute(themes, 'data-theme', entry, {
					element: target,
					stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
				})
			`
		})
	],
	render: () => {
		const [store, setStore] = useState<ReturnType<
			typeof createCommaSeparatedStore<typeof themes>
		> | null>(null)

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
