import type { JustClassName } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

const stringClassName: JustClassName = 'text-blue-600'
const functionClassName: JustClassName = (renderProps) =>
	renderProps.className ? 'with-base' : undefined
const undefinedClassName: JustClassName = undefined

export default () => {
	return (
		<StoryCard appearance="output">
			<div>String: {stringClassName}</div>
			<div>Function: {functionClassName({ className: 'base' })}</div>
			<div>Undefined: {undefinedClassName === undefined ? '(undefined)' : ''}</div>
		</StoryCard>
	)
}
