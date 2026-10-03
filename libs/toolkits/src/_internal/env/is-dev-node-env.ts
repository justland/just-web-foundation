/**
 * Whether a `NODE_ENV` value means development.
 *
 * It is set and does not start with `prod`, so `production` and `prod` are not development.
 * An unset value (a browser with no `process`) is not development either.
 */
export function isDevNodeEnv(nodeEnv: string | undefined): boolean {
	return !!nodeEnv && !nodeEnv.startsWith('prod')
}
