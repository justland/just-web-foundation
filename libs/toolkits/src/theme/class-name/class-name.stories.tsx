import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import type { ThemeEntry } from '#just-web/toolkits/theme'
import {
	parseClassName,
	readClassName,
	stringifyClassName,
	subscribeClassName,
	themeEntry,
	writeClassName
} from '#just-web/toolkits/theme'
import { Button } from '../../testing/button.tsx'
import { ThemeResultCard } from '../../testing/theme/theme-result-card.tsx'
import { ThemeStoreDemo } from '../../testing/theme/theme-store-demo.tsx'

const meta = {
	title: 'theme/class-name',
	tags: ['func', 'version:1.0'],
	parameters: defineDocsParam({
		description: {
			component:
				'Low-level functions for reading and writing theme via element class names: readClassName, writeClassName, subscribeClassName, parseClassName, stringifyClassName.'
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

function createClassNameStore(element: Element = document.documentElement) {
	return {
		read: () => readClassName(themes, { element }),
		write: (entry: ThemeEntry<typeof themes> | undefined) =>
			writeClassName(themes, entry, { element }),
		subscribe: (handler: (entry: ThemeEntry<typeof themes> | undefined) => void) =>
			subscribeClassName(themes, handler, { element })
	}
}

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story: 'Interactive demo: readClassName, writeClassName, subscribeClassName used together.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = {
				  read: () => readClassName(themes, { element }),
				  write: (entry) => writeClassName(themes, entry, { element }),
				  subscribe: (handler) => subscribeClassName(themes, handler, { element })
				}
				<ThemeStoreDemo store={store} themes={themes} />
			`
		})
	],
	render: () => {
		const store = createClassNameStore()
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
	name: 'readClassName',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'readClassName(themes, { element }) reads the current theme from the element class names.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readClassName(themes, { element })
			`
		})
	],
	loaders: [
		() => {
			writeClassName(themes, themeEntry(themes, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const result = readClassName(themes)
		return (
			<ThemeResultCard
				title="readClassName() result"
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
	name: 'readClassName: undefined when no theme',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When no theme class is present, readClassName returns undefined.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = readClassName(themes, { element })
				// undefined when no theme class
			`
		})
	],
	loaders: [
		() => {
			if (typeof document !== 'undefined') {
				document.documentElement.className = 'other-class'
			}
			return {}
		}
	],
	render: () => {
		const result = readClassName(themes)
		return (
			<ThemeResultCard
				title="readClassName() result"
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
	name: 'writeClassName',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'writeClassName(themes, entry, { element }) applies the theme class to the element.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				writeClassName(themes, themeEntry(themes, 'grayscale'), { element })
			`
		})
	],
	render: () => {
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = readClassName(themes)
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
								writeClassName(themes, themeEntry(themes, theme))
								setCurrentTheme(theme)
							}}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="readClassName() after write"
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
	name: 'subscribeClassName',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'subscribeClassName(themes, handler, { element }) calls the handler when the class attribute changes (no initial notify).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				subscribeClassName(themes, (themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				}, { element })
			`
		})
	],
	render: () => {
		const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined)

		useEffect(() => {
			return subscribeClassName(themes, setResult)
		}, [])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themes) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`write-${theme}`}
							onPress={() => writeClassName(themes, themeEntry(themes, theme))}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="subscribeClassName() receives"
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

export const ParseClassName: Story = {
	name: 'parseClassName',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Pure function: parseClassName(themes, className) parses a class name string into a ThemeEntry.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = parseClassName(themes, 'theme-current other-class')
				// { theme: 'current', value: 'theme-current' }
			`
		})
	],
	render: () => {
		const result = parseClassName(themes, 'theme-current other-class')
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="Input" appearance="output">
					<code data-testid="parse-input">theme-current other-class</code>
				</StoryCard>
				<ThemeResultCard
					title="parseClassName() result"
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

export const StringifyClassName: Story = {
	name: 'stringifyClassName',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Pure function: stringifyClassName(themes, existing, entry) produces class attribute value. Removes theme classes from existing, adds entry classes.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const result = stringifyClassName(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'))
				// 'app-layout theme-grayscale'
			`
		})
	],
	render: () => {
		const result = stringifyClassName(
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
				<StoryCard title="stringifyClassName() result" appearance="output">
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
				readClassName(themes)
				writeClassName(themes, themeEntry(themes, 'current'))
			`
		})
	],
	loaders: [
		() => {
			writeClassName(themes, themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const result = readClassName(themes)
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="readClassName() result"
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
				readClassName(themes, { element: document.body })
				writeClassName(themes, themeEntry(themes, 'high-contrast'), { element: document.body })
			`
		})
	],
	loaders: [
		() => {
			writeClassName(themes, themeEntry(themes, 'high-contrast'), {
				element: document.body
			})
			return {}
		}
	],
	render: () => {
		const result = readClassName(themes, { element: document.body })
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="body.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.body.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="readClassName() result"
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
					Theme is applied to a custom element by passing it in <code>options.element</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				readClassName(themes, { element: targetElement })
				writeClassName(themes, themeEntry(themes, 'grayscale'), { element: targetElement })
			`
		})
	],
	render: () => {
		const targetRef = useRef<HTMLDivElement | null>(null)
		const [mounted, setMounted] = useState(false)

		useLayoutEffect(() => {
			const el = targetRef.current
			if (!el) return
			writeClassName(themes, themeEntry(themes, 'grayscale'), { element: el })
			setMounted(true)
		}, [])

		const result = targetRef.current ? readClassName(themes, { element: targetRef.current }) : null
		return (
			<div className="flex flex-col gap-2">
				<div
					ref={targetRef}
					id="target"
					data-testid="target-element"
					className="rounded border border-gray-300 p-4"
				>
					Target element (theme class is observed here)
				</div>
				{mounted ? (
					<>
						<StoryCard title="target.className" appearance="output">
							<code>{targetRef.current?.className}</code>
						</StoryCard>
						<ThemeResultCard
							title="readClassName() result"
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
			content: <p>Each theme maps to one string value (one class name).</p>
		}),
		showSource({
			source: dedent`
				const themes = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast'
				} as const

				readClassName(themes)
			`
		})
	],
	loaders: [
		() => {
			writeClassName(themes, themeEntry(themes, 'current'))
			return {}
		}
	],
	render: () => {
		const result = readClassName(themes)
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="readClassName() result"
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
				'themes values can be string[] for multiple CSS classes. All classes are applied to the element.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Each theme can map to multiple class names. Setting <code>grayscale</code> adds both{' '}
					<code>theme-grayscale</code> and <code>app:bg-gray-100</code> to the element.
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

				readClassName(themes)
				writeClassName(themes, themeEntry(themes, 'grayscale'))
			`
		})
	],
	loaders: [
		() => {
			writeClassName(themesArray, themeEntry(themesArray, 'grayscale'))
			return {}
		}
	],
	render: () => {
		const result = readClassName(themesArray)
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="readClassName() result"
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

export const SubscribeOnlyWhenThemeChanges: Story = {
	name: 'subscribeClassName: only when themeEntry changes',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'The handler is only invoked when the resolved themeEntry changes. Adding non-theme classes does not trigger the handler.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				subscribeClassName(themes, (entry) => {
					invocationCount++
					setObserved(entry)
				}, { element: targetElement })
				// Adding element.classList.add('app-other') does NOT invoke handler
				// writeClassName(themes, themeEntry(themes, 'grayscale')) DOES invoke when theme changes
			`
		})
	],
	render: () => {
		const targetRef = useRef<HTMLDivElement | null>(null)
		const [invocationCount, setInvocationCount] = useState(0)
		const [observed, setObserved] = useState<ThemeEntry<typeof themes> | undefined | null>(null)

		useLayoutEffect(() => {
			const el = targetRef.current
			if (!el) return
			const unSub = subscribeClassName(
				themes,
				(entry) => {
					setInvocationCount((c) => c + 1)
					setObserved(entry)
				},
				{ element: el }
			)
			writeClassName(themes, themeEntry(themes, 'grayscale'), { element: el })
			return unSub
		}, [])

		const displayTheme = observed?.theme ?? '(none)'
		return (
			<div className="flex flex-col gap-4" data-testid="subscribe-only-when-theme-changes">
				<div
					ref={targetRef}
					data-testid="target-element"
					className="rounded border border-gray-300 p-2"
				>
					Target element
				</div>
				<StoryCard title="Handler invocations" appearance="output">
					<pre data-testid="invocation-count" className="font-mono">
						{invocationCount}
					</pre>
				</StoryCard>
				<StoryCard title="Observed theme" appearance="output">
					<pre data-testid="observed-theme" className="font-mono">
						{displayTheme}
					</pre>
				</StoryCard>
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="add-non-theme-class"
						onPress={() => targetRef.current?.classList.add('app-other')}
					>
						Add non-theme class
					</Button>
					<Button
						data-testid="change-to-high-contrast"
						onPress={() =>
							writeClassName(themes, themeEntry(themes, 'high-contrast'), {
								element: targetRef.current!
							})
						}
					>
						Change to high-contrast
					</Button>
					<Button
						data-testid="change-to-current"
						onPress={() =>
							writeClassName(themes, themeEntry(themes, 'current'), {
								element: targetRef.current!
							})
						}
					>
						Change to current
					</Button>
				</div>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('invocation-count')).toHaveTextContent('1')
		await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('grayscale')

		await userEvent.click(canvas.getByTestId('change-to-high-contrast'))
		await waitFor(() => expect(canvas.getByTestId('invocation-count')).toHaveTextContent('2'))
		await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('high-contrast')
	}
}
