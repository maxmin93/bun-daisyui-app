<script lang="ts">
  import { setContext, getContext, onDestroy } from 'svelte';
  let count = getContext<number>('count') ?? 1;
  onDestroy(() => {
    setContext('count', count); // 탭 전환 전에 count 저장
  });
</script>

<article class="prose">
  <h2 class="h2">And we can have interactive content like this</h2>
  <p>
    The count is: {count}
  </p>
</article>
<div class="pt-4">
  <button class="btn btn-primary" on:click={() => (count += 1)}>
    Increment
  </button>
  <button class="btn btn-secondary" on:click={() => (count -= 1)}>
    Decrement
  </button>
</div>
