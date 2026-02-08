/**
 * Well-known data attribute names used in web development.
 * Includes testing, analytics, Radix/shadcn-style component state,
 * positioning, and common UI/design-system attributes.
 * The `data-${string}` tail allows any custom data attribute.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-* MDN: data-* (HTML)}
 * @see {@link https://testing-library.com/docs/queries/bytestid/ Testing Library: ByTestId}
 * @see {@link https://css-tricks.com/a-complete-guide-to-data-attributes/ CSS-Tricks: A Complete Guide to Data Attributes}
 * @see {@link https://www.components.build/data-attributes Components.build: Data Attributes}
 * @see {@link https://www.radix-ui.com/primitives/docs/guides/styling Radix UI: Styling (data attributes)}
 */
export type DataAttribute =
	// Testing & analytics
	| 'data-testid'
	| 'data-metrics'
	// Component state (Radix/shadcn pattern)
	| 'data-state'
	| 'data-orientation'
	| 'data-side'
	| 'data-align'
	| 'data-placement'
	// Common UI state
	| 'data-loading'
	| 'data-disabled'
	| 'data-selected'
	| 'data-checked'
	| 'data-expanded'
	| 'data-highlighted'
	| 'data-active'
	| 'data-open'
	| 'data-pressed'
	// Content / value
	| 'data-value'
	| 'data-id'
	| 'data-name'
	| 'data-type'
	| 'data-label'
	| 'data-key'
	| 'data-index'
	| 'data-position'
	// Design system / theming
	| 'data-variant'
	| 'data-size'
	| 'data-theme'
	| 'data-color'
	| 'data-intent'
	// Custom
	| (`data-${string}` & {})
