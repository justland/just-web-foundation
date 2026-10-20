import { getPrefersColorScheme } from '@just-web/toolkits'
import { useColorScheme } from '@just-web/toolkits/react.js'
import { dataAttributeThemeStore, themeEntry } from '@just-web/toolkits/theme.js'
import { StoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useMemo, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Button } from '../testing/button.tsx'

// Explained in theme-switching.mdx.
const meta: Meta = {
	title: 'color-scheme/Theme switching'
}

export default meta

type Story = StoryObj<typeof meta>

const themes = { light: 'light', dark: 'dark' } as const

/** Light/Dark/System buttons that write `data-theme` on the panel, and a readout of its scheme. */
function ThemePanel(props: { className: string; css?: string }) {
	const [element, setElement] = useState<HTMLDivElement | null>(null)
	const store = useMemo(
		() =>
			element
				? dataAttributeThemeStore(themes, { attributeName: 'data-theme', element })
				: undefined,
		[element]
	)
	const scheme = useColorScheme({ element })
	return (
		<div className="flex flex-col gap-3">
			{props.css && <style>{props.css}</style>}
			<div className="flex gap-2">
				<Button onPress={() => store?.write(themeEntry(themes, 'light'))}>Light</Button>
				<Button onPress={() => store?.write(themeEntry(themes, 'dark'))}>Dark</Button>
				<Button onPress={() => store?.write(undefined)}>System</Button>
			</div>
			<div
				ref={setElement}
				data-testid="panel"
				className={`rounded border border-gray-400 p-3 ${props.className}`}
			>
				<div className="flex flex-wrap items-center gap-2">
					<input type="checkbox" aria-label="checkbox" defaultChecked />
					<select aria-label="select">
						<option>Option</option>
					</select>
					<span>
						Renders in: <strong data-testid="scheme">{scheme}</strong>
					</span>
				</div>
			</div>
		</div>
	)
}

const SURFACE_DARK = 'rgb(18, 18, 18)'
const SURFACE_LIGHT = 'rgb(255, 255, 255)'

const play: Story['play'] = async ({ canvas }) => {
	const panel = canvas.getByTestId('panel')
	const background = () => getComputedStyle(panel).backgroundColor

	await userEvent.click(canvas.getByRole('button', { name: 'Dark' }))
	await waitFor(() => expect(canvas.getByTestId('scheme')).toHaveTextContent('dark'))
	await expect(background()).toBe(SURFACE_DARK)

	await userEvent.click(canvas.getByRole('button', { name: 'Light' }))
	await waitFor(() => expect(canvas.getByTestId('scheme')).toHaveTextContent('light'))
	await expect(background()).toBe(SURFACE_LIGHT)

	await userEvent.click(canvas.getByRole('button', { name: 'System' }))
	const system = getPrefersColorScheme()
	await waitFor(() => expect(canvas.getByTestId('scheme')).toHaveTextContent(system))
	await expect(background()).toBe(system === 'dark' ? SURFACE_DARK : SURFACE_LIGHT)
}

const RECIPE_B_CSS = `
.recipe-b { color-scheme: light dark; }
.recipe-b[data-theme='light'] { color-scheme: light; }
.recipe-b[data-theme='dark'] { color-scheme: dark; }
.recipe-b {
	background: light-dark(#ffffff, #121212);
	color: light-dark(#1a1a1a, #e8e8e8);
}
`

export const RecipeB: Story = {
	name: 'data-theme with CSS',
	tags: ['use-case'],
	render: () => (
		<StoryCard appearance="output">
			<ThemePanel className="recipe-b" css={RECIPE_B_CSS} />
		</StoryCard>
	),
	play
}

export const Tailwind: Story = {
	name: 'data-theme with Tailwind',
	tags: ['use-case'],
	render: () => (
		<StoryCard appearance="output">
			<ThemePanel className="scheme-light-dark data-[theme=light]:scheme-light data-[theme=dark]:scheme-dark bg-[color:light-dark(#ffffff,#121212)] text-[color:light-dark(#1a1a1a,#e8e8e8)]" />
		</StoryCard>
	),
	play
}
