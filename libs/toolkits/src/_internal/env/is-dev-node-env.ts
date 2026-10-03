export interface IsDevNodeEnvOptions {
	/** Whether a set `NODE_ENV` means production. Defaults to starting with `prod`. */
	isProduction?: ((nodeEnv: string) => boolean) | undefined
}

/** Whether `NODE_ENV` is set and not production. */
export function isDevNodeEnv(nodeEnv: string | undefined, options?: IsDevNodeEnvOptions): boolean {
	const isProduction = options?.isProduction ?? ((value: string) => value.startsWith('prod'))
	return !!nodeEnv && !isProduction(nodeEnv)
}
