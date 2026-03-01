import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { resolveStyle } from '#just-web/toolkits'

const meta = {
	title: 'style/resolveStyle',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'A utility function to resolve style from render props, supporting both object and function-based style resolution.'
		}
	})
} satisfies Meta<typeof resolveStyle>

export default meta

type Story = StoryObj<typeof meta>

export const StyleObject: Story = {
	name: 'style: object',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Resolves style when provided as an object. Merges style with the provided style (override wins).'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
		resolveStyle({ style: { padding: '0.5rem', color: 'red' } }, { fontWeight: 'bold' })
		`
		})
	],
	render() {
		const result = resolveStyle(
			{ style: { padding: '0.5rem', color: 'red' } },
			{ fontWeight: 'bold' }
		)
		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify(result, null, 2)}</pre>
			</StoryCard>
		)
	}
}

export const StyleFunction: Story = {
	name: 'style: function',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Resolves style when provided as a function. The function receives the render props and returns the style.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
		resolveStyle({ style: { padding: '0.5rem' }, isActive: true }, (s) =>
			s.isActive ? { ...s.style, color: 'green' } : s.style,
		)
		`
		})
	],
	render() {
		const result = resolveStyle({ style: { padding: '0.5rem' }, isActive: true }, (s) =>
			s.isActive ? { ...s.style, color: 'green' } : s.style
		)
		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify(result, null, 2)}</pre>
			</StoryCard>
		)
	}
}

export const UndefinedStyle: Story = {
	name: 'style: undefined',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						When <code>style</code> is <code>undefined</code>, it returns the <code>style</code>{' '}
						property from the <code>renderProps</code>.
					</p>
				</>
			)
		}),
		showSource({
			source: dedent`resolveStyle({ style: { padding: '0.5rem' } }, undefined)`
		})
	],
	render() {
		const result = resolveStyle({ style: { padding: '0.5rem' } }, undefined)
		return (
			<StoryCard appearance="output">
				<pre>{JSON.stringify(result, null, 2)}</pre>
			</StoryCard>
		)
	}
}

export const FunctionReturnsUndefined: Story = {
	name: 'style: function returns undefined',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					When <code>style</code> is a function that returns <code>undefined</code>, it returns{' '}
					<code>undefined</code>.
				</p>
			)
		}),
		showSource({
			source: `resolveStyle({ style: { padding: '0.5rem' } }, () => undefined)`
		})
	],
	render() {
		const result = resolveStyle({ style: { padding: '0.5rem' } }, () => undefined)
		return (
			<StoryCard appearance="output">
				{result === undefined ? '(undefined)' : '(not undefined)'}
			</StoryCard>
		)
	}
}
