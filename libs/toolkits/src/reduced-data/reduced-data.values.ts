import type { ReducedData } from './reduced-data.types.ts'

export const reducedDataValues = [
	'no-preference',
	'reduce'
] as const satisfies readonly ReducedData[]
