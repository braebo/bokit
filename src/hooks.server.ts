import type { Handle } from '@sveltejs/kit'
import { parse } from 'cookie'

export const handle: Handle = ({ event, resolve }) => {
	const cookies = parse(event.request.headers?.get('cookie') || '')
	event.locals.theme = <'dark' | 'light' | 'system'>cookies.theme || 'dark'
	console.log('theme', event.locals.theme)

	return resolve(event, {
		transformPageChunk: (pageChunk) => {
			pageChunk.html = pageChunk.html.replace('%frackit.theme%', event.locals.theme)
			return pageChunk.html
		}
	})
}
