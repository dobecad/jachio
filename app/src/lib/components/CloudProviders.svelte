<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const experience: { img: string; name: string; yoe: number }[] = [
		{ img: 'aws-white-logo.png', name: 'AWS', yoe: 3 },
		{ img: 'gcp-logo.png', name: 'GCP', yoe: 1 }
	];
</script>

<div
	id="CloudProvider"
	class="flex break-words justify-center w-full lg:text-8xl text-4xl font-bold sm:pb-20 pb-10 text-center"
>
	<a href="#CloudProvider"><UnderlinedText text={'Cloud Providers'} /></a>
</div>

<div class="w-full flex flex-wrap justify-center gap-8">
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} yoe={e.yoe} />
	{/each}
</div>
