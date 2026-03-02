import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { appendId } from '#just-web/toolkits'

const meta = {
	title: 'utils/appendId',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Appends a suffix to an ID if the ID is defined. Useful for propagating ids (e.g. data-testid, key, or aria attributes) from parent to sub-components so selectors and keys stay consistent and predictable.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Append a suffix to a defined ID. Returns the combined id with a hyphen.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				appendId('card', 'title')   // 'card-title'
				appendId('form', 'submit')  // 'form-submit'
			`
		})
	],
	render() {
		const examples = [
			{ id: 'card', suffix: 'title' },
			{ id: 'form', suffix: 'submit' },
			{ id: 'list', suffix: 'item-0' }
		]
		return (
			<StoryCard appearance="output">
				<pre className="text-sm">
					{examples
						.map(
							({ id, suffix }) =>
								`appendId('${id}', '${suffix}') → ${JSON.stringify(appendId(id, suffix))}`
						)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(appendId('card', 'title')).toBe('card-title')
		await expect(appendId('form', 'submit')).toBe('form-submit')
	}
}

export const DataTestIdAndKeyPropagation: Story = {
	name: 'data-testid and key propagation',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Pass a root id (e.g. from props) down and use appendId for data-testid, key, or other ids so sub-components get stable, predictable identifiers without manual concatenation.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				// Parent receives id (or data-testid) and passes it down
				function Card({ id, title, items }: Props) {
				  return (
				    <div data-testid={id}>
				      <h2 data-testid={appendId(id, 'title')}>{title}</h2>
				      <ul>
				        {items.map((item, i) => (
				          <li key={appendId(id, \`item-\${i}\`)} data-testid={appendId(id, \`item-\${i}\`)}>
				            {item}
				          </li>
				        ))}
				      </ul>
				    </div>
				  )
				}
				// <Card id="product-card" /> → data-testid="product-card", "product-card-title", "product-card-item-0", ...
			`
		})
	],
	render() {
		const id = 'product-card'
		const suffixes = ['title', 'item-0', 'item-1', 'item-2']
		return (
			<StoryCard appearance="output">
				<p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
					With <code>id="{id}"</code>, sub-ids become:
				</p>
				<pre className="text-sm">
					{suffixes
						.map((suffix) => `appendId('${id}', '${suffix}') → ${appendId(id, suffix)}`)
						.join('\n')}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		const id = 'product-card'
		await expect(appendId(id, 'title')).toBe('product-card-title')
		await expect(appendId(id, 'item-0')).toBe('product-card-item-0')
	}
}

export const WhenIdUndefined: Story = {
	name: 'when id is undefined',
	tags: ['unit'],
	parameters: defineDocsParam({
		description: {
			story:
				'When the id is undefined, appendId returns undefined. Use this when the parent does not set an id (e.g. optional data-testid) so sub-components do not render stray ids.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				appendId(undefined, 'title')  // undefined
				appendId(undefined, 'item')   // undefined
			`
		})
	],
	render() {
		return (
			<StoryCard appearance="output">
				<pre className="text-sm">
					{`appendId(undefined, 'title') → ${JSON.stringify(appendId(undefined, 'title'))}`}
					{'\n'}
					{`appendId(undefined, 'item') → ${JSON.stringify(appendId(undefined, 'item'))}`}
				</pre>
			</StoryCard>
		)
	},
	play: async () => {
		await expect(appendId(undefined, 'title')).toBeUndefined()
		await expect(appendId(undefined, 'item')).toBeUndefined()
	}
}
