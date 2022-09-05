<script lang="ts">
	import { onMount } from 'svelte'
	export let post: Post

	const src = post.meta.thumbnail || ''
	const alt = post.meta.alt || post.meta.title || ''

	// If CSR is enabled, we can fade in the image on load.
	let opacity = 1
	onMount(() => (opacity = 0))
</script>

<a class="card" href="/blog/{post.path}" data-sveltekit-prefetch>
	<h2 class="title">{post.meta.title}</h2>

	<img style:opacity src="{src}?t={Date.now()}" on:load={() => (opacity = 1)} {alt} />
</a>

<style>
	.card {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 450px;
		height: 150px;
		padding: 0;

		overflow: hidden;
	}

	a {
		text-decoration: none;
	}

	.title {
		margin: auto;
		font-size: var(--font-md);
		word-spacing: 1px;
	}

	img {
		height: 100%;
		width: 50%;
		transition: 0.5s;
		clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%);
	}

	.card:hover img {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}
</style>
