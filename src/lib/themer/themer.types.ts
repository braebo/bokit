/**
 * A fully resolved theme with all variables applied.
 */
export type Theme = {
	title: string
	colors: ThemeColors
}

/**
 * A flat collection of all color variables in a resolved theme.
 */
export type ThemeColors = BaseColors & ModeColors

/**
 * Static colors that are used as a base for all themes and modes.
 */
export interface BaseColors {
	[key: string]: string
	'--theme-a': string
	'--theme-b': string
	'--theme-c': string

	'--dark-a': string
	'--dark-b': string
	'--dark-c': string
	'--dark-d': string
	'--dark-e': string

	'--light-a': string
	'--light-b': string
	'--light-c': string
	'--light-d': string
	'--light-e': string
}

/**
 * Mode-specific colors that use CSS `light-dark()` to adapt to the current `color-scheme`.
 */
export interface ModeColors {
	[key: string]: string
	'--bg-a': string
	'--bg-b': string
	'--bg-c': string
	'--bg-d': string
	'--bg-e': string

	'--fg-a': string
	'--fg-b': string
	'--fg-c': string
	'--fg-d': string
	'--fg-e': string
}

/**
 * The minimum required definition for a theme.
 */
export type ThemeDefinition = {
	title: string
	/**
	 * All themes come with a default color definition that can be overridden with partials.
	 *
	 * All shades have light and dark variants, allowing all other colors to adapt to the mode.
	 *
	 * The `light` and `dark` variables are automatically generated from the `base` colors
	 * if not overridden manually.
	 */
	colors: {
		/**
		 * Base colors that are used as a base for all themes and modes.
		 */
		base: Partial<BaseColors>
		/**
		 * Optional dark-mode overrides.
		 */
		dark?: Partial<ModeColors> & Record<string, string>
		/**
		 * Optional light-mode overrides.
		 */
		light?: Partial<ModeColors> & Record<string, string>
	}
}
