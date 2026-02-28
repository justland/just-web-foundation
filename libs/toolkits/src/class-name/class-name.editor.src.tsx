import type { ClassNameProps } from '@just-web/toolkits'
import type { PropsWithChildren } from 'react'

interface MyComponentProps extends PropsWithChildren<ClassNameProps> {}

const MyComponent = ({ className, children }: MyComponentProps) => {
	return <div className={className}>{children}</div>
}

export default () => <MyComponent className="text-blue-800">Hello in blue</MyComponent>
