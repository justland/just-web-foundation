/**
 * The reduced transparency preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency Media Queries Level 5 § prefers-reduced-transparency},
 * these are the only valid values exposed by the `prefers-reduced-transparency` media feature.
 *
 * `no-preference` is a real state: the user has not asked for reduced transparency.
 */
export type ReducedTransparency = 'no-preference' | 'reduce'
