import type { JustClassName } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

interface ButtonState {
	isDisabled?: boolean | undefined
	isPressed?: boolean | undefined
}

// With type param: function receives typed state (ButtonStates & { className?: string })
const classNameWhenDisabled: JustClassName<ButtonState> = (state) =>
	state.isDisabled ? `${state.className ?? ''} opacity-50 cursor-not-allowed` : state.className

const classNameWhenActive: JustClassName<ButtonState> = (state) =>
	state.isPressed ? `${state.className ?? ''} ring-2 ring-blue-500` : state.className

export default () => {
	const state: ButtonState = { isDisabled: true, isPressed: true }
	return (
		<StoryCard appearance="output">
			<div>without className: {classNameWhenDisabled(state)}</div>
			<div>with className: {classNameWhenActive({ ...state, className: 'btn' })}</div>
		</StoryCard>
	)
}
