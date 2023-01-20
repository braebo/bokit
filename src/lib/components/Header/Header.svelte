<script lang="ts">
	import HomeIcon from '$lib/components/Header/HomeIcon.svelte'
	import { mobile, ThemeToggle } from 'fractils'
	import { page } from '$app/stores'
	import Nav from './Nav/Nav.svelte'
</script>

<template lang="pug">

	header

		#home.corner
			a(href='/' class:active='{$page.url.pathname === "/"}')
				HomeIcon

		Nav

		+if('!$mobile')
			#theme.corner(class:mobile={$mobile})
				ThemeToggle

</template>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;

		z-index: 50;

	}
	
	.corner {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;

		width: 3rem;
		height: 3rem;
	}

	#theme {
		position: relative;
		filter: saturate(0);

		z-index: 30;

		transition: filter 0.2s ease-in-out;
		&:hover {
			filter: saturate(1);
		}
	}
	
	.mobile {
		right: 4rem;
	}
	
	.active {
		color: var(--brand-a);
	}
</style>
