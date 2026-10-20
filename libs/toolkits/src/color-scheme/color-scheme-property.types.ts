/**
 * A value of the CSS `color-scheme` property.
 *
 * Unlike `ColorScheme`, which holds the two values of the `prefers-color-scheme` media feature,
 * this lists the values you write to the property:
 *
 * - `normal`: use the page color scheme (the `<meta name="color-scheme">` tag), or light without one.
 * - `light` / `dark`: render only in that scheme.
 * - `light dark` / `dark light`: support both, and follow the user's preference.
 * - `only light` / `only dark`: render only in that scheme, and forbid the browser from auto-darkening.
 *   Browsers serialize these as `light only` / `dark only`, so both orders are listed.
 *
 * Per {@link https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop CSS Color Adjustment Level 1 § color-scheme}.
 */
export type ColorSchemePropertyValue =
	| 'normal'
	| 'light'
	| 'dark'
	| 'light dark'
	| 'dark light'
	| 'only light'
	| 'only dark'
	| 'light only'
	| 'dark only'
