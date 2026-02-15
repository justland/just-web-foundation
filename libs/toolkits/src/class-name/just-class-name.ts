import type { AnyRecord } from 'type-plus'

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
export type JustClassName<States extends AnyRecord = AnyRecord> =
	| ((state: States & { className?: string | undefined }) => string | undefined)
	| string
	| undefined
