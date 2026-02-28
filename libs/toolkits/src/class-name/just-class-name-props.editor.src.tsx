import type { JustClassNameProps } from '@just-web/toolkits'
import { resolveClassName } from '@just-web/toolkits'
import { createContext, type PropsWithChildren, useContext } from 'react'

interface MyButtonStates {
	disabled?: boolean | undefined
}

interface MyButtonProps extends PropsWithChildren<JustClassNameProps<MyButtonStates>> {
	disabled?: boolean | undefined
}

const MyButtonContext = createContext<MyButtonStates | null>(null)

function mergeProps(context: MyButtonStates, { className, ...props }: MyButtonProps) {
	return {
		...context,
		...props,
		className: resolveClassName(context, className),
	}
}

const MyButton = (props: MyButtonProps) => {
	const context = useContext(MyButtonContext)

	const { className, disabled, children } = mergeProps(context ?? {}, props)

	return (
		<button type="button" className={className} disabled={disabled}>
			{children}
		</button>
	)
}

export default () => (
	<div className="flex flex-col gap-2">
		<MyButton className="text-blue-600">String className</MyButton>
		<MyButton
			className={(state) => (state.disabled ? 'opacity-50 cursor-not-allowed' : undefined)}
			disabled
		>
			Function className (disabled)
		</MyButton>
	</div>
)
