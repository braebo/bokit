<script>
	import { IN, OUT } from '$lib/utils/transitions'
	import { fade, fly } from 'svelte/transition'
</script>

<div class="br-md" />

<div class="page">
	<section in:fly|global={{ ...IN, y: 7.5, duration: 300 }} out:fade|global={OUT}>
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<h4>Heading 4</h4>
		<h5>Heading 5</h5>
		<h6>Heading 6</h6>

		<strong>bold</strong>

		<em>italic</em>

		<s>strikethrough</s>

		<small>small</small>

		<mark>mark</mark>

		<span>
			super
			<sup>script</sup>
		</span>

		<span>
			sub
			<sub>script</sub>
		</span>

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

		<!-- prettier-ignore -->
		<p>
			<!-- svelte-ignore a11y_invalid_attribute -->
			Paragraph canary danced beneath <a href="">azure skies</a>, while marble fountains sparkled with untold mysteries. Velvet shadows crept along ancient walls, whispering secrets to passing travelers who dared not linger.
		</p>
	</section>

	<section style:gap="1.5rem" in:fly|global={{ ...IN, y: 7.5, duration: 300, delay: 150 }} out:fade|global={OUT}>
		<label>
			<div>text</div>
			<input type="text" placeholder="foo" />
		</label>

		<label>
			<div>textarea</div>
			<textarea placeholder="lorem ipsum dolor sit amet"></textarea>
		</label>

		<label>
			<div>number</div>
			<input type="number" placeholder="123" />
		</label>

		<label>
			<div>range</div>
			<input type="range" />
		</label>

		<label>
			<div>checkbox</div>
			<input type="checkbox" checked />
		</label>

		<label>
			<div>radio</div>
			<input type="radio" />
		</label>

		<label>
			<div>select</div>
			<select>
				<option>foo</option>
				<option>bar</option>
			</select>
		</label>

		<!-- svelte-ignore a11y_invalid_attribute -->
		<a href="">https://some.really-long-link-that-would-normally-cause-horizontal-overflow</a>

		<pre><code>&lt;pre&gt;
  &lt;code&gt;
    some really long expression that would usually cause horizontal overflow
  &lt;/code&gt;
&lt;/pre&gt;
</code></pre>

		<!-- shiki-start
```ts
console.log('some really long string that would usually cause a horizontal scroll when it overflows on the x axis because reasons');
```
shiki-end -->

		<code>code</code>

		<!-- svelte-ignore a11y_invalid_attribute -->
		<!-- prettier-ignore -->
		<blockquote> Blockquote golden leaves tumbled through forgotten courtyards, each one carrying <a href="">fragments of memories</a> long since scattered to the winds.</blockquote>

		<button>button</button>
	</section>
</div>

<style lang="scss">
	.page {
		display: flex;
		flex-wrap: wrap;

		width: min(var(--page-width), calc(100vw - 2rem));
		height: auto;
		margin: 0 auto;
	}

	section {
		width: 25rem;
		margin: 1rem auto;
	}

	label {
		input,
		textarea,
		select {
			margin-left: 0.5rem;
		}
	}
</style>
