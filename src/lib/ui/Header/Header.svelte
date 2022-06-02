<script lang="ts">
	import HomeIcon from '$lib/graphics/HomeIcon.svelte'
	import { ThemeToggle } from 'fractils'
	import Nav from './Nav.svelte'
</script>

<template lang="pug">

	header

		#home.corner
			a(href='/')
				HomeIcon

		Nav

		#theme.corner
			ThemeToggle

</template>

<style>
	header {
		display: flex;
		justify-content: space-between;

		width: 100vw;
		height: 2.5rem;

		z-index: 50;
	}

	.corner {
		display: flex;
		position: relative;
		align-items: center;

		width: 2rem;
		margin: 2rem 1.4rem;
	}

	#theme {
		margin-right: 0.75rem;

		font-size: 1.25rem;
	}
</style>
