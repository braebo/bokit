<script>
	export let showMenu = false
</script>

<div class="page-fill" class:showMenu />

<style>
	.page-fill {
		position: fixed;
		top: 0.5rem;
		right: 1rem;

		/* min-height: 0vh; */
		width: 50px;
		height: 50px;

		background-color: var(--bg-b);
		border-radius: 100%;
		opacity: 0;
		/* backdrop-filter: blur(30px); */

		transition: transform 0.5s cubic-bezier(0.07, 1.05, 0.56, 0.91), opacity 0.5s ease-out;
		pointer-events: none;
		z-index: 20;
		/* transform: translate3d(0px, -100vh, 0px); */
		transform: scale(0.01);
		/* opacity: 1; */
	}

	.page-fill.showMenu {
		opacity: 1;
		/* min-height: 100vh; */
		transition: transform 1s cubic-bezier(0.2, 0.25, 0, 1), opacity 0.5s ease;
		transform: scale(30);
		/* transform: translate3d(0px, 0px, 0px); */
	}
</style>
