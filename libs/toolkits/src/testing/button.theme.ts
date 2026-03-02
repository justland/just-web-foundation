import type { ButtonRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import type { JustClassName, JustClassNameFnProps } from '../class-name/just-class-name.ts'
import { resolveClassName } from '../class-name/resolve-class-name.ts'

export const buttonTheme = {
	className(
		state: JustClassNameFnProps<ButtonRenderProps>,
		className: JustClassName<ButtonRenderProps> | undefined
	) {
		return twMerge(
			resolveClassName(
				{
					...state,
					className: 'bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800'
				},
				className
			)
		)
	}
}
