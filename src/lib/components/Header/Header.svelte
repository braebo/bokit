<script lang="ts">
	import HomeIcon from '$lib/graphics/HomeIcon.svelte'
	import { mobile, ThemeToggle } from 'fractils'
	import { setContext } from 'svelte'
	import { Nav } from './Nav'

	setContext('links', [
		['/', 'Home'],
		['/about', 'About']
	])
</script>

<template lang="pug">

	header

		#home.corner
			a(href='/')
				HomeIcon

		Nav

		+if('!$mobile')
			#theme.corner(class:mobile='{$mobile}')
				ThemeToggle

</template>

<style lang="sass">
	header
		display: flex
		justify-content: space-between

		width: 100vw
		height: 2.5rem

		z-index: 50


	.corner
		display: flex
		position: relative
		align-items: center

		width: 2rem
		margin: 2rem 1.4rem


	#theme
		position: relative

		margin-right: 0.75rem
		
		font-size: 1.25rem

		filter: saturate(0)

		z-index: 30

		&.mobile
			right: 4rem
</style>
