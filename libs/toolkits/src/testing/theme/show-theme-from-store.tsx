import { useEffect, useState } from 'react'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import type { AsyncThemeStore } from '../../theme/theme-store/async-theme-store.types.ts'
import type { ThemeStore } from '../../theme/theme-store/theme-store.types.ts'
import { getThemeFromStores } from '../../theme/utils/get-theme-from-stores.ts'
import { ThemeResultCard } from './theme-result-card.tsx'

export function ShowThemeFromStore<Themes extends ThemeMap>({
	store,
	themes,
	theme,
	'data-testid': dataTestId = 'theme-from-store'
}: {
	store: ThemeStore<Themes> | AsyncThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | null
	'data-testid'?: string | undefined
}) {
	const [result, setResult] = useState<
		{ theme: keyof Themes; value: Themes[keyof Themes] } | undefined
	>(undefined)
	const defaultTheme = theme ?? undefined

	useEffect(() => {
		getThemeFromStores([store], defaultTheme).then((themeKey) => {
			setResult(themeKey ? { theme: themeKey, value: themes[themeKey] } : undefined)
		})
	}, [store, themes, defaultTheme])

	return <ThemeResultCard title="Theme from store" data-testid={dataTestId} result={result} />
}
