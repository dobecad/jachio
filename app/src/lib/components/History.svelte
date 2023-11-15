<script lang="ts">
	import HistoryEntry from './HistoryEntry.svelte';
	import Sectionname from './StyledWord.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const history: { name: string; dates: string; title: string; bulletpoints: string[] }[] = [
		{
			name: 'U.S. Government',
			dates: '2018 - 2023',
			title: 'Software and DevOps Engineer',
			bulletpoints: [
				'Engineered an authentication and authorization solution that promoted the usage of an agency-wide tool by 1300%',
				'Architected and implemented a custom CI/CD framework using Packer and Ansible for creating preconfigured Virtual Machine templates in a version controlled manner for multiple cloud providers',
				'Implemented a Terraform and Ansible solution for creating Highly Available Kubernetes clusters for customers. Decreased cluster provisioning time from an hour to 5 minutes',
				'Independently architected and implemented a machine learning based application that leveraged Optical Character Recognition to authorize information sent across domains',
				'Worked closely with customers to identify and resolve issues with their Kubernetes clusters',
				'Responsible for architecting, prototyping, and documenting the services necessary to provision new Kubernetes clusters within a new datacenter',
				'Developed Ansible playbooks to both harden and ensure compliance across Virtual Machines in multiple cloud providers',
				'Developed custom development environments on Coder to help other developers have a consistent and similar development environment. Greatly improved with on-boarding new developers to the team',
				'Regularly participated in daily code reviews with other core maintainers',
				'Integrated an alternative serialization library to an existing streaming service code base to speed up serialization by up to ten times the current solution'
			]
		}
	];
</script>

<div id="History" class="flex justify-center lg:text-8xl text-4xl font-bold sm:pb-20 pb-10">
	<a href="#History"><UnderlinedText text={'History'} /></a>
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
