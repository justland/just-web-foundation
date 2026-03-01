import { useCallback, useEffect, useState } from 'react'
import { themeEntry } from '../theme2/theme-entry.ts'
import type { ThemeMap } from '../theme2/theme-map.types.ts'
import type { AsyncThemeStore } from '../theme2/theme-store/async-theme-store.types.ts'
import type { ThemeStore } from '../theme2/theme-store/theme-store.types.ts'
import { getThemeFromStores } from '../theme2/utils/get-theme-from-stores.ts'
import { observeThemeFromStores } from '../theme2/utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../theme2/utils/set-theme-to-stores.ts'
import { appendId } from '../utils/append-id.ts'
import { Button } from './button.tsx'
import { ThemeResultCard } from './theme-result-card.tsx'

export type ThemeStoreDemoProps<Themes extends ThemeMap> = {
	store: ThemeStore<Themes> | AsyncThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | null
	'data-testid'?: string | undefined
}

/**
 * Demo component that uses getThemeFromStores, setThemeToStores, and observeThemeFromStores.
 * Renders observed value, a one-time get result, and buttons to trigger get/set for showcasing behavior.
 * All interactive elements and result areas use data-testid for testing.
 */
export function ThemeStoreDemo<Themes extends ThemeMap>({
	store,
	themes,
	theme,
	'data-testid': dataTestId = 'theme-store-demo'
}: ThemeStoreDemoProps<Themes>) {
	const [observedTheme, setObservedTheme] = useState<keyof Themes | undefined>(undefined)
	const [getResult, setGetResult] = useState<
		{ theme: keyof Themes; value: Themes[keyof Themes] } | undefined
	>(undefined)

	const defaultTheme = theme ?? undefined

	useEffect(() => {
		const unobserve = observeThemeFromStores([store], defaultTheme, setObservedTheme)
		return unobserve
	}, [store, defaultTheme])

	const handleGet = useCallback(async () => {
		const themeKey = await getThemeFromStores([store], defaultTheme)
		setGetResult(themeKey ? { theme: themeKey, value: themes[themeKey] } : undefined)
	}, [store, themes, defaultTheme])

	const handleSetDefault = useCallback(() => {
		setThemeToStores([store], themeEntry('default' as keyof Themes, themes))
	}, [store, themes])

	const handleSetGrayscale = useCallback(() => {
		setThemeToStores([store], themeEntry('grayscale' as keyof Themes, themes))
	}, [store, themes])

	const observedResult = observedTheme
		? { theme: observedTheme, value: themes[observedTheme] }
		: undefined

	const observeTestId = appendId(dataTestId, 'observe')
	const getTestId = appendId(dataTestId, 'get')

	return (
		<div className="flex flex-col gap-2" data-testid={dataTestId}>
			<div className="flex gap-2">
				<Button onClick={handleGet} data-testid={appendId(dataTestId, 'btn-get')}>
					Get theme
				</Button>
				<Button onClick={handleSetDefault} data-testid={appendId(dataTestId, 'btn-set-default')}>
					Set default
				</Button>
				<Button
					onClick={handleSetGrayscale}
					data-testid={appendId(dataTestId, 'btn-set-grayscale')}
				>
					Set grayscale
				</Button>
			</div>
			<ThemeResultCard title="Get (one-time)" result={getResult} data-testid={getTestId} />
			<ThemeResultCard
				title="Observed (subscribe)"
				result={observedResult}
				data-testid={observeTestId}
			/>
		</div>
	)
}
