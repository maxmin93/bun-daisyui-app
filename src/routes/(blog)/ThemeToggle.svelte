<script lang="ts">
  import { Icon, Sun, Moon } from 'svelte-hero-icons';
  import { themeChange } from 'theme-change';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const theme = writable<String>('cmyk');

  onMount(() => {
    themeChange(false);

    const currentTheme = document
      .querySelector('html')!
      .attributes.getNamedItem('data-theme')!.nodeValue;
    theme.set(currentTheme!);
    console.info(`Theme: ${currentTheme}`);
  });

  function onThemeToggle() {
    const previousTheme = document
      .querySelector('html')!
      .attributes.getNamedItem('data-theme')!.nodeValue;
    console.info(`Changing theme from: ${previousTheme}`);

    theme.set(previousTheme == 'dark' ? 'cmyk' : 'dark');
  }
</script>

<button
  on:click={onThemeToggle}
  class="btn gap-2 btn-ghost"
  data-toggle-theme="dark,cmyk"
  data-act-class="ACTIVECLASS"
>
  {#if $theme === 'dark'}
    <Icon src={Sun} class="flex-1 w-5" />
  {:else}
    <Icon src={Moon} class="flex-1 w-5" />
  {/if}
</button>
