<script>
	import { fade, fly } from 'svelte/transition'
	import { IN, OUT } from '$lib/utils'
</script>

<div class="br-md" />

<div class="page">
	<section in:fly|global={{ ...IN, y: 7.5, duration: 300 }} out:fade|global={OUT}>
		<h1>H1</h1>
		<h2>H2</h2>
		<h3>H3</h3>
		<h4>H4</h4>
		<h5>H5</h5>
		<h6>H6</h6>

		<strong>bold</strong>

		<em>italic</em>

		<s>strikethrough</s>

		<ul>
			<li>
				list
				<ul>
					<li>
						list
						<ul>
							<li>list</li>
						</ul>
					</li>
					<li>
						list
						<ol>
							<li>list</li>
							<li>list</li>
						</ol>
					</li>
				</ul>
			</li>
		</ul>
	</section>

	<!-- <div class="divider"></div> -->

	<section in:fly|global={{ ...IN, y: 7.5, duration: 300, delay: 150 }} out:fade|global={OUT}>
		<input class="input" type="text" placeholder="text" />
		<input class="input" type="number" placeholder="number" />
		<input class="input" type="range" />

		<a href="https://www.google.com">link</a>

		<pre><code>&lt;pre&gt;
  &lt;code&gt;code&lt;/code&gt;
&lt;/pre&gt;
</code></pre>

		<code>code</code>

		<!-- prettier-ignore -->
		<blockquote> Blockquote ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem lectus, molestie sed bibendum nec, posuere pharetra lorem. Vivamus sit amet sodales ex. Donec lobortis nulla in nulla tincidunt imperdiet at nec leo. Morbi ac aliquam est, eget dapibus tortor. Etiam nibh est, aliquam a consequat ac, tristique vitae ex. Etiam imperdiet egestas nisl, ac dignissim lectus fringilla sit amet. Integer ac tempus risus, quis tempor arcu. </blockquote>
	</section>
</div>

<style lang="scss">
	.page {
		display: flex;
		// flex-direction: row-reverse;
		// gap: 10rem;
		flex-wrap: wrap;
		width: min(750px, calc(100vw - 2rem));
		margin: 0 auto;
		height: auto;
	}

	section {
		margin: 1rem auto;
		max-width: min(100vw, 50rem);
		// flex-grow: 1;
		flex-shrink: 0;
		width: 30rem;
	}

	section:first-of-type {
		width: 15rem;
		min-width: unset;
	}

	// .divider {
	// 	display: flex;
	// 	// flex-grow: 1;
	//   // flex-shrink: 1;
	// 	// width: 100%;
	//   min-width: 1rem;
	// }
</style>
