import { page } from '$app/stores'
import { get } from 'svelte/store'

/**
 * Parses the url pathname and returns just the capitalized page title.
 * @param path - The current url pathname.
 * @example
 * ```svelte
 * <svelte:head>
 *   <title> {pageTitle($page.url.pathname)} <title>
 * </svelte:head>
 * ```
 */
export const pageTitle = (path: string) => {
	// Use status code if there's an error
	if (get(page).error) return get(page).status

	if (path === '/') return 'Home'

	const title = path.split('/')[1]
	const capilized = title.charAt(0).toUpperCase() + title.slice(1)

	return String(capilized) || ''
}
