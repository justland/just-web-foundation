import type { JustClassName } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

const functionClassName: JustClassName<{ isSelected?: boolean | undefined }> = (renderProps) =>
	clsx(renderProps.className, renderProps.isSelected && 'bg-blue-400')

export default () => {
	return (
		<StoryCard appearance="output">
			<div>Result: {functionClassName({ className: 'base', isSelected: true })}</div>
		</StoryCard>
	)
}
