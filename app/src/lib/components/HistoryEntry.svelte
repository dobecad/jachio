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
<div class="lg:flex lg:justify-between pt-4">
    <div class="text-2xl lg:flex text-center">{title}</div>
    <ul class="list-disc lg:w-1/2 w-full pb-2 text-center lg:text-left pt-4">
        {#each bulletpoints as bulletpoint}
            <li class="text-xl pb-4">{bulletpoint}</li>
        {/each}
    </ul>
</div>