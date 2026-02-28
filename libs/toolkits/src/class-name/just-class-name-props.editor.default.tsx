import type { JustClassNameProps } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'
import type { PropsWithChildren } from 'react'

function Badge({ className, ...rest }: PropsWithChildren<JustClassNameProps>) {
	const props = { className: 'bg-blue-400' }
	return (
		<div
			{...rest}
			className={
				typeof className === 'function' ? className(props) : (className ?? props.className)
			}
		/>
	)
}

export default () => (
	<StoryCard appearance="output">
		<Badge className="font-extrabold">Override</Badge>
		<Badge className={(renderProps) => `${renderProps.className} font-extrabold`}>Amend</Badge>
		<Badge className={() => undefined}>Unstyled</Badge>
	</StoryCard>
)
