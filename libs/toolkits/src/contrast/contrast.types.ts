/**
 * The contrast preference of the system.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-contrast Media Queries Level 5 § prefers-contrast},
 * these are the only valid values exposed by the `prefers-contrast` media feature.
 *
 * `no-preference` is a real state: the user has not asked for a contrast adjustment.
 */
export type Contrast = 'no-preference' | 'less' | 'more' | 'custom'
