import type { Theme } from './themer.types'

import { Logger } from '$lib/utils/logger/logger'
import { vanilla } from './themes/themes'
import { parse } from 'cookie'
import { dim, gr } from '$lib/utils/logger/logger-colors'

type Preference = 'dark' | 'light' | 'system'

/**
 * Options for the {@link Themer} class.
 */
interface ThemerOptions {
	/**
	 * A default fallback for when local/cookie storage are unset/disabled.
	 * @default 'dark'
	 */
	defaultMode: 'light' | 'dark' | 'system'

	/**
	 * The key to use in local/cookie storage.  If `false`, storage will be
	 * disabled.
	 * @default 'themer-mode'
	 */
	storage: string | false
}

/**
 * A theme manager that handles theme preferences and system changes.
 */
class Themer {
	activeTheme = $state<Theme>(vanilla)
	#preference = $state<'light' | 'dark' | 'system'>('system')
	mode = $derived.by(() => this.#resolveMode())
	colors = $derived.by(() =>
		Object.fromEntries(Object.entries(this.activeTheme.colors).map(([k, v]) => [k, this.#resolveLightDark(v)])),
	)
	themes = { vanilla } satisfies Record<string, Theme>

	css?: CSSStyleSheet

	dispose?: () => void

	/**
	 * Whether storage is enabled for the theme preference.
	 */
	#storage: boolean
	/**
	 * Whether `init` has been called at least once.
	 */
	#initialized = false
	/**
	 * The key to use in local/cookie storage.
	 */
	#storageKey = 'theme'
	/**
	 * Used for OS-level preference change events.
	 */
	#prefersLight?: MediaQueryList

	#logger = new Logger('Themer', { fg: 'slategray' })

	constructor(options?: ThemerOptions) {
		this.#storage = options?.storage !== false

		this.preference = this.#resolveStorage(options?.defaultMode ?? 'dark')

		// if (globalThis.window) {
		// 	this.init()
		// }

		// this.dispose = $effect.root(() => {
		// 	$effect(() => {
		// 		this.applyTheme()
		// 	})
		// })
	}

	get preference() {
		return this.#preference
	}
	set preference(pref: 'light' | 'dark' | 'system') {
		this.#preference = pref
		this.#logger.info(gr('set preference:'), pref)
		this.applyTheme()
	}

	/**
	 * Runs once automatically if the `window` object is available, but can be called manually if
	 * needed without consequence.
	 */
	init() {
		if (!globalThis.window) {
			throw new Error("Can't initialize Themer on the server.")
		}
		this.#logger.info(Logger.fn('init'))

		if (this.#initialized) return
		this.#initialized = true

		this.#prefersLight = globalThis.window.matchMedia('(prefers-color-scheme: light)')

		this.#prefersLight.removeEventListener('change', this.#onSystemChange)
		this.#prefersLight.addEventListener('change', this.#onSystemChange)

		globalThis.window.removeEventListener('storage', this.#onStorageChange)
		globalThis.window.addEventListener('storage', this.#onStorageChange)

		this.css = new CSSStyleSheet()
		document.adoptedStyleSheets.push(this.css)

		this.applyTheme()
	}

	/**
	 * Applies the active theme variables to the themer's adopted style sheet, and sets the root
	 * `color-scheme` style property to the current mode.  This method is called automatically
	 * whenever the theme or mode changes.
	 */
	applyTheme = () => {
		if (!this.css) return
		this.#logger.group('applyTheme')
		this.#logger.info({ preference: this.preference, mode: this.mode })

		let str = ':root {\n'
		for (const [k, v] of Object.entries(this.activeTheme.colors)) {
			// str += `\t${k}: ${this.resolveLightDark(v)};\n`
			str += `\t${k}: ${v};\n`
		}
		str += '}'

		this.css.replaceSync(str)

		document.documentElement.style.setProperty('color-scheme', this.mode)
		document.documentElement.setAttribute('theme', this.mode)

		if (this.#storage) {
			globalThis.localStorage?.setItem(this.#storageKey, this.preference)
			this.#logger.info(gr('saved preference to localStorage'))

			if (typeof document !== 'undefined') {
				document.cookie = `${this.#storageKey}=${this.mode}; path=/;`
				this.#logger.info(gr('saved mode to cookie'))
			}
		}

		this.#logger.groupEnd()
	}

	/**
	 * Resolves a light-dark CSS function based on the current theme mode.
	 * @param value The light-dark CSS function as a string
	 * @returns The resolved value based on the current mode
	 */
	#resolveLightDark(value: string): string {
		const lightDarkRegex = /light-dark\((.*?),(.*?)\)/
		const match = value.match(lightDarkRegex)

		if (match) {
			const [, lightValue, darkValue] = match
			return this.mode === 'light' ? lightValue.trim() : darkValue.trim()
		}

		return value // Return the original value if it's not a light-dark function
	}

	/**
	 * Retrieves the preference from local/cookie storage, falling back to the
	 * provided default if storage is disabled, unavailable, or unset.
	 */
	#resolveStorage(fallback: Preference): Preference {
		if (!this.#storage || !globalThis.localStorage) return fallback

		try {
			const localPref = localStorage.getItem(this.#storageKey)
			if (Themer.#isPref(localPref)) return localPref

			const cookiePref = parse(globalThis.document?.cookie)[this.#storageKey]
			if (Themer.#isPref(cookiePref)) return cookiePref
		} catch (e) {
			console.error(e)
			return fallback
		}

		return fallback
	}

	#resolveMode(preference = this.#preference): 'light' | 'dark' {
		return preference === 'system' ? (this.#prefersLight?.matches ? 'light' : 'dark') : preference
	}

	#onSystemChange = (_: MediaQueryListEvent) => {
		this.preference = 'system'
	}

	#onStorageChange = (e: StorageEvent) => {
		if (e.key === this.#storageKey) {
			this.preference = e.newValue as Preference
		}
	}

	static #isPref(thing: any): thing is Preference {
		return ['light', 'dark', 'system'].includes(thing)
	}
}

/**
 * A document-wide theme manager.
 */
export const themer = new Themer()
