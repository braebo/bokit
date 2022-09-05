import type { PageServerLoad } from './$types'

export const prerender = true

export const load: PageServerLoad = async () => {
	console.clear()
	// Relative paths broken for now: https://github.com/sveltejs/kit/issues/6239
	// Fix was merged but not released: https://github.com/vitejs/vite/pull/9842
	const modules = import.meta.glob<Post['meta']>(`/src/routes/blog/**/*.md`, { import: 'metadata', eager: true })

	let posts: Post[] = []
	for (const path in modules) {
		const fileName = path.split('/').pop()?.split('.').shift()
		const metadata = modules[path]

		if (metadata.thumbnailImg) {
			metadata.thumbnail = path.substring(0, path.lastIndexOf('/')) + '/' + metadata.thumbnailImg.split('/')[1]
		}

		if (fileName) {
			posts.push({
				path: fileName,
				meta: {
					...metadata
				}
			})
		}
	}

	return {
		posts
	}
}
