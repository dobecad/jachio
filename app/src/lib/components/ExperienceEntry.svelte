<script lang="ts">
	export let img: string;
	export let name: string;
	export let yoe: number;

	$: cardClass = `${name.toLowerCase()}-card`;
</script>

<div
	class={`${cardClass} w-40 h-40 bg-slate-200 rounded-lg flex justify-center items-center transition hover:duration-300 hover:-translate-y-1 hover:scale-110 ease-in-out`}
>
	<div class="w-full-minus-5px h-full-minus-5px bg-slate-950 rounded-lg overflow-hidden">
		<div class="w-full h-28 flex justify-center">
			<img src={img} alt={name} class="p-4" title={name} />
		</div>
		<div class="text-2xl text-center">
			{#if yoe > 1}
				{yoe} years
			{:else}
				{yoe} year
			{/if}
		</div>
	</div>
</div>
