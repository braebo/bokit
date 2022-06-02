<div class="home-icon">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		height="100%"
		fill="currentColor"
		viewBox="0 0 56 56"
	>
		<g>
			<g class="windows">
				<g class="window-r">
					<path
						class="house"
						fill="currentColor"
						d="M 29.1 7 A 2 2 0 0 0 27 7 L 3.5 22.9 a 2 2 0 0 0 1 3.7 h 4 v 20.8 a 2 2 0 0 0 2 2 h 11.1 a 2 2 0 0 0 2 -2 v -5.4 a 2 2 0 0 1 2 -2 h 4.8 a 2 2 0 0 1 2 2 v 5.4 a 2 2 0 0 0 2 2 h 11.1 a 2 2 0 0 0 2 -2 V 26.5 h 4 a 2 2 0 0 0 1 -3.7 L 29.1 7.1 z"
					/>
					<path class="light" fill="#fffa78" d="M 36.2 28.7 h 7.1 V 36 h -7.1 z" />
					<path
						class="frame-v-r"
						stroke="#000000"
						stroke-width=".3"
						d="M 39.7 28.7 V 36"
					/>
					<path
						class="frame-h-r"
						stroke="#000000"
						stroke-width=".3"
						d="M 36.1 32.3 h 7.2"
					/>
					<path
						class="blinds"
						fill="currentColor"
						stroke="currentColor"
						d="M 34 27 h 10 v 16 h -10 z"
					/>
				</g>
				<g class="window-l">
					<path class="light" fill="#fffa78" d="M 13.9 28.7 H 21 V 36 h -7.1 z" />
					<path
						class="frame-v-l"
						stroke="#000000"
						stroke-width=".3"
						d="M 17.5 28.7 v 7.4"
					/>
					<path
						class="frame-h-l"
						stroke="#000000"
						stroke-width=".3"
						d="M 13.9 32.3 H 21"
					/>
					<path
						class="blinds"
						fill="currentColor"
						d="M 11.4 27.6 h 11.3 v 11 h -10.3 z"
					/>
				</g>
			</g>
			<rect class="door" fill="currentColor" width="14" height="12" x="21" y="37.4" />
		</g>
		<path d="M 12.5 1 S 105 238 105 238 S 14.7 33.3 105 238" fill="rgb(255, 255, 255)" />
	</svg>
</div>

<style lang="scss">
	:global(html[theme='dark'] .windows .light) {
		fill: #000000 !important;
	}
	.home-icon {
		$size: 30px;
		width: $size;
		height: $size;

		color: var(--dark-b);

		&:hover {
			& .blinds {
				transform: scaleY(0.7);
			}
			& .door {
				transform: scaleY(0);
			}
		}
	}
	.blinds,
	.door {
		transform: scaleY(1);

		transition: transform 350ms ease-out;
	}
	.door {
		transform-origin: center;
	}
</style>
