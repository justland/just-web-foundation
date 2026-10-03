import { isDevNodeEnv } from './_internal/env/is-dev-node-env.ts'

/**
 * Whether the code runs in development.
 *
 * It is a constant, resolved through the package's export conditions:
 *
 * - `development` condition: `true`
 * - `production` condition: `false`
 * - no condition: `true` only when `process.env.NODE_ENV` is set and does not start with `prod`.
 *   A browser with no `process` gets `false`.
 *
 * Vite and webpack 5 set the `development` / `production` condition from the build mode,
 * so `if (isDev)` becomes `if (true)` or `if (false)` and the dead branch is dropped.
 * In Node.js, pass `--conditions=development` or `--conditions=production` to pick a variant.
 *
 * Libraries that use it must keep `@just-web/toolkits/env` external and never bundle it into their own `dist`.
 * Otherwise the condition is resolved when the library is built, not when the app is built.
 *
 * @example
 * ```ts
 * import { isDev } from '@just-web/toolkits/env'
 *
 * if (isDev) {
 *   console.warn('...')
 * }
 * ```
 */
export const isDev: boolean = isDevNodeEnv(
	(globalThis as { process?: { env?: { NODE_ENV?: string } } }).process?.env?.NODE_ENV
)
