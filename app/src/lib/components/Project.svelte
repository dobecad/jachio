<script lang="ts">
    export let img: string;
    export let name: string;
    export let description: string;
</script>

<div class="w-80 h-fit border-slate-200 border-4 rounded-lg">
	<div>
        <img src={img} alt="Project" />
    </div>
    <hr />
	<div class="text-xl text-center">{name}</div>
	<div>
        {description}
	</div>
</div>
