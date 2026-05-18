import { setLocale } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { useState } from 'react'
import code from './set-locale.ts?raw'

const meta: Meta<FnToArgTypes<typeof setLocale>> = {
	title: 'locale/setLocale',
	tags: ['func', 'version:3.4'],
	parameters: defineDocsParam({
		description: {
			component:
				'Sets the `lang` attribute on an element. Defaults to `document.documentElement`. This is the standard HTML mechanism for declaring locale.'
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
			code: "setLocale('ja')"
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>{"setLocale('ja')"}</code> sets <code>{'<html lang="ja">'}</code>.
					</p>
					<p>
						Pair with <code>observeLocale</code> for reactive updates when the locale changes.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => {
		const [current, setCurrent] = useState(document.documentElement.getAttribute('lang') || '')

		const handleSet = (locale: string) => {
			setLocale(locale)
			setCurrent(locale)
		}

		return (
			<StoryCard title="Set Locale" appearance="output">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
					<div>
						Current <code>lang</code> attribute: <strong>{current || '(empty)'}</strong>
					</div>
					<div style={{ display: 'flex', gap: '0.5rem' }}>
						{['en', 'en-US', 'ja', 'zh-Hans', 'fr'].map((locale) => (
							<button
								key={locale}
								type="button"
								onClick={() => handleSet(locale)}
								style={{
									padding: '0.25rem 0.5rem',
									border: '1px solid currentColor',
									borderRadius: '0.25rem',
									cursor: 'pointer',
									background: current === locale ? '#0066cc' : 'transparent',
									color: current === locale ? 'white' : 'inherit'
								}}
							>
								{locale}
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
