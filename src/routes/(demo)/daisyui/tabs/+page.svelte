<!--
  https://svelte.dev/repl/cf05bd4a4ca14fb8ace8b6cdebbb58da?version=4.2.2
 -->
<script>
  import Tab1 from './Tab1.svelte';
  import Tab2 from './Tab2.svelte';
  import Tab3 from './Tab3.svelte';
  import Tabs from './Tabs.svelte';

  // List of tab items with labels, values and assigned components
  let items = [
    { label: 'Content', value: 1, component: Tab1 },
    { label: 'Interactions', value: 2, component: Tab2 },
    { label: 'Tab 3', value: 3, component: Tab3 },
  ];

  import { setContext } from 'svelte';
  setContext('count', 5); // count 초기값
</script>

<Tabs {items} />

<!--
<div class="tabs">
  <a class="tab tab-lifted">Tab 1</a>
  <a class="tab tab-lifted tab-active">Tab 2</a>
  <a class="tab tab-lifted">Tab 3</a>
</div> -->
