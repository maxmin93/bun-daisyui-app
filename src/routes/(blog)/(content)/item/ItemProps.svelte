<script>
  import { getContext } from 'svelte';
  const items = getContext('items') ?? {};
</script>

<div id="item-proprs-tab" class="overflow-x-auto">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th />
        <th>Property</th>
        <th>Value</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      {#each items as item, index (index)}
        <tr>
          <th>{index + 1}</th>
          <td>{item.name}</td>
          <td>{item.value}</td>
          <td>{item.comment}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
