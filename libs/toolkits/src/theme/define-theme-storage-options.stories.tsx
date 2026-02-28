import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { testType } from 'type-plus'
import { defineThemeStorageOptions, type ThemeStorageOptions } from '#just-web/toolkits'
import source from './define-theme-storage-options.ts?raw'

const meta = {
	title: 'theme/defineThemeStorageOptions',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Helper to define theme storage options with inferred Themes type. Without it, you must declare the themes map separately and use typeof or a manual type for ThemeStorageOptions.',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'defineThemeStorageOptions infers the Themes type from the themes object, so theme is typed as the union of theme keys (e.g. "light" | "dark" | "system"). The result can be passed to setThemeToLocalStorage and getThemeFromLocalStorage.',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>defineThemeStorageOptions</code> is a helper to define the theme storage options
						outside the function call.
					</p>
					<p>
						It helps to avoid the need to declare the themes map separately and use typeof or a
						manual type for <code>ThemeStorageOptions</code>.
					</p>
				</>
			),
		}),
		showSource({
			source: dedent`
				const options = defineThemeStorageOptions({
					themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
					theme: 'default',
					storageKey: 'theme'
				})

				// options is typed as ThemeStorageOptions<{ default: string, grayscale: string }>
				// options.theme is typed as "default" | "grayscale" | null | undefined
				// options.themes is typed as { default: string, grayscale: string }
			`,
		}),
		withStoryCard({
			content: (
				<>
					<p>
						Alternatively, you can use <code>as const</code> to explicitly define the type of the
						options object.
					</p>
				</>
			),
		}),
		showSource({
			source: dedent`
				const asConst = {
					storageKey: 'theme',
					themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
					theme: 'default'
				} as const

				// asConst.theme is typed as 'default'
				// asConst.themes is typed as {
				//   readonly default: 'theme-default'
				//   readonly grayscale: 'theme-grayscale'
				// }
			`,
		}),
		withStoryCard({
			content: (
				<>
					<p>Using type declaration and satisfies keyword are more verbose.</p>
				</>
			),
		}),
		showSource({
			source: dedent`
				const typeDeclaration: ThemeStorageOptions<{ default: string; grayscale: string }> = {
					storageKey: 'theme',
					themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
					theme: 'default'
				}

				// typeDeclaration.theme is typed as 'default' | 'grayscale' | null | undefined
				// typeDeclaration.themes is typed as { default: string; grayscale: string }

				const satisfies = {
					storageKey: 'theme',
					themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
					theme: 'default',
				} satisfies ThemeStorageOptions<{ default: string; grayscale: string }>

				// satisfies.theme is typed as 'default'
				// satisfies.themes is typed as { default: string; grayscale: string }
			`,
		}),
	],
	play: () => {
		const options = defineThemeStorageOptions({
			themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
			theme: 'default',
			storageKey: 'theme',
		})

		testType.equal<typeof options.theme, 'default' | 'grayscale' | null | undefined>(true)
		testType.equal<typeof options.themes, { default: string; grayscale: string }>(true)

		const asConst = {
			storageKey: 'theme',
			themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
			theme: 'default',
		} as const

		testType.equal<typeof asConst.theme, 'default'>(true)
		testType.equal<
			typeof asConst.themes,
			{
				readonly default: 'theme-default'
				readonly grayscale: 'theme-grayscale'
			}
		>(true)

		const typeDeclaration: ThemeStorageOptions<{ default: string; grayscale: string }> = {
			storageKey: 'theme',
			themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
			theme: 'default',
		}

		testType.equal<typeof typeDeclaration.theme, 'default' | 'grayscale' | null | undefined>(true)
		testType.equal<typeof typeDeclaration.themes, { default: string; grayscale: string }>(true)

		const satisfies = {
			storageKey: 'theme',
			themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
			theme: 'default',
		} satisfies ThemeStorageOptions<{ default: string; grayscale: string }>

		testType.equal<typeof satisfies.theme, 'default'>(true)
		testType.equal<typeof satisfies.themes, { default: string; grayscale: string }>(true)
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()],
}
