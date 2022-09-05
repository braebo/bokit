<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

{#if data.meta?.thumbnail}
	<div class="img">
		<img src={data.meta.thumbnail} alt={data.meta.alt} />
	</div>
{/if}

<svelte:component this={data.component} />

{#if !data.component}
	<h1>
		page not found
		<span>¯\_(ツ)_/¯</span>
	</h1>
{/if}

<style>
	h1 {
		position: relative;
	}

	img {
		width: 640px;
		height: 427px;
	}

	span {
		color: var(--light-d);
		font-size: 1rem;
		position: absolute;
		inset: 4rem 0 0 0;
		margin: auto;
		width: max-content;
	}
</style>
