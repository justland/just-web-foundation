import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useThemeStores } from '#just-web/toolkits/react'
import { inMemoryThemeStore, themeEntry } from '#just-web/toolkits/theme'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import type { ThemeStore } from '../../theme/theme-store/theme-store.types.ts'

const themes = { light: 'theme-light', dark: 'theme-dark' } as const

function createTrackingStore<Themes extends ThemeMap>(
	themes: Themes,
	state: { unsubscribed: boolean }
): ThemeStore<Themes> {
	const store = inMemoryThemeStore(themes)
	return {
		...store,
		subscribe(handler) {
			const unsub = store.subscribe!(handler)
			return () => {
				state.unsubscribed = true
				unsub()
			}
		}
	}
}

describe('createThemeHook subscription cleanup', () => {
	it('unsubscribes from composed store when last React listener unmounts', async () => {
		const state = { unsubscribed: false }
		const stores = () => [createTrackingStore(themes, state)] as const

		const { unmount } = renderHook(() => useThemeStores(themes, stores, { defaultTheme: 'light' }))

		unmount()

		await new Promise((r) => setTimeout(r, 0))
		expect(state.unsubscribed).toBe(true)
	})

	it('re-subscribes when component remounts after full unsubscribe', async () => {
		const store = inMemoryThemeStore(themes)
		const stores = () => [store] as const

		const { unmount } = renderHook(() => useThemeStores(themes, stores, { defaultTheme: 'light' }))

		unmount()
		await new Promise((r) => setTimeout(r, 0))

		const { result: result2 } = renderHook(() =>
			useThemeStores(themes, stores, { defaultTheme: 'light' })
		)

		store.write?.(themeEntry(themes, 'dark'))
		await new Promise((r) => setTimeout(r, 0))

		expect(result2.current[0]).toBe('dark')
	})
})
