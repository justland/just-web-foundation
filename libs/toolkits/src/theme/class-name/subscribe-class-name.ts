import { observeAttributes } from '../../attributes/observe-attribute.ts'
import type { ParseStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { parseClassName } from './parse-class-name.ts'

/**
 * Subscribes to changes on the class attribute and invokes the handler with parsed theme entries.
 *
 * @param themes - Record mapping theme keys to class name(s)
 * @param handler - Callback invoked when the class attribute changes
 * @param options.element - Element to observe (defaults to document.documentElement)
 * @param options.parse - Custom parser (default: parseClassName)
 * @returns Unsubscribe function. Returns a no-op function when element is not available (e.g. SSR).
 */
export function subscribeClassName<Themes extends ThemeMap>(
	themes: Themes,
	handler: (entry: ThemeEntry<Themes> | undefined) => void,
	options?:
		| { element?: Element | undefined; parse?: ParseStoredTheme<Themes> | undefined }
		| undefined
): () => void {
	const element = options?.element ?? document?.documentElement
	if (!element) return () => {}
	const parse = options?.parse ?? parseClassName
	let lastEmitted: keyof Themes | undefined | null = null
	const observer = observeAttributes(
		{
			class: (value) => {
				const entry = parse(themes, value ?? undefined)
				const key = entry?.theme ?? undefined
				if (lastEmitted === key) return
				lastEmitted = key
				handler(entry)
			}
		},
		element
	)
	return () => observer.disconnect()
}
