<script lang="ts">
  import PageTransition from "$lib/components/transition.svelte";
  import { onMount, onDestroy } from "svelte";
  import { slide, fade } from "svelte/transition";
  export let data;

  let selectedMenuItem = "" as "aboutMe" | "myWork" | "cv";
  let showMobileMenu: boolean = false;

  onMount(() => {
    function checkScroll() {
      const cvElement = document.getElementById("cv");
      const aboutMeElement = document.getElementById("aboutMe");
      const myWorkElement = document.getElementById("myWork");

      const myWorkInView =
        myWorkElement &&
        myWorkElement.getBoundingClientRect().top <= window.innerHeight &&
        myWorkElement.getBoundingClientRect().bottom >= 0 &&
        myWorkElement.offsetHeight > window.innerHeight / 2;
      const cvInView =
        cvElement &&
        cvElement.getBoundingClientRect().top <= window.innerHeight &&
        cvElement.getBoundingClientRect().bottom >= 0 &&
        cvElement.offsetHeight > window.innerHeight / 2;
      const aboutMeInView =
        aboutMeElement &&
        aboutMeElement.getBoundingClientRect().top <= window.innerHeight &&
        aboutMeElement.getBoundingClientRect().bottom >= 0 &&
        aboutMeElement.offsetHeight > window.innerHeight / 2;

      if (myWorkInView) {
        selectedMenuItem = "myWork";
      } else if (aboutMeInView) {
        selectedMenuItem = "aboutMe";
      } else if (myWorkInView) {
        selectedMenuItem = "cv";
      }
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);

    // Clean up the event listener when the component is destroyed
    onDestroy(() => {
      window.removeEventListener("scroll", checkScroll);
    });
  });

  function toggleMobileMenu() {
    if (showMobileMenu) {
      showMobileMenu = false;
    } else {
      showMobileMenu = true;
    }
  }
</script>

<div class="max-w-7xl mx-auto">
  <div class="xl:grid xl:grid-cols-6">
    <div class="xl:col-span-1 xl:block hidden fixed h-screen">
      <div class="absolute top-1/2 left-12 grid gap-4 w-32 text-left">
        <div class="">
          <button
            on:click={() => {
              const element = document.getElementById("cv");

              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div class="flex group">
              <div class="flex items-center justify-center mr-2 ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  class={selectedMenuItem === "cv"
                    ? "fill-teal-500 fly-in"
                    : "fill-none"}
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
                  />
                </svg>
              </div>
              <p class="hover:text-teal-500 transition-all duration-250">CV</p>
            </div>
          </button>
        </div>

        <div>
          <button
            on:click={() => {
              const element = document.getElementById("aboutMe");

              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div class="flex group">
              <div class="flex items-center justify-center mr-2 ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  class={selectedMenuItem === "aboutMe"
                    ? "fill-teal-500 fly-in"
                    : "fill-none"}
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
                  />
                </svg>
              </div>
              <p class="hover:text-teal-500 transition-all duration-250">
                About Me
              </p>
            </div>
          </button>
        </div>

        <div>
          <button
            class=""
            on:click={() => {
              const element = document.getElementById("myWork");

              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div class="flex group">
              <div class="flex items-center justify-center mr-2 ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  class={selectedMenuItem === "myWork"
                    ? "fill-teal-500 fly-in"
                    : "fill-none"}
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
                  />
                </svg>
              </div>
              <p class="hover:text-teal-500 transition-all duration-250">
                My Work
              </p>
            </div>
          </button>
        </div>

        <div class="flex items-center">
          <div class="flex group">
            <div class="flex items-center justify-center mr-2 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                class="fill-none"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
                />
              </svg>
            </div>
            <a
              href="https://github.com/joergjan"
              target="_blank"
              class="flex items-center"
            >
              <svg
                viewBox="0 0 98 96"
                xmlns="http://www.w3.org/2000/svg"
                class="group h-6"
              >
                <path
                  class="fill-white group-hover:fill-teal-500 transition-all duration-250"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="xl:hidden fixed z-50 bottom-4 right-4 bg-teal-500 rounded-full h-12 w-12 flex items-center justify-center"
    >
      <button
        on:click={() => {
          toggleMobileMenu();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          class="fill-white {showMobileMenu ? 'rotate' : ''}"
        >
          {#if showMobileMenu}
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          {:else}
            <path
              d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"
            />
          {/if}
        </svg>
      </button>
    </div>
    {#if showMobileMenu}
      <button
        in:fade
        out:fade
        on:click={() => {
          showMobileMenu = false;
        }}
        class="fixed z-20 bg-black bg-opacity-50 top-0 bottom-0 right-0 left-0 backdrop-blur-[2px]"
      ></button>
      <div
        in:slide
        out:slide
        class="fixed z-30 bottom-0 left-0 right-0 xl:hidden"
      >
        <div
          class="bg-gray-800 w-fill h-full grid py-6 items-center justify-center gap-6"
        >
          <div>
            <button
              class=""
              on:click={() => {
                const element = document.getElementById("aboutMe");
                showMobileMenu = false;
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div class="flex group">
                <div class="flex items-center justify-center mr-2 ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    class={selectedMenuItem === "aboutMe"
                      ? "fill-teal-500 fly-in"
                      : "fill-gray-600"}
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
                    />
                  </svg>
                </div>
                <p class="hover:text-teal-500 transition-all duration-250">
                  About Me
                </p>
              </div>
            </button>
          </div>
          <div>
            <button
              class=""
              on:click={() => {
                const element = document.getElementById("myWork");
                showMobileMenu = false;
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div class="flex group">
                <div class="flex items-center justify-center mr-2 ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    class={selectedMenuItem === "myWork"
                      ? "fill-teal-500 fly-in"
                      : "fill-gray-600"}
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
                    />
                  </svg>
                </div>
                <p class="hover:text-teal-500 transition-all duration-250">
                  My Work
                </p>
              </div>
            </button>
          </div>
          <div>
            <button
              class=""
              on:click={() => {
                const element = document.getElementById("cv");
                showMobileMenu = false;
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div class="flex group">
                <div class="flex items-center justify-center mr-2 ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    class={selectedMenuItem === "cv"
                      ? "fill-teal-500 fly-in"
                      : "fill-gray-600"}
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
                    />
                  </svg>
                </div>
                <p class="hover:text-teal-500 transition-all duration-250">
                  CV
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    {/if}
    <div class="xl:col-span-5 xl:col-start-2">
      <PageTransition key={data.url}>
        <slot />
      </PageTransition>
    </div>
  </div>
</div>

<style>
  .fly-in {
    animation: fly-in 0.5s forwards;
    position: relative;
    right: -100%;
  }

  .flex:hover .fly-in {
    right: 0;
  }

  @keyframes fly-in {
    0% {
      right: 60%;
    }
    100% {
      right: 0;
    }
  }

  svg {
    transition: transform 0.3s ease;
  }

  svg.rotate {
    transform: rotate(90deg);
  }
</style>
