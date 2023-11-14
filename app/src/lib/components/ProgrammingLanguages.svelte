<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const experience: { img: string; name: string }[] = [
		{ img: 'rust-logo-blk.svg', name: 'Rust' },
		{ img: 'go-logo-white.svg', name: 'Go' },
		{ img: 'python-logo-only.png', name: 'Python' },
		{ img: 'Typescript_logo_2020.svg.png', name: 'TypeScript' },
		{ img: 'js.png', name: 'JavaScript' },
		{ img: 'java.png', name: 'Java' },
		{ img: 'c.svg', name: 'C' },
		{ img: 'C++_logo.png', name: 'C++' },
	];
</script>

<div id="ProgrammingLanguages" class="flex justify-center w-full text-8xl pb-40 text-center">
	<a href="#ProgrammingLanguages"><UnderlinedText text={'Programming Languages'} /></a>
</div>

<div
	class="w-full flex flex-wrap justify-center gap-8 pb-20"
>
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} />
	{/each}
</div>
