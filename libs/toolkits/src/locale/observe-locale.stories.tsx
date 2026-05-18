import { getLocale, observeLocale, setLocale } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useEffect, useState } from 'react'
import code from './observe-locale.ts?raw'

const meta: Meta<FnToArgTypes<typeof observeLocale>> = {
	title: 'locale/observeLocale',
	tags: ['func', 'version:3.4'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes changes to the `lang` attribute on an element and calls the callback when it changes. Returns a cleanup function to stop observing. Uses MutationObserver under the hood.'
		}
	}),
	render: () => <></>
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Observe `lang` attribute changes on `document.documentElement`.'
		},
		source: {
			code: 'observeLocale((locale) => { ... }): () => void'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>observeLocale(callback)</code> subscribes to <code>lang</code> attribute changes
						and runs your callback with the new locale value.
					</p>
					<p>
						Use this for reactive updates (e.g. UI that follows the document locale). For a one-off
						read, use <code>getLocale</code> instead.
					</p>
					<p>Call the returned cleanup function to stop observing.</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const [locale, setLocaleState] = useState(getLocale())

		useEffect(() => observeLocale(setLocaleState), [])

		return (
			<StoryCard title="Current Locale (Reactive)" appearance="output">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
					<div>
						Current locale: <strong>{locale}</strong>
					</div>
					<div style={{ display: 'flex', gap: '0.5rem' }}>
						{['en', 'en-US', 'ja', 'zh-Hans', 'fr'].map((l) => (
							<button
								key={l}
								type="button"
								onClick={() => setLocale(l)}
								style={{
									padding: '0.25rem 0.5rem',
									border: '1px solid currentColor',
									borderRadius: '0.25rem',
									cursor: 'pointer',
									background: locale === l ? '#0066cc' : 'transparent',
									color: locale === l ? 'white' : 'inherit'
								}}
							>
								{l}
							</button>
						))}
					</div>
				</div>
			</StoryCard>
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
