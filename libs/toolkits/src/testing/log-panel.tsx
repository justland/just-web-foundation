export function LogPanel({ title, log }: { title: string; log: string[] }) {
	return (
		<div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded overflow-y-auto">
			<h2 className="mb-2">{title}</h2>
			{log.map((entry, i) => (
				<pre key={i} className="font-mono">
					{entry}
				</pre>
			))}
		</div>
	)
}
