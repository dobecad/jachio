<script lang="ts">
    const mediaItems: {label: string; href: string; }[] = [
        { label: "Github", href: "https://github.com/dobecad"},
        { label: "Email", href: "mailto:jacemanthespaceman@gmail.com"}
    ];
</script>

{#each mediaItems as item }
    <a class="btn bg-gradient-to-br variant-gradient-secondary-tertiary" href={item.href}>  
        <span>{item.label}</span>
    </a>
{/each}
