import { describe, expect, it } from 'vitest'
import { isDevNodeEnv } from './is-dev-node-env.ts'

describe('isDevNodeEnv', () => {
	it('is false when NODE_ENV is not set', () => {
		expect(isDevNodeEnv(undefined)).toBe(false)
		expect(isDevNodeEnv('')).toBe(false)
	})

	it('is false when NODE_ENV starts with prod', () => {
		expect(isDevNodeEnv('production')).toBe(false)
		expect(isDevNodeEnv('prod')).toBe(false)
	})

	it('is true for any other NODE_ENV', () => {
		expect(isDevNodeEnv('development')).toBe(true)
		expect(isDevNodeEnv('test')).toBe(true)
	})

	it('uses a custom isProduction comparison', () => {
		const options = { isProduction: (nodeEnv: string) => nodeEnv === 'live' }
		expect(isDevNodeEnv('live', options)).toBe(false)
		expect(isDevNodeEnv('production', options)).toBe(true)
		expect(isDevNodeEnv(undefined, options)).toBe(false)
	})
})
