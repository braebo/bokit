<script lang="ts">
	import { setContext } from 'svelte'

	import Mobile from './Mobile/Mobile.svelte'
	import Desktop from './Desktop.svelte'

	let showMenu = false

	setContext('links', [
		['/', 'Home'],
		['/about', 'About']
	])
</script>

<template lang="pug">

	<Desktop />

	<Mobile bind:showMenu />

</template>
