import type { AnyRecord } from 'type-plus'

/**
 * Props interface for components that accept a render-props-aware `className`.
 *
 * Use this when defining component props that support the same `className` contract as {@link JustClassName}:
 * a static string, a resolver function that receives render props (including existing `className`), or `undefined`.
 *
 * @typeParam RenderProps - Record type for render props. When `className` is a function, it receives `RenderProps` merged with `{ className?: string }`.
 */
export interface JustClassNameProps<RenderProps extends AnyRecord = AnyRecord> {
	className?: JustClassName<RenderProps> | undefined
}

/**
 * A `className` type that can be static or computed from render props.
 *
 * - `string`: The value is appended to the existing `className` in render props.
 * - `undefined`: Resets the `className` to `undefined`, removing existing `className`.
 * - `function`: Process the render props and return the desired `className`.
 *
 * @typeParam RenderProps - Record type for render props. Resolvers receive `RenderProps` merged with `{ className?: string }`.
 */
export type JustClassName<RenderProps extends AnyRecord = AnyRecord> =
	| ((renderProps: JustClassNameFnProps<RenderProps>) => string | undefined)
	| string
	| undefined

/**
 * The props type for `JustClassName` resolver functions.
 *
 * @typeParam RenderProps - Record type for render props.
 */
export type JustClassNameFnProps<RenderProps extends AnyRecord = AnyRecord> = RenderProps & {
	className?: string | undefined
}
