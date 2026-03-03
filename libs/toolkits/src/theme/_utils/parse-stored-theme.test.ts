import { describe, expect, it } from 'vitest'
import { parseStoredTheme } from './parse-stored-theme.ts'

const themesString = {
	light: 'theme-light',
	dark: 'theme-dark'
} as const

const themesArray = {
	a: ['a', 'b'],
	x: ['x']
} as const

const themesObject = {
	dark: { themeValue: 'theme-dark' },
	light: { themeValue: ['theme-light', 'extra'] }
} as const

const themesEmptyArray = {
	empty: []
} as const

describe('parseStoredTheme', () => {
	describe('returns ThemeEntry when shape and comparable match', () => {
		it('string: match returns stored value', () => {
			const result = parseStoredTheme(
				themesString,
				JSON.stringify({ theme: 'dark', value: 'theme-dark' })
			)
			expect(result).toEqual({ theme: 'dark', value: 'theme-dark' })
		})

		it('array: match returns stored value', () => {
			const result = parseStoredTheme(
				themesArray,
				JSON.stringify({ theme: 'a', value: ['a', 'b'] })
			)
			expect(result).toEqual({ theme: 'a', value: ['a', 'b'] })
		})

		it('array: [0] match with shorter array returns stored value', () => {
			const result = parseStoredTheme(themesArray, JSON.stringify({ theme: 'a', value: ['a'] }))
			expect(result).toEqual({ theme: 'a', value: ['a'] })
		})

		it('object: match returns stored value', () => {
			const result = parseStoredTheme(
				themesObject,
				JSON.stringify({ theme: 'dark', value: { themeValue: 'theme-dark' } })
			)
			expect(result).toEqual({ theme: 'dark', value: { themeValue: 'theme-dark' } })
		})

		it('object: match with extra props preserves them', () => {
			const result = parseStoredTheme(
				themesObject,
				JSON.stringify({ theme: 'dark', value: { themeValue: 'theme-dark', extra: 'x' } })
			)
			expect(result).toEqual({ theme: 'dark', value: { themeValue: 'theme-dark', extra: 'x' } })
		})

		it('object-array: match returns stored value', () => {
			const result = parseStoredTheme(
				themesObject,
				JSON.stringify({ theme: 'light', value: { themeValue: ['theme-light'] } })
			)
			expect(result).toEqual({ theme: 'light', value: { themeValue: ['theme-light'] } })
		})

		it('empty array: both [] returns stored', () => {
			const result = parseStoredTheme(
				themesEmptyArray,
				JSON.stringify({ theme: 'empty', value: [] })
			)
			expect(result).toEqual({ theme: 'empty', value: [] })
		})
	})

	describe('returns undefined when shape mismatch', () => {
		it('string vs array returns undefined', () => {
			const result = parseStoredTheme(
				themesString,
				JSON.stringify({ theme: 'dark', value: ['theme-dark'] })
			)
			expect(result).toBeUndefined()
		})

		it('string vs object returns undefined', () => {
			const result = parseStoredTheme(
				themesString,
				JSON.stringify({ theme: 'dark', value: { themeValue: 'theme-dark' } })
			)
			expect(result).toBeUndefined()
		})

		it('array vs string returns undefined', () => {
			const result = parseStoredTheme(themesArray, JSON.stringify({ theme: 'a', value: 'a' }))
			expect(result).toBeUndefined()
		})

		it('object vs string returns undefined', () => {
			const result = parseStoredTheme(
				themesObject,
				JSON.stringify({ theme: 'dark', value: 'theme-dark' })
			)
			expect(result).toBeUndefined()
		})

		it('object-array vs object-string returns undefined', () => {
			const result = parseStoredTheme(
				themesObject,
				JSON.stringify({ theme: 'light', value: { themeValue: 'theme-light' } })
			)
			expect(result).toBeUndefined()
		})

		it('object-string vs object-array returns undefined', () => {
			const themesObjStr = { dark: { themeValue: 'theme-dark' } } as const
			const result = parseStoredTheme(
				themesObjStr,
				JSON.stringify({ theme: 'dark', value: { themeValue: ['theme-dark'] } })
			)
			expect(result).toBeUndefined()
		})

		it('object without themeValue returns undefined', () => {
			const result = parseStoredTheme(
				themesObject,
				JSON.stringify({ theme: 'dark', value: { foo: 'bar' } })
			)
			expect(result).toBeUndefined()
		})

		it('null value returns undefined', () => {
			const result = parseStoredTheme(themesString, JSON.stringify({ theme: 'dark', value: null }))
			expect(result).toBeUndefined()
		})

		it('number value returns undefined', () => {
			const result = parseStoredTheme(themesString, JSON.stringify({ theme: 'dark', value: 42 }))
			expect(result).toBeUndefined()
		})
	})

	describe('returns undefined when comparable mismatch', () => {
		it('string: mismatch returns undefined', () => {
			const result = parseStoredTheme(
				themesString,
				JSON.stringify({ theme: 'dark', value: 'theme-light' })
			)
			expect(result).toBeUndefined()
		})

		it('array: [0] mismatch returns undefined', () => {
			const result = parseStoredTheme(themesArray, JSON.stringify({ theme: 'a', value: ['x'] }))
			expect(result).toBeUndefined()
		})

		it('object: themeValue mismatch returns undefined', () => {
			const result = parseStoredTheme(
				themesObject,
				JSON.stringify({ theme: 'dark', value: { themeValue: 'theme-light', extra: 'x' } })
			)
			expect(result).toBeUndefined()
		})

		it('empty array: [] vs ["a"] returns undefined', () => {
			const result = parseStoredTheme(
				themesEmptyArray,
				JSON.stringify({ theme: 'empty', value: ['a'] })
			)
			expect(result).toBeUndefined()
		})

		it('empty array: ["a"] vs [] returns undefined', () => {
			const themesWithA = { a: ['a'] } as const
			const result = parseStoredTheme(themesWithA, JSON.stringify({ theme: 'a', value: [] }))
			expect(result).toBeUndefined()
		})
	})

	describe('returns undefined when value missing', () => {
		it('value missing (legacy format) returns undefined', () => {
			const result = parseStoredTheme(themesString, JSON.stringify({ theme: 'dark' }))
			expect(result).toBeUndefined()
		})

		it('value undefined returns undefined', () => {
			const result = parseStoredTheme(
				themesString,
				JSON.stringify({ theme: 'dark', value: undefined })
			)
			expect(result).toBeUndefined()
		})
	})

	describe('returns undefined when themes undefined or theme not in themes', () => {
		it('themes undefined returns undefined', () => {
			const result = parseStoredTheme(
				undefined,
				JSON.stringify({ theme: 'dark', value: 'theme-dark' })
			)
			expect(result).toBeUndefined()
		})

		it('theme not in themes returns undefined', () => {
			const result = parseStoredTheme(
				themesString,
				JSON.stringify({ theme: 'invalid', value: 'x' })
			)
			expect(result).toBeUndefined()
		})
	})

	describe('returns undefined for invalid JSON or missing theme key', () => {
		it('undefined input returns undefined', () => {
			expect(parseStoredTheme(themesString, undefined)).toBeUndefined()
		})

		it('invalid JSON returns undefined', () => {
			expect(parseStoredTheme(themesString, 'not json')).toBeUndefined()
		})

		it('empty object returns undefined', () => {
			expect(parseStoredTheme(themesString, '{}')).toBeUndefined()
		})

		it('missing theme key returns undefined', () => {
			expect(parseStoredTheme(themesString, '{"value":"theme-dark"}')).toBeUndefined()
		})

		it('theme not string returns undefined', () => {
			expect(parseStoredTheme(themesString, '{"theme":42,"value":"theme-dark"}')).toBeUndefined()
		})
	})
})
