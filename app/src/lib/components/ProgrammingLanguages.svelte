<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const experience: { img: string; name: string }[] = [
		{ img: 'rust-logo.svg', name: 'Rust' },
		{ img: 'go-logo.svg', name: 'Go' },
		{ img: 'python-logo.png', name: 'Python' },
		{ img: 'typescript-logo.png', name: 'TypeScript' },
		{ img: 'js-logo.png', name: 'JavaScript' },
		{ img: 'c-logo.svg', name: 'C' },
		{ img: 'C++-logo.png', name: 'C++' },
		{ img: 'java-logo.png', name: 'Java' }
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
		<ExperienceEntry img={e.img} name={e.name} />
	{/each}
</div>
