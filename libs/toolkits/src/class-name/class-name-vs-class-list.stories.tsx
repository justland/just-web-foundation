import { defineDocsParam, StoryCard, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useState } from 'react'

type ThemeMap = Record<string, string | readonly string[]>

function applyThemeClassList(element: Element, theme: string, themes: ThemeMap): void {
	for (const [key, value] of Object.entries(themes)) {
		const classes = Array.isArray(value) ? [...value] : [value]
		if (key === theme) {
			element.classList.add(...classes)
		} else {
			element.classList.remove(...classes)
		}
	}
}

function applyThemeClassName(element: Element, theme: string, themes: ThemeMap): void {
	const allThemeClasses = Object.values(themes).flatMap((v) => (Array.isArray(v) ? [...v] : [v]))
	const current = element.className.trim()
	const currentClasses = current ? current.split(/\s+/) : []
	const withoutThemes = currentClasses.filter((c) => !allThemeClasses.includes(c))
	const activeClasses =
		theme in themes
			? Array.isArray(themes[theme])
				? [...(themes[theme] as readonly string[])]
				: [themes[theme] as string]
			: []
	element.className = [...withoutThemes, ...activeClasses].filter(Boolean).join(' ')
}

const meta = {
	title: 'class-name/className vs classList',
	tags: ['unit', 'perf'],
	parameters: defineDocsParam({
		description: {
			component:
				'Performance comparison: toggling element classes via classList (add/remove each) vs rebuilding className from an array.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
	light: ['light', 'text-black', 'bg-white'],
	dark: ['dark', 'text-white', 'bg-black']
} as const

/** Longer theme array: more themes and more classes per theme. */
const themesLong: ThemeMap = {
	light: [
		'light',
		'text-black',
		'bg-white',
		'border-gray-200',
		'shadow-sm',
		'rounded-lg',
		'p-4',
		'm-2',
		'font-sans',
		'antialiased'
	],
	dark: [
		'dark',
		'text-white',
		'bg-black',
		'border-gray-700',
		'shadow-lg',
		'rounded-xl',
		'p-6',
		'm-4',
		'font-sans',
		'antialiased'
	],
	accent: [
		'accent',
		'text-cyan-100',
		'bg-cyan-900',
		'border-cyan-600',
		'shadow-md',
		'rounded-md',
		'p-3',
		'm-1',
		'font-medium',
		'subpixel-antialiased'
	],
	neutral: [
		'neutral',
		'text-gray-800',
		'bg-gray-100',
		'border-gray-300',
		'shadow',
		'rounded',
		'p-2',
		'm-0',
		'font-normal',
		'antialiased'
	],
	warm: [
		'warm',
		'text-amber-900',
		'bg-amber-50',
		'border-amber-200',
		'shadow-inner',
		'rounded-2xl',
		'p-5',
		'm-3',
		'font-semibold',
		'antialiased'
	]
}

const PERFORMANCE_ITERATIONS = 10_000

type BenchmarkResult = { classListMs: number; classNameMs: number }

export const PerformanceTest: Story = {
	name: 'Performance test',
	tags: ['unit', '!test'],
	parameters: defineDocsParam({
		description: {
			story:
				'Compare classList (add/remove per class) vs className (array rebuild). Runs two benchmarks: 2 themes × 3 classes and 5 themes × 10 classes. Fewer DOM writes with className tend to scale better with more theme classes.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						Compare <code>classList</code> (add/remove per class) vs <code>className</code> (array
						rebuild).
					</p>
					<p>Runs two benchmarks: 2 themes × 3 classes and 5 themes × 10 classes.</p>
					<p>
						Fewer DOM writes with <code>className</code> tend to scale better with more theme
						classes.
					</p>
				</>
			)
		})
	],
	render: function PerformanceTestRender() {
		const [result, setResult] = useState<{
			small: BenchmarkResult | null
			long: BenchmarkResult | null
		}>({ small: null, long: null })

		useEffect(() => {
			const el = document.createElement('div')
			el.className = 'base existing'
			document.body.appendChild(el)

			const themeKeysSmall = Object.keys(themes) as (keyof typeof themes)[]
			const themeKeysLong = Object.keys(themesLong)

			// Small: 2 themes × 3 classes
			const classListStartSmall = performance.now()
			for (let i = 0; i < PERFORMANCE_ITERATIONS; i++) {
				const theme = (themeKeysSmall[i % themeKeysSmall.length] ?? themeKeysSmall[0]) as string
				applyThemeClassList(el, theme, themes)
			}
			const classListMsSmall = performance.now() - classListStartSmall

			const classNameStartSmall = performance.now()
			for (let i = 0; i < PERFORMANCE_ITERATIONS; i++) {
				const theme = (themeKeysSmall[i % themeKeysSmall.length] ?? themeKeysSmall[0]) as string
				applyThemeClassName(el, theme, themes)
			}
			const classNameMsSmall = performance.now() - classNameStartSmall

			setResult((r) => ({
				...r,
				small: { classListMs: classListMsSmall, classNameMs: classNameMsSmall }
			}))

			// Long: 5 themes × 10 classes
			const classListStartLong = performance.now()
			for (let i = 0; i < PERFORMANCE_ITERATIONS; i++) {
				const theme = (themeKeysLong[i % themeKeysLong.length] ?? themeKeysLong[0]) as string
				applyThemeClassList(el, theme, themesLong)
			}
			const classListMsLong = performance.now() - classListStartLong

			const classNameStartLong = performance.now()
			for (let i = 0; i < PERFORMANCE_ITERATIONS; i++) {
				const theme = (themeKeysLong[i % themeKeysLong.length] ?? themeKeysLong[0]) as string
				applyThemeClassName(el, theme, themesLong)
			}
			const classNameMsLong = performance.now() - classNameStartLong

			document.body.removeChild(el)
			setResult((r) => ({
				...r,
				long: { classListMs: classListMsLong, classNameMs: classNameMsLong }
			}))
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="2 themes × 3 classes each" appearance="output">
					<div className="text-sm">
						{result.small ? (
							<pre>
								{`${PERFORMANCE_ITERATIONS.toLocaleString()} theme toggles:\n  classList (add/remove each): ${result.small.classListMs.toFixed(2)} ms\n  className (array rebuild):   ${result.small.classNameMs.toFixed(2)} ms`}
							</pre>
						) : (
							<span>Running benchmark…</span>
						)}
					</div>
				</StoryCard>
				<StoryCard title="5 themes × 10 classes each" appearance="output">
					<div className="text-sm">
						{result.long ? (
							<pre>
								{`${PERFORMANCE_ITERATIONS.toLocaleString()} theme toggles:\n  classList (add/remove each): ${result.long.classListMs.toFixed(2)} ms\n  className (array rebuild):   ${result.long.classNameMs.toFixed(2)} ms`}
							</pre>
						) : (
							<span>Running benchmark…</span>
						)}
					</div>
				</StoryCard>
			</div>
		)
	}
}
