export function LogPanel({ title, log }: { title: string; log: string[] }) {
	return (
		<div className="jwtk:bg-neutral-100 dark:jwtk:bg-neutral-900 jwtk:p-4 jwtk:rounded jwtk:overflow-y-auto">
			<h2 className="jwtk:mb-2">{title}</h2>
			{log.map((entry, i) => (
				<pre key={i} className="jwtk:font-mono">
					{entry}
				</pre>
			))}
		</div>
	)
}
