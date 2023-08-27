import { awesomePugPre, awesomePugPost } from 'svelte-awesome-pug'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		awesomePugPre,
		preprocess({
			postcss: true
		}),
		awesomePugPost,
		mdsvex(mdsvexConfig)
	],
	kit: { adapter: adapter() },
	vitePlugin: {
		inspector: {
			toggleButtonPos: 'bottom-left',
			toggleKeyCombo: 'meta-shift',
			showToggleButton: 'active',
			holdMode: true
		}
	}
}

export default config
