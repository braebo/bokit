declare interface Post {
	path: string
	meta: {
		title: string
		date: string
		updated?: string
		thumbnailImg?: string
		thumbnail?: string
		alt?: string
		category?: string
	}
}
