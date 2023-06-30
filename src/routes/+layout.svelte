<script lang="ts">
	import type { PageData } from './$types'

	import 'greset/greset.css'

	import { Header, PageTitle } from '$lib/components'
	import { onMount, onDestroy } from 'svelte'
	import { Fractils, theme } from 'fractils'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { parse } from 'cookie'
	import '../styles/app.scss'

	// Keeps the theme cookie in sync.
	export let data: PageData
	let _theme = data.theme
	$: if (browser && $theme !== parse(document.cookie).theme) {
		document.cookie = `theme=${$theme}`
	}
</script>

<template lang="pug">

	PageTitle

	Fractils

	Header

	.br-md

	slot

</template>
