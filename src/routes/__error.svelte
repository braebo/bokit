<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit'

	export function load({ error, status }: { error: Error; status: number }) {
		return {
			props: {
				err: `${status}: ${error.message}`
			}
		}
	}
</script>

<script lang="ts">
	export let err: string
</script>

<h1 style="padding-top: 10rem;">404</h1>
<p style="text-align: center;">page not found</p>

<pre>{err}</pre>

<style>
	pre {
		position: absolute;
		inset: auto 0 1rem 0;

		width: max-content;
		margin: 1rem auto;
		padding: 1rem;

		background: transparent;
		border: 1px solid var(--light-d);
		color: var(--light-d);
	}
</style>
