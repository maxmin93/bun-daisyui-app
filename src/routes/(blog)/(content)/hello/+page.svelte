<script>
  import { goto } from '$app/navigation';
</script>

<div class="hero h-[75vh]">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>

      <div id="button">
        <button class="btn btn-primary" on:click={() => goto('/home')}
          >Create item</button
        >
      </div>
    </div>
  </div>
</div>
