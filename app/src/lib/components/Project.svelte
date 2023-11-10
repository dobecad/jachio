<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Background from './Background.svelte';

	export let img: string;
	export let name: string;
	export let id: number;
	export let description: string;
	export let tags: string[];
	let toggled = false;

	const tileSize = 25;
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

<div id={idName} class="w-80 h-80 border-slate-200 border-4 rounded-lg bg-slate-900 tiles relative">
	{#if toggled}
		<div class="w-full h-full absolute z-0 project-card-info overflow-x-auto overflow-y-auto">
			<div class="text-xl text-center pt-2">{description}</div>
			<div
				class="flex flex-wrap w-full justify-center pt-4 gap-4"
			>
				{#each tags as tag}
					<div class="flex bg-violet-600 opacity-80 pl-2 pr-2 w-fit rounded-full font-bold text-center">
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
</div>
