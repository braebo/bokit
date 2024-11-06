export const defer = (
	typeof globalThis.requestIdleCallback !== 'undefined'
		? globalThis.requestIdleCallback
		: typeof globalThis.requestAnimationFrame !== 'undefined'
			? globalThis.requestAnimationFrame
			: (fn: () => void) => setTimeout(fn, 0)
) as (fn: () => void) => number

export const cancelDefer = (
	typeof globalThis?.cancelIdleCallback !== 'undefined'
		? globalThis.cancelIdleCallback
		: typeof globalThis.cancelAnimationFrame !== 'undefined'
			? globalThis.cancelAnimationFrame
			: globalThis.clearTimeout
) as (id: number) => void
