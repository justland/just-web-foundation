import type { JustClassNameProps } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'
import type { PropsWithChildren } from 'react'

function Badge({ className, ...rest }: PropsWithChildren<JustClassNameProps>) {
	const baseState = { className: 'bg-blue-400' }
	return (
		<div
			{...rest}
			className={
				typeof className === 'function' ? className(baseState) : (className ?? baseState.className)
			}
		/>
	)
}

export default () => (
	<StoryCard appearance="output">
		<Badge className="font-extrabold">Override</Badge>
		<Badge className={(state) => `${state.className} font-extrabold`}>Amend</Badge>
		<Badge className={() => undefined}>Unstyled</Badge>
	</StoryCard>
)
