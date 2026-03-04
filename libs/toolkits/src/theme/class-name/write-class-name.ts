import type { StringifyStoredTheme, ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'
import { stringifyClassName } from './stringify-class-name.ts'

/**
 * Writes a theme entry to the class attribute on an element.
 *
 * @param themes - Record mapping theme keys to class name(s)
 * @param entry - Theme entry to write, or undefined to remove the theme
 * @param options.element - Element to write to (defaults to document.documentElement)
 * @param options.stringify - Custom serializer (default: stringifyClassName)
 */
export function writeClassName<Themes extends ThemeMap>(
	themes: Themes,
	entry: ThemeEntry<Themes> | undefined,
	options?:
		| { element?: Element | undefined; stringify?: StringifyStoredTheme<Themes> | undefined }
		| undefined
): void {
	const element = options?.element ?? document?.documentElement
	if (!element) return
	const stringify = options?.stringify ?? stringifyClassName
	element.className = stringify(themes, element.className ?? undefined, entry)
}
