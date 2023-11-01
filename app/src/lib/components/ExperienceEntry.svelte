<script lang="ts">
    export let img: string;
    export let name: string;
</script>

<!-- <div class="sm:w-32 h-fit border-slate-200 rounded-xl border-4 w-1/3 overflow-x-auto">
    <div class="flex justify-center">
        <img src="{img}" alt="{name}" />
    </div>
    <div class="text-2xl text-center pt-4">
       {name} 
    </div>
</div> -->

<div class="w-40 h-40 flex justify-center items-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 hover:-translate-y-1 hover:scale-110 ease-in-out duration-500">
    <div class="w-36 h-36 bg-slate-800 rounded-xl">
        <div class="w-full h-24 flex justify-center">
            <img src="{img}" alt="{name}" class="w-24" />
        </div>
        <div class="text-2xl text-center">
           {name} 
        </div>
    </div>
</div>