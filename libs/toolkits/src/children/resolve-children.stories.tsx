import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { resolveChildren } from '#just-web/toolkits'

const meta = {
	title: 'children/resolveChildren',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function to resolve children from render props, supporting both static and function-based children resolution.'
		}
	})
} satisfies Meta<typeof resolveChildren>

export default meta

type Story = StoryObj<typeof meta>

export const StaticChildren: Story = {
	name: 'children: static',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Resolves children when provided as a static value. The provided value is used as the children.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: `resolveChildren({ children: 'Default' }, 'Override content')`
		})
	],
	render() {
		const result = resolveChildren({ children: 'Default' }, 'Override content')
		return (
			<StoryCard appearance="output">
				<div>Result: {result}</div>
			</StoryCard>
		)
	}
}

export const ChildrenFunction: Story = {
	name: 'children: function',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Resolves children when provided as a function. The function receives the render props and returns the children.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
		resolveChildren({ children: 'Default', count: 42 }, (rp) => \`Computed: \${rp.count}\`)
		`
		})
	],
	render() {
		const result = resolveChildren(
			{ children: 'Default', count: 42 },
			(rp) => `Computed: ${rp.count}`
		)
		return (
			<StoryCard appearance="output">
				<div>Result: {result}</div>
			</StoryCard>
		)
	}
}

export const UndefinedChildren: Story = {
	name: 'children: undefined',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When <code>children</code> is <code>undefined</code>, it returns the{' '}
						<code>children</code> property from the <code>renderProps</code>.
					</p>
				</>
			)
		}),
		showSource({
			source: `resolveChildren({ children: 'From render props' }, undefined)`
		})
	],
	render() {
		const result = resolveChildren({ children: 'From render props' }, undefined)
		return (
			<StoryCard appearance="output">
				<div>Result: {result}</div>
			</StoryCard>
		)
	}
}

export const FunctionReturnsUndefined: Story = {
	name: 'children: function returns undefined',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When <code>children</code> is a function that returns <code>undefined</code>, it returns{' '}
					<code>undefined</code>.
				</p>
			)
		}),
		showSource({
			source: `resolveChildren({ children: 'Default' }, () => undefined)`
		})
	],
	render() {
		const result = resolveChildren({ children: 'Default' }, () => undefined)
		return (
			<StoryCard appearance="output">
				{result === undefined ? '(undefined)' : '(not undefined)'}
			</StoryCard>
		)
	}
}
