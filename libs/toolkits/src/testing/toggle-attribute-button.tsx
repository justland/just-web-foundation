import { forwardRef, useCallback } from 'react'
import { Button } from 'react-aria-components'

export const ToggleAttributeButton = forwardRef<HTMLElement, { attribute: string; values?: string[] }>(
	({ attribute, values = ['test-value'] }, ref) => {
		const handleAttributeChange = useCallback(
			(attr: string) => {
				// Handle both RefObject and function ref cases
				const target = (ref && 'current' in ref ? ref.current : null) ?? document.documentElement
				const currentValue = target.getAttribute(attr)
				const nextIndex = currentValue ? values.indexOf(currentValue) + 1 : 0
				const newValue = nextIndex < values.length ? values[nextIndex]! : null

				if (newValue === null) {
					target.removeAttribute(attr)
				} else {
					target.setAttribute(attr, newValue)
				}
			},
			[ref, values],
		)

		return (
			<Button
				key={attribute}
				className="jwtk:bg-cyan-700 jwtk:text-white jwtk:px-4 jwtk:py-2 jwtk:rounded-md jwtk:shadow-md active:jwtk:bg-cyan-800"
				onClick={() => handleAttributeChange(attribute)}
			>
				Toggle {attribute}
			</Button>
		)
	},
)
