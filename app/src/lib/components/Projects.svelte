<script lang="ts">
	import Project from './Project.svelte';
	import Sectionname from './StyledWord.svelte';
	const projects: { img: string; name: string; description: string }[] = [
		{
			img: 'BlackHole2.png',
			name: 'Vod Recap',
			description: 'lorem ipsum'
		},
		{ img: 'BlackHole2.png', name: 'MAL-API', description: 'lorem ipsum' },
		{ img: 'BlackHole2.png', name: 'Orbitix', description: 'lorem ipsum' }
	];
</script>

<div id="Projects" class="flex justify-center text-8xl">
	<a href="#Projects"><Sectionname text={'Projects'} /></a>
</div>

<div id="projects" class="flex justify-center pt-40 w-full">
	{#each projects as project}
		<Project img={project.img} name={project.name} description={project.description} />
	{/each}
</div>
