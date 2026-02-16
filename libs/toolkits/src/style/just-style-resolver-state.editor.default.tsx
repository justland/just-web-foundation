import type { JustStyleFnProps } from '@just-web/toolkits'

function boxTheme(renderProps?: JustStyleFnProps) {
	return {
		...renderProps,
		style: {
			...renderProps?.style,
			padding: '0.5rem',
			border: '1px solid rgb(203 213 225)',
			borderRadius: '0.25rem',
		},
	}
}

export default () => {
	const props = boxTheme()
	return (
		<button type="button" {...props}>
			Hello World
		</button>
	)
}
