<script lang="ts">
	import { page } from '$app/stores'
	import { Header } from '$lib/ui'
	import 'greset/css/greset.css'
	import '../styles/app.scss'

	const pageTitle = (path: string) => {
		if (path === '/') return 'Home'
		const title = path.split('/')[1]
		return title.charAt(0).toUpperCase() + title.slice(1)
	}
</script>

<template lang="pug">

	svelte:head
		title {pageTitle($page.url.pathname)} · Frackit

	Header

	slot

</template>
