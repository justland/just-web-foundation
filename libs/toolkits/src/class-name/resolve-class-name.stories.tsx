import { defineDocsParam, StoryCard, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { resolveClassName } from '#just-web/toolkits'

const meta = {
	title: 'class-name/resolveClassName',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function to resolve class names from render props, supporting both string and function-based className resolution.',
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
				'Resolves className when provided as a string. Combines className with the provided className.',
		},
	}),
	decorators: [
		withStoryCard(),
		showDocSource({
			placement: 'before',
			source: dedent`
		resolveClassName({ className: 'base-class' }, 'additional-class')
		`,
		}),
	],
	render() {
		return (
			<StoryCard appearance="output">
				{resolveClassName({ className: 'base-class' }, 'additional-class')}
			</StoryCard>
		)
	},
}

export const ClassNameFunction: Story = {
	name: 'className: function',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Resolves className when provided as a function. The function receives the render props and returns the className. Note: When using a function, it returns only the function result (not combined with className).',
		},
	}),
	decorators: [
		withStoryCard(),
		showDocSource({
			placement: 'before',
			source: dedent`
		resolveClassName({ className: 'base-class', isActive: true, count: 5 }, (s) =>
			s.isActive ? 'active-class' : 'inactive-class',
		)
		`,
		}),
	],
	render() {
		return (
			<StoryCard appearance="output">
				{resolveClassName({ className: 'base-class', isActive: true, count: 5 }, (s) =>
					s.isActive ? 'active-class' : 'inactive-class',
				)}
			</StoryCard>
		)
	},
}

export const UndefinedClassName: Story = {
	name: 'className: undefined',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When <code>className</code> is <code>undefined</code>, it returns the{' '}
						<code>className</code> property from the <code>renderProps</code>.
					</p>
				</>
			),
		}),
		showDocSource({
			placement: 'before',
			source: dedent`resolveClassName({ className: 'base-class' }, undefined)`,
		}),
	],
	render() {
		return (
			<StoryCard appearance="output">
				{resolveClassName({ className: 'base-class' }, undefined)}
			</StoryCard>
		)
	},
}

export const FunctionReturnsUndefined: Story = {
	name: 'className: function returns undefined',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When <code>className</code> is a function that returns <code>undefined</code>, it returns{' '}
					<code>undefined</code>.
				</p>
			),
		}),
		showDocSource({
			placement: 'before',
			source: `resolveClassName({ className: 'base-class' }, () => undefined)`,
		}),
	],
	render() {
		return (
			<StoryCard appearance="output">
				{resolveClassName({ className: 'base-class' }, () => undefined) === undefined
					? '(undefined)'
					: '(not undefined)'}
			</StoryCard>
		)
	},
}
