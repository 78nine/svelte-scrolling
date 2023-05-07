import { writable } from 'svelte/store';
import { cubicInOut } from 'svelte/easing';
import { noop } from 'svelte/internal';
export const elements = writable([]);
export const globalOptions = writable({
    offset: 0,
    duration: 500,
    easing: cubicInOut,
    onStart: noop,
    onDone: noop
});
