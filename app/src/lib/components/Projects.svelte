<script lang="ts">
	import Project from './Project.svelte';
	import Sectionname from './StyledWord.svelte';
	import UnderlinedText from './UnderlinedText.svelte';
	const projects: { img: string; name: string; description: string; tags: string[] }[] = [
		{
			img: 'BlackHole2.png',
			name: 'Vod Recap',
			description: 'lorem ipsum',
			tags: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'JavaScript']
		},
		{ img: 'BlackHole2.png', name: 'MAL-API', description: 'lorem ipsum', tags: ['Rust', 'Serde'] },
		{ img: 'BlackHole2.png', name: 'Orbitix', description: 'lorem ipsum', tags: ['Rust', 'gRPC'] },
		{
			img: 'BlackHole2.png',
			name: 'Quipose',
			description: 'lorem ipsum',
			tags: ['Rust', 'Leptos', 'SurrealDB', 'Svelte']
		},
		{
			img: 'BlackHole2.png',
			name: 'Compose Validatr',
			description: 'lorem ipsum',
			tags: ['Rust', 'Serde']
		},
		{
			img: 'BlackHole2.png',
			name: 'Portfolio',
			description: 'lorem ipsum',
			tags: ['Svelte', 'TailwindCSS', 'GSAP']
		}
	];
</script>

<div id="Projects" class="flex justify-center text-8xl pb-20">
	<a href="#Projects"><UnderlinedText text={'Projects'} /></a>
</div>

<div>
	<div class="flex flex-wrap justify-center w-full gap-16">
		{#each projects as project, i (i)}
			<Project
				img={project.img}
				name={project.name}
				id={i}
				description={project.description}
				tags={project.tags}
			/>
		{/each}
	</div>
</div>

<!-- <div class="pt-40">
	<h2 class="text-xl text-center">Libraries</h2>
	<div>
		<div class="flex w-full justify-between">
			<div id="seenStack" class="flex w-full justify-center" />
			<div class="flex w-full justify-center items-center">
				<button>Previous</button>
			</div>
			<div class="flex w-full justify-center">

				<Project
					img={projects[0].img}
					name={projects[0].name}
					description={projects[0].description}
				/>
			</div>
			<div class="flex w-full justify-center items-center">
				<button>Next</button>
			</div>
			<div id="remainingStack" class="relative flex w-full justify-center">
				{#each projects as project, i (i)}
					{#if i > 0}
						<div class="absolute">
							<Project img={project.img} name={project.name} description={project.description} />
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
<div>
	<h2 class="text-xl">Full-stack</h2>
</div>
<div>
	<h2 class="text-xl">Backend</h2>
</div>
<div>
	<h2 class="text-xl">Frontend</h2>
</div> -->
<!-- {#each projects as project}
				<Project img={project.img} name={project.name} description={project.description} />
		{/each} -->
