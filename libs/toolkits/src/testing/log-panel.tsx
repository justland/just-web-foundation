import { StoryCard } from '@repobuddy/storybook'

export function LogPanel({ title, log }: { title: string; log: string[] }) {
	return (
		<StoryCard appearance="output">
			<h2 className="mb-2">{title}</h2>
			{log.map((entry, i) => (
				<pre key={i} className="font-mono">
					{entry}
				</pre>
			))}
		</StoryCard>
	)
}
