<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import { themer } from '$lib/themer/themer.svelte'
	import { device } from '$lib/utils/device.svelte'
	import { onMount } from 'svelte'
	import '../styles/app.scss'

	onMount(() => {
		device.init()
		themer.init()
	})
</script>

<PageTitle />

<Header />

<br-md />

<slot />
