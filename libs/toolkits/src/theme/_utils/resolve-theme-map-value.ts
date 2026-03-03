import type { ThemeMapValue } from '../theme-map.types.ts'

export function isReadonlyStringArray(v: ThemeMapValue): v is readonly string[] {
	return Array.isArray(v)
}

/**
 * Resolves ThemeMapValue to its underlying string or string[] for DOM application and matching.
 * Used when applying themes to className, data attributes, or when resolving theme from DOM.
 */
export function resolveThemeMapValue(v: ThemeMapValue): string | readonly string[] {
	if (typeof v === 'string') return v
	if (isReadonlyStringArray(v)) return v
	return v.themeValue
}
