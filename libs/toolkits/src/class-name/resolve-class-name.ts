import type { AnyRecord } from 'type-plus'
import { clsx } from './clsx.ts'
import type { JustClassName, JustClassNameFnProps } from './just-class-name.ts'

export function resolveClassName<RenderProps extends AnyRecord = AnyRecord>(
	renderProps: JustClassNameFnProps<RenderProps>,
	className?: JustClassName<RenderProps>
) {
	return typeof className === 'function'
		? className(renderProps)
		: clsx(renderProps.className, className)
}
