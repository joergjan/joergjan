<script>
  import MyWork from "$lib/components/MyWork.svelte";
  import AboutMe from "$lib/components/AboutMe.svelte";
  import { Separator } from "$lib/components/ui/separator";
</script>

<div class="px-4">
  <AboutMe />
  <Separator class="mt-24 mb-14 bg-gray-300" />
  <MyWork />
</div>
