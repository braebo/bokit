import { page } from '$app/stores'
import { get } from 'svelte/store'

/**
 * Gets the current page title based on the route name.
 */
export const pageTitle = (path: string = get(page).url.pathname) => {
	// Use status code if there's an error
	if (get(page).error) return get(page).status

	if (path === '/') return 'Home'

	const title = path.split('/')[1]
	const capilized = title.charAt(0).toUpperCase() + title.slice(1)

	return capilized || ''
}
