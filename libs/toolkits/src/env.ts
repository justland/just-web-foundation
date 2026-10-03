import { isDevNodeEnv } from './_internal/env/is-dev-node-env.ts'

/**
 * Whether the code runs in development, resolved through export conditions:
 * `true` under `development`, `false` under `production`,
 * otherwise `true` only when `process.env.NODE_ENV` is set and does not start with `prod`.
 *
 * Libraries must keep `@just-web/toolkits/env` external, or the condition is resolved at the library's build time.
 */
export const isDev: boolean = isDevNodeEnv(
	(globalThis as { process?: { env?: { NODE_ENV?: string } } }).process?.env?.NODE_ENV
)
