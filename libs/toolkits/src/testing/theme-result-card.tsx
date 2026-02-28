import { StoryCard } from '@repobuddy/storybook'
import { appendId } from '../utils/append-id.ts'

export type ThemeResult = {
	theme?: unknown
	value?: unknown
}

export type ThemeResultCardProps = {
	result: ThemeResult | undefined
	title: string
	'data-testid'?: string | undefined
}

function formatValue(value: unknown): string {
	if (value === null) return '(missing)'
	if (value === '') return '(empty)'
	if (Array.isArray(value)) return `[${value.join(', ')}]`
	return String(value)
}

export function ThemeResultCard({
	result,
	title,
	'data-testid': dataTestId,
}: ThemeResultCardProps) {
	return (
		<StoryCard title={title} data-testid={dataTestId} appearance="output">
			<p>
				theme:{' '}
				<span data-testid={appendId(dataTestId, 'theme')}>
					{result?.theme === undefined ? '(undefined)' : String(result?.theme)}
				</span>
			</p>
			<p>
				value:{' '}
				<span data-testid={appendId(dataTestId, 'value')}>
					{result?.value === undefined ? '(undefined)' : formatValue(result?.value)}
				</span>
			</p>
		</StoryCard>
	)
}
