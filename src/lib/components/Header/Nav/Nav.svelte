<script lang="ts">
	import { setContext } from 'svelte'
	import { mobile } from 'fractils'

	import Mobile from './Mobile/Mobile.svelte'
	import Desktop from './Desktop.svelte'

	setContext('links', [
		['/elements', 'Elements'],
		['/about', 'About'],
		['/contact', 'Contact'],
	])
</script>

<template lang="pug">

	+if('$mobile')

		Mobile

		+else
			Desktop

</template>
