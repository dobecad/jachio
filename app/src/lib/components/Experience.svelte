<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import Sectionname from './StyledWord.svelte';

	const experience: { img: string; name: string }[] = [
		{ img: 'BlackHole2.png', name: 'Rust' },
		{ img: 'BlackHole2.png', name: 'Go' },
		{ img: 'BlackHole2.png', name: 'Python' },
		{ img: 'BlackHole2.png', name: 'TypeScript' },
		{ img: 'BlackHole2.png', name: 'JavaScript' },
		{ img: 'BlackHole2.png', name: 'Java' },
		{ img: 'BlackHole2.png', name: 'C' },
		{ img: 'BlackHole2.png', name: 'C++' },
		{ img: 'BlackHole2.png', name: 'Kubernetes' },
		{ img: 'BlackHole2.png', name: 'Docker' },
		{ img: 'BlackHole2.png', name: 'ArgoCD' },
		{ img: 'BlackHole2.png', name: 'CI/CD' }
	];
</script>

<div id="Experience" class="flex justify-center w-full text-8xl pb-10">
	<a href="#Experience"><Sectionname text="Experience" /></a>
</div>

<div
	class="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-items-center"
>
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} />
	{/each}
</div>
