import type { AnyRecord } from 'type-plus'
import type { CSSProperties } from './css-properties.ts'
import type { JustStyle, JustStyleFnProps } from './just-style.ts'

type DefaultLength = 0 | (string & {})
type DefaultTime = string & {}

export function resolveStyle<
	RenderProps extends AnyRecord = AnyRecord,
	TLength = DefaultLength,
	TTime = DefaultTime
>(
	renderProps: JustStyleFnProps<RenderProps, TLength, TTime>,
	style?: JustStyle<RenderProps, TLength, TTime>
): CSSProperties<TLength, TTime> | undefined {
	if (typeof style === 'function') {
		return style(renderProps)
	}
	if (style !== undefined) {
		return { ...renderProps.style, ...style } as CSSProperties<TLength, TTime>
	}
	return renderProps.style
}
