import { describe, expect, it } from 'vitest'
import { inMemoryThemeStore, type ThemeResult } from '../../index.ts'

describe('inMemoryThemeStore', () => {
	it('when store is empty, get returns undefined', () => {
		const store = inMemoryThemeStore({
			themeMap: {
				current: 'current',
				grayscale: 'grayscale'
			}
		})
		expect(store.get()).toBeUndefined()
	})

	it('after set, get returns the theme result', () => {
		const store = inMemoryThemeStore({
			themeMap: {
				current: 'current',
				grayscale: 'grayscale'
			}
		})
		store.set('grayscale')
		expect(store.get()).toEqual({ theme: 'grayscale', value: 'grayscale' })
	})

	it('subscribe handler is called with current value immediately and when theme changes', () => {
		const themeMap = {
			current: 'current',
			grayscale: 'grayscale'
		} as const
		const store = inMemoryThemeStore({
			themeMap
		})
		const values: Array<ThemeResult<typeof themeMap> | undefined | null> = []
		const unsubscribe = store.subscribe!((v) => values.push(v))
		store.set('grayscale')
		store.set('current')
		unsubscribe()
		store.set('grayscale') // after unsubscribe, should not affect values
		expect(values).toEqual([
			undefined,
			{ theme: 'grayscale', value: 'grayscale' },
			{ theme: 'current', value: 'current' }
		])
	})

	it('subscribe returns unsubscribe function that stops notifications', () => {
		const themeMap = {
			current: 'current',
			grayscale: 'grayscale'
		} as const
		const store = inMemoryThemeStore({ themeMap })
		const values: Array<ThemeResult<typeof themeMap> | undefined | null> = []
		const unsubscribe = store.subscribe!((v) => values.push(v))
		store.set('grayscale')
		unsubscribe()
		store.set('current')
		expect(values).toEqual([undefined, { theme: 'grayscale', value: 'grayscale' }])
	})
})
