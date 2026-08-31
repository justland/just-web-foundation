import type { ReducedTransparency } from './reduced-transparency.types.ts'

export const reducedTransparencyValues = [
	'no-preference',
	'reduce'
] as const satisfies readonly ReducedTransparency[]
