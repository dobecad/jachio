<script lang="ts">
    export let img: string;
    export let name: string;
</script>

<div class="w-32 h-fit border-slate-200 rounded-xl border-4">
    <div>
        <img src="{img}" alt="{name}" />
    </div>
    <div class="text-xl text-center">
       {name} 
    </div>
</div>