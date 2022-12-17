<script lang="ts">
	import type { PageData } from './$types'

	import 'greset/greset.css'

	import { onMount, onDestroy } from 'svelte'
	import { Fractils, theme } from 'fractils'
	import { browser } from '$app/environment'
	import { Header } from '$lib/components'
	import { pageTitle } from '$lib/utils'
	import { page } from '$app/stores'
	import { parse } from 'cookie'
	import '../styles/app.scss'

	export let data: PageData
	let _theme = data.theme

	// Refreshes the page title on navigation
	$: title = pageTitle($page.url.pathname)

	// Keeps the theme cookie in sync
	$: if (browser && $theme !== parse(document.cookie).theme) {
		document.cookie = `theme=${$theme}`
	}
</script>

<template lang="pug">

	svelte:head
		title Frackit · {title}

	Fractils

	Header

	.br-md

	slot

</template>
