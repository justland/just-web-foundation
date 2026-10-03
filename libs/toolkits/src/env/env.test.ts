import { describe, expect, it } from 'vitest'
import { isDev } from '../env.ts'
import { isDev as isDevDevelopment } from './development.ts'
import { isDev as isDevProduction } from './production.ts'

describe('isDev', () => {
	it('is true in the development variant', () => {
		expect(isDevDevelopment).toBe(true)
	})

	it('is false in the production variant', () => {
		expect(isDevProduction).toBe(false)
	})

	it('falls back to process.env.NODE_ENV when no condition applies', () => {
		// Vitest sets NODE_ENV to `test`, which is not production.
		expect(
			(globalThis as { process?: { env?: { NODE_ENV?: string } } }).process?.env?.NODE_ENV
		).toBe('test')
		expect(isDev).toBe(true)
	})
})
