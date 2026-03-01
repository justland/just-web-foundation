import { forwardRef } from 'react'
import { Button as RacButton, type ButtonProps as RacButtonProps } from 'react-aria-components'
import type { JustClassNameProps } from '../class-name/just-class-name.ts'
import { buttonTheme } from './button-theme.ts'

type ButtonProps = Omit<RacButtonProps, 'className'> &
	JustClassNameProps<Omit<RacButtonProps, 'className'>>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
	<RacButton ref={ref} className={(state) => buttonTheme.className(state, className)} {...props} />
))
