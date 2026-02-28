import type { AnyRecord } from 'type-plus'
import type { CSSProperties } from './css-properties.ts'

type DefaultLength = 0 | (string & {})
type DefaultTime = string & {}

/**
 * Props interface for components that accept a render-props-aware `style`.
 *
 * Use this when defining component props that support the same `style` contract as {@link JustStyle}:
 * a static object, a resolver function that receives render props (including existing `style`), or `undefined`.
 *
 * @typeParam RenderProps - Record type for render props. When `style` is a function, it receives `RenderProps` merged with `{ style?: CSSProperties }`.
 * @typeParam TLength - CSS length type (default: `0 | (string & {})`).
 * @typeParam TTime - CSS time type (default: `string & {}`).
 */
export interface JustStyleProps<
	RenderProps extends AnyRecord = AnyRecord,
	TLength = DefaultLength,
	TTime = DefaultTime,
> {
	style?: JustStyle<RenderProps, TLength, TTime> | undefined
}

/**
 * A `style` type that can be static or computed from render props.
 *
 * - `CSSProperties`: The value is merged with the existing `style` in render props (override wins).
 * - `undefined`: Uses the existing `style` from render props as-is.
 * - `function`: Process the render props and return the desired `style`.
 *
 * @typeParam RenderProps - Record type for render props. Resolvers receive `RenderProps` merged with `{ style?: CSSProperties }`.
 * @typeParam TLength - CSS length type (default: `0 | (string & {})`).
 * @typeParam TTime - CSS time type (default: `string & {}`).
 */
export type JustStyle<
	RenderProps extends AnyRecord = AnyRecord,
	TLength = DefaultLength,
	TTime = DefaultTime,
> =
	| ((
			renderProps: JustStyleFnProps<RenderProps, TLength, TTime>,
	  ) => CSSProperties<TLength, TTime> | undefined)
	| CSSProperties<TLength, TTime>
	| undefined

/**
 * The props type for `JustStyle` resolver functions.
 *
 * @typeParam RenderProps - Record type for render props.
 * @typeParam TLength - CSS length type (default: `0 | (string & {})`).
 * @typeParam TTime - CSS time type (default: `string & {}`).
 */
export type JustStyleFnProps<
	RenderProps extends AnyRecord = AnyRecord,
	TLength = DefaultLength,
	TTime = DefaultTime,
> = RenderProps & {
	style?: CSSProperties<TLength, TTime> | undefined
}
