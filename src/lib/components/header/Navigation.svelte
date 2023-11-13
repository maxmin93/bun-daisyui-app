<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let url = '/';
  export let title = 'daisyUI';
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a href={url} class="btn btn-ghost normal-case text-xl">{title}</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <slot name="menu-items" />
    </ul>
  </div>
</div>
