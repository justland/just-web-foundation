import type { JustClassName } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

// By default JustClassName = string | ((state) => string | undefined) | undefined
// State is AnyRecord & { className?: string }
const stringClassName: JustClassName = 'text-blue-600'
const functionClassName: JustClassName = (state) => (state.className ? 'with-base' : undefined)
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
