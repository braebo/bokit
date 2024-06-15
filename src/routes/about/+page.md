<script>
	import { fadeOut, fadeIn } from '$lib/utils'
</script>

<section in:fadeIn out:fadeOut>

#### An opinionated starter template for Sveltekit

Pre-configured with:

-   [Auto Link Headings](https://github.com/rehypejs/rehype-autolink-headings)
-   Dynamic Page Title
-   Mobile Menu
-   [Autoprefixer](https://github.com/postcss/autoprefixer)
-   [Dark Mode](https://fractils.fractal-hq.com/#theme)
-   [Typescript](https://www.typescriptlang.org/)
-   [CSSNano](https://cssnano.co/)
-   [MDSvex](https://mdsvex.com/)
-   [Stylelint](https://stylelint.io/)
-   [Prettier](https://prettier.io/)
-   [Greset](https://github.com/ghostdevv/greset)
-   [SCSS](https://sass-lang.com/)
-   [Pug](https://github.com/pugjs/pug)

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
		margin: 1rem auto;
		max-width: min(100vw, 900px);
	}

	h4 {
		margin: 1rem auto 2rem auto;

		a {
			text-decoration: none;
		}
	}
</style>
