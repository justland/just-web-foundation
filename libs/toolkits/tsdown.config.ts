import { defineConfig } from 'tsdown'

export default defineConfig([
	{
		entry: ['src/index.ts', 'src/react.ts', 'src/theme.ts'],
		format: ['esm', 'cjs'],
		clean: true,
		dts: true,
		external: ['react', 'react-dom'],
		sourcemap: true,
		unbundle: true
	},
	{
		entry: ['src/index.ts', 'src/react.ts', 'src/theme.ts'],
		format: ['es'],
		outDir: '.editor/just_web_toolkits',
		clean: true,
		dts: {
			emitDtsOnly: true
		}
	},
	{
		entry: ['./node_modules/@repobuddy/storybook/esm/index.d.ts'],
		outDir: '.editor/repobuddy_storybook',
		clean: true,
		dts: {
			emitDtsOnly: true
		}
	},
	{
		entry: ['./node_modules/type-plus/esm/index.d.ts'],
		outDir: '.editor/type_plus',
		clean: true,
		dts: {
			emitDtsOnly: true
		}
	},
	{
		entry: ['./node_modules/clsx/clsx.d.mts'],
		clean: true,
		outDir: '.editor/clsx',
		outputOptions: {
			file: '.editor/clsx/index.d.mts'
		},
		dts: {
			emitDtsOnly: true
		}
	}
])
