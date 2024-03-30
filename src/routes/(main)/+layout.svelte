<script>
    import "../../app.css";
    import PageTransition from "$lib/components/transition.svelte";
    import { onMount } from "svelte";
    export let data;

    let selectedMenuItem;
</script>

<div class="grid grid-cols-8">
    <div class="col-span-2 relative h-screen">
        <div class="fixed top-1/2 left-0 pl-10">
            <div class="">
                <button
                    on:click={() => {
                        window.scrollTo(10, 20);
                    }}
                >
                    CV
                </button>
            </div>
            <div>
                <button
                    class=""
                    on:click={() => {
                        window.scrollTo(10, 20);
                    }}
                >
                    <div class="flex group">
                        <div class="flex items-center justify-center mr-2 ml-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                class="fill-teal-500 fly-in"
                                viewBox="0 -960 960 960"
                                width="24"
                            >
                                <path
                                    d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
                                />
                            </svg>
                        </div>
                        <p>My Work</p>
                    </div>
                </button>
            </div>
            <div>
                <button
                    on:click={() => {
                        window.scrollTo(10, 20);
                    }}
                >
                    About Me
                </button>
            </div>
        </div>
    </div>
    <div class="col-span-6">
        <PageTransition key={data.url}>
            <main class="py-7">
                <slot />
            </main>
        </PageTransition>
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
</style>
