import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { resolveClassName } from '#just-web/css'

const meta = {
	title: 'utils/resolveClassName',
	tags: ['autodocs', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function to resolve class names from state, supporting both string and function-based className resolution.',
		},
	}),
} satisfies Meta<typeof resolveClassName>

export default meta

type Story = StoryObj<typeof meta>

export const ClassNameString: Story = {
	name: 'className: string',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Resolves className when provided as a string. Combines defaultClassName with the provided className.',
		},
	}),
	decorators: [withStoryCard(), showDocSource()],
	render() {
		return (
			<div>Result: {resolveClassName({ defaultClassName: 'base-class' }, 'additional-class')}</div>
		)
	},
}

export const ClassNameFunction: Story = {
	name: 'className: function',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Resolves className when provided as a function. The function receives the state and returns the className. Note: When using a function, it returns only the function result (not combined with defaultClassName).',
		},
	}),
	decorators: [withStoryCard(), showDocSource()],
	render() {
		return (
			<div>
				{resolveClassName({ defaultClassName: 'base-class', isActive: true, count: 5 }, (s) =>
					s.isActive ? 'active-class' : 'inactive-class',
				)}
			</div>
		)
	},
}

export const UndefinedClassName: Story = {
	name: 'className: undefined',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'Returns only the defaultClassName when className is undefined.',
		},
	}),
	decorators: [withStoryCard(), showDocSource()],
	render() {
		return <div>{resolveClassName({ defaultClassName: 'base-class' }, undefined)}</div>
	},
}

export const FunctionReturnsUndefined: Story = {
	name: 'className: function returns undefined',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'When className is a function that returns undefined, it uses the defaultClassName only.',
		},
	}),
	decorators: [withStoryCard(), showDocSource()],
	render() {
		return (
			<div>
				{resolveClassName({ defaultClassName: 'base-class', shouldShow: false }, (s) =>
					s.shouldShow ? 'visible-class' : undefined,
				) === undefined
					? '(undefined)'
					: '(not undefined)'}
			</div>
		)
	},
}
