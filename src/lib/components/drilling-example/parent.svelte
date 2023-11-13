<script lang="ts">
  import { getCount } from '$lib/repository/context';

  const count = getCount();
</script>

<div class="container">
  <p>Parent: {$count}</p>
  <slot />
</div>
