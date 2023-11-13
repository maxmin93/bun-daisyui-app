/**
 * https://joyofcode.xyz/svelte-context-with-stores#using-the-context-api
 */
import { writable, type Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

type Count = number;
type Context = Writable<number>;

export function setCount() {
  let count = writable<Count>(0);
  setContext('count', count);
}

export function getCount() {
  return getContext<Context>('count');
}
