<script>
	import { OUT } from '$lib/utils/transitions'
	import { fade } from 'svelte/transition'
</script>

<section out:fade|global={OUT}>
	<h4>An opinionated starter template for Sveltekit</h4>

	<p>Pre-configured with:</p>

	<ul>
		<li><a href="https://github.com/rehypejs/rehype-autolink-headings">Auto Link Headings</a></li>
		<li>Dynamic Page Title</li>
		<li>Mobile Menu</li>
		<li><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a></li>
		<li><a href="https://fractils.fractal-hq.com/#theme">Dark Mode</a></li>
		<li><a href="https://www.typescriptlang.org/">Typescript</a></li>
		<li><a href="https://cssnano.co/">CSSNano</a></li>
		<li><a href="https://mdsvex.com/">MDSvex</a></li>
		<li><a href="https://stylelint.io/">Stylelint</a></li>
		<li><a href="https://prettier.io/">Prettier</a></li>
		<li><a href="https://github.com/ghostdevv/greset">Greset</a></li>
		<li><a href="https://sass-lang.com/">SCSS</a></li>
		<li><a href="https://github.com/pugjs/pug">Pug</a></li>
	</ul>

	<br />
</section>

<style lang="scss">
	p {
		max-width: min(100vw, 900px);
		margin: auto;
	}

	ul {
		margin: 1rem auto;
		width: 175px;
	}

	a {
		padding: 0 0.02rem;

		font-variation-settings: 'wght' 300;

		transition: 0.15s ease-in-out;
	}
	a:hover {
		padding: 0rem;
		font-variation-settings: 'wght' 400;
	}

	section {
		position: absolute;
		margin: 0 auto;
		inset: 0;
		top: 10rem;
		max-width: min(100vw, 900px);
		height: fit-content;
	}

	h4 {
		opacity: 0;
		margin: 1rem auto 2rem auto;
		animation: fall .75s cubic-bezier(.1,.85,.06,.98) forwards;
	}

	p {
		opacity: 0;
		animation: fall 1s cubic-bezier(.1,.85,.06,.98) 0.15s forwards;
	}

	@keyframes fall {
		from {
			opacity: 0;
			translate: 0 -20px;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	a {
		text-decoration: none;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			translate: 0 -10px;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	li {
		opacity: 0;
		animation: fadeIn 0.5s cubic-bezier(0.61, 0.02, 0.04, 1.43) forwards;
	}

	@for $i from 1 through 13 {
		li:nth-child(#{$i}) {
			animation-delay: #{($i * 0.1) - ($i * 0.075) + 0.2}s;
		}
	}
</style>
