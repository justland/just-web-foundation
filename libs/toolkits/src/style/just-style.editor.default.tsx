import type { JustStyle } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

const functionStyle: JustStyle<{ isSelected?: boolean | undefined }> = (renderProps) =>
	renderProps.isSelected
		? { ...renderProps.style, backgroundColor: 'rgb(147 197 253)' }
		: renderProps.style

export default () => {
	return (
		<StoryCard appearance="output">
			<div style={functionStyle({ style: { padding: '0.5rem' }, isSelected: true })}>
				Result: selected (blue background)
			</div>
		</StoryCard>
	)
}
