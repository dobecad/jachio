
<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const experience: { img: string; name: string }[] = [
		{ img: 'logo-mysql.png', name: 'MySQL' },
		{ img: 'postgresql.svg', name: 'PostgreSQL' },
		{ img: 'cockroachdb-logo.png', name: 'CockroachDB' },
		{ img: 'surrealdb-logo.png', name: 'SurrealDB' },
	];
</script>

<div id="Databases" class="flex justify-center w-full text-8xl pb-40">
	<a href="#Databases"><UnderlinedText text={'Databases'} /></a>
</div>

<div
	class="flex flex-wrap gap-8 w-full justify-center pb-20"
>
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} />
	{/each}
</div>
