import type { JustClassName } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

interface ButtonRenderProps {
	isDisabled?: boolean | undefined
	isPressed?: boolean | undefined
}

// With type param: function receives typed render props (ButtonRenderProps & { className?: string })
const classNameWhenDisabled: JustClassName<ButtonRenderProps> = (renderProps) =>
	clsx(renderProps.className, renderProps.isDisabled && 'opacity-50 cursor-not-allowed')

const classNameWhenActive: JustClassName<ButtonRenderProps> = (renderProps) =>
	clsx(renderProps.className, renderProps.isPressed && 'ring-2 ring-blue-500')

export default () => {
	const renderProps: ButtonRenderProps = { isDisabled: true, isPressed: true }
	return (
		<StoryCard appearance="output">
			<div>without className: {classNameWhenDisabled(renderProps)}</div>
			<div>with className: {classNameWhenActive({ ...renderProps, className: 'btn' })}</div>
		</StoryCard>
	)
}
