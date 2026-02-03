import { defineDocsParam, showDocSource } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'

const meta = {
	title: 'Types/Placement',
	tags: ['code-only', 'version:next'],
	render: () => <></>,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Basic usage of Placement type with a single placement value.',
		},
		source: {
			code: dedent`
				import type { Placement } from '@just-web/types'

				const placement: Placement = 'top'
			`,
		},
	}),
	decorators: [showDocSource()],
}

export const AllPlacementValues: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'All available placement values in the Placement type.',
		},
		source: {
			code: dedent`
				import type { Placement } from '@just-web/types'

				// Vertical placements
				const top: Placement = 'top'
				const topLeft: Placement = 'top left'
				const topRight: Placement = 'top right'
				const topStart: Placement = 'top start'
				const topEnd: Placement = 'top end'

				const bottom: Placement = 'bottom'
				const bottomLeft: Placement = 'bottom left'
				const bottomRight: Placement = 'bottom right'
				const bottomStart: Placement = 'bottom start'
				const bottomEnd: Placement = 'bottom end'

				// Horizontal placements
				const left: Placement = 'left'
				const leftTop: Placement = 'left top'
				const leftBottom: Placement = 'left bottom'

				const right: Placement = 'right'
				const rightTop: Placement = 'right top'
				const rightBottom: Placement = 'right bottom'

				// Logical placements
				const start: Placement = 'start'
				const startTop: Placement = 'start top'
				const startBottom: Placement = 'start bottom'

				const end: Placement = 'end'
				const endTop: Placement = 'end top'
				const endBottom: Placement = 'end bottom'
			`,
		},
	}),
	decorators: [showDocSource()],
}

export const ComponentUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Using Placement type in component props for positioning elements like tooltips, popovers, or dropdowns.',
		},
		source: {
			code: dedent`
				import type { Placement } from '@just-web/types'

				interface TooltipProps {
					placement: Placement
					content: string
				}

				const Tooltip = ({ placement, content }: TooltipProps) => {
					return (
						<div data-placement={placement}>
							{content}
						</div>
					)
				}

				// Usage
				<Tooltip placement="top" content="Tooltip content" />
				<Tooltip placement="bottom start" content="Another tooltip" />
			`,
		},
	}),
	decorators: [showDocSource()],
}
