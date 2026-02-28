import { StoryCard } from '@repobuddy/storybook'
import {
	getThemeFromSessionStorage,
	type ThemeMap,
	type ThemeStorageOptions,
} from '#just-web/toolkits'

export function ShowThemeFromSessionStorage<Themes extends ThemeMap>({
	storageKey,
	themes,
	theme,
}: ThemeStorageOptions<Themes>) {
	const result = getThemeFromSessionStorage({
		storageKey,
		theme,
		themes,
	})
	return (
		<StoryCard title="Theme from sessionStorage" appearance="output">
			<p>theme: {result?.theme === undefined ? '(undefined)' : String(result?.theme)}</p>
			<p>
				value:{' '}
				{result?.value === null
					? '(missing)'
					: result?.value === ''
						? '(empty)'
						: Array.isArray(result?.value)
							? `[${result?.value.join(', ')}]`
							: result?.value}
			</p>
		</StoryCard>
	)
}
