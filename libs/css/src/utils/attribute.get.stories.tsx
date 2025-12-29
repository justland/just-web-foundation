import { getAttribute } from '#just-web/css'
import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'

interface StoryArgs {
	attributeName: string
	element?: Element
}

const meta = {
	title: 'utils/getAttribute',
	component: getAttribute,
	tags: ['autodocs', 'version:0.5'],
	parameters: defineDocsParam({
		description: {
			component: 'A utility function to get attribute values from DOM element',
		},
	}),
} satisfies Meta<typeof getAttribute>

export default meta

type Story = StoryObj<StoryArgs>

export const BasicUsage: Story = {
	name: 'Get Document Root Attribute',
	args: {
		attributeName: 'data-custom',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Gets the value of an attribute from document root',
		},
	}),
	loaders: [
		({ args: { attributeName } }) => {
			document.documentElement.setAttribute(attributeName, 'test-value')
		},
	],
	render(props: StoryArgs) {
		const value = getAttribute(props.attributeName)
		return (
			<div>
				<div className="mb-4">
					<code>getAttribute('{props.attributeName}')</code>
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
		const value = getAttribute(props.attributeName, element)
		return (
			<div>
				<div className="mb-4">
					<code>getAttribute('{props.attributeName}', element)</code>
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
		const value = getAttribute(props.attributeName)
		return (
			<div>
				<div className="mb-4">
					<code>getAttribute('{props.attributeName}')</code>
				</div>
				<pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
			</div>
		)
	},
}
