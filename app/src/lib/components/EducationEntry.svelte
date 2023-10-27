<script lang="ts">
    export let name: string;
    export let dates: string;
    export let degree: string;
    export let minor_or_focus: string;
</script>

<div class="flex justify-between pb-2">
    <div class="text-5xl">
        {name}
    </div>
    <div class="text-2xl flex items-end opacity-50">
        {dates}
    </div>
</div>

<hr class="opacity-50" />

<div class="pt-4">
    <div class="text-2xl">{degree}</div>
    <div class="text-xl opacity-75 pt-2">{minor_or_focus}</div>
</div>