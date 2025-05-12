import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Example/HelloWorld',
	parameters: {
		layout: 'centered',
	},
	render: () => <div>Hello World!</div>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
