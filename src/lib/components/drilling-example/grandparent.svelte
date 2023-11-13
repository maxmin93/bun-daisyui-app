<script lang="ts">
  import { setCount, getCount } from '$lib/repository/context';

  // set context
  setCount();

  // get the count
  const count = getCount();

  function updateCount(event: WheelEvent) {
    event.deltaY < 0 ? ($count += 1) : ($count -= 1);
  }
</script>

<div on:wheel={updateCount} class="container">
  <p>Grandparent: {$count}</p>
  <slot />
</div>
