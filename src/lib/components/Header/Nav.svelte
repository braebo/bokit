<script lang="ts">
	import { page } from '$app/stores'

	const links = [
		['/', 'Home'],
		['/about', 'About']
	]
</script>

<template lang="pug">

	nav
		ul
			+each('links as [path, title], i (title)')

				li(class:active='{$page.url.pathname === path}')

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
		display: flex;
		gap: 2rem;

		z-index: 1;
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

		font-size: 1.2rem;
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
