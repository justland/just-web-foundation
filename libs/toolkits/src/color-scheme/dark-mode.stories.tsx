import { classNameThemeStore, themeEntry } from '@just-web/toolkits/theme.js'
import { StoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { type ReactNode, type RefObject, useEffect, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Button } from '../testing/button.tsx'

// Explained in dark-mode.mdx.
const meta: Meta = {
	title: 'color-scheme/Dark mode'
}

export default meta

type Story = StoryObj<typeof meta>

type Reading = {
	colorScheme: string
	canvas: string
	lightDark: string
	tailwind: string
}

/** Reads the computed values that show which scheme an element renders in. */
function readPanel(panel: Element): Reading {
	const swatch = (name: string) => {
		const el = panel.querySelector(`[data-swatch="${name}"]`)
		return el ? getComputedStyle(el).backgroundColor : ''
	}
	return {
		colorScheme: getComputedStyle(panel).colorScheme,
		canvas: swatch('canvas'),
		lightDark: swatch('light-dark'),
		tailwind: swatch('tailwind')
	}
}

/** Re-reads the panel whenever a class changes on `<html>` (the Storybook toolbar toggle). */
function useReading(ref: RefObject<HTMLElement | null>) {
	const [reading, setReading] = useState<Reading | undefined>()
	useEffect(() => {
		const update = () => ref.current && setReading(readPanel(ref.current))
		update()
		const observer = new MutationObserver(update)
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
		return () => observer.disconnect()
	}, [ref])
	return reading
}

/**
 * A panel of things the browser draws itself, plus one Tailwind `dark:` swatch for contrast.
 * The panel paints its own `Canvas` / `CanvasText`, so it looks like a page in its scheme.
 */
function SchemePanel(props: { id: string; title: ReactNode; className?: string }) {
	const ref = useRef<HTMLElement>(null)
	const reading = useReading(ref)
	return (
		<section
			ref={ref}
			data-testid={props.id}
			className={`flex min-w-56 flex-1 flex-col gap-2 rounded border border-gray-400 bg-[color:Canvas] p-3 text-[color:CanvasText] ${props.className ?? ''}`}
		>
			<h3 className="font-semibold">{props.title}</h3>
			<div className="flex flex-wrap items-center gap-2">
				<input type="date" aria-label="date" defaultValue="2026-10-19" />
				<select aria-label="select">
					<option>Option one</option>
					<option>Option two</option>
				</select>
				<input type="checkbox" aria-label="checkbox" defaultChecked />
				<input type="range" aria-label="range" />
			</div>
			<div className="h-16 overflow-y-scroll border border-gray-400 p-1">
				<div className="h-40">Native scrollbar</div>
			</div>
			<div
				data-swatch="canvas"
				className="p-1"
				style={{ background: 'Canvas', color: 'CanvasText' }}
			>
				System colors: <code>Canvas</code> / <code>CanvasText</code>
			</div>
			<div
				data-swatch="light-dark"
				className="p-1"
				style={{
					background: 'light-dark(rgb(255 255 255), rgb(0 0 0))',
					color: 'light-dark(rgb(0 0 0), rgb(255 255 255))'
				}}
			>
				<code>light-dark()</code>
			</div>
			<div data-swatch="tailwind" className="bg-white p-1 text-black dark:bg-black dark:text-white">
				Tailwind <code>dark:</code> variant
			</div>
			{reading && (
				<dl className="grid grid-cols-[auto_1fr] gap-x-2 text-xs">
					<dt>color-scheme</dt>
					<dd data-testid={`${props.id}-color-scheme`}>{reading.colorScheme}</dd>
					<dt>Canvas</dt>
					<dd>{reading.canvas}</dd>
					<dt>light-dark()</dt>
					<dd>{reading.lightDark}</dd>
					<dt>dark: utility</dt>
					<dd>{reading.tailwind}</dd>
				</dl>
			)}
		</section>
	)
}

const WHITE = 'rgb(255, 255, 255)'
const BLACK = 'rgb(0, 0, 0)'

export const ClassVersusColorScheme: Story = {
	name: 'dark class vs color-scheme',
	tags: ['use-case'],
	render: () => (
		<div className="flex flex-wrap gap-3">
			<SchemePanel id="light" title="A: light" className="scheme-light" />
			<SchemePanel
				id="class-only"
				title={
					<>
						B: <code>dark</code> class, <code>color-scheme: light</code>
					</>
				}
				className="dark scheme-light"
			/>
			<SchemePanel
				id="class-and-scheme"
				title={
					<>
						C: <code>dark</code> class (sets <code>color-scheme: dark</code>)
					</>
				}
				className="dark"
			/>
		</div>
	),
	play: async ({ canvas }) => {
		const classOnly = readPanel(canvas.getByTestId('class-only'))
		const withScheme = readPanel(canvas.getByTestId('class-and-scheme'))

		// The class drives Tailwind in both panels.
		await expect(classOnly.tailwind).toBe(BLACK)
		await expect(withScheme.tailwind).toBe(BLACK)

		// Only `color-scheme` switches what the browser draws.
		await expect(classOnly.colorScheme).toBe('light')
		await expect(classOnly.lightDark).toBe(WHITE)
		await expect(withScheme.colorScheme).toBe('dark')
		await expect(withScheme.lightDark).toBe(BLACK)
		await expect(withScheme.canvas).not.toBe(classOnly.canvas)
	}
}

const themes = { light: 'light', dark: 'dark' }

export const WithThemeStore: Story = {
	name: 'with classNameThemeStore',
	tags: ['use-case'],
	render: () => {
		const store = classNameThemeStore(themes)
		return (
			<StoryCard appearance="output">
				<div className="flex flex-col gap-3">
					<div className="flex gap-2">
						<Button onPress={() => store.write(themeEntry(themes, 'light'))}>Light</Button>
						<Button onPress={() => store.write(themeEntry(themes, 'dark'))}>Dark</Button>
					</div>
					<SchemePanel id="follows-html" title="Follows <html>" />
				</div>
			</StoryCard>
		)
	},
	play: async ({ canvas }) => {
		const html = document.documentElement
		const original = html.className
		try {
			await userEvent.click(canvas.getByRole('button', { name: 'Light' }))
			const light = readPanel(canvas.getByTestId('follows-html'))
			await expect(light.colorScheme).toBe('normal')
			await expect(light.lightDark).toBe(WHITE)

			await userEvent.click(canvas.getByRole('button', { name: 'Dark' }))
			const dark = readPanel(canvas.getByTestId('follows-html'))
			await expect(html.classList.contains('dark')).toBe(true)
			// `color-scheme` is inherited, so the panel takes the value set on <html>.
			await expect(dark.colorScheme).toBe('dark')
			await expect(dark.lightDark).toBe(BLACK)
			await expect(dark.canvas).not.toBe(light.canvas)
			await waitFor(() =>
				expect(canvas.getByTestId('follows-html-color-scheme')).toHaveTextContent('dark')
			)
		} finally {
			html.className = original
		}
	}
}
