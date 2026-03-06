import { observeDataAttributes } from '../../attributes/observe-data-attribute.ts'
import type { ParseStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { SEPARATOR_SPACE } from './_constant.ts'
import { parseDataAttribute } from './parse-data-attribute.ts'

/**
 * Subscribes to changes on a data attribute and invokes the handler with parsed theme entries.
 *
 * @param themes - Record mapping theme keys to attribute values
 * @param attributeName - Data attribute name (e.g. `data-theme`)
 * @param handler - Callback invoked when the attribute changes
 * @param options.element - Element to observe (accepts null e.g. from refs). Defaults to document.documentElement.
 * @param options.parse - Custom parser (default: parseDataAttribute with space separator)
 * @returns Unsubscribe function. Returns a no-op function when element is not available (e.g. SSR).
 */
export function subscribeDataAttribute<Themes extends ThemeMap>(
	themes: Themes,
	attributeName: `data-${string}`,
	handler: (entry: ThemeEntry<Themes> | undefined) => void,
	options?:
		| { element?: Element | null | undefined; parse?: ParseStoredTheme<Themes> | undefined }
		| undefined
): () => void {
	const element = options?.element ?? document?.documentElement
	if (!element) return () => {}
	const parse =
		options?.parse ?? ((t, v) => parseDataAttribute(t, v, { separator: SEPARATOR_SPACE }))
	return observeDataAttributes<string, `data-${string}`>(
		{
			[attributeName]: (value) => {
				const entry = parse(themes, value ?? undefined)
				handler(entry)
			}
		},
		element
	)
}
