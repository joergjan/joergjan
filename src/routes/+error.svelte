<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let timer = 3;

  onMount(() => {
    setInterval(() => {
      timer--;
    }, 1000);
  });

  $: {
    if (timer == 0) {
      window.location.href = "/";
    }
  }
</script>

<h1>{$page.status}</h1>
<p>{$page.error.message}</p>
<div class="mb-3"></div>
<p class="font-bold">{timer}</p>
