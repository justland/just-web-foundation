import type { JustStyleProps } from '@just-web/toolkits'
import { resolveStyle } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'
import type { PropsWithChildren } from 'react'

function Badge({ style, ...rest }: PropsWithChildren<JustStyleProps>) {
	const props = { style: { padding: '0.25rem 0.5rem', backgroundColor: 'rgb(96 165 250)' } }
	return <div {...rest} style={resolveStyle(props, style)} />
}

export default () => (
	<StoryCard appearance="output">
		<Badge style={{ fontWeight: 'bold' }}>Override</Badge>
		<Badge style={(renderProps) => ({ ...renderProps.style, fontWeight: 'lighter' })}>Amend</Badge>
		<Badge style={() => undefined}>Unstyled</Badge>
	</StoryCard>
)
