<script lang="ts">
	import 'greset/greset.css'

	import { Header } from '$lib/components'
	import { pageTitle } from '$lib/utils'
	import { Fractils } from 'fractils'
	import { page } from '$app/stores'
	import '../styles/app.scss'

	// Refreshes the page title on navigation
	$: title = pageTitle($page.url.pathname)
</script>

<template lang="pug">

	svelte:head
		title Frackit · {title}

	Fractils

	Header

	.br-md

	slot

</template>
