import type { BaseColors, Theme, ThemeColors, ThemeDefinition } from './themer.types'
import { deep_merge } from '$lib/utils/deep-merge'
import { DEFAULT_THEME, vanilla } from './themes/themes'

/**
 * Merges a partial theme definition into the base theme.
 * @param def - A partial theme definition to resolve into a full {@link Theme} object.
 */
export function resolveTheme(def: ThemeDefinition) {
	// Merge the new definition with vanilla as the base
	const merged = deep_merge<ThemeDefinition>({}, DEFAULT_THEME, def)

	const dark_a = getColor('dark-a')
	const dark_b = getColor('dark-b')
	const dark_c = getColor('dark-c')
	const dark_d = getColor('dark-d')
	const dark_e = getColor('dark-e')
	const light_a = getColor('light-a')
	const light_b = getColor('light-b')
	const light_c = getColor('light-c')
	const light_d = getColor('light-d')
	const light_e = getColor('light-e')

	const colors: ThemeColors = {
		'--theme-a': light_dark('theme-a'),
		'--theme-b': light_dark('theme-b'),
		'--theme-c': light_dark('theme-c'),
		'--dark-a': dark_a,
		'--dark-b': dark_b,
		'--dark-c': dark_c,
		'--dark-d': dark_d,
		'--dark-e': dark_e,
		'--light-a': light_a,
		'--light-b': light_b,
		'--light-c': light_c,
		'--light-d': light_d,
		'--light-e': light_e,
		'--bg-a': `light-dark(${light_a}, ${dark_a})`,
		'--bg-b': `light-dark(${light_b}, ${dark_b})`,
		'--bg-c': `light-dark(${light_c}, ${dark_c})`,
		'--bg-d': `light-dark(${light_d}, ${dark_d})`,
		'--bg-e': `light-dark(${light_e}, ${dark_e})`,
		'--fg-a': `light-dark(${dark_a}, ${light_a})`,
		'--fg-b': `light-dark(${dark_b}, ${light_b})`,
		'--fg-c': `light-dark(${dark_c}, ${light_c})`,
		'--fg-d': `light-dark(${dark_d}, ${light_d})`,
		'--fg-e': `light-dark(${dark_e}, ${light_e})`,
	}

	const theme = {
		title: def.title,
		colors,
	} satisfies Theme

	return theme

	function getColor(str: keyof BaseColors, mode: 'light' | 'dark' | 'base' = 'base'): string {
		const def = merged.colors.base[str] ?? DEFAULT_THEME.colors.base[str]

		if (!def) throw new Error(`Missing color base definition: ${str}`)

		if (mode === 'base') return def

		if (mode === 'dark') {
			return merged.colors.dark?.[str] ?? def
		}

		if (mode === 'light') {
			return merged.colors.light?.[str] ?? def
		}

		throw new Error(`Invalid mode: ${mode}`)
	}

	function light_dark(color: string) {
		return `light-dark(${getColor(color, 'light')}, ${getColor(color, 'dark')})`
	}
}
