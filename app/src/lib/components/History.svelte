<script lang="ts">
	import HistoryEntry from './HistoryEntry.svelte';
	import Sectionname from './Sectionname.svelte';

	const history: { name: string; dates: string; title: string; bulletpoints: string[] }[] = [
		{
			name: 'U.S. Government',
			dates: '2018 - 2023',
			title: 'Software and DevOps Engineer',
			bulletpoints: ['Hello World!', 'Its a me']
		}
	];
</script>

<div class="flex justify-center text-8xl pb-4">
	<Sectionname text={'History'} />
</div>

<div class="w-full">
	{#each history as historyEntry}
		<HistoryEntry
			name={historyEntry.name}
			dates={historyEntry.dates}
			title={historyEntry.title}
			bulletpoints={historyEntry.bulletpoints}
		/>
	{/each}
</div>
