<script lang="ts">
    export let name: string;
    export let dates: string;
    export let degree: string;
    export let minor_or_focus: string;
</script>

<div class="flex justify-between pb-2">
    <div class="md:text-5xl sm:text-3xl text-lg">
        {name}
    </div>
    <div class="md:text-2xl sm:text-xl text-base flex items-end opacity-50">
        {dates}
    </div>
</div>

<hr class="opacity-50" />

<div class="pt-4">
    <div class="md:text-2xl sm:text-xl text-base">{degree}</div>
    <div class="md:text-xl sm:text-lg text-sm opacity-75 pt-2">{minor_or_focus}</div>
</div>