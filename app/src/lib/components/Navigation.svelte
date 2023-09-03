<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	export let vertical: boolean;

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	const navItems: { label: string; href: string }[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Experience', href: '/experience' }
	];
</script>

{#if vertical}
	<nav class="list-nav p-4">
		<ul>
			{#each navItems as navItem}
				<li><a on:click={drawerClose} href={navItem.href} class:variant-filled={$page.url.pathname === navItem.href}>{navItem.label}</a></li>
			{/each}
		</ul>
	</nav>
{:else}
	<nav class="p-4">
		<ul
			class="space-x-4 hidden lg:flex justify-center text-xl border md:border-0 border-surface-100-800-token bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-lg rounded-bl-container-token rounded-br-container-token md:rounded-token p-2 shadow-xl rounded-full"
		>
			{#each navItems as navItem}
				<li>
					<a
						on:click={drawerClose}
						class="btn btn-primary"
						class:variant-filled={$page.url.pathname === navItem.href}
						href={navItem.href}>{navItem.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
