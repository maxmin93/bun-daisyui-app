<script>
  /**
   * Object 타입 정의
   * @typedef {Object} ItemType
   * @property {string} label - 탭 제목
   * @property {number} value - 탭 번호
   * @property {import('svelte').ComponentType} component - 탭 내용
   */

  /** @type { ItemType[] } */
  export let items = [];
  export let activeTabValue = 1;

  const handleClick = (/** @type {number} */ tabValue) => () =>
    (activeTabValue = tabValue);
</script>

<div class="container">
  <div class="tabs">
    {#each items as item (item.value)}
      <a
        class="tab tab-lifted"
        class:tab-active={activeTabValue === item.value}
        on:click={handleClick(item.value)}>{item.label}</a
      >
    {/each}
  </div>
  {#each items as item (item.value)}
    {#if activeTabValue == item.value}
      <div class="border p-4">
        <svelte:component this={item.component} />
      </div>
    {/if}
  {/each}
</div>
