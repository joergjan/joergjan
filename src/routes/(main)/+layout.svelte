<script>
    import "../../app.css";
    import { navItems } from "$lib/client/navbar";
    import { fade } from "svelte/transition";
    import PageTransition from "$lib/client/components/transition.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        if (localStorage.getItem("cookies_enabled") === "0") {
            cookie = false;
        } else {
            cookie = true;
        }
    });

    let cookie = false;
    export let data;
    export let navMenu = false;

    function toggleNavMenu() {
        if (navMenu) {
            navMenu = false;
        } else {
            navMenu = true;
        }
    }
</script>

<header class="my-5 h-10">
    <div class="flex items-center justify-center">
        <nav class="max-w-7xl md:block hidden" aria-label="Global">
            <div class="flex space-x-10">
                {#each navItems as navItem}
                    <a href={navItem.href}>
                        <p class="uppercase">
                            {navItem.name}
                        </p>
                    </a>
                {/each}
            </div>
        </nav>
    </div>
    <nav
        class="max-w-7xl flex md:hidden items-center justify-end relative"
        aria-label="Global"
    >
        <a href="/">
            <img
                class="h-14 absolute -top-3 left-0 z-50"
                src="/logo.png"
                alt="Linda"
            />
        </a>

        <button class="absolute top-0 right-5 z-50" on:click={toggleNavMenu}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                class="fill-white {navMenu ? 'rotate' : ''}"
                viewBox="0 -960 960 960"
                width="24"
            >
                {#if navMenu}
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                    />
                {:else}
                    <path
                        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                    />
                {/if}
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
            ></svg>
        </button>
    </nav>
</header>

{#if navMenu}
    <div
        in:fade={{ duration: 150 }}
        out:fade={{ duration: 150, delay: 150 }}
        class="absolute top-10 w-screen h-screen z-40 bg-gray-800"
    >
        <div class="pt-10">
            {#each navItems as navItem}
                <div class="mt-5">
                    <button on:click={toggleNavMenu}>
                        <a href={navItem.href}>
                            <p class="uppercase">
                                {navItem.name}
                            </p>
                        </a>
                    </button>
                </div>
            {/each}
        </div>
    </div>
{/if}

<main class="flex items-center justify-center relative">
    <div class="max-w-7xl min-h-[25rem] z-10">
        <PageTransition key={data.url}>
            <slot />
        </PageTransition>
    </div>
</main>

<footer class="flex items-center justify-center my-5">
    <nav class="max-w-7xl" aria-label="Global">
        <div class="">
            {#each navItems as navItem}
                <a href={navItem.href}>
                    <p>
                        {navItem.name}
                    </p>
                </a>
            {/each}
            <a href="/impressum">Impressum</a>
        </div>
    </nav>
</footer>

<!-- Cookie Banner -->
{#if cookie}
    <div
        class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:p-6"
    >
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
            <div
                class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-700 shadow-lg text-white"
            >
                <div class="p-4">
                    <div class="flex items-center">
                        <div class="flex w-0 flex-1 justify-between">
                            <p class="w-0 flex-1 text-sm font-medium">
                                Hier gibt es keine 🍪
                            </p>
                            <button
                                type="button"
                                name="Cookies Button"
                                class="ml-3 flex-shrink-0 rounded-md text-sm font-medium"
                                on:click={() => {
                                    cookie = false;
                                    localStorage.setItem(
                                        "cookies_enabled",
                                        "0"
                                    );
                                }}
                            >
                                Okay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    svg {
        transition: transform 0.3s ease;
    }

    svg.rotate {
        transform: rotate(90deg);
    }
</style>
