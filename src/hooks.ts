import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		ssr: true, // disable SSR here for SPA
	})
	return response
}
