import type { create_ssr_component } from 'svelte/internal'
import type { PageLoad } from './$types'

import { browser } from '$app/environment'

export const prerender = true

interface SvelteSSRComponent {
	default: ReturnType<typeof create_ssr_component>
	metadata: Post['meta']
}

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob<SvelteSSRComponent>('/src/routes/blog/**/*.md', {
		eager: true
	})

	const matchPath = `/src/routes/blog/(post)/${params.post.split('.')[0]}/${params.post}.md`

	const match = modules[matchPath]

	// MDSvex plugin doesn't transform the image path on the browser so I'm doing it here
	if (browser) {
		match.metadata.thumbnail = `/src/routes/blog/(post)/${params.post.split('.')[0]}/${match.metadata.thumbnailImg}`
	}

	return {
		meta: {
			...match.metadata
		},
		component: match.default
	}
	return {}
}
