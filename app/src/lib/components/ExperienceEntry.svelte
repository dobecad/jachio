<script lang="ts">
	export let img: string;
	export let name: string;
</script>

<div
	class="card w-40 h-40 bg-slate-200 rounded-lg flex justify-center items-center transition hover:duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out"
>
	<div class="w-full-minus-5px h-full-minus-5px bg-slate-950 rounded-lg overflow-hidden">
		<div class="w-full h-28 flex justify-center">
			<img src={img} alt={name} class="pt-2" />
		</div>
		<div class="text-2xl text-center">
			{name}
		</div>
	</div>
</div>
