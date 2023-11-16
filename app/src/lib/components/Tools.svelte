<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const experience: { img: string; name: string }[] = [
		{ img: 'kubernetes-logo.png', name: 'Kubernetes' },
		{ img: 'docker-logo.svg', name: 'Docker' },
		{ img: 'argocd-logo.png', name: 'ArgoCD' },
		{ img: 'ansible-logo.png', name: 'Ansible' },
		{ img: 'terraform-logo.svg', name: 'Terraform' }
	];
</script>

<div
	id="InfrastructureTools"
	class="flex break-words justify-center w-full lg:text-8xl text-4xl font-bold sm:pb-20 pb-10 text-center"
>
	<a href="#InfrastructureTools"><UnderlinedText text={'Infrastructure Tools'} /></a>
</div>

<div class="flex flex-wrap gap-8 w-full justify-center">
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} />
	{/each}
</div>
