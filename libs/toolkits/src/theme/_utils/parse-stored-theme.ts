import { tryParseJSON } from '../../_internal/utils/try-parse-json.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap, ThemeMapValue } from '../theme-map.types.ts'
import { isReadonlyStringArray } from './resolve-theme-map-value.ts'

type Shape = 'string' | 'array' | 'object-string' | 'object-array'

function getShapeAndComparable(
	v: unknown
): { shape: Shape; comparable: string | undefined } | null {
	if (typeof v === 'string') return { shape: 'string', comparable: v }
	if (Array.isArray(v)) return { shape: 'array', comparable: v[0] }
	if (v !== null && typeof v === 'object' && 'themeValue' in v) {
		const tv = (v as { themeValue: string | string[] }).themeValue
		if (typeof tv === 'string') return { shape: 'object-string', comparable: tv }
		if (Array.isArray(tv)) return { shape: 'object-array', comparable: tv[0] }
	}
	return null
}

function getCanonicalShapeAndComparable(v: ThemeMapValue): {
	shape: Shape
	comparable: string | undefined
} {
	if (typeof v === 'string') return { shape: 'string', comparable: v }
	if (isReadonlyStringArray(v)) return { shape: 'array', comparable: v[0] }
	const tv = v.themeValue
	if (typeof tv === 'string') return { shape: 'object-string', comparable: tv }
	return { shape: 'object-array', comparable: tv[0] }
}

/**
 * Parses stored JSON theme and validates against theme map with strict shape and comparable matching.
 *
 * Expects stored shape: { theme: string, value?: unknown }
 *
 * When shape matches AND comparable value (string or [0]) matches themes[theme]:
 * returns { theme, value: stored.value }. Else returns undefined.
 *
 * @param themes - Record of valid theme keys and values (required for validation)
 * @param value - Raw string from localStorage/sessionStorage/cookie
 * @returns ThemeEntry when valid, otherwise undefined
 */
export function parseStoredTheme<Themes extends ThemeMap>(
	themes: Themes | undefined,
	value: string | undefined
): ThemeEntry<Themes> | undefined {
	const parsed = tryParseJSON<{ theme: string; value?: unknown }>(value ?? null)
	if (!parsed?.theme || typeof parsed.theme !== 'string') return undefined
	if (!themes || !(parsed.theme in themes)) return undefined
	if (parsed.value === undefined) return undefined

	const storedInfo = getShapeAndComparable(parsed.value)
	if (!storedInfo) return undefined

	const canonical = getCanonicalShapeAndComparable(themes[parsed.theme] as ThemeMapValue)
	if (storedInfo.shape !== canonical.shape) return undefined
	if (storedInfo.comparable !== canonical.comparable) return undefined

	return { theme: parsed.theme as keyof Themes, value: parsed.value as Themes[keyof Themes] }
}
