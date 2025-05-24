export function LogPanel({ title, log }: { title: string; log: string[] }) {
	return (
		<div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded overflow-y-auto">
			<h4 className="mb-2">{title}</h4>
			{log.map((entry, i) => (
				<pre key={i} className="font-mono">
					{entry}
				</pre>
			))}
		</div>
	)
}
