/**
 * The reduced data preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data Media Queries Level 5 § prefers-reduced-data},
 * these are the only valid values exposed by the `prefers-reduced-data` media feature.
 *
 * `no-preference` is a real state: the user has not asked for reduced data.
 */
export type ReducedData = 'no-preference' | 'reduce'
