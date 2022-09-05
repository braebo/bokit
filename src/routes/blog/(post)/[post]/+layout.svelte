<section>
	<a href="/blog" style:padding="2rem">
		⬅
		<span>Back</span>
	</a>
	<slot />
</section>

<style>
	section {
		position: relative;
		max-width: min(40rem, 90vw);
	}

	a {
		position: sticky;
		top: 0;

		width: fit-content;
		padding: 1rem !important;
		border-radius: var(--radius);

		text-decoration: none;

		transition: opacity 0.25s;
		opacity: 0.5;

		transform: translate(-8rem);
	}

	a:hover {
		opacity: 1;
		/* background-color: var(--light-d); */
		color: var(--dark);
		outline: 1px solid var(--light-d);
	}

	span {
		opacity: 0;

		transition: opacity 0.25s;
	}

	a:hover span {
		opacity: 1;
	}
</style>
