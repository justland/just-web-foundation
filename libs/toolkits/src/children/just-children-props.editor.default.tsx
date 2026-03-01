import type { JustChildrenProps } from '@just-web/toolkits'
import { resolveChildren } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

function Card({ children, ...rest }: JustChildrenProps) {
	const renderProps = { children: 'Default content' as const }
	return <div {...rest}>{resolveChildren(renderProps, children)}</div>
}

export default () => (
	<StoryCard appearance="output">
		<Card />
		<Card>Override content</Card>
		<Card>{(renderProps) => `Computed: ${String(renderProps.children)}`}</Card>
		<Card>{() => undefined}</Card>
	</StoryCard>
)
