import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
	output: 'static',
	base: '/just-web-foundation/',
	outDir: '../../docs',
	trailingSlash: 'always',
	site: 'https://justland.github.io',
	vite: {
		plugins: [tailwindcss()],
		build: {
			emptyOutDir: false
		}
	}
})
