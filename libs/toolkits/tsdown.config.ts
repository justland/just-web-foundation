import { defineConfig } from 'tsdown'

export default defineConfig([
	{
		entry: ['src/index.ts'],
		format: ['esm', 'cjs'],
		clean: true,
		dts: true,
		sourcemap: true,
		unbundle: true,
	},
	{
		entry: ['src/index.ts'],
		format: ['es'],
		outDir: 'static',
		dts: {
			emitDtsOnly: true,
		},
	},
])
