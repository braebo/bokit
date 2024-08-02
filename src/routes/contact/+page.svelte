<script lang="ts">
	import { fly, fade } from 'svelte/transition'
	import { IN, OUT } from '$lib/utils'
</script>

<div class="br-md"></div>

<center in:fly|global={{ ...IN, y: 5 }} out:fade={OUT}>
	<a href="mailto:contact@example.com">contact</a>
</center>
