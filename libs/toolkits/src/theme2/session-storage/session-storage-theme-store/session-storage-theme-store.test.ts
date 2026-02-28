import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { sessionStorageThemeStore } from '../../index.ts'

const themeMap = {
	current: 'theme-current',
	next: 'theme-next',
	grayscale: 'theme-grayscale',
	'high-contrast': 'theme-high-contrast'
} as const

const STORAGE_KEY = 'theme2-session-storage-test'

describe('createSessionStorageThemeStore', () => {
	beforeEach(() => {
		window.sessionStorage.removeItem(STORAGE_KEY)
	})

	afterEach(() => {
		window.sessionStorage.removeItem(STORAGE_KEY)
	})

	it('when storage is empty, get returns undefined', () => {
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
		expect(store.get()).toBeUndefined()
	})

	it('after set, get returns the theme result', () => {
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
		store.set('grayscale')
		expect(store.get()).toEqual({ theme: 'grayscale', value: themeMap.grayscale })
	})

	it('subscribe handler is called with current value immediately and when theme changes', () => {
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
		const values: (string | undefined | null)[] = []
		const unsubscribe = store.subscribe!((v) =>
			values.push(v === undefined || v === null ? v : v.theme)
		)
		store.set('grayscale')
		store.set('current')
		unsubscribe()
		store.set('grayscale')
		expect(values).toEqual([undefined, 'grayscale', 'current'])
	})

	it('subscribe returns unsubscribe function that stops notifications', () => {
		const store = sessionStorageThemeStore<typeof themeMap>({
			storageKey: STORAGE_KEY,
			themeMap
		})
		const values: (string | undefined | null)[] = []
		const unsubscribe = store.subscribe!((v) =>
			values.push(v === undefined || v === null ? v : v.theme)
		)
		store.set('grayscale')
		unsubscribe()
		store.set('current')
		expect(values).toEqual([undefined, 'grayscale'])
	})
})
