export function resolveClassName<States extends { defaultClassName: string }>(
	state: States,
	className: ((state: States) => string | undefined) | string | undefined
) {
	return typeof className === 'function'
		? className(state)
		: `${state.defaultClassName}${className ? ` ${className}` : ''}`
}
