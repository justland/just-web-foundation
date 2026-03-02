import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [tailwindcss()],
	esbuild: {
		jsx: 'automatic'
	},
	resolve: {
		conditions: ['@just-web/toolkits-dev']
	},
	optimizeDeps: {
		include: ['react/jsx-dev-runtime']
	}
})
