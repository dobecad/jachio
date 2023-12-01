<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const experience: { img: string; name: string; yoe: number }[] = [
		{ img: 'python-logo.png', name: 'Python', yoe: 6 },
		{ img: 'go-logo.svg', name: 'Go', yoe: 2 },
		{ img: 'rust-logo.svg', name: 'Rust', yoe: 1 },
		{ img: 'js-logo.png', name: 'JavaScript', yoe: 5 },
		{ img: 'typescript-logo.png', name: 'TypeScript', yoe: 2 },
		{ img: 'java-logo.png', name: 'Java', yoe: 3 },
		{ img: 'C++-logo.png', name: 'Cpp', yoe: 4 },
		{ img: 'c-logo.svg', name: 'C', yoe: 1 }
	];
</script>

<div
	id="ProgrammingLanguages"
	class="flex break-words justify-center w-full lg:text-8xl text-4xl font-bold sm:pb-20 pb-10 text-center"
>
	<a href="#ProgrammingLanguages"><UnderlinedText text={'Programming Languages'} /></a>
</div>

<div class="w-full flex flex-wrap justify-center gap-8">
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} yoe={e.yoe} />
	{/each}
</div>
