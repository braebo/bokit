<script lang="ts">
	import { device } from '$lib/utils/device.svelte'
	import Mobile from './Mobile/Mobile.svelte'
	import Desktop from './Desktop.svelte'

	const links = [
		['/elements', 'Elements'],
		['/about', 'About'],
		['/contact', 'Contact'],
	] as [path: string, title: string][]
</script>

{#if device.mobile}
	<Mobile {links} />
{:else}
	<Desktop {links} />
{/if}
