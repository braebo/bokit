<script lang="ts">
	import type { PageData } from './$types'
	import Card from './Card.svelte'

	export let data: PageData
</script>

<section>
	<h1 class="center">Posts</h1>

	<div class="br-md" />

	<ul>
		{#each data.posts as post, i}
			<Card {post} />
		{/each}
	</ul>
</section>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
</style>
