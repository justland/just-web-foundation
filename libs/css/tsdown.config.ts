import { defineConfig } from 'tsdown'

export default defineConfig([
	{
		entry: 'src/index.ts',
		format: 'esm',
		outDir: 'esm',
		sourcemap: true
	},
	{
		entry: 'src/index.ts',
		format: 'cjs',
		outDir: 'cjs',
		sourcemap: true
	}
])
