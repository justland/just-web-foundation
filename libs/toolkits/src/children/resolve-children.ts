import type { ReactNode } from 'react'
import type { AnyRecord } from 'type-plus'
import type { JustChildren, JustChildrenFnProps } from './just-children.ts'

export function resolveChildren<RenderProps extends AnyRecord = AnyRecord>(
	renderProps: JustChildrenFnProps<RenderProps>,
	children?: JustChildren<RenderProps>,
): ReactNode | undefined {
	if (typeof children === 'function') {
		return children(renderProps)
	}
	if (children !== undefined) {
		return children
	}
	return renderProps.children
}
