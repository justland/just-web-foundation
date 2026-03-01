import { useCallback, useSyncExternalStore } from 'react'
import { observeThemeFromStores } from '../../theme2/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme2/set-theme-to-stores.ts'
import { themeEntry } from '../../theme2/theme-entry.ts'
import type { ThemeMap } from '../../theme2/theme-map.types.ts'
import type { AsyncThemeStore } from '../../theme2/theme-store/async-theme-store.types.ts'
import type { ThemeStore } from '../../theme2/theme-store/theme-store.types.ts'

function createSharedChannel<Themes extends ThemeMap>(
	stores: (ThemeStore<Themes> | AsyncThemeStore<Themes>)[],
	themes: Themes,
	defaultTheme: keyof Themes | undefined
) {
	let lastTheme: keyof Themes | undefined = defaultTheme
	const listeners = new Set<(theme: keyof Themes | undefined) => void>()

	const notify = (theme: keyof Themes | undefined) => {
		lastTheme = theme
		for (const fn of listeners) {
			fn(theme)
		}
	}

	const subscribe = (listener: (theme: keyof Themes | undefined) => void) => {
		listeners.add(listener)
		listener(lastTheme)
		return () => {
			listeners.delete(listener)
		}
	}

	const unobserve = observeThemeFromStores(stores, defaultTheme, notify)

	const getSnapshot = (): keyof Themes | undefined => lastTheme
	const getServerSnapshot = (): keyof Themes | undefined => defaultTheme

	return {
		subscribe,
		getSnapshot,
		getServerSnapshot,
		setTheme: (theme: keyof Themes) => setThemeToStores(stores, themeEntry(theme, themes)),
		unobserve
	}
}

const channelsByStores = new WeakMap<
	object,
	Map<string | undefined, ReturnType<typeof createSharedChannel<any>>>
>()

function getOrCreateChannel<Themes extends ThemeMap>(
	stores: (ThemeStore<Themes> | AsyncThemeStore<Themes>)[],
	themes: Themes,
	defaultTheme: keyof Themes | undefined
) {
	const storesKey = stores as unknown as object
	let byDefault = channelsByStores.get(storesKey) as Map<
		keyof Themes | undefined,
		ReturnType<typeof createSharedChannel<Themes>>
	>
	if (!byDefault) {
		byDefault = new Map<keyof Themes | undefined, ReturnType<typeof createSharedChannel<Themes>>>()
		channelsByStores.set(storesKey, byDefault as any)
	}
	let channel = byDefault.get(defaultTheme) as ReturnType<typeof createSharedChannel<Themes>>
	if (!channel) {
		channel = createSharedChannel<Themes>(stores, themes, defaultTheme)
		byDefault.set(defaultTheme, channel)
	}
	return channel
}

export function createThemeHook<Themes extends ThemeMap>(options: {
	stores: (ThemeStore<Themes> | AsyncThemeStore<Themes>)[]
	themes: Themes
	defaultTheme?: keyof Themes | undefined
}): (
	overrideDefaultTheme?: keyof Themes | undefined
) => [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const { stores, defaultTheme, themes } = options
	return function useTheme(overrideDefaultTheme?: keyof Themes | undefined) {
		const effectiveDefault = overrideDefaultTheme ?? defaultTheme
		const channel = getOrCreateChannel<Themes>(stores, themes, effectiveDefault)

		const theme = useSyncExternalStore<keyof Themes | undefined>(
			channel.subscribe,
			channel.getSnapshot,
			channel.getServerSnapshot
		)

		const setTheme = useCallback(
			async (newTheme: keyof Themes) => {
				await channel.setTheme(newTheme)
			},
			[channel]
		)

		return [theme, setTheme]
	}
}
