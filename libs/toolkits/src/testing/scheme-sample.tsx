import { type CSSProperties, forwardRef, type ReactNode } from 'react'

/**
 * A panel of things that follow `color-scheme`: native controls, the `Canvas` system color,
 * and a `light-dark()` swatch. Used by the color-scheme stories.
 */
export const SchemeSample = forwardRef<
	HTMLDivElement,
	{
		children?: ReactNode
		className?: string
		style?: CSSProperties
		'data-testid'?: string
		'data-theme'?: string
	}
>(({ children, className, ...props }, ref) => (
	<div
		ref={ref}
		{...props}
		className={`flex min-w-48 flex-1 flex-col gap-2 rounded border border-gray-400 bg-[color:Canvas] p-3 text-[color:CanvasText] ${className ?? ''}`}
	>
		<div className="flex flex-wrap items-center gap-2">
			<input type="checkbox" aria-label="checkbox" defaultChecked />
			<select aria-label="select">
				<option>Option</option>
			</select>
		</div>
		<div
			className="p-1"
			style={{
				background: 'light-dark(rgb(255 255 255), rgb(18 18 18))',
				color: 'light-dark(rgb(26 26 26), rgb(232 232 232))'
			}}
		>
			<code>light-dark()</code>
		</div>
		{children}
	</div>
))
