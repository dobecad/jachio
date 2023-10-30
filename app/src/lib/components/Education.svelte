<script lang="ts">
	import EducationEntry from './EducationEntry.svelte';
	import Sectionname from './StyledWord.svelte';

	const education: { name: string; dates: string; degree: string; minor_or_focus: string }[] = [
		{
			name: 'Johns Hopkins University',
			dates: '2022 - Present',
			degree: 'M.S. Information Systems Engineering',
			minor_or_focus: 'Focus in Software Engineering'
		},
		{
			name: 'University of Maryland',
			dates: '2016 - 2021',
			degree: 'B.S. Computer Science',
			minor_or_focus: 'Minor in Information Systems'
		}
	];
</script>

<div class="flex justify-center text-8xl">
	<Sectionname text="Education" />
</div>

<div class="w-full pt-4">
	{#each education as e}
    <div class="pb-10">
		<EducationEntry
			name={e.name}
			dates={e.dates}
			degree={e.degree}
			minor_or_focus={e.minor_or_focus}
		/>
    </div>
	{/each}
</div>
