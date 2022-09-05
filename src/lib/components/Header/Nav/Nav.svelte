<script lang="ts">
	import { mobile } from 'fractils'

	import Mobile from './Mobile/Mobile.svelte'
	import Desktop from './Desktop.svelte'

	let showMenu = false
</script>

<template lang="pug">

	+if('$mobile')

		Mobile(bind:showMenu)

		+else
			Desktop

</template>
