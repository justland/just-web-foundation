import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { isDev } from '../env.ts'
import code from '../env.ts?raw'

const meta: Meta = {
	title: 'env/isDev',
	tags: ['var', 'version:3.7'],
	parameters: defineDocsParam({
		description: {
			component:
				'Whether the code runs in development, as a constant resolved through export conditions, so bundlers can drop development-only branches from production builds. Import it from `@just-web/toolkits/env`.'
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
			code: `import { isDev } from '@just-web/toolkits/env'

if (isDev) {
  console.warn('...')
}`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						<code>isDev</code> is resolved when the app is built, not at runtime:
					</p>
					<ul className="list-disc pl-6">
						<li>
							<code>development</code> condition: <code>true</code>
						</li>
						<li>
							<code>production</code> condition: <code>false</code>
						</li>
						<li>
							no condition: <code>true</code> only when <code>process.env.NODE_ENV</code> is set and
							does not start with <code>prod</code>. A browser with no <code>process</code> gets{' '}
							<code>false</code>.
						</li>
					</ul>
					<p>
						Vite and webpack 5 set the condition from the build mode, so <code>if (isDev)</code>{' '}
						becomes <code>if (false)</code> in production and the branch is dropped. In Node.js,
						pass <code>--conditions=development</code> or <code>--conditions=production</code>.
					</p>
					<p>
						Every condition has an <code>import</code> and a <code>require</code> entry. Libraries
						that use it must keep <code>@just-web/toolkits/env</code> external, or the condition is
						resolved when the library is built instead of the app.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => (
		<StoryCard title="In this Storybook" appearance="output">
			isDev: <strong>{String(isDev)}</strong>
		</StoryCard>
	)
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
