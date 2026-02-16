import type { JustStyle } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

interface ButtonRenderProps {
	isDisabled?: boolean | undefined
	isPressed?: boolean | undefined
}

const styleWhenDisabled: JustStyle<ButtonRenderProps> = (renderProps) =>
	renderProps.isDisabled
		? { ...renderProps.style, opacity: 0.5, cursor: 'not-allowed' }
		: renderProps.style

const styleWhenActive: JustStyle<ButtonRenderProps> = (renderProps) =>
	renderProps.isPressed
		? { ...renderProps.style, outline: '2px solid rgb(59 130 246)' }
		: renderProps.style

export default () => {
	const renderProps: ButtonRenderProps = { isDisabled: true, isPressed: true }
	return (
		<StoryCard appearance="output">
			<div style={styleWhenDisabled({ ...renderProps, style: { padding: '0.5rem' } })}>
				disabled style
			</div>
			<div style={styleWhenActive({ ...renderProps, style: { padding: '0.5rem' } })}>
				active style
			</div>
		</StoryCard>
	)
}
