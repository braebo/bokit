<script lang="ts">
	import HomeIcon from '$lib/components/Header/HomeIcon.svelte'
	import { device } from '$lib/utils/device.svelte'
	import ThemeSwitch from '../ThemeSwitch.svelte'
	import { page } from '$app/stores'
	import Nav from './Nav/Nav.svelte'
</script>

<header>
	<div class="home">
		<a href="/" class:active={$page.url.pathname === '/'}>
			<HomeIcon />
		</a>
	</div>

	<Nav />

	{#if !device.mobile}
		<div class="theme">
			<ThemeSwitch />
		</div>
	{/if}
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		height: 4rem;
		padding: 0 1.5rem;

		z-index: 50;
	}

	.theme {
		position: relative;
		z-index: 30;
	}

	.active {
		color: var(--theme-a);
	}
</style>
