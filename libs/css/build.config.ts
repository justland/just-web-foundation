import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	entries: [
		// bundleless, or just copy assets
		{ input: './src/', outDir: './cjs', format: 'cjs' },
	],
	declaration: true,
})
