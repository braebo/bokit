<script lang="ts">
	import { IN, OUT } from '$lib/utils/transitions'
	import { fly, fade } from 'svelte/transition'
</script>

<br-md />

<center in:fly|global={{ ...IN, y: 5 }} out:fade={OUT}>
	<a href="mailto:contact@example.com">contact</a>
</center>
