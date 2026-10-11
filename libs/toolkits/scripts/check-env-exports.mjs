// Checks that `@just-web/toolkits/env` resolves to the right built variant
// under each export condition, for both `import` and `require`.
// The package is ESM only, so `require` loads the same ES module (Node.js 20.19+ / 22.12+).
// It runs Node.js against `dist` through the package's self-reference, so run it after `tsdown`.
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const cwd = fileURLToPath(new URL('..', import.meta.url))
const specifier = '@just-web/toolkits/env'

const programs = {
	esm: `import { isDev } from '${specifier}'; console.log(JSON.stringify({ isDev, file: import.meta.resolve('${specifier}') }))`,
	cjs: `const { isDev } = require('${specifier}'); console.log(JSON.stringify({ isDev, file: require.resolve('${specifier}') }))`
}

const cases = [
	// The condition wins over NODE_ENV.
	{
		condition: 'development',
		nodeEnv: 'production',
		isDev: true,
		file: 'dist/env/development.js'
	},
	{
		condition: 'production',
		nodeEnv: 'development',
		isDev: false,
		file: 'dist/env/production.js'
	},
	// With no condition, it falls back to NODE_ENV.
	{ nodeEnv: undefined, isDev: false, file: 'dist/env.js' },
	{ nodeEnv: 'production', isDev: false, file: 'dist/env.js' },
	{ nodeEnv: 'prod', isDev: false, file: 'dist/env.js' },
	{ nodeEnv: 'development', isDev: true, file: 'dist/env.js' },
	{ nodeEnv: 'test', isDev: true, file: 'dist/env.js' }
]

const failures = []
for (const c of cases) {
	for (const [format, program] of Object.entries(programs)) {
		const env = { ...process.env }
		delete env.NODE_ENV
		if (c.nodeEnv !== undefined) env.NODE_ENV = c.nodeEnv
		const args = [
			...(c.condition ? [`--conditions=${c.condition}`] : []),
			...(format === 'esm' ? ['--input-type=module'] : ['--input-type=commonjs']),
			'-e',
			program
		]
		const name = `${format} condition=${c.condition ?? '(none)'} NODE_ENV=${c.nodeEnv ?? '(unset)'}`
		const actual = JSON.parse(execFileSync(process.execPath, args, { cwd, env, encoding: 'utf8' }))
		// `import.meta.resolve` returns a file URL, `require.resolve` returns a path.
		const file = format === 'esm' ? fileURLToPath(actual.file) : actual.file
		const expectedFile = resolve(cwd, c.file)
		if (actual.isDev !== c.isDev)
			failures.push(`${name}: isDev is ${actual.isDev}, expected ${c.isDev}`)
		if (file !== expectedFile) failures.push(`${name}: resolved ${file}, expected ${expectedFile}`)
		else process.stdout.write(`ok ${name} -> ${c.file} (isDev: ${actual.isDev})\n`)
	}
}

// The condition variants must be standalone constants, not a bundle of every variant.
for (const file of ['development.js', 'production.js']) {
	const code = readFileSync(new URL(`../dist/env/${file}`, import.meta.url), 'utf8')
	if (/process|require\(|\bimport\b/.test(code))
		failures.push(`dist/env/${file} is not a standalone constant`)
}

if (failures.length > 0) {
	console.error(failures.join('\n'))
	process.exit(1)
}
