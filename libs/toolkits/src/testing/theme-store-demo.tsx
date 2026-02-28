import { useCallback, useEffect, useState } from 'react'
import { getThemeFromStore, observeThemeFromStore, setThemeToStore } from '#just-web/toolkits'
import type { ThemeMap, ThemeStore } from '../theme/theme.types.ts'
import { appendId } from '../utils/append-id.ts'
import { Button } from './button.tsx'
import { ThemeResultCard } from './theme-result-card.tsx'

export type ThemeStoreDemoProps<Themes extends ThemeMap> = {
	store: ThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | null
	'data-testid'?: string | undefined
}

/**
 * Demo component that uses getThemeFromStore, setThemeToStore, and observeThemeFromStore.
 * Renders observed value, a one-time get result, and buttons to trigger get/set for showcasing behavior.
 * All interactive elements and result areas use data-testid for testing.
 */
export function ThemeStoreDemo<Themes extends ThemeMap>({
	store,
	themes,
	theme,
	'data-testid': dataTestId = 'theme-store-demo'
}: ThemeStoreDemoProps<Themes>) {
	const [observedResult, setObservedResult] = useState<
		{ theme: keyof Themes; value: Themes[keyof Themes] } | undefined
	>(undefined)
	const [getResult, setGetResult] = useState<
		{ theme: keyof Themes; value: Themes[keyof Themes] } | undefined
	>(undefined)

	useEffect(() => {
		const observer = observeThemeFromStore({
			store,
			themes,
			theme,
			handler: setObservedResult
		})
		return () => observer.disconnect()
	}, [store, themes, theme])

	const handleGet = useCallback(() => {
		getThemeFromStore({ store, themes, theme }).then(setGetResult)
	}, [store, themes, theme])

	const handleSetDefault = useCallback(() => {
		setThemeToStore({ store, themes, theme: 'default' as keyof Themes })
	}, [store, themes])

	const handleSetGrayscale = useCallback(() => {
		setThemeToStore({ store, themes, theme: 'grayscale' as keyof Themes })
	}, [store, themes])

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
