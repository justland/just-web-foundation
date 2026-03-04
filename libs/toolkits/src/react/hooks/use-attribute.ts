import { useCallback, useEffect, useState } from 'react'
import { observeAttributes } from '../../attributes/observe-attribute.ts'

/**
 * React hook that returns the current value of an attribute on a target element
 * and a setter to update it. Stays in sync when the attribute changes (e.g. from elsewhere).
 *
 * @param attributeName - The attribute to observe (e.g. `'class'`, `'data-theme'`).
 * @param element - The element to observe (accepts null e.g. from refs). Defaults to `document.documentElement` when omitted.
 * @returns Tuple of [value, setValue]. Pass null or undefined to setValue to remove the attribute.
 *
 * @example
 * ```tsx
 * const [className, setClassName] = useAttribute('class')
 * const [theme, setTheme] = useAttribute('data-theme', myElement)
 * setTheme('dark')
 * setClassName(undefined) // removes class attribute
 * ```
 */
export function useAttribute(
	attributeName: string,
	element: Element | null | undefined = typeof document !== 'undefined'
		? document.documentElement
		: undefined
): [string | undefined, (value: string | null | undefined) => void] {
	const [value, setValueState] = useState<string | undefined>(
		() => element?.getAttribute(attributeName) ?? undefined
	)

	useEffect(() => {
		if (!element) return

		setValueState(element.getAttribute(attributeName) ?? undefined)

		const observer = observeAttributes(
			{
				[attributeName]: (next) => {
					setValueState(next ?? undefined)
				}
			},
			element
		)
		return () => observer.disconnect()
	}, [element, attributeName])

	const setValue = useCallback(
		(next: string | null | undefined) => {
			if (!element) return
			if (next == null) {
				element.removeAttribute(attributeName)
			} else {
				element.setAttribute(attributeName, next)
			}
		},
		[element, attributeName]
	)

	return [value, setValue]
}
