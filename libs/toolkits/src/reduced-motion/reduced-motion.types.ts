/**
 * The reduced motion preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion Media Queries Level 5 § prefers-reduced-motion},
 * these are the only valid values exposed by the `prefers-reduced-motion` media feature.
 *
 * `no-preference` is a real state: the user has not asked for reduced motion.
 */
export type ReducedMotion = 'no-preference' | 'reduce'
