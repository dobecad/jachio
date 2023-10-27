<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import Sectionname from './Sectionname.svelte';

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

<div class="flex justify-center text-8xl pb-4">
	<Sectionname text="Experience" />
</div>

<div class="w-full pt-4 grid grid-cols-6 gap-8 justify-items-center">
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} />
	{/each}
</div>
