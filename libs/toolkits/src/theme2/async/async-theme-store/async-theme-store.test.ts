import { describe, expect, it } from 'vitest'
import { asyncThemeStore, type ThemeResult, themeResult } from '../../index.ts'

const themeMap = { current: 'current', grayscale: 'grayscale' } as const

describe('asyncThemeStore', () => {
	it('when only get is provided, store participates in read only', async () => {
		let wrote: ThemeResult<typeof themeMap> | undefined
		let notify: ((v: ThemeResult<typeof themeMap> | undefined | null) => void) | undefined
		const store = asyncThemeStore<typeof themeMap>({
			get: async () => wrote,
			set: async (entry) => {
				wrote = entry ?? undefined
				notify?.(wrote)
			},
			subscribe: (handler) => {
				notify = handler
				handler(wrote)
				return () => {
					notify = undefined
				}
			}
		})
		expect(await store.get?.()).toEqual(undefined)
		const values: Array<ThemeResult<typeof themeMap> | undefined | null> = []
		const unsubscribe = store.subscribe?.((v) => values.push(v))
		await store.set?.(themeResult('grayscale', themeMap))
		expect(await store.get?.()).toEqual({ theme: 'grayscale', value: 'grayscale' })
		unsubscribe?.()
		expect(values).toEqual([undefined, { theme: 'grayscale', value: 'grayscale' }])
	})

	it('when only set is provided, store is write-only', async () => {
		const store = asyncThemeStore<typeof themeMap>({
			set: async () => {}
		})
		expect(store.get).toBeUndefined()
		expect(store.set).toBeDefined()
		expect(store.subscribe).toBeUndefined()
		await store.set?.(themeResult('grayscale', themeMap))
	})

	it('when get and set are provided, store supports read and write', async () => {
		let wrote: ThemeResult<typeof themeMap> | undefined
		const store = asyncThemeStore<typeof themeMap>({
			get: async () => wrote,
			set: async (entry) => {
				wrote = entry ?? undefined
			}
		})
		await store.set?.(themeResult('grayscale', themeMap))
		expect(await Promise.resolve(store.get?.())).toEqual({
			theme: 'grayscale',
			value: 'grayscale'
		})
	})

	it('when subscribe is provided, store can be observed', async () => {
		let wrote: ThemeResult<typeof themeMap> | undefined
		const values: Array<ThemeResult<typeof themeMap> | undefined | null> = []
		let notify: ((v: ThemeResult<typeof themeMap> | undefined | null) => void) | undefined
		const store = asyncThemeStore<typeof themeMap>({
			set: async (entry) => {
				wrote = entry ?? undefined
				notify?.(wrote)
			},
			subscribe: (handler) => {
				notify = handler
				handler(wrote)
				return () => {
					notify = undefined
				}
			}
		})
		const unsubscribe = store.subscribe?.((v) => values.push(v))
		await store.set?.(themeResult('grayscale', themeMap))
		unsubscribe?.()
		expect(values).toEqual([undefined, { theme: 'grayscale', value: 'grayscale' }])
	})

	it('when no options are provided, returns empty store', () => {
		const store = asyncThemeStore<typeof themeMap>({})
		expect(store.get).toBeUndefined()
		expect(store.set).toBeUndefined()
		expect(store.subscribe).toBeUndefined()
	})
})
