import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showDocSource,
	withStoryCard,
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { getAttribute } from '#just-web/toolkits'
import code from './get-attribute.ts?raw'

const meta: Meta<FnToArgTypes<typeof getAttribute, ['qualifiedName', 'element']>> = {
	title: 'attributes/getAttribute',
	tags: ['func', 'version:next'],
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

export const FromDocumentRoot: Story = {
	parameters: defineDocsParam({
		description: {
			story: 'By default, gets the value of an attribute from document root',
		},
		source: {
			code: dedent`
				document.documentElement.setAttribute('data-theme', 'some value')
				console.log(getAttribute('data-theme'))
				`,
		},
	}),
	loaders: [
		({ args: { qualifiedName } }) => {
			document.documentElement.setAttribute(qualifiedName, 'some value')
		},
	],
	decorators: [withStoryCard(), showDocSource({ placement: 'before' })],
	render(props) {
		const value = getAttribute(props.qualifiedName)

		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify(value, null, 2)}</pre>
			</StoryCard>
		)
	},
}

export const FromSpecificElement: Story = {
	args: {
		qualifiedName: 'data-custom',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Gets an attribute value from a specific element',
		},
		source: {
			code: dedent`
				const element = document.createElement('div')
				element.setAttribute(qualifiedName, 'test-value')
				const value = getAttribute(qualifiedName, element)
			`,
		},
	}),
	decorators: [
		withStoryCard(),

		showDocSource({ placement: 'before' }),
	],
	render(props) {
		const element = document.createElement('div')
		element.setAttribute(props.qualifiedName, 'test-value')
		const value = getAttribute(props.qualifiedName, element)
		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify(value, null, 2)}</pre>
			</StoryCard>
		)
	},
}

export const NonExistentAttribute: Story = {
	tags: ['unit'],
	args: {
		qualifiedName: 'data-not-exist',
	},
	parameters: defineDocsParam({
		description: {
			story: 'Returns null when trying to get a non-existent attribute',
		},
		source: {
			code: dedent`
				console.log(getAttribute('data-not-exist'))
			`,
		},
	}),
	decorators: [withStoryCard(), showDocSource({ placement: 'before' })],
	render(props) {
		const value = getAttribute(props.qualifiedName)
		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify(value, null, 2)}</pre>
			</StoryCard>
		)
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code },
	}),
	decorators: [showDocSource()],
}
