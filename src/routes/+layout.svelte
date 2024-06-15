<script lang="ts">
	import 'greset/greset.css'

	import Header from '$lib/components/Header/Header.svelte'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import { Fractils, theme } from 'fractils'
	import { browser } from '$app/environment'
	import { parse } from 'cookie'
	import '../styles/app.scss'

	// Keeps the theme cookie in sync.
	$: if (browser && $theme !== parse(document.cookie).theme) {
		document.cookie = `theme=${$theme}`
	}
</script>

<PageTitle />

<Fractils />

<Header />

<div class="br-md"></div>

<slot />
