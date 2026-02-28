import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { getThemeByDataAttribute } from '#just-web/toolkits'
import source from './get-theme-by-data-attribute.ts?raw'

const meta = {
	title: 'theme/getThemeByDataAttribute',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Gets the current theme from a data attribute value (e.g. data-theme) with optional default and allowCustom.',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
	light: 'light-theme',
	dark: 'dark-theme',
	system: 'system-theme',
} as const

function ShowResult({ theme, value }: { theme: string | undefined; value: string | null }) {
	return (
		<div className="font-sans">
			<p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
			<p>Data attribute value: {value === null ? '(null)' : value}</p>
		</div>
	)
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Gets theme value from a data attribute with fallback to default theme.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				getThemeByDataAttribute({
				  themes,
				  defaultTheme: 'dark',
				  attributeName: 'data-theme',
				})
			`,
		}),
	],
	loaders: [
		() => {
			document.documentElement.setAttribute('data-theme', 'dark-theme')
			const theme = getThemeByDataAttribute({
				themes,
				defaultTheme: 'dark',
				attributeName: 'data-theme',
			})
			return { theme }
		},
	],
	render: (_, { loaded: { theme } }) => {
		const value = document.documentElement.getAttribute('data-theme')
		return (
			<StoryCard title="Theme from data-theme" appearance="output">
				<ShowResult theme={theme} value={value} />
			</StoryCard>
		)
	},
	play: async ({ loaded: { theme } }) => {
		await expect(theme).toBe('dark')
	},
}

export const UndefinedWhenNotSet: Story = {
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story: 'Returns undefined when data attribute is not set.',
		},
	}),
	loaders: [
		() => {
			document.documentElement.removeAttribute('data-not-exist')
			const theme = getThemeByDataAttribute({
				themes,
				attributeName: 'data-not-exist',
			})
			return { theme }
		},
	],
	render: (_, { loaded: { theme } }) => {
		const value = document.documentElement.getAttribute('data-not-exist')
		return (
			<StoryCard appearance="output">
				<ShowResult theme={theme} value={value} />
			</StoryCard>
		)
	},
	play: async ({ loaded: { theme } }) => {
		await expect(theme).toBeUndefined()
	},
}

export const WithDefaultTheme: Story = {
	name: 'With defaultTheme',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Falls back to default theme when data attribute is missing or invalid.',
		},
	}),
	loaders: [
		() => {
			document.documentElement.removeAttribute('data-theme')
			const theme = getThemeByDataAttribute({
				themes,
				defaultTheme: 'system',
				attributeName: 'data-theme',
			})
			return { theme }
		},
	],
	render: (_, { loaded: { theme } }) => {
		const value = document.documentElement.getAttribute('data-theme')
		return (
			<StoryCard appearance="output">
				<ShowResult theme={theme} value={value} />
			</StoryCard>
		)
	},
	play: async ({ loaded: { theme } }) => {
		await expect(theme).toBe('system')
	},
}

export const InvalidThemeWithDefaultTheme: Story = {
	name: 'Invalid theme with defaultTheme',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Falls back to default theme when data attribute value is not a valid theme.',
		},
	}),
	render: () => {
		document.documentElement.setAttribute('data-theme', 'invalid-theme')
		const value = document.documentElement.getAttribute('data-theme')
		const theme = getThemeByDataAttribute({
			themes,
			defaultTheme: 'system',
			attributeName: 'data-theme',
		})
		return (
			<StoryCard appearance="output">
				<ShowResult theme={theme} value={value} />
			</StoryCard>
		)
	},
	play: async () => {
		const theme = getThemeByDataAttribute({
			themes,
			defaultTheme: 'system',
			attributeName: 'data-theme',
		})
		await expect(theme).toBe('system')
	},
}

export const InvalidTheme: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Returns undefined when data attribute value is not a valid theme and no default.',
		},
	}),
	render: () => {
		document.documentElement.setAttribute('data-theme', 'invalid-theme')
		const value = document.documentElement.getAttribute('data-theme')
		const theme = getThemeByDataAttribute({
			themes,
			attributeName: 'data-theme',
		})
		return (
			<StoryCard appearance="output">
				<ShowResult theme={theme} value={value} />
			</StoryCard>
		)
	},
	play: async () => {
		const theme = getThemeByDataAttribute({
			themes,
			attributeName: 'data-theme',
		})
		await expect(theme).toBeUndefined()
	},
}

export const AllowCustom: Story = {
	name: 'allowCustom',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'When allowCustom is true, returns the raw attribute value if it does not match a theme.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`getThemeByDataAttribute({ themes, attributeName: 'data-theme', allowCustom: true })`,
		}),
	],
	render: () => {
		document.documentElement.setAttribute('data-theme', 'custom')
		const value = document.documentElement.getAttribute('data-theme')
		const theme = getThemeByDataAttribute({
			themes,
			attributeName: 'data-theme',
			allowCustom: true,
		})
		return (
			<StoryCard appearance="output">
				<ShowResult theme={theme} value={value} />
			</StoryCard>
		)
	},
	play: async () => {
		const theme = getThemeByDataAttribute({
			themes,
			attributeName: 'data-theme',
			allowCustom: true,
		})
		await expect(theme).toBe('custom')
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()],
}
