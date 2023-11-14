<script lang="ts">
	import ExperienceEntry from './ExperienceEntry.svelte';
	import UnderlinedText from './UnderlinedText.svelte';

	const experience: { img: string; name: string }[] = [
		{ img: 'kubernetes.png', name: 'Kubernetes' },
		{ img: 'docker-logo.svg', name: 'Docker' },
		{ img: 'argocd-logo.png', name: 'ArgoCD' },
		{ img: 'ansible-logo.png', name: 'Ansible' },
		{ img: 'terraform-logo.svg', name: 'Terraform' },
	];
</script>

<div id="InfrastructureTools" class="flex justify-center w-full text-8xl pb-40">
	<a href="#InfrastructureTools"><UnderlinedText text={'Infrastructure Tools'} /></a>
</div>

<div
	class="flex flex-wrap gap-8 w-full justify-center pb-20"
>
	{#each experience as e}
		<ExperienceEntry img={e.img} name={e.name} />
	{/each}
</div>
