<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	export let url: string;
	export let github = true;
	export let name: string;
	export let id: number;
	export let description: string;
	export let tags: string[];
	let toggled = false;

	const tileSize = 18;
	let idName = 'project-' + name.toLowerCase().replaceAll(' ', '') + id.toString();
	let columns = 0;
	let rows = 0;

	function handleOnClick(indx: number) {
		toggled = toggled ? false : true;
		gsap.to(`.${idName}-tiles`, {
			backgroundColor: '#9C1F58',
			opacity: 1,
			stagger: {
				amount: 0.8,
				grid: [rows, columns],
				from: indx
			}
		});
		gsap.to(`.${idName}-tiles`, {
			opacity: 0,
			delay: 0.2,
			stagger: {
				amount: 0.8,
				grid: [rows, columns],
				from: indx
			}
		});
	}

	function createTile(indx: number): HTMLDivElement {
		const tile = document.createElement('div');
		tile.classList.add(`${idName}-tiles`);
		tile.classList.add('cursor-pointer');
		tile.classList.add('z-10');
		tile.onclick = (e) => handleOnClick(indx);
		return tile;
	}

	function createTiles(container: HTMLElement, quantity: number) {
		Array.from(Array(quantity)).map((tile, indx) => {
			container.appendChild(createTile(indx));
		});
	}

	function createGrid() {
		const container = document.getElementById(idName);
		if (!container) {
			return;
		}
		columns = Math.floor(container.offsetWidth / tileSize);
		rows = Math.floor(container.offsetHeight / tileSize);
		container.style.setProperty('--columns', columns.toString());
		container.style.setProperty('--rows', rows.toString());
		createTiles(container, columns * rows);
	}

	onMount(() => {
		createGrid();
	});
</script>

<div>
	<div
		class="card sm:w-96 sm:h-96 w-60 h-60 rounded-lg flex flex-shrink-0 justify-center items-center transition hover:duration-300 hover:md:-translate-y-1 hover:md:scale-110 ease-in-out"
	>
		<div
			id={idName}
			class="w-full-minus-5px h-full-minus-5px bg-slate-950 rounded-lg tiles relative ease-in-out overflow-hidden"
		>
			{#if toggled}
				<div class="w-full h-full absolute z-0 project-card-info overflow-x-auto overflow-y-auto">
					<div class="sm:text-lg text-xs text-center pt-2 pl-2 pr-2">{description}</div>
					<div class="flex flex-wrap w-full justify-center pt-4 sm:gap-4 gap-2">
						{#each tags as tag}
							<div
								class="flex bg-cyan-500/10 text-cyan-300 pl-2 pr-2 w-fit rounded-full font-bold text-center sm:text-lg text-xs"
							>
								{tag}
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<div class="flex w-full h-full justify-center items-center absolute z-0 project-card-info">
					<div class="sm:text-3xl text-xl text-center font-bold">{name}</div>
				</div>
			{/if}
		</div>
	</div>

	<div>
		<a
			href={url}
			target="_blank"
			class="justify-center pt-5 project-card-info hover:scale-110"
			class:flex={toggled}
			class:hidden={!toggled}
		>
			<div class="w-8 h-8 flex justify-center items-center">
				{#if github}
					<svg
						width="100%"
						height="100%"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 98 96"
						version="1.1"
						xml:space="preserve"
						><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
							fill="#fff"
						/></svg
					>
				{:else}
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 763 763"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
						><path
							d="M8.822,463.373c-5.777,-26.378 -8.822,-53.773 -8.822,-81.873c0,-210.556 170.944,-381.5 381.5,-381.5c210.556,0 381.5,170.944 381.5,381.5c0,210.556 -170.944,381.5 -381.5,381.5c-95.517,0 -182.882,-35.179 -249.835,-93.276l325.224,-187.768l111.487,193.102l125.561,-468.599l-468.6,-125.561l111.488,193.102l-328.003,189.373Z"
							style="fill:#fff;"
						/></svg
					>
				{/if}
			</div>
		</a>
	</div>
</div>

<!-- <div
	id={idName}
	class="w-80 h-80 border-slate-200 border-4 rounded-lg bg-slate-900 tiles relative hover:-translate-y-3 hover:scale-110 hover:duration-300 ease-in-out"
>
	{#if toggled}
		<div class="w-full h-full absolute z-0 project-card-info overflow-x-auto overflow-y-auto">
			<div class="text-xl text-center pt-2">{description}</div>
			<div class="flex flex-wrap w-full justify-center pt-4 gap-4">
				{#each tags as tag}
					<div
						class="flex bg-violet-600 opacity-80 pl-2 pr-2 w-fit rounded-full font-bold text-center"
					>
						{tag}
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<div class="flex w-full h-full justify-center items-center absolute z-0 project-card-info">
			<div class="text-xl text-center">{name}</div>
		</div>
	{/if}
</div> -->
