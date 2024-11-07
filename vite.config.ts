import { sveltekit } from '@sveltejs/kit/vite'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		// silence warnings: https://sass-lang.com/documentation/js-api/#md:legacy-api
		preprocessorOptions: { scss: { api: 'modern' } },
		postcss: { plugins: [autoprefixer()] },
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
})
