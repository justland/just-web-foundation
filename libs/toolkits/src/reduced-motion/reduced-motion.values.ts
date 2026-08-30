import type { ReducedMotion } from './reduced-motion.types.ts'

export const reducedMotionValues = [
	'no-preference',
	'reduce'
] as const satisfies readonly ReducedMotion[]
