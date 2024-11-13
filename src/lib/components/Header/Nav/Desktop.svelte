<script lang="ts">
	import { page } from '$app/stores'

	const {
		links,
		showMenu = $bindable(false),
	}: {
		links: [path: string, title: string][]
		showMenu?: boolean
	} = $props()
</script>

<nav class:showMenu>
	<ul>
		{#each links as [path, title], i (title)}
			<!-- <li class:active={$page.url.pathname === path} transition:fly|global={{ y: -10 - 5 * i }}> -->
			<li class:active={$page.url.pathname === path} style:animation-delay={`${links.length * 0.1 - (i % 2) * 0.1}s`}>
				<a data-sveltekit-prefetch href={path}>{title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		position: absolute;
		inset: 0;

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

		width: 4rem;

		color: var(--fg-a);
		opacity: 0;
		transform: translateY(-5px);
		animation: fly 2s cubic-bezier(0.23, 1, 0.320, 1) 0.1s forwards;
	}
	@keyframes fly {
		from {
			opacity: 0;
			transform: translateY(-5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100%;

		color: currentColor;

		font-size: var(--font-sm);
		// font-variation-settings:
		// 	'wght' 300,
		// 	'wdth' 97;
		font-variation-settings:
			'wght' 500,
			'wdth' 97;
		text-transform: uppercase;
		text-decoration: none;
		// letter-spacing: 2.75px;

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
