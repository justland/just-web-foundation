import type { JustClassNameFnProps } from '@just-web/toolkits'
import { clsx } from '@just-web/toolkits'

function textTheme(renderProps?: JustClassNameFnProps) {
	return {
		...renderProps,
		className: clsx(renderProps?.className, 'text-black dark:text-white'),
	}
}

function hoverTheme(renderProps?: JustClassNameFnProps) {
	return {
		...renderProps,
		className: clsx(
			renderProps?.className,
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
