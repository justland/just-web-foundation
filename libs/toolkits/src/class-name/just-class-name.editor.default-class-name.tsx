import type { JustClassNameResolverState } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'

function textTheme(state?: JustClassNameResolverState) {
	return {
		...state,
		className: clsx(state?.className, 'text-black dark:text-white'),
	}
}

function hoverTheme(state?: JustClassNameResolverState) {
	return {
		...state,
		className: clsx(
			state?.className,
			'rounded outline-2 hover:outline-blue-300 dark:hover:outline-blue-700',
		),
	}
}

export default () => {
	const props = hoverTheme(textTheme())
	return (
		<button type="button" {...props}>
			Hover me
		</button>
	)
}
