import type { JustClassName } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

interface ButtonStates {
	isDisabled?: boolean | undefined
	isPressed?: boolean | undefined
}

// With type param: function receives typed state (ButtonStates & { className?: string })
const classNameWhenDisabled: JustClassName<ButtonStates> = (state) =>
	state.isDisabled ? `${state.className ?? ''} opacity-50 cursor-not-allowed` : state.className

const classNameWhenActive: JustClassName<ButtonStates> = (state) =>
	state.isPressed ? `${state.className ?? ''} ring-2 ring-blue-500` : state.className

export default () => {
	const state: ButtonStates = { isDisabled: true, isPressed: true }
	return (
		<StoryCard appearance="output">
			<div>without className: {classNameWhenDisabled(state)}</div>
			<div>with className: {classNameWhenActive({ ...state, className: 'btn' })}</div>
		</StoryCard>
	)
}
