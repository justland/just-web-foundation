import type { ClassNameProps } from '@just-web/toolkits'
import type { PropsWithChildren } from 'react'

const MyComponent = ({ className, children }: PropsWithChildren<ClassNameProps>) => {
	return <div className={className}>{children}</div>
}

export default () => <MyComponent className="text-blue-800">Hello in blue</MyComponent>
