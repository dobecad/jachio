<script lang="ts">
    export let img: string;
    export let name: string;
</script>

<div class="sm:w-32 h-fit border-slate-200 rounded-xl border-4 w-1/3 overflow-x-auto">
    <div class="flex justify-center">
        <img src="{img}" alt="{name}" />
    </div>
    <div class="text-2xl text-center pt-4">
       {name} 
    </div>
</div>