<script lang="ts">
	import { clickOutside, mobile, ThemeToggle } from 'fractils'
	import PageFill from './PageFill.svelte'
	import { fly } from 'svelte/transition'
	import Burger from './Burger.svelte'
	import { getContext } from 'svelte'
	import { page } from '$app/stores'

	const links = getContext('links')
	export let showMenu = false
</script>

<template lang="pug">

	+if('$mobile')

		.burger(use:clickOutside!='{() => showMenu = false}')
			Burger(bind:showMenu)
		PageFill(bind:showMenu)
		#theme.corner
			ThemeToggle

		+if('showMenu')

			nav(
				class:showMenu
				class:mobile='{$mobile}'
			)

				ul

					+each('links as [path, title], i (title)')

						li(
							class:active='{$page.url.pathname === path}'
							transition:fly='{{ y: -10 - (5 * i) }}'
						)

							a(
								sveltekit:prefetch
								href='{path}'
							) {title}

</template>

<style>
	nav {
		display: flex;
		justify-content: center;

		padding: 2rem;
	}

	ul {
		position: fixed;
		inset: 0;
		top: -50vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		margin: auto;

		z-index: 25;
	}

	li {
		list-style: none;

		color: var(--dark-a);
	}

	a {
		display: flex;
		align-items: center;

		height: 100%;

		color: currentColor;

		font-size: 2rem;
		font-weight: 700;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 10%;

		transition: color 0.15s linear;
	}

	a:hover {
		color: var(--brand-a);

		text-decoration: none;
	}

	.active {
		color: var(--brand-a);
	}
</style>
