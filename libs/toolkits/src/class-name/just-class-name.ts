import type { AnyRecord } from 'type-plus'

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

/**
 * A `className` type that can be static or computed from component state.
 *
 * Use this when a component accepts `className` that may be:
 *
 * - A **function** – receives current state (including existing `className`) and returns the resolved class string or `undefined`.
 * - A **string** – used as-is and merged with any existing `className` in state.
 * - **undefined** – no additional classes; only `state.className` is used.
 *
 * @typeParam States - Record type for component state. Resolvers receive `States` merged with `{ className?: string }`.
 */
export type JustClassName<State extends AnyRecord = AnyRecord> =
	| ((state: JustClassNameResolverState<State>) => string | undefined)
	| string
	| undefined

/**
 * The state type for `JustClassName` resolver functions.
 *
 * @typeParam State - Record type for component state.
 */
export type JustClassNameResolverState<State extends AnyRecord = AnyRecord> = State & {
	className?: string | undefined
}
