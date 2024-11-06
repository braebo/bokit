import { DEV } from 'esm-env'

class Device {
	/**
	 * Mobile breakpoint in pixels.
	 * @default 1000
	 */
	public breakpoint = $state(1000)
	/** `window.innerWidth` */
	public width = $state(100)
	/** `window.innerHeight` */
	public height = $state(100)
	/** true if `window.innerWidth` < {@link breakpoint|`breakpoint`} */
	public mobile = $derived.by(() => this.width < this.breakpoint)
	/**  `window.scrollY` */
	public scrollY = $state(0)
	/** Client coordinates of the mouse or touch point. */
	public mouse = $state({ x: 0, y: 0 })

	constructor(
		/**
		 * Mobile breakpoint in pixels.
		 * @default 1000
		 */
		breakpoint?: number,
	) {
		if (breakpoint) this.breakpoint = breakpoint
	}

	public init = (): void => {
		if (!globalThis.window) {
			if (DEV) console.error('device.svelte - Error: Cannot initialize device on server.')
			return
		}

		this.#onResize()
		this.#onScroll()

		removeEventListener('resize', this.#onResize)
		addEventListener('resize', this.#onResize)

		removeEventListener('scroll', this.#onScroll)
		addEventListener('scroll', this.#onScroll)

		removeEventListener('pointermove', this.#onPointerMove)
		addEventListener('pointermove', this.#onPointerMove)
	}

	#onResize = (): void => {
		this.width = globalThis.window.innerWidth || 0
		this.height = globalThis.window.innerHeight || 0
	}

	#onScroll = (): void => {
		this.scrollY = globalThis.window.scrollY || 0
	}

	#frame = 0
	#onPointerMove = (e?: PointerEvent): void => {
		cancelAnimationFrame(this.#frame)
		this.#frame = requestAnimationFrame(() => {
			this.mouse.x = e?.clientX || 1
			this.mouse.y = e?.clientY || 1
		})
	}
}

/**
 * Reactive window / pointer wrapper with a dispose method.
 *
 * Available properties:
 * - `breakpoint` - _mobile breakpoint in pixels_
 * - `width` - _window width in pixels_
 * - `height` - _window height in pixels_
 * - `mobile` - _true if width < breakpoint_
 * - `scrollY` - _scroll position in pixels_
 * - `mouse` { x, y } - _client coordinates of the mouse or touch point_
 */
export const device = new Device()

type EventCallback = (e?: Event | PointerEvent) => void
