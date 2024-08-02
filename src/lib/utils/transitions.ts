import type { FlyParams, FadeParams } from 'svelte/transition'

import { cubicOut, cubicIn, quintOut } from 'svelte/easing'
import { fly, fade } from 'svelte/transition'

export const IN = { duration: 150, delay: 75, easing: quintOut }
export const OUT = { duration: 75, delay: 0, easing: quintOut }

const duration = 75
const delay = 75

export const fadeOut = (node: HTMLElement, params?: FadeParams) => {
	return fade(node, {
		duration,
		easing: cubicIn,
		...params
	})
}

export const fadeIn = (node: HTMLElement, params?: FadeParams) => {
	return fade(node, {
		delay,
		easing: cubicOut,
		...params
	})
}

export const flyIn = (node: HTMLElement, params: FlyParams = { y: 10 }) => {
	return fly(node, {
		delay,
		easing: cubicIn,
		...params
	})
}

export const flyOut = (node: HTMLElement, params: FlyParams = { y: 10 }) => {
	return fly(node, {
		duration,
		easing: cubicOut,
		...params
	})
}
