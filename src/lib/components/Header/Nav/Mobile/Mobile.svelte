<script lang="ts">
	import { clickOutside, mobile, ThemeToggle } from 'fractils'
	import { fly, fade } from 'svelte/transition'
	import PageFill from './PageFill.svelte'
	import Burger from './Burger.svelte'
	import { getContext } from 'svelte'
	import { page } from '$app/stores'

	const links = getContext('links')
	export let showMenu = false
</script>

<template lang="pug">

		.burger(
			use:clickOutside!='{{ whitelist: ["wrapper"] }}'
			on:outclick!='{() => showMenu = false}'
		)
			Burger(bind:showMenu)

		PageFill(bind:showMenu)

		+if('showMenu')

			#theme.corner
				ThemeToggle

			nav(
				class:showMenu
				class:mobile='{$mobile}'
			)

				ul

					+each('links as [path, title], i (title)')

						li(
							class:active='{$page.url.pathname === path}'
							in:fly='{{ y: -10 - (5 * i) }}'
							out:fade='{{ duration: 50 }}'
						)

							a(
								data-sveltekit-prefetch
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

		color: var(--fg-a);
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

	#theme {
		position: fixed;
		top: 1rem;
		right: 5rem;
		z-index: 45;

		filter: saturate(0);
	}
</style>
