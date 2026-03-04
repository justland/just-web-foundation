import type { ParseStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { parseClassName } from './parse-class-name.ts'

/**
 * Reads a theme entry from the class attribute on an element.
 *
 * @param themes - Record mapping theme keys to class name(s)
 * @param options.element - Element to read from (accepts null e.g. from refs). Defaults to document.documentElement.
 * @param options.parse - Custom parser (default: parseClassName)
 * @returns ThemeEntry if found, undefined otherwise. Returns undefined when element is not available (e.g. SSR).
 */
export function readClassName<Themes extends ThemeMap>(
	themes: Themes,
	options?:
		| { element?: Element | null | undefined; parse?: ParseStoredTheme<Themes> | undefined }
		| undefined
): ThemeEntry<Themes> | undefined {
	const element = options?.element ?? document?.documentElement
	if (!element) return undefined
	const parse = options?.parse ?? parseClassName
	const raw = element.className ?? undefined
	return parse(themes, raw)
}
