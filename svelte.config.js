import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import mdsvexConfig from './mdsvex.config.mjs'
import adapter from '@sveltejs/adapter-auto'
import shiki from './shiki.config.mjs'
import { mdsvex } from 'mdsvex'

const ignoreWarnings = ['element_invalid_self_closing_tag']

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [shiki(), vitePreprocess({ script: true }), mdsvex(mdsvexConfig)],
	kit: { adapter: adapter() },
	vitePlugin: {
		inspector: {
			toggleButtonPos: 'bottom-left',
			toggleKeyCombo: 'meta-alt-control',
		},
	},
	onwarn: (warning, handler) => {
		if (ignoreWarnings.includes(warning.code)) return
		handler(warning)
	},
	warningFilter: (warning) => {
		return !ignoreWarnings.includes(warning.code)
	},
}

export default config
