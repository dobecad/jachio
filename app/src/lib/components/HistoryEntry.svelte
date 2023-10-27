<script lang="ts">
    export let name: string;
    export let dates: string;
    export let title: string;
    export let bulletpoints: string[]; 
</script>

<div class="flex justify-between pb-2">
    <div class="text-5xl">{name}</div>
    <div class="text-2xl flex items-end opacity-50">{dates}</div>
</div>
<hr class="opacity-50" />
<div class="flex justify-between pt-4">
    <div class="text-2xl">{title}</div>
    <ul class="list-disc w-1/2 pb-2">
        {#each bulletpoints as bulletpoint}
            <li class="text-xl">{bulletpoint}</li>
        {/each}
    </ul>
</div>