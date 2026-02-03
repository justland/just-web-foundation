import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'

const meta = {
	title: 'attributes/DataAttribute',
	tags: ['code-only', 'version:next'],
	render: () => <></>,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Basic usage of DataAttribute type for well-known and custom data attribute names.',
		},
		source: {
			code: dedent`
				import type { DataAttribute } from '#just-web/toolkits'

				// Well-known attributes
				const testId: DataAttribute = 'data-testid'
				const state: DataAttribute = 'data-state'
				const theme: DataAttribute = 'data-theme'

				// Custom data attributes (data-\${string})
				const custom: DataAttribute = 'data-custom-name'
			`,
		},
	}),
	decorators: [withStoryCard(), showDocSource()],
}

export const WellKnownAttributes: Story = {
	name: 'Well-known attribute names',
	parameters: defineDocsParam({
		description: {
			story:
				'All well-known data attribute names included in the type. The type also allows any custom data-* attribute.',
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
			`,
		},
	}),
	decorators: [withStoryCard(), showDocSource()],
}

export const PickAttributesForUseCase: Story = {
	name: 'Pick attributes for a specific use case',
	parameters: defineDocsParam({
		description: {
			story:
				'Use Pick<T, K> to restrict props to only the data attributes needed for a component or function, improving type safety and documentation.',
		},
		source: {
			code: dedent`
				import type { DataAttribute } from '@just-web/toolkits'

				// Base type: optional data attributes (e.g. for a generic wrapper)
				type DataAttributeProps = Partial<Record<DataAttribute, string>>

				// Theme switcher only needs data-theme
				type ThemeSwitcherProps = Pick<DataAttributeProps, 'data-theme'>

				// Testable component only needs data-testid
				type TestableProps = Pick<DataAttributeProps, 'data-testid'>

				// Component that needs both theme and test id
				type ThemedTestableProps = Pick<
					DataAttributeProps,
					'data-theme' | 'data-testid'
				>

				// Radix-style component: state and side
				type CollapsibleProps = Pick<
					DataAttributeProps,
					'data-state' | 'data-side'
				>
			`,
		},
	}),
	decorators: [withStoryCard(), showDocSource()],
}
