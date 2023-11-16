<script lang="ts">
	import Project from './Project.svelte';
	import UnderlinedText from './UnderlinedText.svelte';
	const projects: { img: string; name: string; description: string; tags: string[] }[] = [
		{
			img: 'BlackHole2.png',
			name: 'vod-recap',
			description:
				'A full-stack, microservice research project for visualizing Twitch and YouTube chat metadata to automatically identify livestream highlights.',
			tags: [
				'Full-Stack',
				'Python',
				'Django',
				'FastAPI',
				'PostgreSQL',
				'JavaScript',
				'Data Visualization'
			]
		},
		{
			img: 'BlackHole2.png',
			name: 'mal-api',
			description:
				'The only asynchronous Rust library offering a completely type-safe API for the largest anime and manga database globally. Fully supports all endpoints and query arguments. Complemented with comprehensive documentation, unit tests, and robust CI pipelines.',
			tags: ['Library', 'Rust', 'Serialization', 'Deserialization', 'REST']
		},
		{
			img: 'BlackHole2.png',
			name: 'orbitix',
			description:
				'A service discovery library using gRPC for building distributed systems, inspired by the Scalable Weakly Consistent Infection-style Process Group Membership (SWIM) protocol. Allows for developers to create applications that can easily discover other nodes within their cluster.',
			tags: ['Library', 'Rust', 'gRPC', 'SWIM', 'Distributed Systems']
		},
		{
			img: 'BlackHole2.png',
			name: 'compose-validatr',
			description:
				'A library for building and validating Docker Compose manifests on the web with Rust. Implements and validates all of the Docker Compose fields that are not dependent on the host system.',
			tags: ['Library', 'Rust', 'Serialization', 'Deserialization', 'Specification']
		},
		{
			img: 'BlackHole2.png',
			name: 'Portfolio',
			description:
				'This is my portfolio website! This frontend app leverages Svelte for reactive components and TailwindCSS for elegant styles. I employ GSAP and vanilla CSS for animations. I created custom SVGs with Affinity Designer.',
			tags: ['Frontend', 'Svelte', 'Sveltekit', 'TailwindCSS', 'CSS', 'GSAP']
		}
	];
</script>

<div
	id="Projects"
	class="flex break-all justify-center lg:text-8xl text-4xl font-bold sm:pb-20 pb-10"
>
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
