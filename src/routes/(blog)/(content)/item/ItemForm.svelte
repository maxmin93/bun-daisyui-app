<script lang="ts">
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';

  let currentTab: 'info' | 'props' = 'props';

  type ItemType = {
    name: string;
    value: number;
    comment?: string;
  };
  const item = writable<ItemType>({
    name: 'ABC',
    value: 99.9,
    comment: 'Sample Item',
  });

  onMount(() => {
    // pass
  });

  function changeTab(tabValue: typeof currentTab) {
    currentTab = tabValue;
  }
</script>

<div
  id="form-card"
  class="card w-full lg:w-2/3 bg-base-100 shadow-xl p-6 space-y-6"
>
  <h2 class="card-title">Item {$item.name}</h2>
  <div
    class="tabs bg-[linear-gradient(theme(colors.base-300),theme(colors.base-300))] bg-bottom bg-no-repeat bg-[length:100%_1px]"
  >
    <a
      role="button"
      tabindex="0"
      class="tab tab-lifted"
      on:click={() => changeTab('info')}
      class:tab-active={currentTab === 'info'}>Info</a
    >
    <a
      role="button"
      tabindex="0"
      class="tab tab-lifted"
      on:click={() => changeTab('props')}
      class:tab-active={currentTab === 'props'}>Props</a
    >
  </div>
  <!-- RouterView -->
  {#if currentTab === 'info'}
    <p>{currentTab.toUpperCase()} page : {$item.value}</p>
  {:else}
    <p>{currentTab.toUpperCase()} page : {$item.comment}</p>
  {/if}
</div>
