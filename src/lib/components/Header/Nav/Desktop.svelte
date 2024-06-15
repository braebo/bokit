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
					transition:fly|global='{{ y: -10 - (5 * i) }}'
				)

					a(
						data-sveltekit-prefetch
						href='{path}'
					) {title}

</template>

<style lang="scss">
	nav {
		display: flex;
		justify-content: center;

		pointer-events: none;
	}

	ul {
		display: flex;
		gap: 3rem;

		z-index: 1;
	}

	li {
		list-style: none;

		color: var(--fg-a);
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100%;

		color: currentColor;

		font-size: var(--font-sm);
		font-variation-settings:
			'wght' 300,
			'wdth' 97;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 2.75px;

		transition: 0.2s;
		pointer-events: all;
	}

	a:hover {
		text-decoration: none;

		font-variation-settings:
			'wght' 700,
			'wdth' 94.66;
	}

	.active {
		color: var(--theme-a);
		a {
			font-variation-settings:
				'wght' 700,
				'wdth' 94.66;
		}
	}
</style>
