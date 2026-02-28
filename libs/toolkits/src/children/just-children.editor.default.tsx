import type { JustChildren } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

const functionChildren: JustChildren<{ count?: number }> = (renderProps) =>
	renderProps.count !== undefined ? `Count: ${renderProps.count}` : renderProps.children

export default () => (
	<StoryCard appearance="output">
		<div>{functionChildren({ children: 'Default', count: 42 })}</div>
	</StoryCard>
)
