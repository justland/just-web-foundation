import type { JustChildrenFnProps, JustChildrenProps } from '@just-web/toolkits'
import { resolveChildren } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

type CardRenderProps = { label: string }

function Card({ children, ...rest }: JustChildrenProps<CardRenderProps>) {
	const renderProps: JustChildrenFnProps<CardRenderProps> = {
		label: 'Item',
		children: 'Default content'
	}
	return (
		<div {...rest}>
			<span className="font-medium">{renderProps.label}: </span>
			{resolveChildren(renderProps, children)}
		</div>
	)
}

export default () => (
	<StoryCard appearance="output">
		<Card />
		<Card>
			{(props: JustChildrenFnProps<CardRenderProps>) =>
				`${props.label} → ${String(props.children)}`
			}
		</Card>
	</StoryCard>
)
