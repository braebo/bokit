<script lang="ts">
	import { fly } from 'svelte/transition'
	import { getContext } from 'svelte'
	import { page } from '$app/stores'

	const links = getContext('links')
	export let showMenu = false
</script>

<template lang="pug">

	nav(class:showMenu)
		ul
			+each('links as [path, title], i (title)')

				li(
					class:active='{$page.url.pathname === path}'
					transition:fly='{{ y: -10 - (5 * i) }}'
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
	}

	ul {
		display: flex;
		gap: 2rem;

		z-index: 1;
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

		font-size: var(--font-sm);
		font-weight: 300;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 0.25rem;

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
