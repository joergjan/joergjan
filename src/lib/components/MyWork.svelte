<script lang="ts">
    import * as Drawer from "$lib/components/ui/drawer";
    import { Button } from "$lib/components/ui/button";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
</script>

<section id="myWork">
    <h1>My Work</h1>

    <div class="relative">
        <Carousel.Root>
            <div class="mt-5">
                <Carousel.Content>
                    <Carousel.Item class="md:basis-1/2 lg:basis-1/3 ">
                        <Drawer.Root>
                            <Drawer.Trigger class="h-[35rem]">
                                <h2>Swiss Music Awards 2024</h2>
                            </Drawer.Trigger>
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Drawer.Title
                                        >Are you sure absolutely sure?</Drawer.Title
                                    >
                                    <Drawer.Description
                                        >This action cannot be undone.</Drawer.Description
                                    >
                                </Drawer.Header>
                                <iframe
                                    title="Swiss Music Awards"
                                    src="https://www.swissmusicawards.ch"
                                    frameborder="0"
                                ></iframe>
                                <Drawer.Footer>
                                    <Drawer.Close>Close</Drawer.Close>
                                </Drawer.Footer>
                            </Drawer.Content>
                        </Drawer.Root>
                    </Carousel.Item>
                    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                        <Drawer.Root>
                            <Drawer.Trigger>
                                <Card.Root>
                                    <Card.Header>
                                        <Card.Title>
                                            <h2>Website TV Nussbaumen</h2>
                                        </Card.Title>
                                        <Card.Description
                                            >Card Description</Card.Description
                                        >
                                    </Card.Header>
                                    <Card.Content>
                                        <p>Card Content</p>
                                    </Card.Content>
                                    <Card.Footer>
                                        <p>Card Footer</p>
                                    </Card.Footer>
                                </Card.Root>
                            </Drawer.Trigger>
                            <Drawer.Content class="h-3/4">
                                <Drawer.Header>
                                    <Drawer.Title
                                        >Are you sure absolutely sure?</Drawer.Title
                                    >
                                    <Drawer.Description
                                        >This action cannot be undone.</Drawer.Description
                                    >
                                </Drawer.Header>
                                <iframe
                                    class="h-full bg-white"
                                    title="Turnverein Nussbaumen"
                                    src="https://www.tvnussbaumen.ch"
                                    frameborder="0"
                                ></iframe>
                                <Drawer.Footer>
                                    <Drawer.Close>Close</Drawer.Close>
                                </Drawer.Footer>
                            </Drawer.Content>
                        </Drawer.Root>
                    </Carousel.Item>
                    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                        <Drawer.Root>
                            <Drawer.Trigger
                                ><h2>TV Nussbaumen CMS</h2></Drawer.Trigger
                            >
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Drawer.Title
                                        >Are you sure absolutely sure?</Drawer.Title
                                    >
                                    <Drawer.Description
                                        >This action cannot be undone.</Drawer.Description
                                    >
                                </Drawer.Header>
                                <iframe
                                    title="Turnverein Nussbaumen CMS"
                                    src="https://cms.tvnussbaumen.ch"
                                    frameborder="0"
                                ></iframe>
                                <Drawer.Footer>
                                    <Drawer.Close>Close</Drawer.Close>
                                </Drawer.Footer>
                            </Drawer.Content>
                        </Drawer.Root>
                    </Carousel.Item>
                    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                        <Drawer.Root>
                            <Drawer.Trigger
                                ><h2>Bachelor's Thesis</h2></Drawer.Trigger
                            >
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Drawer.Title
                                        >Are you sure absolutely sure?</Drawer.Title
                                    >
                                    <Drawer.Description
                                        >This action cannot be undone.</Drawer.Description
                                    >
                                </Drawer.Header>
                                <iframe
                                    title="Turnverein Nussbaumen CMS"
                                    src="https://cms.tvnussbaumen.ch"
                                    frameborder="0"
                                ></iframe>
                                <Drawer.Footer>
                                    <Drawer.Close>Close</Drawer.Close>
                                </Drawer.Footer>
                            </Drawer.Content>
                        </Drawer.Root>
                    </Carousel.Item>
                </Carousel.Content>
            </div>
            <div class="hidden xl:block xl:absolute xl:-top-10 xl:left-16">
                <Carousel.Previous />
                <Carousel.Next />
            </div>
            <div
                class="xl:hidden absolute -top-10 left-16 sm:left-24 md:left-32"
            >
                <Carousel.Previous />
            </div>
            <div
                class="xl:hidden absolute -top-10 right-16 sm:right-24 md:right-32"
            >
                <Carousel.Next />
            </div>
        </Carousel.Root>
    </div>
</section>
