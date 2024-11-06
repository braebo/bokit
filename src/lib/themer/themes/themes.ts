import type { ThemeDefinition } from '../themer.types'

import { resolveTheme } from '../resolveTheme'

export const DEFAULT_THEME: ThemeDefinition = {
	title: 'vanilla',
	colors: {
		base: {
			'theme-a': '#57b1ff',
			'theme-b': '#ffcc8b',
			'theme-c': '#ff8ba9',
			'dark-a': '#0b0b11',
			'dark-b': '#15161d',
			'dark-c': '#1f202d',
			'dark-d': '#353746',
			'dark-e': '#474a5b',
			'light-a': '#ffffff',
			'light-b': '#dfe1e9',
			'light-c': '#babeca',
			'light-d': '#777d8f',
			'light-e': '#5f6377',
		},
		dark: {},
		light: {},
	},
}
Object.freeze(DEFAULT_THEME)

export const vanilla = resolveTheme(DEFAULT_THEME)

export const autumn = resolveTheme({
	title: 'autumn',
	colors: {
		base: {
			'theme-a': '#ff9a3d',
			'theme-b': '#ff5e5e',
			'theme-c': '#9b51e0',
		},
	},
})

export const neon = resolveTheme({
	title: 'neon',
	colors: {
		base: {
			'theme-a': '#00ff95',
			'theme-b': '#00e1ff',
			'theme-c': '#ff007c',
		},
	},
})

export const mellow = resolveTheme({
	title: 'mellow',
	colors: {
		base: {
			'theme-a': '#ff9a9e',
			'theme-b': '#fad0c4',
			'theme-c': '#f093fb',
		},
	},
})

export const cyberpunk = resolveTheme({
	title: 'cyberpunk',
	colors: {
		base: {
			'theme-a': '#00ff99',
			'theme-b': '#00c9a7',
			'theme-c': '#c964ff',
		},
	},
})

export const themes = {
	vanilla,
	autumn,
	neon,
	mellow,
	cyberpunk,
}
