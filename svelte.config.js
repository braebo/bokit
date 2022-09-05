import mdsvexConfig from './mdsvex/mdsvex.config.js'
import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import fg from 'fast-glob'

// Get all of the blog post paths for prerendering.
const blog = fg.sync(['./src/routes/blog/**/*.md'])

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: vercel(),
		prerender: {
			entries: blog.map((entry) => entry.replace('./src/routes/blog/(post)', '/blog'))
		}
	},
	vitePlugin: {
		experimental: {
			// https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#inspector
			inspector: {
				toggleButtonPos: 'bottom-left',
				toggleKeyCombo: 'meta-shift',
				showToggleButton: 'always',
				holdMode: true
			}
		}
	}
}

export default config
