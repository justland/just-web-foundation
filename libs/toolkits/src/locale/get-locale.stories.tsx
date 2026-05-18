import { getLocale } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import code from './get-locale.ts?raw'

const meta: Meta<FnToArgTypes<typeof getLocale>> = {
	title: 'locale/getLocale',
	tags: ['func', 'version:3.4'],
	parameters: defineDocsParam({
		description: {
			component:
				"Gets the current locale from the document's `lang` attribute. Falls back to `navigator.language`, then to the provided `defaultLocale` (default: `'en'`). SSR-safe."
		}
	}),
	render: () => <></>
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: 'getLocale(): string'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>getLocale()</code> reads the current locale from the{' '}
						<code>{'<html lang="...">'}</code> attribute.
					</p>
					<p>
						Priority: <code>element.lang</code> {'>'} <code>navigator.language</code> {'>'}{' '}
						<code>defaultLocale</code>
					</p>
					<p>
						Use this for a one-off read. For reactive updates when the locale changes, use{' '}
						<code>observeLocale</code> instead.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const locale = getLocale()

		return (
			<StoryCard title="Current Locale" appearance="output">
				Current locale: <strong>{locale}</strong>
			</StoryCard>
		)
	}
}

export const WithDefaultLocale: Story = {
	name: 'defaultLocale',
	tags: ['props'],
	parameters: defineDocsParam({
		source: {
			code: "getLocale('ja'): string"
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>{"getLocale('ja')"}</code> returns <code>'ja'</code> when neither{' '}
						<code>document.documentElement.lang</code> nor <code>navigator.language</code> is
						available (SSR, test env). In the browser, it returns the real locale.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const locale = getLocale('ja')
		return (
			<StoryCard title="With defaultLocale: 'ja'" appearance="output">
				Current locale: <strong>{locale}</strong>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
