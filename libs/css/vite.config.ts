import { defineConfig } from 'vite'

export default defineConfig({
	optimizeDeps: {
		include: ['react/jsx-dev-runtime'],
	},
})
