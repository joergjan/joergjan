<script lang="ts">
    import * as Drawer from "$lib/components/ui/drawer";
    import { Button } from "$lib/components/ui/button";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import Turner from "$lib/components/myWork/turner.svelte";
    import SMA from "$lib/components/myWork/sma.svelte";
    import NPM from "$lib/components/myWork/npm.svelte";

    const projects = [
        {
            title: "Turnverein Nussbaumen",
            description: `Website for a local sports club. Since the old website was made with jimdo and outdated, I decided to use what I just learnt at school and do a complete overhaul.`,
            technologies: ["SvelteKit"],
            svg: "turner",
            href: "https://www.tvnussbaumen.ch",
        },
        {
            title: "API / CMS TV Nussbaumen",
            description: ` API and CMS for Turnverein
                                                Nussbaumen. The goal was to
                                                allow other people to edit data
                                                on the website. Additionally
                                                it's a baseline for future
                                                projects.`,
            technologies: [
                "SvelteKit",
                "Prisma",
                "Lucia Auth",
                "Vercel Postgres",
                "Vercel Blob",
            ],
            svg: "turner",
            href: "https://cms.tvnussbaumen.ch",
        },
        {
            title: "Swiss Music Awards",
            description: `Website for the Swiss Music Awards 2024. As Part of a Collaboration between CH Media and the ZHAW we were responsible for the website and the voting system. With an outdated design and hard to maintain css on WordPress I decided to redesign the website using SvelteKit. As Part of our journey we dropped the old voting system and built our own one.`,
            technologies: [
                "SvelteKit",
                "Prisma",
                "Lucia Auth",
                "SQL",
                "Blob Storage",
            ],
            svg: "sma",
            href: "https://www.swissmusicawards.ch",
        },
        {
            title: "Svelte Image Gallery",
            description: `A simple image gallery made for SvelteKit. It comes with a lightbox. Since SvelteKit is a young framework, I had to come up with my own component`,
            technologies: ["SvelteKit", "TailwindCSS"],
            svg: "npm",
            href: "https://npm.jan-joerg.ch/svelte-lightbox-gallery",
        },
    ];
</script>

<h1>My Work</h1>

<div class="relative">
    <Carousel.Root>
        <Carousel.Content>
            {#each projects as project}
                <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                    <div class="p-7 z-50">
                        <Card.Root>
                            <Card.Content>
                                <div
                                    class="w-full relative group h-[32rem] sm:h-[30rem]"
                                >
                                    <a
                                        class="absolute z-40 top-0 bottom-0 left-0 right-0"
                                        href={project.href}
                                        target="_blank"
                                    >
                                    </a>
                                    <div
                                        class="absolute z-20 top-0 bottom-0 left-0 right-0 rounded-md bg-gray-700 group-hover:bg-none transition-all duration-200"
                                    ></div>
                                    <div
                                        class="absolute z-10 top-0 bottom-0 left-0 right-0 scale-[1.015] bg-sky-600 rounded-md hidden group-hover:block blur-md transition-all duration-200"
                                    ></div>
                                    <div
                                        class="absolute top-0 bottom-0 left-0 right-0 z-30 px-5 pt-3"
                                    >
                                        <h3>{project.title}</h3>
                                        <div class="mt-3" />
                                        <p class="text-justify break-words">
                                            {project.description}
                                        </p>
                                        <div class="mt-3" />
                                        <h4>Technologies</h4>
                                        <ul>
                                            {#each project.technologies as technology}
                                                <li>
                                                    {technology}
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                    <div
                                        class="absolute z-20 top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-40"
                                    >
                                        {#if project.svg == "turner"}
                                            <Turner
                                                className="drop-shadow-xl group-hover:drop-shadow-[0_5px_5px_rgba(2,132,199)] h-48 transition-all duration-200"
                                                fill1="fill-[#d92e3c]"
                                                fill2="fill-[#2f328e]"
                                            />
                                        {:else if project.svg == "sma"}
                                            <SMA
                                                className="drop-shadow-xl group-hover:drop-shadow-[0_5px_5px_rgba(2,132,199)] h-48 transition-all duration-200"
                                            />
                                        {:else if project.svg == "npm"}
                                            <NPM
                                                className="drop-shadow-xl group-hover:drop-shadow-[0_5px_5px_rgba(2,132,199)] w-48 transition-all duration-200"
                                            />
                                        {/if}
                                    </div>
                                </div>
                            </Card.Content>
                        </Card.Root>
                    </div>
                </Carousel.Item>
            {/each}
        </Carousel.Content>

        <div class="hidden xl:block xl:absolute xl:-top-5 xl:left-16">
            <Carousel.Previous />
            <Carousel.Next />
        </div>
        <div class="xl:hidden absolute -top-5 left-16 sm:left-24 md:left-32">
            <Carousel.Previous />
        </div>
        <div class="xl:hidden absolute -top-5 right-16 sm:right-24 md:right-32">
            <Carousel.Next />
        </div>
    </Carousel.Root>
</div>
