import { defineConfig } from 'tsdown'

export default defineConfig([
	{
		entry: ['src/*.ts'],
		format: ['es', 'cjs'],
		clean: true,
		dts: true,
		external: ['react', 'react-dom'],
		platform: 'neutral',
		sourcemap: true,
		unbundle: true
	},
	{
		entry: ['src/*.ts'],
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
		entry: ['./node_modules/clsx/clsx.d.mts'],
		clean: true,
		outDir: '.editor/clsx',
		outputOptions: {
			file: '.editor/clsx/index.d.mts'
		},
		dts: {
			emitDtsOnly: true
		}
	},
	{
		entry: ['./node_modules/csstype/index.d.ts'],
		outDir: '.editor/csstype',
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
	}
])
