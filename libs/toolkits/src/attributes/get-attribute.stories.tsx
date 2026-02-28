import { defineDocsParam, type FnToArgTypes, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { getAttribute } from '#just-web/toolkits'
import source from './get-attribute.ts?raw'

const meta: Meta<FnToArgTypes<typeof getAttribute, ['qualifiedName', 'element']>> = {
	title: 'attributes/getAttribute',
	tags: ['autodocs', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component: 'A utility function to get attribute values from DOM element',
		},
	}),
	argTypes: {
		qualifiedName: {
			control: 'text',
		},
		element: {
			control: false,
		},
	},
	args: {
		qualifiedName: 'data-subject',
	},
	render: () => <></>,
}

export default meta

type Story = StoryObj<typeof meta>

export const Source: Story = {
	parameters: defineDocsParam({
		source: {
			code: source,
		},
	}),
	decorators: [showDocSource()],
}

export const GetAttributeFromDocumentRoot: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'Gets the value of an attribute from document root',
		},
	}),
	decorators: [withStoryCard()],
	loaders: [
		({ args: { qualifiedName } }) => {
			document.documentElement.setAttribute(qualifiedName, 'test-value')
		},
	],

	render(props) {
		const value = getAttribute(props.qualifiedName)

		return (
			<div>
				<pre className="jwtk:bg-neutral-100 jwtk:dark:bg-neutral-900 jwtk:p-2 jwtk:rounded">
					{JSON.stringify(value, null, 2)}
				</pre>
			</div>
		)
	},
}

export const SpecificElement: Story = {
	name: 'Get Attribute From A Specific Element',
	args: {
		qualifiedName: 'data-custom',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Gets an attribute value from a specific element',
		},
	}),
	decorators: [withStoryCard()],
	render(props) {
		const element = document.createElement('div')
		element.setAttribute(props.qualifiedName, 'test-value')
		const value = getAttribute(props.qualifiedName, element)
		return (
			<div>
				<div className="jwtk:mb-4">
					<code>getAttribute('{props.qualifiedName}', element)</code>
				</div>
				<pre className="jwtk:bg-neutral-100 jwtk:dark:bg-neutral-900 jwtk:p-2 jwtk:rounded">
					{JSON.stringify(value, null, 2)}
				</pre>
			</div>
		)
	},
}

export const NonExistentAttribute: Story = {
	name: 'Get Non-existent Attribute',
	tags: ['unit'],
	args: {
		qualifiedName: 'data-non-existent',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Returns null when trying to get a non-existent attribute',
		},
	}),
	decorators: [withStoryCard()],
	render(props) {
		const value = getAttribute(props.qualifiedName)
		return (
			<div>
				<div className="jwtk:mb-4">
					<code>getAttribute('{props.qualifiedName}')</code>
				</div>
				<pre className="jwtk:bg-neutral-100 jwtk:dark:bg-neutral-900 jwtk:p-2 jwtk:rounded">
					{JSON.stringify(value, null, 2)}
				</pre>
			</div>
		)
	},
}
