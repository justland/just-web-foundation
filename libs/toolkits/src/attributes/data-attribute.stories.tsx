import type { DataAttribute } from '@just-web/toolkits'
import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'

const meta = {
	title: 'attributes/DataAttribute',
	tags: ['type', 'version:1.0'],
	render: () => <></>
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const WellKnownAttributes: Story = {
	name: 'Well-known attributes',
	parameters: defineDocsParam({
		description: {
			story: 'Supports auto-completion for well-known data attribute names.'
		},
		source: {
			code: dedent`
				import type { DataAttribute } from '@just-web/toolkits'

				// Testing & analytics
				const testId: DataAttribute = 'data-testid'
				const metrics: DataAttribute = 'data-metrics'

				// Component state (Radix/shadcn pattern)
				const state: DataAttribute = 'data-state'
				const orientation: DataAttribute = 'data-orientation'
				const side: DataAttribute = 'data-side'
				const align: DataAttribute = 'data-align'
				const placement: DataAttribute = 'data-placement'

				// Common UI state
				const loading: DataAttribute = 'data-loading'
				const disabled: DataAttribute = 'data-disabled'
				const selected: DataAttribute = 'data-selected'
				const checked: DataAttribute = 'data-checked'
				const expanded: DataAttribute = 'data-expanded'
				const highlighted: DataAttribute = 'data-highlighted'
				const active: DataAttribute = 'data-active'
				const open: DataAttribute = 'data-open'
				const pressed: DataAttribute = 'data-pressed'

				// Content / value
				const value: DataAttribute = 'data-value'
				const id: DataAttribute = 'data-id'
				const name: DataAttribute = 'data-name'
				const typeAttr: DataAttribute = 'data-type'
				const label: DataAttribute = 'data-label'
				const key: DataAttribute = 'data-key'
				const index: DataAttribute = 'data-index'
				const position: DataAttribute = 'data-position'

				// Design system / theming
				const variant: DataAttribute = 'data-variant'
				const size: DataAttribute = 'data-size'
				const theme: DataAttribute = 'data-theme'
				const color: DataAttribute = 'data-color'
				const intent: DataAttribute = 'data-intent'
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	play() {
		'data-metrics' satisfies DataAttribute
		'data-state' satisfies DataAttribute
		'data-orientation' satisfies DataAttribute
		'data-side' satisfies DataAttribute
		'data-align' satisfies DataAttribute
		'data-placement' satisfies DataAttribute
		'data-loading' satisfies DataAttribute
		'data-disabled' satisfies DataAttribute
		'data-selected' satisfies DataAttribute
		'data-checked' satisfies DataAttribute
		'data-expanded' satisfies DataAttribute
		'data-highlighted' satisfies DataAttribute
		'data-active' satisfies DataAttribute
		'data-open' satisfies DataAttribute
		'data-pressed' satisfies DataAttribute
		'data-value' satisfies DataAttribute
		'data-id' satisfies DataAttribute
		'data-name' satisfies DataAttribute
		'data-type' satisfies DataAttribute
		'data-label' satisfies DataAttribute
		'data-key' satisfies DataAttribute
		'data-index' satisfies DataAttribute
		'data-position' satisfies DataAttribute
		'data-variant' satisfies DataAttribute
		'data-size' satisfies DataAttribute
		'data-theme' satisfies DataAttribute
		'data-color' satisfies DataAttribute
		'data-intent' satisfies DataAttribute
	}
}

export const PickAttributes: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'Use Pick<T, K> to restrict props to only the data attributes needed, improving type safety and documentation.'
		},
		source: {
			code: dedent`
				import type { DataAttribute } from '@just-web/toolkits'

				// Theme switcher only needs data-theme
				type ThemeSwitcherProps = Pick<DataAttributeProps, 'data-theme'>

				// Testable component only needs data-testid
				type TestableProps = Pick<DataAttributeProps, 'data-testid'>
			`
		}
	}),
	decorators: [withStoryCard(), showSource()]
}

export const CustomDataAttributes: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'You can use it for arbitrary data-* attributes.'
		},
		source: {
			code: dedent`
				import type { DataAttribute } from '@just-web/toolkits'

				// Custom data attributes (data-\${string})
				const custom: DataAttribute = 'data-custom-name'
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	play() {
		'data-custom-name' satisfies DataAttribute
	}
}
