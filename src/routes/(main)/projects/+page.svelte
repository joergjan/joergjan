<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer";
  import { Button } from "$lib/components/ui/button";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import Turner from "$lib/components/myWork/turner.svelte";
  import SMA from "$lib/components/myWork/sma.svelte";
</script>

<section id="myWork">
  <h1>My Work</h1>

  <div class="relative">
    <Carousel.Root>
      <div class="mt-5">
        <Carousel.Content>
          <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
            <div class="p-7 z-50">
              <Card.Root>
                <Card.Content>
                  <div class="w-full relative group h-[25rem]">
                    <a
                      class="absolute z-30 top-0 bottom-0 left-0 right-0"
                      href="https://www.tvnussbaumen.ch"
                      target="_blank"
                    >
                    </a>
                    <div
                      class="absolute z-20 top-0 bottom-0 left-0 right-0 rounded-md bg-gray-700 group-hover:bg-none transition-all duration-200"
                    ></div>
                    <div
                      class="absolute z-10 top-0 bottom-0 left-0 right-0 scale-[1.015] bg-sky-600 rounded-md hidden group-hover:block blur-md transition-all duration-200"
                    ></div>
                    <div class="absolute top-0 bottom-0 left-0 right-0 z-20">
                      <h3>Turnverein Nussbaumen</h3>
                      <p>Website for a local sports club</p>
                      <div
                        class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-60"
                      >
                        <Turner
                          className="drop-shadow-xl group-hover:drop-shadow-[0_5px_5px_rgba(2,132,199)] h-40 transition-all duration-200"
                          fill1="fill-[#d92e3c]"
                          fill2="fill-[#2f328e]"
                        />
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </Card.Root>
            </div>
          </Carousel.Item>
          <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
            <div class="p-7 z-50">
              <Card.Root>
                <Card.Content>
                  <div class="w-full relative group h-[25rem]">
                    <a
                      class="absolute z-40 top-0 bottom-0 left-0 right-0"
                      href="https://cms.tvnussbaumen.ch"
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
                      <h3>API / CMS TV Nussbaumen</h3>
                      <div class="mt-3" />
                      <p class="text-justify break-words">
                        API and CMS for Turnverein Nussbaumen. The goal was to
                        allow other people to edit data on the website.
                        Additionally it's a baseline for future projects.
                      </p>
                      <div class="mt-3" />
                      <h4>Technologies</h4>
                      <ul>
                        <li>SvelteKit</li>
                        <li>Prisma</li>
                        <li>Lucia Auth</li>
                        <li>Vercel Postgres</li>
                        <li>Vercel Blob</li>
                      </ul>
                    </div>
                    <div
                      class="absolute z-20 top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-40"
                    >
                      <Turner
                        className="drop-shadow-xl group-hover:drop-shadow-[0_5px_5px_rgba(2,132,199)] h-48 transition-all duration-200"
                        fill1="fill-[#d92e3c]"
                        fill2="fill-[#2f328e]"
                      />
                    </div>
                  </div>
                </Card.Content>
              </Card.Root>
            </div>
          </Carousel.Item>
          <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
            <div class="p-7 z-50">
              <Card.Root>
                <Card.Content>
                  <div class="w-full relative group h-[25rem]">
                    <a
                      class="absolute z-30 top-0 bottom-0 left-0 right-0"
                      href="https://www.swissmusicawards.ch"
                      target="_blank"
                    >
                    </a>
                    <div
                      class="absolute z-20 top-0 bottom-0 left-0 right-0 rounded-md bg-gray-700 group-hover:bg-none transition-all duration-200"
                    ></div>
                    <div
                      class="absolute z-10 top-0 bottom-0 left-0 right-0 scale-[1.015] bg-sky-600 rounded-md hidden group-hover:block blur-md transition-all duration-200"
                    ></div>
                    <div class="absolute top-0 bottom-0 left-0 right-0 z-20">
                      <h3>Swiss Music Awards</h3>
                      <p>Website for the Swiss Music Awards</p>
                      <div
                        class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-60"
                      >
                        <SMA
                          className="drop-shadow-xl group-hover:drop-shadow-[0_5px_5px_rgba(2,132,199)] h-40 transition-all duration-200 fill-gray-900 "
                        />
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </Card.Root>
            </div>
          </Carousel.Item>
        </Carousel.Content>
      </div>
      <div class="hidden xl:block xl:absolute xl:-top-10 xl:left-16">
        <Carousel.Previous />
        <Carousel.Next />
      </div>
      <div class="xl:hidden absolute -top-10 left-16 sm:left-24 md:left-32">
        <Carousel.Previous />
      </div>
      <div class="xl:hidden absolute -top-10 right-16 sm:right-24 md:right-32">
        <Carousel.Next />
      </div>
    </Carousel.Root>
  </div>
</section>
