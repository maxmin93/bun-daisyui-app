// place files you want to import through the `$lib` alias in this folder.
export { default as Navigation } from '$lib/components/header/Navigation.svelte';

export type CssClasses = string;

export type SvelteEvent<
  E extends Event = Event,
  T extends EventTarget = Element
> = E & { currentTarget: EventTarget & T };
