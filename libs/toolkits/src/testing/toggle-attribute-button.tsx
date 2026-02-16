import { forwardRef, useCallback } from 'react'
import { Button } from 'react-aria-components'

export const ToggleAttributeButton = forwardRef<
	HTMLElement,
	{ attribute: string; values?: string[] }
>(({ attribute, values = ['test-value'] }, ref) => {
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
			className="bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800"
			onClick={() => handleAttributeChange(attribute)}
		>
			Toggle {attribute}
		</Button>
	)
})
