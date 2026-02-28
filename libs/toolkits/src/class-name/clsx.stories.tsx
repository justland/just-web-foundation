import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard,
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { clsx } from '#just-web/toolkits'

const meta: Meta<FnToArgTypes<typeof clsx>> = {
	title: 'class-name/clsx',
	tags: ['func', 'version:next'],
	render: () => <></>,
}

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						Re-export of the{' '}
						<code>
							<a href="https://github.com/lukeed/clsx" target="_blank" rel="noopener noreferrer">
								clsx
							</a>
						</code>{' '}
						package, adjusted to work better in ESM environments. Use it to construct{' '}
						<code>className</code> strings conditionally from strings, objects, and arrays.
					</p>
				</>
			),
		}),
		showSource({
			source: dedent`function clsx(...inputs: ClassValue[]): string`,
		}),
	],
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Combine multiple class name strings. Falsy values are ignored.',
		},
	}),
	decorators: [withStoryCard(), showSource({ source: dedent`clsx('base', 'active', 'rounded')` })],
	render() {
		return (
			<StoryCard appearance="output">
				<div>
					Result: <code>{clsx('base', 'active', 'rounded')}</code>
				</div>
			</StoryCard>
		)
	},
}

export const ConditionalClasses: Story = {
	name: 'conditional classes',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Use objects for conditional classes: keys are class names, values are conditions. Only truthy values are included.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`clsx('btn', {
		'btn-active': isActive,
		'btn-disabled': isDisabled,
	})`,
		}),
	],
	render() {
		const isActive = true
		const isDisabled = false
		return (
			<StoryCard appearance="output">
				<div>
					Result:{' '}
					<code>
						{clsx('btn', {
							'btn-active': isActive,
							'btn-disabled': isDisabled,
						})}
					</code>
				</div>
			</StoryCard>
		)
	},
}

export const MixedInputs: Story = {
	name: 'mixed inputs',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'clsx accepts strings, objects, and arrays. Falsy entries are filtered out.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`clsx('base', ['a', null, 'b'], { active: true, hidden: false })`,
		}),
	],
	render() {
		return (
			<StoryCard appearance="output">
				<div>
					Result: <code>{clsx('base', ['a', null, 'b'], { active: true, hidden: false })}</code>
				</div>
			</StoryCard>
		)
	},
}
