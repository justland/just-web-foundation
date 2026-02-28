import type { AnyRecord } from 'type-plus'
import type { JustClassName } from './just-class-name.ts'

/**
 * Props interface for components that accept a state-aware `className`.
 *
 * Use this when defining component props that support the same `className` contract as {@link JustClassName}:
 * a static string, a resolver function that receives state (including existing `className`), or `undefined`.
 *
 * @typeParam States - Record type for component state. When `className` is a function, it receives `States` merged with `{ className?: string }`.
 */
export interface JustClassNameProps<States extends AnyRecord = AnyRecord> {
	className?: JustClassName<States> | undefined
}
