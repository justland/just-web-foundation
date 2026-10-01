import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'

const meta: Meta = {
	title: 'animation/WaitForAnimationsOptions',
	tags: ['type', 'rc', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Options for `waitForAnimations` and `getPendingAnimations`. Controls which animations are matched, how long to settle before querying, and when to time out.'
		}
	})
}

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
	tags: ['spec'],
	parameters: defineDocsParam({
		source: {
			code: `interface WaitForAnimationsOptions {
  subtree?: boolean             // Include descendants. Default: true
  settleFrames?: number         // Frames to wait before first query. Default: 1
  filter?: (a: Animation) => boolean  // Skip animations you don't care about
  timeout?: number              // Reject after this many ms
  signal?: AbortSignal          // Cancel externally
}`
		}
	}),
	render: () => (
		<table
			style={{
				borderCollapse: 'collapse',
				width: '100%',
				fontSize: '0.875rem'
			}}
		>
			<thead>
				<tr>
					{['Option', 'Type', 'Default', 'Description'].map((h) => (
						<th
							key={h}
							style={{
								textAlign: 'left',
								padding: '0.5rem',
								borderBottom: '2px solid #ccc'
							}}
						>
							{h}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{[
					['subtree', 'boolean', 'true', 'Include descendants and pseudo-elements'],
					['settleFrames', 'number', '1', 'Frames to wait before the first query'],
					[
						'filter',
						'(a: Animation) => boolean',
						'—',
						'Skip animations the caller does not care about'
					],
					['timeout', 'number', '—', 'Reject after this many milliseconds'],
					['signal', 'AbortSignal', '—', 'Cancel externally via AbortController']
				].map(([name, type, def, desc]) => (
					<tr key={name}>
						<td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
							<code>{name}</code>
						</td>
						<td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
							<code>{type}</code>
						</td>
						<td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
							<code>{def}</code>
						</td>
						<td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{desc}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
