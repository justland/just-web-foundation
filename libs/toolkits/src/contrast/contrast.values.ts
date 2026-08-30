import type { Contrast } from './contrast.types.ts'

export const contrastValues = [
	'no-preference',
	'less',
	'more',
	'custom'
] as const satisfies readonly Contrast[]
