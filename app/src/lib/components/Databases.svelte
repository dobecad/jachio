<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const experience: { img: string; name: string }[] = [
		{ img: 'mysql-logo.png', name: 'MySQL' },
		{ img: 'postgresql-logo.svg', name: 'PostgreSQL' },
		{ img: 'cockroachdb-logo.png', name: 'CockroachDB' },
		{ img: 'surrealdb-logo.png', name: 'SurrealDB' }
	];
</script>

<div
	id="Databases"
	class="flex justify-center w-full lg:text-8xl text-4xl font-bold sm:pb-20 pb-10"
>
	<a href="#Databases"><UnderlinedText text={'Databases'} /></a>
</div>

<div class="flex flex-wrap gap-8 w-full justify-center">
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} />
	{/each}
</div>
