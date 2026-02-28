import type { JustClassNameResolverState } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'

function textTheme(state?: JustClassNameResolverState) {
	return {
		...state,
		className: clsx(state?.className, 'text-emerald-800 dark:text-emerald-200'),
	}
}

export default () => {
	const props = textTheme()
	return (
		<button type="button" {...props}>
			Hello World
		</button>
	)
}
