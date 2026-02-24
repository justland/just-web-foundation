import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { getDataAttribute } from '#just-web/css'

interface StoryArgs {
	attributeName: `data-${string}`
	element?: Element
}

const meta = {
	title: 'utils/getDataAttribute',
	component: getDataAttribute,
	tags: ['autodocs', 'version:0.1'],
	parameters: defineDocsParam({
		description: {
			component: 'A utility function to get `data-*` attribute values from DOM element',
		},
	}),
} satisfies Meta<typeof getDataAttribute>

export default meta

type Story = StoryObj<StoryArgs>

export const BasicUsage: Story = {
	name: 'Get Document Root Attribute',
	args: {
		attributeName: 'data-theme',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Gets the value of data-theme attribute from document root',
		},
	}),
	render(props: StoryArgs) {
		const value = getDataAttribute(props.attributeName)
		return (
			<div>
				<div className="mb-4">
					<code>getDataAttribute('{props.attributeName}')</code>
				</div>
				<pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
			</div>
		)
	},
}

export const SpecificElement: Story = {
	name: 'Get Specific Element Attribute',
	args: {
		attributeName: 'data-custom',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Gets an attribute value from a specific element',
		},
	}),
	render(props: StoryArgs) {
		const element = document.createElement('div')
		element.setAttribute(props.attributeName, 'test-value')
		const value = getDataAttribute(props.attributeName, element)
		return (
			<div>
				<div className="mb-4">
					<code>getDataAttribute('{props.attributeName}', element)</code>
				</div>
				<pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
			</div>
		)
	},
}

export const NonExistentAttribute: Story = {
	name: 'Get Non-existent Attribute',
	args: {
		attributeName: 'data-non-existent',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Returns null when trying to get a non-existent attribute',
		},
	}),
	render(props: StoryArgs) {
		const value = getDataAttribute(props.attributeName)
		return (
			<div>
				<div className="mb-4">
					<code>getDataAttribute('{props.attributeName}')</code>
				</div>
				<pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
			</div>
		)
	},
}
