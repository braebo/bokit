<script lang="ts">
	import { Header } from '$lib/components'
	import { pageTitle } from '$lib/utils'
	import 'greset/css/greset.css'
	import '../styles/app.scss'
</script>

<template lang="pug">

	svelte:head
		title Frackit · {pageTitle()}

	Header

	slot

</template>
