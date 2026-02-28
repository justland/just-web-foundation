import type { ReactNode } from 'react'
import type { AnyRecord } from 'type-plus'

/**
 * Props interface for components that accept a render-props-aware `children`.
 *
 * Use this when defining component props that support the same `children` contract as {@link JustChildren}:
 * a static value, a resolver function that receives render props (including existing `children`), or `undefined`.
 *
 * @typeParam RenderProps - Record type for render props. When `children` is a function, it receives `RenderProps` merged with `{ children?: ReactNode }`.
 */
export interface JustChildrenProps<RenderProps extends AnyRecord = AnyRecord> {
	children?: JustChildren<RenderProps> | undefined
}

/**
 * A `children` type that can be static or computed from render props.
 *
 * - `ReactNode`: The value is used as the children (replaces existing `children` in render props when provided).
 * - `undefined`: Uses the existing `children` from render props as-is.
 * - `function`: Process the render props and return the desired `children`.
 *
 * @typeParam RenderProps - Record type for render props. Resolvers receive `RenderProps` merged with `{ children?: ReactNode }`.
 */
export type JustChildren<RenderProps extends AnyRecord = AnyRecord> =
	| ((renderProps: JustChildrenFnProps<RenderProps>) => ReactNode | undefined)
	| ReactNode
	| undefined

/**
 * The props type for `JustChildren` resolver functions.
 *
 * @typeParam RenderProps - Record type for render props.
 */
export type JustChildrenFnProps<RenderProps extends AnyRecord = AnyRecord> = RenderProps & {
	children?: ReactNode | undefined
}
