import type { AnyRecord } from 'type-plus'

/**
 * A type that represents a class name that can be a function or a string.
 */
export type JustClassName<States extends AnyRecord = AnyRecord> =
	| ((state: States & { className?: string | undefined }) => string | undefined)
	| string
	| undefined
