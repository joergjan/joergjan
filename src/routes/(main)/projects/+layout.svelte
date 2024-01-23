<script>
    let navItems = [
        { name: "My Projects", href: "/projects" },
        { name: "Turnverein Nussbaumen", href: "/projects/tvn" },
        { name: "Swiss Music Awards 2024", href: "/projects/sma24" },
    ];
</script>

{#each navItems as nav}
    <div class="flex justify-center items-center uppercase">
        <a href={nav.href}>{nav.name}</a>
    </div>
{/each}

<slot />
