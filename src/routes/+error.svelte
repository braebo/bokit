<script lang="ts">
	import { dev } from '$app/environment'
	import { page } from '$app/stores'

	if (dev) console.log($page.error)
</script>

<template lang="pug">

	h1 {$page.status}

	+if('dev')
		.error
			pre.message {$page.error.message}
			pre.stack {$page.error.stack}

</template>

<style lang="scss">
	h1 {
		margin: 15vh auto 0;

		color: var(--warn);

		font-size: 10rem;
		font-weight: 100;
	}

	.error {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin-top: 10vh;
		text-align: center;

		pre {
			max-width: 90vw;

			text-align: left;
			line-height: 1.5rem;
		}

		.message {
			width: max-content;
			height: max-content;
			margin: 1rem auto;
			padding: 1rem;

			color: var(--fg-d);
			background: transparent;
			border: 1px solid var(--bg-d);
			border-radius: var(--radius-lg);
		}

		.stack {
			color: rgba(var(--fg-d-rgb), 0.5);
			max-height: 40vh;
			overflow-y: auto;
		}

		::-webkit-scrollbar {
			background-color: var(--bg-a);
			width: 10px;
			height: 10px;
		}
		::-webkit-scrollbar-thumb {
			background-color: rgba(var(--bg-d-rgb), 0.5);
			border-radius: 5px;
		}
		::-webkit-scrollbar-track {
			background-color: rgba(var(--bg-d-rgb), 0.1);
		}
		::-webkit-scrollbar-corner {
			background-color: rgba(var(--bg-d-rgb), 0.1);
		}
	}
</style>
