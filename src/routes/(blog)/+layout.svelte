<script>
  import LogoBtn from './LogoBtn.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import { Icon, XMark } from 'svelte-hero-icons';
</script>

<div class="flex flex-col min-h-screen bg-base-200">
  <!-- start: Navbar -->
  <header>
    <div class="navbar bg-base-100">
      <div class="flex-1 gap-1">
        <a href="/home">
          <LogoBtn />
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a class="flex-1 w-14" href="/logout">
              <Icon src={XMark} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <!-- end: Navbar -->

  <div class="flex-1">
    <slot />
  </div>

  <!-- <div>Footer</div> -->
</div>
